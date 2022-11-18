const todoList99 = () => {
    let all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete99 = (index) => {
      all[index].completed = true;
    };
  
    const overdue99 = () => {
      return all.filter(
        (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
      );
    };
  
    const dueToday99 = () => {
      return all.filter(
        (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
      );
    };
  
    const dueLater99 = () => {
      return all.filter(
        (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
      );
    };
    return { all, add, markAsComplete99, overdue99, dueToday99, dueLater99 };
  };
  
  module.exports = todoList99;
