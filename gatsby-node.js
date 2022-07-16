const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/app/)) {
    page.matchPath = `/app/*`
    createPage({
      path: "/app/admin/users",
      matchPath: "/app/admin/users/*",
      component: path.resolve("src/components/admin/UserDetails.js"),
    })
  }
}
