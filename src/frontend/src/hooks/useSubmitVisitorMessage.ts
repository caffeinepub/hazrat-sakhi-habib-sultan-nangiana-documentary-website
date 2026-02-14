import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { toast } from 'sonner';

interface SubmitMessageParams {
  name: string;
  message: string;
}

export function useSubmitVisitorMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, message }: SubmitMessageParams) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      await actor.submitMessage(name, message);
    },
    onSuccess: () => {
      toast.success('Message sent successfully', {
        description: 'Thank you for sharing your thoughts.',
      });
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    },
    onError: (error) => {
      console.error('Failed to submit message:', error);
      toast.error('Failed to send message', {
        description: 'Please try again later.',
      });
    },
  });
}
