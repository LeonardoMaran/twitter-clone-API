import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import PostsRepository from '@modules/posts/infra/typeorm/repositories/PostsRepository';

import CommentsRepository from '@modules/comments/infra/typeorm/repositories/CommentsRepository';
import ICommentsRepository from '@modules/comments/repositories/ICommentsRepository';

import ILikesRepository from '@modules/likes/repositories/ILikesRepository';
import LikesRepository from '@modules/likes/infra/typeorm/repositories/LikesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IPostsRepository>(
  'PostsRepository',
  PostsRepository
);

container.registerSingleton<ICommentsRepository>(
  'CommentsRepository',
  CommentsRepository
);

container.registerSingleton<ILikesRepository>(
  'LikesRepository',
  LikesRepository
);
