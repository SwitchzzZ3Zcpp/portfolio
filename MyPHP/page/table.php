<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Главная</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/style/all.css">
    <link rel="stylesheet" href="/style/style.css">
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
                <span class="menu__reviews_span" data-href="https://switchtheweb.pro">
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
                <h2 class="head__title">Таблица умножения</h2>
                <p class="head__date">20XX год</p>
            </section>
            <form action="" class="form" method="get">
                <label class="form__label">
                    <span class="form__text">Количество колонок</span>
                    <input type="text" class="form__input" name="col">
                </label>
                <label class="form__label">
                    <span class="form__text">Количество строк</span>
                    <input type="text" class="form__input" name="row">
                </label>
                <button class="form__btn">Отправить</button>
            </form>

            <div class="table">
                <div class="table__row">
                    <div class="table__col">1</div>
                    <div class="table__col">2</div>
                    <div class="table__col">3</div>
                    <div class="table__col">4</div>
                    <div class="table__col">5</div>
                    <div class="table__col">6</div>
                    <div class="table__col">7</div>
                    <div class="table__col">8</div>
                    <div class="table__col">9</div>
                    <div class="table__col">10</div>
                </div>
                <div class="table__row">
                    <div class="table__col">2</div>
                    <div class="table__col">4</div>
                    <div class="table__col">6</div>
                    <div class="table__col">8</div>
                    <div class="table__col">10</div>
                    <div class="table__col">12</div>
                    <div class="table__col">14</div>
                    <div class="table__col">16</div>
                    <div class="table__col">18</div>
                    <div class="table__col">20</div>
                </div>
                <div class="table__row">
                    <div class="table__col">3</div>
                    <div class="table__col">6</div>
                    <div class="table__col">9</div>
                    <div class="table__col">12</div>
                    <div class="table__col">15</div>
                    <div class="table__col">18</div>
                    <div class="table__col">21</div>
                    <div class="table__col">24</div>
                    <div class="table__col">27</div>
                    <div class="table__col">30</div>
                </div>
                <div class="table__row">
                    <div class="table__col">4</div>
                    <div class="table__col">8</div>
                    <div class="table__col">12</div>
                    <div class="table__col">16</div>
                    <div class="table__col">20</div>
                    <div class="table__col">24</div>
                    <div class="table__col">28</div>
                    <div class="table__col">32</div>
                    <div class="table__col">36</div>
                    <div class="table__col">40</div>
                </div>
                <div class="table__row">
                    <div class="table__col">5</div>
                    <div class="table__col">10</div>
                    <div class="table__col">15</div>
                    <div class="table__col">20</div>
                    <div class="table__col">25</div>
                    <div class="table__col">30</div>
                    <div class="table__col">35</div>
                    <div class="table__col">40</div>
                    <div class="table__col">45</div>
                    <div class="table__col">50</div>
                </div>
            </div>


        </main>
    </div>

    <script src="/js/script.js"></script>
</body>

</html>