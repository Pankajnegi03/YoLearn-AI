import { httpClient } from './http';

export type Companion = {
  id: number;
  name: string;
  specialization: string;
  avatar: string;
};

export async function fetchCompanions(): Promise<Companion[]> {
  const response = await httpClient.get('/users', {
    params: {
      limit: 6,
    },
  });

  return response.data.users.map((user: any) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    specialization: user.company?.department ?? 'Learning Expert',
    avatar: user.image,
  }));
}

