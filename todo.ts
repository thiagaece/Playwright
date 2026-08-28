// Define a Todo interface
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

// TodoManager class
class TodoManager {
  private todos: Todo[] = [];
  private nextId: number = 1;

  addTask(task: string): void {
    const newTodo: Todo = {
      id: this.nextId++,
      task,
      completed: false,
    };
    this.todos.push(newTodo);
    console.log(`Added: "${task}"`);
  }

  completeTask(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = true;
      console.log(`Task "${todo.task}" marked as completed.`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }

  listTasks(): void {
    console.log("Todo List:");
    this.todos.forEach(t =>
      console.log(`[${t.completed ? "✔" : " "}] ${t.id}: ${t.task}`)
    );
  }
}

// Main program
const manager = new TodoManager();
manager.addTask("Learn TypeScript basics");
manager.addTask("Build a sample project");
manager.listTasks();

manager.completeTask(1);
manager.listTasks();
