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
              <a
                href="#career"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Карьера
              </a>
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

      {/* Games Catalog */}
      <section id="games" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Каталог игр</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Откройте для себя лучшие инди-проекты и поддержите талантливых
              разработчиков
            </p>
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

      {/* Events & Hackathons */}
      <section id="events" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              События и хакатоны
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Участвуйте в соревнованиях, изучайте новые технологии и
              знакомьтесь с единомышленниками
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/40 border-green-500/30 hover:border-green-500/60 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Icon name="Trophy" className="text-green-400" size={24} />
                    <span>Game Jam 2024</span>
                  </CardTitle>
                  <Badge className="bg-green-500/20 text-green-400">
                    Активный
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  48-часовой хакатон по созданию игр на тему "Космос и время"
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Призовой фонд: ₽500,000
                  </div>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    Участвовать
                  </Button>
                </div>
              </CardContent>
            </Card>
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
