const getters = {
  token: state => state.token.token,
  githubUsername: state => state.configuration.githubUsername,
  htmlTile: state => state.configuration.htmlTile,
  avatarUrl: state => state.user.avatarUrl,
  name: state => state.user.name,
  blog: state =>state.user.blog,
  followersTotal: state => state.user.followers,
  followingTotal: state => state.user.following
}
export default getters
