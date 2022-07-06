const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  console.log("Page - " + page.page)
  if (page.path.match(/^\/admin/)) {
    createPage({
      path: "/admin/users",
      matchPath: "/admin/users/*",
      component: path.resolve("src/components/admin/UserDetails.js"),
    })
  }
}
