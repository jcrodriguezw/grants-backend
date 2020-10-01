module.exports = async(_, {id}, {models}) => {
  return await models.Announcement.findOne({
    _id: id
  })
}