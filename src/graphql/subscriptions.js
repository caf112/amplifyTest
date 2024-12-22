/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateStage = /* GraphQL */ `
  subscription OnCreateStage($filter: ModelSubscriptionStageFilterInput) {
    onCreateStage(filter: $filter) {
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
export const onUpdateStage = /* GraphQL */ `
  subscription OnUpdateStage($filter: ModelSubscriptionStageFilterInput) {
    onUpdateStage(filter: $filter) {
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
export const onDeleteStage = /* GraphQL */ `
  subscription OnDeleteStage($filter: ModelSubscriptionStageFilterInput) {
    onDeleteStage(filter: $filter) {
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
