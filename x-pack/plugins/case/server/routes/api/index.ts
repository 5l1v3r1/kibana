/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { IRouter } from 'src/core/server';
import { CaseServiceSetup } from '../../services';
import { initDeleteCaseApi } from './delete_case';
import { initDeleteCommentApi } from './delete_comment';
import { initGetAllCaseCommentsApi } from './get_all_case_comments';
import { initGetAllCasesApi } from './get_all_cases';
import { initGetCaseApi } from './get_case';
import { initGetCommentApi } from './get_comment';
import { initGetTagsApi } from './get_tags';
import { initPostCaseApi } from './post_case';
import { initPostCommentApi } from './post_comment';
import { initUpdateCaseApi } from './update_case';
import { initUpdateCommentApi } from './update_comment';

export interface RouteDeps {
  caseService: CaseServiceSetup;
  router: IRouter;
}

export function initCaseApi(deps: RouteDeps) {
  initDeleteCaseApi(deps);
  initDeleteCommentApi(deps);
  initGetAllCaseCommentsApi(deps);
  initGetAllCasesApi(deps);
  initGetCaseApi(deps);
  initGetCommentApi(deps);
  initGetTagsApi(deps);
  initPostCaseApi(deps);
  initPostCommentApi(deps);
  initUpdateCaseApi(deps);
  initUpdateCommentApi(deps);
}
