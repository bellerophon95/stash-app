/* @flow */

import UserType from './UserType';
import type Context from '../../Context';

const me = {
  type: UserType,
  resolve(root: any, args: any, ctx: Context) {
    return ctx.user && ctx.userById.load(ctx.user.id);
  },
};

export default {
  me,
};
