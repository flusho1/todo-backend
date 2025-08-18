import { toast } from 'sonner';
import { fetchTasks, addTask, updateTask, deleteTask } from './api';

export const handleFetchTasks = async (setTasks) => {
  try {
    const tasks = await fetchTasks();
    setTasks(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    toast.error('Error al cargar las tareas.');
  }
};

export const handleAddTask = async (e, title, description, setTasks, tasks, setTitle, setDescription) => {
  e.preventDefault();
  try {
    const newTask = await addTask({ title, description });
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    toast.success('¡Tarea agregada exitosamente!');
  } catch (error) {
    console.error('Error adding task:', error);
    toast.error('Error al agregar la tarea.');
  }
};

export const handleToggleTaskCompleted = async (id, completed, tasks, setTasks) => {
  try {
    const updatedTask = await updateTask(id, { completed: !completed });
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: updatedTask.completed } : task
    ));
    toast.success('¡Tarea actualizada exitosamente!');
  } catch (error) {
    console.error('Error updating task:', error);
    toast.error('Error al actualizar la tarea.');
  }
};

export const handleDeleteTask = async (id, tasks, setTasks) => {
  try {
    await deleteTask(id);
    setTasks(tasks.filter(task => task.id !== id));
    toast.success('¡Tarea eliminada exitosamente!');
  } catch (error) {
    console.error('Error deleting task:', error);
    toast.error('Error al eliminar la tarea.');
  }
};

export const handleSaveEditedTask = async (editingId, editingTitle, editingDescription, tasks, setTasks, setIsEditing, setEditingId, setEditingTitle, setEditingDescription) => {
  try {
    const updatedTask = await updateTask(editingId, {
      title: editingTitle,
      description: editingDescription,
      completed: tasks.find(t => t.id === editingId).completed,
    });
    setTasks(tasks.map(task =>
      task.id === editingId ? { ...task, ...updatedTask } : task
    ));
    setIsEditing(false);
    setEditingId(null);
    setEditingTitle('');
    setEditingDescription('');
    toast.success('¡Tarea actualizada exitosamente!');
  } catch (error) {
    console.error('Error al guardar la tarea editada:', error);
    toast.error('Error al guardar la tarea editada.');
  }
};