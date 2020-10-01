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
  estimatedPostDate: Date,
  applicationDueDate: Date,
  postedDate: mongoose.Schema.Types.Date,
  closeDate: Date,
  lastUpdate: mongoose.Schema.Types.Date,
  version: String,
})

const Announcement = mongoose.model("Announcement", announcementSchema)

module.exports = { Announcement }