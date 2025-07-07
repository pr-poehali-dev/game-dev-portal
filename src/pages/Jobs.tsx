import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Jobs = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const jobs = [
    {
      id: "1",
      title: "Senior Unity Developer",
      company: "GameDev Studio",
      location: "Москва",
      type: "Полный день",
      salary: "от ₽180,000",
      level: "Senior",
      skills: ["Unity", "C#", "3D Graphics", "Multiplayer"],
      description: "Разработка AAA мобильных игр с использованием Unity Engine",
      posted: "2 дня назад",
      applicants: 23,
      remote: false,
    },
    {
      id: "2",
      title: "Game Designer",
      company: "Pixel Perfect",
      location: "Удаленно",
      type: "Полный день",
      salary: "от ₽120,000",
      level: "Middle",
      skills: ["Game Design", "Balancing", "Documentation", "Analytics"],
      description:
        "Проектирование игровых механик для мобильных казуальных игр",
      posted: "1 день назад",
      applicants: 15,
      remote: true,
    },
    {
      id: "3",
      title: "3D Artist",
      company: "Visionary Games",
      location: "Санкт-Петербург",
      type: "Фриланс",
      salary: "от ₽80,000",
      level: "Middle",
      skills: ["3ds Max", "Maya", "Substance Painter", "Low-poly"],
      description: "Создание 3D моделей и текстур для инди-проектов",
      posted: "3 дня назад",
      applicants: 8,
      remote: false,
    },
    {
      id: "4",
      title: "Technical Artist",
      company: "Nexus Games",
      location: "Москва",
      type: "Полный день",
      salary: "от ₽150,000",
      level: "Senior",
      skills: ["Shaders", "VFX", "Optimization", "Unity", "Unreal Engine"],
      description: "Оптимизация графики и создание технических решений",
      posted: "4 дня назад",
      applicants: 12,
      remote: false,
    },
    {
      id: "5",
      title: "UI/UX Designer",
      company: "Casual Games Inc",
      location: "Удаленно",
      type: "Полный день",
      salary: "от ₽100,000",
      level: "Middle",
      skills: ["Figma", "Adobe XD", "UI Design", "Mobile UX"],
      description: "Дизайн интерфейсов для мобильных игр",
      posted: "5 дней назад",
      applicants: 31,
      remote: true,
    },
    {
      id: "6",
      title: "Game Producer",
      company: "Epic Indies",
      location: "Москва",
      type: "Полный день",
      salary: "от ₽200,000",
      level: "Senior",
      skills: ["Project Management", "Scrum", "Team Leadership", "Analytics"],
      description:
        "Управление разработкой игровых проектов от концепции до релиза",
      posted: "1 неделю назад",
      applicants: 19,
      remote: false,
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "developer" &&
        job.title.toLowerCase().includes("developer")) ||
      (selectedCategory === "designer" &&
        job.title.toLowerCase().includes("designer")) ||
      (selectedCategory === "artist" &&
        job.title.toLowerCase().includes("artist")) ||
      (selectedCategory === "producer" &&
        job.title.toLowerCase().includes("producer"));

    const matchesLocation =
      selectedLocation === "all" ||
      (selectedLocation === "remote" && job.remote) ||
      (selectedLocation === "moscow" && job.location === "Москва") ||
      (selectedLocation === "spb" && job.location === "Санкт-Петербург");

    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Вакансии</h1>
              <p className="text-gray-300">
                Найдите работу мечты в игровой индустрии
              </p>
            </div>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
            >
              <Icon name="Home" className="mr-2" size={16} />
              На главную
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <Card className="bg-black/40 border-purple-500/30">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Поиск по должности, компании или навыкам..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-black/30 border-purple-500/30 text-white placeholder-gray-400"
                  />
                </div>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full lg:w-[200px] bg-black/30 border-purple-500/30 text-white">
                    <SelectValue placeholder="Категория" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все категории</SelectItem>
                    <SelectItem value="developer">Разработчики</SelectItem>
                    <SelectItem value="designer">Дизайнеры</SelectItem>
                    <SelectItem value="artist">Художники</SelectItem>
                    <SelectItem value="producer">Продюсеры</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={selectedLocation}
                  onValueChange={setSelectedLocation}
                >
                  <SelectTrigger className="w-full lg:w-[200px] bg-black/30 border-purple-500/30 text-white">
                    <SelectValue placeholder="Местоположение" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все локации</SelectItem>
                    <SelectItem value="remote">Удаленно</SelectItem>
                    <SelectItem value="moscow">Москва</SelectItem>
                    <SelectItem value="spb">Санкт-Петербург</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {filteredJobs.length}
            </div>
            <div className="text-gray-300">Доступных вакансий</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-gray-300">Компаний</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">₽150K</div>
            <div className="text-gray-300">Средняя зарплата</div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 gap-6">
          {filteredJobs.map((job) => (
            <Card
              key={job.id}
              className="bg-black/40 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/job/${job.id}`)}
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Icon name="Building" size={16} />
                          <span>{job.company}</span>
                          <span>•</span>
                          <Icon name="MapPin" size={16} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-purple-500/20 text-purple-400"
                        >
                          {job.type}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-blue-500/20 text-blue-400"
                        >
                          {job.level}
                        </Badge>
                        {job.remote && (
                          <Badge
                            variant="secondary"
                            className="bg-green-500/20 text-green-400"
                          >
                            Удаленно
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-3">{job.description}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-500/10 text-purple-400 text-sm rounded border border-purple-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        <span>{job.posted}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Users" size={14} />
                        <span>{job.applicants} откликов</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row lg:flex-col items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        {job.salary}
                      </div>
                      <div className="text-sm text-gray-400">в месяц</div>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/job/${job.id}`);
                      }}
                    >
                      Откликнуться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              className="text-gray-400 mx-auto mb-4"
              size={48}
            />
            <h3 className="text-xl font-bold text-white mb-2">
              Вакансии не найдены
            </h3>
            <p className="text-gray-400 mb-6">
              Попробуйте изменить параметры поиска
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedLocation("all");
              }}
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
            >
              Сбросить фильтры
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30">
            <CardContent className="p-8 text-center">
              <Icon
                name="Briefcase"
                className="text-purple-400 mx-auto mb-4"
                size={48}
              />
              <h3 className="text-2xl font-bold text-white mb-4">
                Не нашли подходящую вакансию?
              </h3>
              <p className="text-gray-300 mb-6">
                Создайте профиль разработчика и позвольте работодателям найти
                вас
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  onClick={() => navigate("/create-resume")}
                >
                  Создать профиль
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                >
                  Разместить вакансию
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
