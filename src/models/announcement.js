const mongoose = require('mongoose')
const { Schema } = mongoose

const announcementSchema = new Schema({
  opportunityNumber: String,
  opportunityTitle: String,
  agencyCode: String,
  agencyName: String,
  estimatedFunding: Number,
  awardsNumber: Number,
  grantorContact: String,
  agencyContactPhone: String,
  agencyContactEmail: String,
  estimatedPostDate: String,
  applicationDueDate: String,
  postedDate: String,
  closeDate: String,
  lastUpdate: String,
  version: String,
}, {
  timestamps: true
})

const Announcement = mongoose.model("Announcement", announcementSchema)

module.exports = { Announcement }