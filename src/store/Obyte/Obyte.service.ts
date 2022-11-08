import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Client } from 'obyte';

import { showSnackBar } from '../SnackStack';

let obyte: Client;

function getObyteClient(): Client {
  if (!obyte) {
    obyte = new Client();
  }
  return obyte;
}

export const obyteApi = createApi({
  reducerPath: 'obyteApi',
  baseQuery: fetchBaseQuery({
    mode: 'cors',
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 60 * 60 * 24,
  endpoints: (build) => ({
    getDefinition: build.query<any[], string>({
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded(
        arg,
        { cacheDataLoaded, cacheEntryRemoved, dispatch, updateCachedData },
      ) {
        try {
          await cacheDataLoaded;
          const socket = getObyteClient();

          const definition = await socket.api.getDefinition(arg);

          updateCachedData((data) => data.concat(definition));

          await cacheEntryRemoved;
        } catch (e) {
          dispatch(
            showSnackBar({
              message: e instanceof Error ? e.message : 'Connect error',
              title: 'Obyte Client',
              severity: 'error',
            }),
          );
        }
      },
    }),
  }),
});

export const { useGetDefinitionQuery } = obyteApi;
