import React from "react";

export default function Footer() {
  return (
    <div className="container w-full p-4 mx-auto  flex justify-evenly items-center text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-purple-500">
      <p>© 2024 ПриклейКа Меня </p>
      <div className="flex flex-col">
        <p>
          <a href="#">Правила использования</a>
        </p>
        <a href="#">Конфиденциальность</a>
        <p>
          <a href="https://t.me/PrikleykaMe">Обратная связь</a>
        </p>
      </div>
    </div>
  );
}
