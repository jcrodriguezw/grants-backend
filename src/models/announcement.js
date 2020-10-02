const mongoose = require('mongoose')
const { Schema } = mongoose

const announcementSchema = new Schema({
  categoryOfFundingActivity: String,
  opportunityNumber: String,
  grantorContactText: String,
  opportunityID: String,
  closeDateExplanation: String,
  cfdaNumbers: String,
  opportunityCategory: String,
  description: String,
  closeDate: String,
  estimatedTotalProgramFunding: String,
  awardCeiling: String,
  lastUpdatedDate: String,
  grantorContactEmailDescription: String,
  archiveDate: String,
  awardFloor: String,
  fundingInstrumentType: String,
  expectedNumberOfAwards: String,
  grantorContactEmail: String,
  costSharingOrMatchingRequirement: String,
  version: String,
  opportunityTitle: String,
  postDate: String,
  agencyName: String,
  eligibleApplicants: String,
  agencyCode: String,
}, {
  timestamps: true
})

const Announcement = mongoose.model("Announcement", announcementSchema)

module.exports = { Announcement }