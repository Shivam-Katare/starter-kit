import React, { useState } from 'react'
import { MorePostsByPublicationDocument, MorePostsByPublicationQuery, MorePostsByPublicationQueryVariables, PageInfoFragment, PostFragment, PostsByPublicationDocument, PostsByPublicationQuery, PostsByPublicationQueryVariables, PublicationFragment } from '../generated/graphql';
import { MinimalPosts } from '../components/minimal-posts';
import { Waypoint } from 'react-waypoint';
import request from 'graphql-request';
import { GetStaticProps } from 'next';
import { PersonalHeader } from '../components/personal-theme-header';
import { AppProvider } from '../components/contexts/appContext';
import { Layout } from '../components/layout';
import { Container } from '../components/container';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Props = {
  publication: PublicationFragment;
  initialPosts: PostFragment[];
  initialPageInfo: PageInfoFragment;
};

function Blog({ publication, initialPosts, initialPageInfo }: Props) {
  const [posts, setPosts] = useState<PostFragment[]>(initialPosts);
  const [pageInfo, setPageInfo] = useState<Props['initialPageInfo']>(initialPageInfo);
  const [loadedMore, setLoadedMore] = useState(false);

  const loadMore = async () => {
    const data = await request<MorePostsByPublicationQuery, MorePostsByPublicationQueryVariables>(
      GQL_ENDPOINT,
      MorePostsByPublicationDocument,
      {
        first: 20,
        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
        after: pageInfo.endCursor,
      },
    );
    if (!data.publication) {
      return;
    }
    const newPosts = data.publication.posts.edges.map((edge) => edge.node);
    setPosts([...posts, ...newPosts]);
    setPageInfo(data.publication.posts.pageInfo);
    setLoadedMore(true);
  };

  return (
    <AppProvider publication={publication}>
      <Layout>
        <Container className="mx-auto flex max-w-4xl flex-col items-stretch gap-10 px-5 py-10">
          <PersonalHeader />
          {posts.length > 0 && <MinimalPosts context="home" posts={posts} />}
          {!loadedMore && pageInfo.hasNextPage && pageInfo.endCursor && (
            <button className="bg-white" onClick={loadMore}>
              Load more
            </button>
          )}
          {loadedMore && pageInfo.hasNextPage && pageInfo.endCursor && (
            <Waypoint onEnter={loadMore} bottomOffset={'10%'} />
          )}
        </Container>
      </Layout>
    </AppProvider>
  )
}

export default Blog;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await request<PostsByPublicationQuery, PostsByPublicationQueryVariables>(
    GQL_ENDPOINT,
    PostsByPublicationDocument,
    {
      first: 20,
      host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
    },
  );

  const publication = data.publication;
  if (!publication) {
    return {
      notFound: true,
    };
  }
  const initialPosts = (publication.posts.edges ?? []).map((edge) => edge.node);

  return {
    props: {
      publication,
      initialPosts,
      initialPageInfo: publication.posts.pageInfo,
    },
    revalidate: 1,
  };
};