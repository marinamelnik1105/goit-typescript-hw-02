/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): User {
  // Оновлення користувача

  const defaultUser: User = {
    name: "Maryna",
    surname: "Melnyk",
    email: "maryna123@gmail.com",
    password: "123",
  };
  return { ...defaultUser, ...initialValues };
}

const updateUser = createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });
console.log(updateUser)

export {};