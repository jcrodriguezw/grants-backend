const { gql } = require('apollo-server')

module.exports = gql`

  type Announcement {
    id: ID!
    categoryOfFundingActivity: String
    opportunityNumber: String
    grantorContactText: String
    opportunityID: String
    closeDateExplanation: String
    cfdaNumbers: String
    opportunityCategory: String
    description: String
    closeDate: String
    estimatedTotalProgramFunding: String
    awardCeiling: String
    lastUpdatedDate: String
    grantorContactEmailDescription: String
    archiveDate: String
    awardFloor: String
    fundingInstrumentType: String
    expectedNumberOfAwards: String
    grantorContactEmail: String
    costSharingOrMatchingRequirement: String
    version: String
    opportunityTitle: String
    postDate: String
    agencyName: String
    eligibleApplicants: String
    agencyCode: String
  }


  input CreateAnnouncementInput {
    categoryOfFundingActivity: String!
    opportunityNumber: String!
    grantorContactText: String!
    opportunityID: String!
    closeDateExplanation: String!
    cfdaNumbers: String!
    opportunityCategory: String!
    description: String!
    closeDate: String!
    estimatedTotalProgramFunding: String!
    awardCeiling: String!
    lastUpdatedDate: String!
    grantorContactEmailDescription: String!
    archiveDate: String!
    awardFloor: String!
    fundingInstrumentType: String!
    expectedNumberOfAwards: String!
    grantorContactEmail: String!
    costSharingOrMatchingRequirement: String!
    version: String!
    opportunityTitle: String!
    postDate: String!
    agencyName: String!
    eligibleApplicants: String!
    agencyCode: String!
  }

  input updateAnnouncementInput {
    categoryOfFundingActivity: String
    opportunityNumber: String
    grantorContactText: String
    closeDateExplanation: String
    cfdaNumbers: String
    opportunityCategory: String
    description: String
    closeDate: String
    estimatedTotalProgramFunding: String
    awardCeiling: String
    lastUpdatedDate: String
    grantorContactEmailDescription: String
    archiveDate: String
    awardFloor: String
    fundingInstrumentType: String
    expectedNumberOfAwards: String
    grantorContactEmail: String
    costSharingOrMatchingRequirement: String
    version: String
    opportunityTitle: String
    agencyName: String
    eligibleApplicants: String
    agencyCode: String
  }

  type DeletePayload {
    id: ID!
  }

  type Query {
    announcements : [Announcement!]
    announcement(id: ID!) : Announcement!
  }

  type Mutation {
    createAnnouncement(input: CreateAnnouncementInput!): Announcement!
    updateAnnouncement(id: ID!, input: updateAnnouncementInput): Announcement!
    deleteAnnouncement(id: ID!): DeletePayload
  }
`