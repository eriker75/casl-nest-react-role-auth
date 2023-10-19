import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { RolesModule } from './roles/roles.module';

export const AppModules = [
  AuthModule,
  UsersModule,
  CategoriesModule,
  RolesModule,
];
