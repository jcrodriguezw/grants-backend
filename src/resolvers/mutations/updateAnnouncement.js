module.exports = async (_, {id, input}, {models}) => {
  const announcementToUpdate = await models.Announcement.findOne({_id: id})

  Object.keys(input).forEach(value => {
    announcementToUpdate[value] = input[value]
  })

  const updatedAnnouncement = await announcementToUpdate.save()
  
  return updatedAnnouncement
}