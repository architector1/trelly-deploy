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

export const getTask = ( taskId: string, boardId: string) => {
    const promise: Promise<GetTaskOutput> = fetch(" https://trelly.it-incubator.app/api/1.0/boards/" +
          boardId + "/tasks/" + taskId,
        {
          headers: {
            // "api-key": "8fcd8a4a-590d-4639-b949-37df12adb9d5",
          },
        }
      )
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
        headers: {
          // "api-key": "8fcd8a4a-590d-4639-b949-37df12adb9d5",
        },
      })
        .then((res) => res.json())

        return promise
}