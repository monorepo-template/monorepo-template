import MISSING_REPOSITORY_OWNER_ERROR from '../constants/missing-repository-owner-error.mjs';

export default function getRepositoryOwner() {
  const repositoryOwner = process.env.REPOSITORY_OWNER;
  if (!repositoryOwner) {
    throw MISSING_REPOSITORY_OWNER_ERROR;
  }
  return repositoryOwner;
}
