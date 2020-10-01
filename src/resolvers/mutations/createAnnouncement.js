module.exports = async(_, {input}, {models}) => {
  const newAnnouncement = await models.Announcement.create(input)
  return newAnnouncement
}