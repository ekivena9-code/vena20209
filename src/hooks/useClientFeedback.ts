import { useQuery } from '@tanstack/react-query';
import { listClientFeedback } from '../services/clientFeedback';
import { ClientFeedback } from '../types';

export const useClientFeedback = () => useQuery({
  queryKey: ['clientFeedback'],
  queryFn: listClientFeedback,
  staleTime: 30 * 1000,
  refetchOnWindowFocus: true,
  refetchOnMount: true,
});
