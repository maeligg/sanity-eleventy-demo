export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '608a6d2b1657e9d2c4c31948',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-demo-studio',
                  apiId: '262a2797-55b5-4318-a87f-ca017a56f0ba'
                },
                {
                  buildHookId: '608a6d2bb6e572dd048a827f',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-demo',
                  apiId: '981093f7-7178-4a07-86eb-0fc700a79262'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maeligg/sanity-eleventy-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
