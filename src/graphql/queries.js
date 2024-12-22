/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      userid
      username
      githubAccount
      clearedStages {
        items {
          stageid
          stageNumber
          stageName
          score
          clearedAt
          userID
          id
          createdAt
          updatedAt
          userClearedStagesId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userid
        username
        githubAccount
        clearedStages {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStage = /* GraphQL */ `
  query GetStage($id: ID!) {
    getStage(id: $id) {
      stageid
      stageNumber
      stageName
      score
      clearedAt
      userID
      id
      createdAt
      updatedAt
      userClearedStagesId
    }
  }
`;
export const listStages = /* GraphQL */ `
  query ListStages(
    $filter: ModelStageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        stageid
        stageNumber
        stageName
        score
        clearedAt
        userID
        id
        createdAt
        updatedAt
        userClearedStagesId
      }
      nextToken
    }
  }
`;
export const stagesByUserIDAndClearedAt = /* GraphQL */ `
  query StagesByUserIDAndClearedAt(
    $userID: ID!
    $clearedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelStageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stagesByUserIDAndClearedAt(
      userID: $userID
      clearedAt: $clearedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        stageid
        stageNumber
        stageName
        score
        clearedAt
        userID
        id
        createdAt
        updatedAt
        userClearedStagesId
      }
      nextToken
    }
  }
`;
