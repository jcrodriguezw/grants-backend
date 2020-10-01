const { gql } = require('apollo-server')

module.exports = gql`

  type Announcement {
    id: ID!
    opportunityNumber: String!
    opportunityTitle: String!
    agencyCode: String!
    agencyName: String!
    estimatedFunding: String
    awardsNumber: Int
    grantorContact: String
    agencyContactPhone: String
    agencyContactEmail: String
    estimatedPostDate: String
    applicationDueDate: String
    postedDate: String
    closeDate: String
    lastUpdate: String
    version: String
  }

  input CreateAnnouncementInput {
    opportunityTitle: String!

  }

  input updateAnnouncementInput {
    opportunityNumber: String
    opportunityTitle: String
    agencyCode: String
    agencyName: String
    estimatedFunding: Int
    awardsNumber: Int
    grantorContact: String
    agencyContactPhone: String
    agencyContactEmail: String
    estimatedPostDate: String
    applicationDueDate: String
    postedDate: String
    closeDate: String
    lastUpdate: String
    version: String
  }

  type DeletePayload {
    id: ID!
  }

  type Query {
    announcements : [Announcement!]
  }

  type Mutation {
    createAnnouncement(input: CreateAnnouncementInput!): Announcement!
    updateAnnouncement(id: ID!, input: updateAnnouncementInput!): Announcement!
    deleteAnnouncement(id: ID!): DeletePayload
  }
`