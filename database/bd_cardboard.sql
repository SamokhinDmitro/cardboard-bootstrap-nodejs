-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 13 2020 г., 14:16
-- Версия сервера: 5.7.25
-- Версия PHP: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `bd_cardboard`
--

-- --------------------------------------------------------

--
-- Структура таблицы `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `phones` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `clients`
--

INSERT INTO `clients` (`id`, `phones`) VALUES
(36, '+38(095)-123-45-67'),
(37, '+38(098)-320-95-51'),
(38, '+38(098)-320-95-25'),
(39, '+38(098)-320-56-66'),
(40, '+38(097)-455-66-66'),
(41, '+38(097)-444-44-44');

-- --------------------------------------------------------

--
-- Структура таблицы `features`
--

CREATE TABLE `features` (
  `id` int(11) UNSIGNED NOT NULL,
  `photo_id` int(11) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `descr` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `features`
--

INSERT INTO `features` (`id`, `photo_id`, `title`, `descr`) VALUES
(1, 1, 'Производство', '4 технологические линии способны выполнить любой заказ любой сложности'),
(2, 2, 'Бесплатные образцы', 'Бесплатно делаем образцы гофроупаковки - это помогает заранее увидеть упаковку'),
(3, 3, 'Стабильное качество', 'Собственная лаборатория контролирует качество на каждом этапе производства'),
(4, 4, 'Страховой запас', 'Можем хранить запас гофро- продукции на своих складах и поставлять его партиями'),
(5, 5, 'Флексопечать', 'Возможно нанесение вашего логотипа, текста или манипуляционных знаков'),
(6, 6, 'Гидрофобные добавки', 'На производстве реализована технология, которая позволяет гофрокартону стать прочнее');

-- --------------------------------------------------------

--
-- Структура таблицы `photos`
--

CREATE TABLE `photos` (
  `id` int(11) UNSIGNED NOT NULL,
  `path` varchar(255) NOT NULL,
  `exp` varchar(10) NOT NULL,
  `altText` varchar(45) NOT NULL,
  `category` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `photos`
--

INSERT INTO `photos` (`id`, `path`, `exp`, `altText`, `category`) VALUES
(1, 'block1', 'png', 'Производство', 'features'),
(2, 'block2', 'png', 'Бесплатные образцы', 'features'),
(3, 'block3', 'png', 'Стабильное качество', 'features'),
(4, 'block4', 'png', 'Страховой запас', 'features'),
(5, 'block5', 'png', 'Флексопечать', 'features'),
(6, 'block6', 'png', 'Гидрофобные добавки', 'features');

-- --------------------------------------------------------

--
-- Структура таблицы `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('0-HKuTBWLLq4-JH5HJGHcPL6BudqFdWK', 1578766265, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"name\":\"test\"}'),
('CXilq88o0-JvL-b9xaW8IvaEAQTsOG84', 1578772048, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"name\":\"test\"}'),
('Z4aRYTgS0NKk4tYShmqqzgftUi-Vfs9O', 1578764119, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"name\":\"test\"}'),
('caDQXHQRKKyCIOHBlxn82WIFKMAKEHpU', 1578762689, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"name\":\"test\"}');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `features`
--
ALTER TABLE `features`
  ADD PRIMARY KEY (`id`,`photo_id`),
  ADD KEY `photo_id_fk_idx` (`photo_id`);

--
-- Индексы таблицы `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT для таблицы `features`
--
ALTER TABLE `features`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `features`
--
ALTER TABLE `features`
  ADD CONSTRAINT `photo_id_fk` FOREIGN KEY (`photo_id`) REFERENCES `photos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
