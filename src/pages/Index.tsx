import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/30 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" className="text-purple-400" size={32} />
              <span className="text-2xl font-bold text-white">GameHub</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Главная
              </a>
              <a
                href="#games"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Каталог игр
              </a>
              <a
                href="#events"
                className="text-white hover:text-purple-400 transition-colors"
              >
                События
              </a>
              <a
                href="#hackathons"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Хакатоны
              </a>
              <button
                onClick={() => navigate("/jobs")}
                className="text-white hover:text-purple-400 transition-colors"
              >
                Карьера
              </button>
              <a
                href="#marketplace"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Ассеты
              </a>
              <a
                href="#about"
                className="text-white hover:text-purple-400 transition-colors"
              >
                О нас
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Платформа для
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                инди-разработчиков
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Размещайте свои проекты, участвуйте в хакатонах, находите
              инвестиции и лучшие кадры в одном месте
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8"
              >
                Разместить проект
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white text-lg px-8"
              >
                Найти инвестиции
              </Button>
            </div>
            <div className="relative">
              <img
                src="/img/c0dcacc3-6475-46e1-9b66-2e5ed1fff1e2.jpg"
                alt="GameHub Platform"
                className="rounded-2xl shadow-2xl border border-purple-500/30 mx-auto max-w-4xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                500+
              </div>
              <div className="text-gray-300">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Хакатонов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                ₽100M+
              </div>
              <div className="text-gray-300">Инвестиций</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">1000+</div>
              <div className="text-gray-300">Разработчиков</div>
            </div>
          </div>
        </div>
      </section>

      {/* Indie Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Инди-проекты</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Размещайте свои проекты на нашей платформе, получайте отзывы
              сообщества и привлекайте инвесторов
            </p>
          </div>

          {/* Project Submission CTA */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Разместите свой проект
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Покажите свою игру сообществу разработчиков, получите
                      обратную связь и найдите инвесторов для дальнейшего
                      развития проекта.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                      >
                        Разместить проект
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                      >
                        Условия размещения
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-black/40 rounded-lg p-6 border border-blue-500/30">
                      <h4 className="text-white font-semibold mb-4">
                        Что вы получите:
                      </h4>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center">
                          <Icon
                            name="Check"
                            className="text-green-400 mr-2"
                            size={16}
                          />
                          Видимость для 1000+ разработчиков
                        </li>
                        <li className="flex items-center">
                          <Icon
                            name="Check"
                            className="text-green-400 mr-2"
                            size={16}
                          />
                          Обратная связь от сообщества
                        </li>
                        <li className="flex items-center">
                          <Icon
                            name="Check"
                            className="text-green-400 mr-2"
                            size={16}
                          />
                          Доступ к инвесторам
                        </li>
                        <li className="flex items-center">
                          <Icon
                            name="Check"
                            className="text-green-400 mr-2"
                            size={16}
                          />
                          Возможность найти команду
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card
                key={index}
                className="bg-black/40 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="p-0">
                  <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-t-lg flex items-center justify-center">
                    <Icon name="Gamepad2" className="text-white" size={64} />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white">
                      Pixel Adventure {index}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-400"
                    >
                      Инди
                    </Badge>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Увлекательная пиксельная RPG с уникальной механикой и
                    захватывающим сюжетом
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="Star" className="text-yellow-400" size={16} />
                      <span className="text-white">4.{index + 3}</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Хакатоны и соревнования
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Участвуйте в соревнованиях, изучайте новые технологии и
              знакомьтесь с единомышленниками
            </p>
          </div>

          {/* Featured Hackathon */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/30 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon
                        name="Trophy"
                        className="text-green-400"
                        size={32}
                      />
                      <h3 className="text-3xl font-bold text-white">
                        GameJam 2024: Космос и время
                      </h3>
                      <Badge className="bg-green-500/20 text-green-400">
                        Активный
                      </Badge>
                    </div>
                    <p className="text-gray-300 mb-6">
                      48-часовой хакатон по созданию игр. Покажите свои навыки,
                      найдите команду и выиграйте призы от наших партнеров.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-black/40 rounded-lg p-4 border border-green-500/30">
                        <div className="text-2xl font-bold text-green-400">
                          ₽500,000
                        </div>
                        <div className="text-sm text-gray-400">
                          Призовой фонд
                        </div>
                      </div>
                      <div className="bg-black/40 rounded-lg p-4 border border-blue-500/30">
                        <div className="text-2xl font-bold text-blue-400">
                          48 часов
                        </div>
                        <div className="text-sm text-gray-400">
                          Время на разработку
                        </div>
                      </div>
                      <div className="bg-black/40 rounded-lg p-4 border border-purple-500/30">
                        <div className="text-2xl font-bold text-purple-400">
                          200+
                        </div>
                        <div className="text-sm text-gray-400">Участников</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        size="lg"
                        className="bg-green-500 hover:bg-green-600"
                      >
                        Участвовать
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
                      >
                        Подробнее
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <div className="bg-black/60 rounded-lg p-6 border border-green-500/30">
                      <h4 className="text-white font-semibold mb-4">
                        Расписание:
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <Icon
                            name="Calendar"
                            className="text-green-400 mr-2"
                            size={16}
                          />
                          Регистрация: до 15 июля
                        </li>
                        <li className="flex items-center">
                          <Icon
                            name="Play"
                            className="text-blue-400 mr-2"
                            size={16}
                          />
                          Начало: 20 июля, 18:00
                        </li>
                        <li className="flex items-center">
                          <Icon
                            name="Flag"
                            className="text-purple-400 mr-2"
                            size={16}
                          />
                          Окончание: 22 июля, 18:00
                        </li>
                        <li className="flex items-center">
                          <Icon
                            name="Award"
                            className="text-yellow-400 mr-2"
                            size={16}
                          />
                          Награждение: 25 июля
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Other Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Icon name="Rocket" className="text-yellow-400" size={24} />
                    <span>Startup Pitch</span>
                  </CardTitle>
                  <Badge className="bg-yellow-500/20 text-yellow-400">
                    Скоро
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Презентация проектов перед инвесторами и издателями
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Инвестиции: до ₽10M
                  </div>
                  <Button
                    size="sm"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black"
                  >
                    Подать заявку
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-blue-500/30 hover:border-blue-500/60 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Icon name="Users" className="text-blue-400" size={24} />
                    <span>Networking Event</span>
                  </CardTitle>
                  <Badge className="bg-blue-500/20 text-blue-400">
                    Открыта регистрация
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Встреча разработчиков, дизайнеров и инвесторов
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Онлайн + офлайн</div>
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                    Присоединиться
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Icon
                      name="BookOpen"
                      className="text-purple-400"
                      size={24}
                    />
                    <span>Мастер-класс</span>
                  </CardTitle>
                  <Badge className="bg-purple-500/20 text-purple-400">
                    Завершен
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  "Монетизация инди-игр: от идеи до успеха"
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Запись доступна</div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                  >
                    Смотреть
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investments Section */}
      <section id="investments" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Инвестиции</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Получите финансирование для своего проекта или инвестируйте в
              перспективные игры
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* For Developers */}
            <Card className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border-green-500/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Icon
                    name="TrendingUp"
                    className="text-green-400 mr-4"
                    size={32}
                  />
                  <h3 className="text-2xl font-bold text-white">
                    Для разработчиков
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Привлекайте инвестиции для развития своего проекта. Мы поможем
                  найти подходящих инвесторов и партнеров.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Icon
                      name="Check"
                      className="text-green-400 mr-3 mt-1"
                      size={16}
                    />
                    <div>
                      <div className="text-white font-semibold">
                        Seed-инвестиции
                      </div>
                      <div className="text-gray-400 text-sm">
                        От ₽500,000 до ₽5M
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="Check"
                      className="text-green-400 mr-3 mt-1"
                      size={16}
                    />
                    <div>
                      <div className="text-white font-semibold">
                        Партнерство с издателями
                      </div>
                      <div className="text-gray-400 text-sm">
                        Помощь в публикации и маркетинге
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="Check"
                      className="text-green-400 mr-3 mt-1"
                      size={16}
                    />
                    <div>
                      <div className="text-white font-semibold">Менторство</div>
                      <div className="text-gray-400 text-sm">
                        Консультации от экспертов индустрии
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                >
                  Подать заявку на инвестиции
                </Button>
              </CardContent>
            </Card>

            {/* For Investors */}
            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Icon
                    name="DollarSign"
                    className="text-purple-400 mr-4"
                    size={32}
                  />
                  <h3 className="text-2xl font-bold text-white">
                    Для инвесторов
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Инвестируйте в перспективные игровые проекты с высоким
                  потенциалом роста и получайте прибыль.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Icon
                      name="Target"
                      className="text-purple-400 mr-3 mt-1"
                      size={16}
                    />
                    <div>
                      <div className="text-white font-semibold">
                        Проверенные проекты
                      </div>
                      <div className="text-gray-400 text-sm">
                        Прошедшие экспертную оценку
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="Shield"
                      className="text-purple-400 mr-3 mt-1"
                      size={16}
                    />
                    <div>
                      <div className="text-white font-semibold">
                        Прозрачность
                      </div>
                      <div className="text-gray-400 text-sm">
                        Полная отчетность по проектам
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="PieChart"
                      className="text-purple-400 mr-3 mt-1"
                      size={16}
                    />
                    <div>
                      <div className="text-white font-semibold">
                        Диверсификация
                      </div>
                      <div className="text-gray-400 text-sm">
                        Различные жанры и платформы
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  Стать инвестором
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Investment Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                ₽100M+
              </div>
              <div className="text-gray-300">Общий объем инвестиций</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Профинансированных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300">Активных инвесторов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">85%</div>
              <div className="text-gray-300">Успешных релизов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Карьера</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Найдите работу мечты или лучших специалистов для вашего проекта
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "1",
                title: "Unity Developer",
                company: "GameDev Studio",
                salary: "от ₽150,000",
                type: "Полный день",
              },
              {
                id: "2",
                title: "Game Designer",
                company: "Pixel Perfect",
                salary: "от ₽120,000",
                type: "Полный день",
              },
              {
                id: "3",
                title: "3D Artist",
                company: "Visionary Games",
                salary: "от ₽80,000",
                type: "Фриланс",
              },
            ].map((job) => (
              <Card
                key={job.id}
                className="bg-black/40 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/job/${job.id}`)}
              >
                <CardHeader>
                  <CardTitle className="text-white">{job.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{job.company}</span>
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-400"
                    >
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-green-400">
                      {job.salary}
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/job/${job.id}`);
                      }}
                    >
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Marketplace */}
      <section id="marketplace" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Маркетплейс ассетов
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Покупайте и продавайте готовые игровые ассеты: 3D модели,
              текстуры, звуки, код и многое другое
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { name: "Все", icon: "Grid3x3", active: true },
              { name: "3D модели", icon: "Box", active: false },
              { name: "Текстуры", icon: "Image", active: false },
              { name: "Звуки", icon: "Volume2", active: false },
              { name: "Код", icon: "Code", active: false },
              { name: "UI/UX", icon: "Layers", active: false },
            ].map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={
                  category.active
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    : "border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                }
              >
                <Icon name={category.icon} size={16} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Asset Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                name: "Sci-Fi Weapon Pack",
                price: "₽2,500",
                author: "PixelArt Studio",
                rating: 4.8,
                sales: 156,
                category: "3D модели",
                image: "/img/5f3938f0-f656-46f0-b816-337f1b74347c.jpg",
              },
              {
                name: "Fantasy UI Kit",
                price: "₽1,800",
                author: "UI Master",
                rating: 4.9,
                sales: 89,
                category: "UI/UX",
                image: "/img/5f3938f0-f656-46f0-b816-337f1b74347c.jpg",
              },
              {
                name: "Ambient Music Pack",
                price: "₽3,200",
                author: "SoundWave",
                rating: 4.7,
                sales: 234,
                category: "Звуки",
                image: "/img/5f3938f0-f656-46f0-b816-337f1b74347c.jpg",
              },
              {
                name: "Procedural Terrain",
                price: "₽4,500",
                author: "CodeCrafter",
                rating: 4.6,
                sales: 67,
                category: "Код",
                image: "/img/5f3938f0-f656-46f0-b816-337f1b74347c.jpg",
              },
              {
                name: "Medieval Textures",
                price: "₽1,200",
                author: "TextureKing",
                rating: 4.8,
                sales: 312,
                category: "Текстуры",
                image: "/img/5f3938f0-f656-46f0-b816-337f1b74347c.jpg",
              },
              {
                name: "Character Animations",
                price: "₽5,000",
                author: "AnimPro",
                rating: 4.9,
                sales: 45,
                category: "3D модели",
                image: "/img/5f3938f0-f656-46f0-b816-337f1b74347c.jpg",
              },
              {
                name: "Retro Sound Effects",
                price: "₽900",
                author: "ChipTunes",
                rating: 4.5,
                sales: 189,
                category: "Звуки",
                image: "/img/5f3938f0-f656-46f0-b816-337f1b74347c.jpg",
              },
              {
                name: "Inventory System",
                price: "₽3,800",
                author: "GameLogic",
                rating: 4.7,
                sales: 78,
                category: "Код",
                image: "/img/5f3938f0-f656-46f0-b816-337f1b74347c.jpg",
              },
            ].map((asset, index) => (
              <Card
                key={index}
                className="bg-black/40 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={asset.image}
                      alt={asset.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-purple-500/20 text-purple-400 backdrop-blur-sm">
                        {asset.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                        <Icon
                          name="Star"
                          className="text-yellow-400"
                          size={12}
                        />
                        <span className="text-white text-xs">
                          {asset.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-white text-lg mb-2 line-clamp-1">
                    {asset.name}
                  </CardTitle>
                  <p className="text-gray-400 text-sm mb-3">
                    от {asset.author}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-bold text-green-400">
                      {asset.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      {asset.sales} продаж
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      Купить
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                    >
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Seller CTA */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Icon
                  name="Upload"
                  className="text-purple-400 mx-auto mb-4"
                  size={48}
                />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Продавайте свои ассеты
                </h3>
                <p className="text-gray-300 mb-6">
                  Загружайте свои 3D модели, текстуры, звуки и код.
                  Зарабатывайте на своем творчестве!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Начать продавать
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                  >
                    Узнать больше
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 border-t border-purple-500/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gamepad2" className="text-purple-400" size={24} />
                <span className="text-xl font-bold text-white">GameHub</span>
              </div>
              <p className="text-gray-400">
                Платформа для инди-разработчиков игр
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Каталог игр
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Хакатоны
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Инвестиции
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Разработчики
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Вакансии
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Блог
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Поддержка
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Партнерам
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GameHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
