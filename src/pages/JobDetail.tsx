import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const JobDetail = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    description: "",
    salary: "",
    remote: false,
    startDate: "",
    files: [] as File[],
  });

  const jobs = [
    {
      id: "1",
      title: "Unity Developer",
      company: "GameDev Studio",
      location: "Москва",
      type: "Полный день",
      salary: "от ₽150,000",
      description:
        "Мы ищем талантливого Unity разработчика для создания инновационных игр. Вы будете работать с командой профессионалов над захватывающими проектами.",
      requirements: [
        "Опыт работы с Unity 3D от 2 лет",
        "Знание C# на продвинутом уровне",
        "Опыт разработки мобильных игр",
        "Понимание принципов ООП",
        "Опыт работы с системами контроля версий (Git)",
      ],
      responsibilities: [
        "Разработка игровой логики и механик",
        "Оптимизация производительности игр",
        "Интеграция с различными платформами",
        "Работа с дизайнерами и художниками",
        "Участие в планировании и архитектуре проектов",
      ],
      benefits: [
        "Гибкий график работы",
        "Возможность удаленной работы",
        "Медицинская страховка",
        "Корпоративное обучение",
        "Участие в прибыли от проектов",
      ],
    },
    {
      id: "2",
      title: "Game Designer",
      company: "Pixel Perfect",
      location: "Санкт-Петербург",
      type: "Полный день",
      salary: "от ₽120,000",
      description:
        "Присоединяйтесь к нашей команде в качестве Game Designer для создания уникальных игровых механик и захватывающего пользовательского опыта.",
      requirements: [
        "Опыт в геймдизайне от 1 года",
        "Знание основ UX/UI дизайна",
        "Понимание игровых механик",
        "Опыт работы с аналитикой игр",
        "Навыки документирования",
      ],
      responsibilities: [
        "Разработка игровых механик",
        "Создание документации по игре",
        "Баланс игровых систем",
        "Анализ игровой статистики",
        "Тестирование и итерации",
      ],
      benefits: [
        "Творческая свобода",
        "Участие в инновационных проектах",
        "Профессиональный рост",
        "Дружная команда",
        "Бонусы за релизы",
      ],
    },
    {
      id: "3",
      title: "3D Artist",
      company: "Visionary Games",
      location: "Удаленно",
      type: "Фриланс",
      salary: "от ₽80,000",
      description:
        "Ищем талантливого 3D художника для создания высококачественных игровых ассетов и персонажей для наших проектов.",
      requirements: [
        "Опыт работы с Blender/Maya от 2 лет",
        "Навыки текстурирования",
        "Понимание игровых pipeline",
        "Опыт создания low-poly моделей",
        "Портфолио с игровыми работами",
      ],
      responsibilities: [
        "Создание 3D моделей персонажей",
        "Моделирование окружения",
        "Текстурирование и материалы",
        "Оптимизация для игровых движков",
        "Создание концепт-артов",
      ],
      benefits: [
        "Удаленная работа",
        "Гибкий график",
        "Оплата за проект",
        "Возможность роста",
        "Международные проекты",
      ],
    },
  ];

  const job = jobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Вакансия не найдена
          </h1>
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Вернуться на главную
          </Button>
        </div>
      </div>
    );
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData((prev) => ({ ...prev, files: [...prev.files, ...files] }));
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Отклик отправлен!",
      description:
        "Мы рассмотрим вашу заявку и свяжемся с вами в ближайшее время.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-white hover:text-purple-400"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад к вакансиям
            </Button>
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" className="text-purple-400" size={24} />
              <span className="text-xl font-bold text-white">GameHub</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Job Description */}
          <div className="space-y-6">
            <Card className="bg-black/40 border-purple-500/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-white">
                    {job.title}
                  </CardTitle>
                  <Badge className="bg-green-500/20 text-green-400">
                    Активная
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Icon name="Building" size={16} />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={16} />
                    <span>{job.type}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {job.salary}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">{job.description}</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Требования:
                    </h3>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-2 text-gray-300"
                        >
                          <Icon
                            name="CheckCircle"
                            size={16}
                            className="text-green-400 mt-1 flex-shrink-0"
                          />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Обязанности:
                    </h3>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-2 text-gray-300"
                        >
                          <Icon
                            name="Dot"
                            size={16}
                            className="text-purple-400 mt-1 flex-shrink-0"
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Мы предлагаем:
                    </h3>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-2 text-gray-300"
                        >
                          <Icon
                            name="Star"
                            size={16}
                            className="text-yellow-400 mt-1 flex-shrink-0"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div>
            <Card className="bg-black/40 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Откликнуться на вакансию
                </CardTitle>
                <p className="text-gray-400">
                  Заполните форму, и мы свяжемся с вами
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">
                        Имя *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="bg-black/20 border-purple-500/30 text-white"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="bg-black/20 border-purple-500/30 text-white"
                        placeholder="ваш@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white">
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="bg-black/20 border-purple-500/30 text-white"
                      placeholder="+7 (xxx) xxx-xx-xx"
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <Label htmlFor="experience" className="text-white">
                      Опыт работы *
                    </Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, experience: value }))
                      }
                    >
                      <SelectTrigger className="bg-black/20 border-purple-500/30 text-white">
                        <SelectValue placeholder="Выберите опыт работы" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="junior">Менее 1 года</SelectItem>
                        <SelectItem value="middle">1-3 года</SelectItem>
                        <SelectItem value="senior">3-5 лет</SelectItem>
                        <SelectItem value="lead">Более 5 лет</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Portfolio */}
                  <div>
                    <Label htmlFor="portfolio" className="text-white">
                      Ссылка на портфолио
                    </Label>
                    <Input
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          portfolio: e.target.value,
                        }))
                      }
                      className="bg-black/20 border-purple-500/30 text-white"
                      placeholder="https://github.com/yourprofile"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description" className="text-white">
                      Расскажите о себе *
                    </Label>
                    <Textarea
                      id="description"
                      required
                      value={formData.description}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      className="bg-black/20 border-purple-500/30 text-white min-h-[100px]"
                      placeholder="Опишите ваш опыт, навыки и мотивацию..."
                    />
                  </div>

                  {/* Salary */}
                  <div>
                    <Label htmlFor="salary" className="text-white">
                      Желаемая зарплата
                    </Label>
                    <Input
                      id="salary"
                      value={formData.salary}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          salary: e.target.value,
                        }))
                      }
                      className="bg-black/20 border-purple-500/30 text-white"
                      placeholder="от 150 000 руб."
                    />
                  </div>

                  {/* Start Date */}
                  <div>
                    <Label htmlFor="startDate" className="text-white">
                      Когда готовы приступить?
                    </Label>
                    <Select
                      value={formData.startDate}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, startDate: value }))
                      }
                    >
                      <SelectTrigger className="bg-black/20 border-purple-500/30 text-white">
                        <SelectValue placeholder="Выберите срок" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">Немедленно</SelectItem>
                        <SelectItem value="week">В течение недели</SelectItem>
                        <SelectItem value="month">В течение месяца</SelectItem>
                        <SelectItem value="negotiate">Обсуждается</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Remote Work */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remote"
                      checked={formData.remote}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({
                          ...prev,
                          remote: checked as boolean,
                        }))
                      }
                    />
                    <Label htmlFor="remote" className="text-white">
                      Рассматриваю удаленную работу
                    </Label>
                  </div>

                  {/* File Upload */}
                  <div>
                    <Label className="text-white">
                      Прикрепить файлы (резюме, портфолио)
                    </Label>
                    <div className="mt-2">
                      <Input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                        onChange={handleFileUpload}
                        className="bg-black/20 border-purple-500/30 text-white file:bg-purple-500 file:text-white file:border-0 file:px-4 file:py-2 file:rounded"
                      />
                      <p className="text-sm text-gray-400 mt-1">
                        Поддерживаемые форматы: PDF, DOC, DOCX, TXT, PNG, JPG
                        (макс. 10MB)
                      </p>
                    </div>

                    {formData.files.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {formData.files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-black/30 p-2 rounded"
                          >
                            <div className="flex items-center space-x-2">
                              <Icon
                                name="FileText"
                                size={16}
                                className="text-purple-400"
                              />
                              <span className="text-sm text-white">
                                {file.name}
                              </span>
                              <span className="text-xs text-gray-400">
                                ({(file.size / 1024 / 1024).toFixed(1)} MB)
                              </span>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="text-red-400 hover:text-red-300"
                            >
                              <Icon name="X" size={16} />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить отклик
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
