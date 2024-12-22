/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createStage = /* GraphQL */ `
  mutation CreateStage(
    $input: CreateStageInput!
    $condition: ModelStageConditionInput
  ) {
    createStage(input: $input, condition: $condition) {
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
export const updateStage = /* GraphQL */ `
  mutation UpdateStage(
    $input: UpdateStageInput!
    $condition: ModelStageConditionInput
  ) {
    updateStage(input: $input, condition: $condition) {
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
export const deleteStage = /* GraphQL */ `
  mutation DeleteStage(
    $input: DeleteStageInput!
    $condition: ModelStageConditionInput
  ) {
    deleteStage(input: $input, condition: $condition) {
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
