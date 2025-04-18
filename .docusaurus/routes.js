import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-portfolio/blog',
    component: ComponentCreator('/docusaurus-portfolio/blog', '312'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/blog/archive',
    component: ComponentCreator('/docusaurus-portfolio/blog/archive', 'a0f'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/blog/authors',
    component: ComponentCreator('/docusaurus-portfolio/blog/authors', '812'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/docusaurus-portfolio/blog/authors/all-sebastien-lorber-articles', '294'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/blog/authors/yangshun',
    component: ComponentCreator('/docusaurus-portfolio/blog/authors/yangshun', '138'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/blog/first-blog-post',
    component: ComponentCreator('/docusaurus-portfolio/blog/first-blog-post', '6fa'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/blog/long-blog-post',
    component: ComponentCreator('/docusaurus-portfolio/blog/long-blog-post', '1cb'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus-portfolio/blog/mdx-blog-post', '4bc'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/blog/tags',
    component: ComponentCreator('/docusaurus-portfolio/blog/tags', '2d8'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus-portfolio/blog/tags/docusaurus', '982'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/blog/tags/facebook',
    component: ComponentCreator('/docusaurus-portfolio/blog/tags/facebook', '655'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/blog/tags/hello',
    component: ComponentCreator('/docusaurus-portfolio/blog/tags/hello', 'baf'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/blog/tags/hola',
    component: ComponentCreator('/docusaurus-portfolio/blog/tags/hola', '1ad'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/blog/welcome',
    component: ComponentCreator('/docusaurus-portfolio/blog/welcome', '820'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/markdown-page',
    component: ComponentCreator('/docusaurus-portfolio/markdown-page', 'b28'),
    exact: true
  },
  {
    path: '/docusaurus-portfolio/docs',
    component: ComponentCreator('/docusaurus-portfolio/docs', '198'),
    routes: [
      {
        path: '/docusaurus-portfolio/docs',
        component: ComponentCreator('/docusaurus-portfolio/docs', '4b6'),
        routes: [
          {
            path: '/docusaurus-portfolio/docs',
            component: ComponentCreator('/docusaurus-portfolio/docs', 'd22'),
            routes: [
              {
                path: '/docusaurus-portfolio/docs/features',
                component: ComponentCreator('/docusaurus-portfolio/docs/features', 'c33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-portfolio/docs/intro',
                component: ComponentCreator('/docusaurus-portfolio/docs/intro', 'c2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-portfolio/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docusaurus-portfolio/docs/tutorial-basics/congratulations', '682'),
                exact: true
              },
              {
                path: '/docusaurus-portfolio/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docusaurus-portfolio/docs/tutorial-basics/create-a-blog-post', '08b'),
                exact: true
              },
              {
                path: '/docusaurus-portfolio/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docusaurus-portfolio/docs/tutorial-basics/create-a-document', 'd68'),
                exact: true
              },
              {
                path: '/docusaurus-portfolio/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docusaurus-portfolio/docs/tutorial-basics/create-a-page', '3cb'),
                exact: true
              },
              {
                path: '/docusaurus-portfolio/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docusaurus-portfolio/docs/tutorial-basics/deploy-your-site', '123'),
                exact: true
              },
              {
                path: '/docusaurus-portfolio/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docusaurus-portfolio/docs/tutorial-basics/markdown-features', '8dc'),
                exact: true
              },
              {
                path: '/docusaurus-portfolio/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docusaurus-portfolio/docs/tutorial-extras/manage-docs-versions', '6a5'),
                exact: true
              },
              {
                path: '/docusaurus-portfolio/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docusaurus-portfolio/docs/tutorial-extras/translate-your-site', '17e'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docusaurus-portfolio/',
    component: ComponentCreator('/docusaurus-portfolio/', '06f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
