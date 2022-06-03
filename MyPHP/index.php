<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Главная</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style/all.css">
    <link rel="stylesheet" href="style/style.css">
</head>

<body>
    <div class="wrap">
        <header class="header">
            <a href="/" class="logo">SwitchTheWeb</a>
            <div class="singIn">
                <a href="/page/login.php" class="singIn__link">Вход</a>
                <a href="/page/registration.php" class="singIn__link">Регистрация</a>
            </div>
            <div class="user">
                <div class="user__profile">
                    <img src="/img/2.jpg" alt="" class="user__profile-img">
                    <h4 class="user__profile-name">Имя</h4>
                </div>
                <ul class="user__menu">
                    <li><a href="#" class="user__menu-link"><i class="far fa-external-link"></i>Выход</a></li>
                </ul>
            </div>
        </header>
        <aside class="menu">
            <div class="menu__reviews">
                <span class="menu__reviews_span" data-href="https://SwitchTheWeb.pro/">
                    <i class="far fa-chevron-right"></i>
                </span>
                <span class="menu__reviews_text">Оставить озыв</span>
            </div>
            <ul class="menu__list">
                <li><a href="/" class="menu__list-link active"><i class="fal fa-home"></i>Главная</a></li>
                <li><a href="/page/contact.php" class="menu__list-link"><i class="fal fa-address-book"></i>Контакты</a></li>
                <li><a href="/page/table.php" class="menu__list-link"><i class="fas fa-times"></i>Таблица умножения</a></li>
                <li><a href="/page/calc.php" class="menu__list-link"><i class="fas fa-calculator-alt"></i>Калькулятор</a></li>
                <li><a href="/page/slide.php" class="menu__list-link"><i class="far fa-presentation"></i>Слайдер</a></li>
                <li><a href="/page/guest.php" class="menu__list-link"><i class="fal fa-books"></i>Гостевая книга</a></li>
                <li><a href="/page/test.php" class="menu__list-link"><i class="fal fa-vial"></i>Тест</a></li>
            </ul>
        </aside>
        <main class="main">
            <section class="head">
                <h2 class="head__title">Главная</h2>
                <p class="head__date">20XX год</p>
            </section>
            <secrion class="body">
                <h2 class="body__title">О школе SwitchTheWeb</h2>
                <p class="body__desc">Наша глобальная цель — превратить веб-разработку и другие ИТ-направления из
                    непредсказуемого колдовства и ремесла в профессию, которой можно научиться и научить при достаточном
                    усердии.</p>
                <p class="body__desc">Мы хотим, чтобы наши студенты достигали успеха, — и готовы помогать. Если студент
                    не знает с чего начать, как оттолкнуться от нуля, что делать, где искать работу и пр., он всегда
                    может обратиться за советом лично к руководителю школы.
                </p>
            </secrion>
            <secrion class="body">
                <h2 class="body__title">Обучение</h2>
                <p class="body__desc">Обучение — очное, проходит в нашей школе. Занятия — проводятся на русском языке.
                    Все кабинеты полностью оборудованы: студентам мы предоставляем ноутбуки на время обучения, в
                    кабинетах есть проекторы с высоким разрешением, кондиционер.
                </p>
            </secrion>
            <secrion class="body">
                <h2 class="body__title">Наставник</h2>
                <p class="body__desc">На уроках — никто не останется без внимания. Наставник поможет каждому. У каждой
                    группы, которую мы запустили, есть своя группа в телеграме. Там студенты общаются с наставником,
                    делятся опытом, помогают друг другу в решении сложных задач.
                </p>
            </secrion>
        </main>
    </div>

    <script src="js/script.js"></script>
</body>

</html>