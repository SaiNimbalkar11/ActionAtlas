
## Directive Do

Directive Do is a web-based to-do list application designed to help users prioritize tasks effectively using the Eisenhower Matrix (also known as the Urgent-Important Matrix). It allows users to categorize their tasks into four quadrants: Urgent and Important, Important but Not Urgent, Urgent but Not Important, and Neither Urgent nor Important. This categorization enables users to visually organize their tasks and focus on what truly needs their immediate attention, improving productivity and time management.   

Who it's for:

This application is ideal for anyone who wants to:

-Improve their time management skills
-Prioritize tasks more effectively
-Reduce feelings of being overwhelmed by a large number of tasks
-Increase productivity by focusing on high-priority items
-Students, professionals, managers, and anyone with a busy -schedule can benefit from using Directive Do.


## API Reference

#### Get all ToDos

```http
    GET /api/todos
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  |  | Retrieves a list of all ToDo items. |

#### Add a ToDo

```http
  POST /api/todos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `description`      | `string` | **Required**. Description of the ToDo. |
| `priority`      | `string` | **Required**.Priority of the ToDo. |

#### Delete a ToDo

```http
  DELETE /api/todos/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  `id`| `long` | **Required**.ID of the ToDo to delete. |

#### Update a ToDo's Completion Status

```http
  PATCH /api/todos/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  `id`| `long` | **Required**.ID of the ToDo to update. |
|  `completed`| `boolean` | **Required**. New completion status (true/false). |

## ScreenShot 

![Screenshot 2025-03-29 233420](https://github.com/user-attachments/assets/6c37d932-0000-4ae3-8ec1-86483f41fbfb)

