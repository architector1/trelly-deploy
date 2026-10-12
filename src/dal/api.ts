export type TaskDetailsData = {
  id: string
  attributes: TaskDetailsDto
}

type GetTaskOutput = {
    data: TaskDetailsData
}

type TaskDetailsDto = {
  title: string
  description: string | null
  boardTitle: string
}

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if(!apiKey) return undefined;

  return {
    "api-key": apiKey,
  }
}


export const getTask = ( taskId: string, boardId: string) => {
    const promise: Promise<GetTaskOutput> = fetch(" https://trelly.it-incubator.app/api/1.0/boards/" +
          boardId + "/tasks/" + taskId,
        {
          headers: prepareHeaders()
        })
        .then((res) => res.json())

        return promise
}

export type GlobalTaskListItemJsonApiData = {
  id: string 
  attributes: GlobalTaskListItemDto
}

type GlobalTaskListItemDto = {
  id: string
  title: string
  boardId: string
  status: boolean
  priority: number
  addedAt: string
}

type GlobalTaskListResponse = {
    data: Array<GlobalTaskListItemJsonApiData>
}

export const getTasks = () => {
    const promise: Promise<GlobalTaskListResponse> = fetch(" https://trelly.it-incubator.app/api/1.0/boards/tasks", {
        headers: prepareHeaders()
      })
        .then((res) => res.json())

        return promise
}