export const API_ROUTES = {
  REQUEST_MESSAGE: () => `${process.env.NEST_HOST}/api/auth/requestMessage`,
  VALIDATE_MESSAGE: () => `${process.env.NEST_HOST}/api/auth/validateMessage`,
  PROGRAM: (programId: number) => `${process.env.NEST_HOST}/api/program/${programId}`,
  GENERATE_CODE_ACCOUNT: () => `${process.env.NEST_HOST}/api/account/generate-code`,
  PROGRAMS: () => `${process.env.NEST_HOST}/api/program`,
  ACCOUNTS: () => `${process.env.NEST_HOST}/api/account`,
  ACCOUNTS_ELEMENTS: () => `${process.env.NEST_HOST}/api/account-element`,
  INSTRUCTION: () => `${process.env.NEST_HOST}/api/instruction`,
} as const;
