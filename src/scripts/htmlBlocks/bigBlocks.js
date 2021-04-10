function returnMenu(location = '') {

    let accessRights = Number(getCookie('accessRights'))
    
    return(`
        <div class="menu">
            <div class="container">
                <div class="row d-flex justify-content-between align-items-center align-self-stretch">

                    <div class="col-2 menu__item d-flex justify-content-end">
                        <a href="` + location + `index.html">
                            <div class="menu__item__logo d-flex">
                                <i class="fa fa-calendar-check-o"></i>
                                <p>todotomorrow</p>
                            </div>
                        </a>
                    </div>

                    `
                        +
                        (
                            accessRights == 2 ?
                                `
                                <style>
                                    .menu__item {
                                        padding-bottom: 15px;
                                    }
                                </style>

                                <div class="col-2 menu__item d-flex">
                                    <div class="menu__item dropdown">
                                        <div class="btn dropdown-toggle" data-toggle="dropdown">
                                            <a>Новостная лента</a>
                                        </div>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="` + location + `pages/news.html">Перейти</a>
                                            <a class="dropdown-item" href="` + location + `pages/add/add-news.html">Опубликовать новость</a>
                                        </div>
                                    </div>
                                </div>
            
                                <div class="col-2 menu__item d-flex">
                                    <div class="menu__item dropdown">
                                        <div class="btn dropdown-toggle" data-toggle="dropdown">
                                            <a>Мероприятия</a>
                                        </div>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="` + location + `pages/events/events.html">Перейти</a>
                                            <a class="dropdown-item" href="` + location + `pages/add/add-event.html">Создать мероприятие</a>
                                        </div>
                                    </div>    
                                </div>

                                <div class="col-2 menu__item d-flex">
                                    <div class="menu__item dropdown">
                                        <div class="btn dropdown-toggle" data-toggle="dropdown">
                                            <a>Видеоролики</a>
                                        </div>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="` + location + `pages/video.html">Перейти</a>
                                            <a class="dropdown-item" href="` + location + `pages/add/add-video.html">Добавить видеоролик</a>
                                        </div>
                                    </div>    
                                </div>

                                <div class="col-2 menu__item d-flex">
                                    <div class="menu__item dropdown">
                                        <div class="btn dropdown-toggle" data-toggle="dropdown">
                                            <a>Аналитика</a>
                                        </div>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="` + location + `pages/analytics.html">Перейти</a>
                                            <a class="dropdown-item" href="` + location + `pages/add/add-analytics.html">Добавить данные</a>
                                        </div>
                                    </div>    
                                </div>
                                `
                                :
                                `<div class="col-2 menu__item d-flex">
                                    <a href="` + location + `pages/news.html">Новостная лента</a>
                                </div>
            
                                <div class="col-2 menu__item d-flex">
                                    <a href="` + location + `pages/events/events.html">Мероприятия</a>
                                </div>
            
                                <div class="col-2 menu__item d-flex">
                                    <a href="` + location + `pages/video.html">Видеоролики</a>
                                </div>
            
                                <div class="col-2 menu__item d-flex">
                                    <a href="` + location + `pages/analytics.html">Аналитика</a>
                                </div>`
                        )
                        +
                    `

                    

                    <div class="col-1 menu__item d-flex justify-content-end">
                        <div class="menu__item__user dropdown">
                            <div class="btn dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-user"></i>
                            </div>
                            <div class="dropdown-menu">
                            ` 
                                +
                                (
                                    accessRights == 0 ? 
                                        `<a class="dropdown-item" href="` + location + `pages/user/login.html">Войти / Зарегистрироваться</a>` :
                                        accessRights == 1 ? 
                                            `<a class="dropdown-item" href="` + location + `pages/user/account.html">Моя учетная запись</a>
                                            <a class="dropdown-item" href="` + location + ` #################################################################### ">Выйти</a>` :
                                            accessRights == 2 ? 
                                                `<a class="dropdown-item" href="` + location + `pages/user/account.html">Моя учетная запись</a>
                                                <a class="dropdown-item" href="` + location + ` ######################################################## ">Выйти</a>` :
                                                alert('Ошибка в определении прав доступа')
                                )
                                + 
                            `
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `)
}

function returnFooter(location = '') {
    return `
        <div class="container">
            <div class="row">
                <div class="col-6 footer__contacts">
                    <h3 d-flex justify-content-around>Контактная информация</h3>
                    <p>Чтобы посетить наш головной офис воспользуйтесь адресом</p>
                    <p><span class="bold">Адрес:</span> &nbsp Ростов-на-Дону, ул.Пушкина, д.17</p>
                    <p>+7 (565) 265-93-25 &nbsp &nbsp &nbsp &nbsp +7 (965) 789-58-74</p>
                    <a href="` + location + `index.html"><p>www.gorevents.com</p></a>
                </div>
                <div class="col-6 footer__info">
                    <h3>Информация</h3>
                    <a href="` + location + `index.html"><p>Главная</p></a>
                    <a href="` + location + `pages/events/events.html"><p>Мероприятия</p></a>
                    <a href="` + location + `pages/news.html"><p>Новостная лента</p></a>
                    <a href="` + location + `pages/video.html"><p>Видеоролики</p></a>
                    <a href="` + location + `pages/analytics.html"><p>Аналитика</p></a>
                </div>
            </div>
        </div>
    `
}