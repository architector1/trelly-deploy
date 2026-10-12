import { useState } from 'react';

export function useBoardId() {
  const [boardId, setBoardId] = useState<string | null>(null);

  return { boardId, setBoardId };

}
