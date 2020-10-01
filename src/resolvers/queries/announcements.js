module.exports = async(_, {}, {models}) => {
  return await models.Announcement.find()
}