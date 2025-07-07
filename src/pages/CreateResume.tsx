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
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateResume = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [portfolio, setPortfolio] = useState<string[]>([]);
  const [newPortfolioItem, setNewPortfolioItem] = useState("");
  const [voiceRecording, setVoiceRecording] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const addPortfolioItem = () => {
    if (
      newPortfolioItem.trim() &&
      !portfolio.includes(newPortfolioItem.trim())
    ) {
      setPortfolio([...portfolio, newPortfolioItem.trim()]);
      setNewPortfolioItem("");
    }
  };

  const removePortfolioItem = (itemToRemove: string) => {
    setPortfolio(portfolio.filter((item) => item !== itemToRemove));
  };

  const startRecording = () => {
    setIsRecording(true);
    // Имитация записи голоса
    setTimeout(() => {
      setIsRecording(false);
      setVoiceRecording("voice-recording-1.wav");
    }, 3000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setVoiceRecording("voice-recording-1.wav");
  };

  const removeVoiceRecording = () => {
    setVoiceRecording(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Создание резюме
              </h1>
              <p className="text-gray-300">
                Создайте профессиональное резюме для поиска работы
              </p>
            </div>
            <Button
              onClick={() => navigate("/jobs")}
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
            >
              <Icon name="ArrowLeft" className="mr-2" size={16} />К вакансиям
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <form className="space-y-8">
          {/* Personal Information */}
          <Card className="bg-black/40 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="User" className="mr-2" size={24} />
                Личная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-white">
                    Имя
                  </Label>
                  <Input
                    id="firstName"
                    className="bg-black/30 border-purple-500/30 text-white"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-white">
                    Фамилия
                  </Label>
                  <Input
                    id="lastName"
                    className="bg-black/30 border-purple-500/30 text-white"
                    placeholder="Ваша фамилия"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-black/30 border-purple-500/30 text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    className="bg-black/30 border-purple-500/30 text-white"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location" className="text-white">
                    Местоположение
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-black/30 border-purple-500/30 text-white">
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moscow">Москва</SelectItem>
                      <SelectItem value="spb">Санкт-Петербург</SelectItem>
                      <SelectItem value="remote">Удаленно</SelectItem>
                      <SelectItem value="other">Другой город</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="position" className="text-white">
                    Желаемая должность
                  </Label>
                  <Input
                    id="position"
                    className="bg-black/30 border-purple-500/30 text-white"
                    placeholder="Game Developer"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card className="bg-black/40 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="FileText" className="mr-2" size={24} />О себе
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="summary" className="text-white">
                  Краткое описание
                </Label>
                <Textarea
                  id="summary"
                  rows={4}
                  className="bg-black/30 border-purple-500/30 text-white"
                  placeholder="Расскажите о своем опыте, целях и мотивации..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-black/40 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="Briefcase" className="mr-2" size={24} />
                Опыт работы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="experience" className="text-white">
                    Опыт в геймдев
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-black/30 border-purple-500/30 text-white">
                      <SelectValue placeholder="Выберите опыт" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="junior">
                        Начинающий (0-1 год)
                      </SelectItem>
                      <SelectItem value="middle">Средний (1-3 года)</SelectItem>
                      <SelectItem value="senior">Опытный (3-5 лет)</SelectItem>
                      <SelectItem value="lead">Ведущий (5+ лет)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="salary" className="text-white">
                    Желаемая зарплата
                  </Label>
                  <Input
                    id="salary"
                    className="bg-black/30 border-purple-500/30 text-white"
                    placeholder="от 100,000 ₽"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="workHistory" className="text-white">
                  История работы
                </Label>
                <Textarea
                  id="workHistory"
                  rows={4}
                  className="bg-black/30 border-purple-500/30 text-white"
                  placeholder="Опишите ваш предыдущий опыт работы, проекты и достижения..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="bg-black/40 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="Code" className="mr-2" size={24} />
                Навыки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="bg-black/30 border-purple-500/30 text-white"
                  placeholder="Добавить навык..."
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addSkill())
                  }
                />
                <Button
                  type="button"
                  onClick={addSkill}
                  className="bg-purple-500 hover:bg-purple-600"
                >
                  <Icon name="Plus" size={16} />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-400 pr-1"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="ml-2 hover:text-red-400"
                    >
                      <Icon name="X" size={12} />
                    </button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Portfolio */}
          <Card className="bg-black/40 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="Folder" className="mr-2" size={24} />
                Портфолио
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={newPortfolioItem}
                  onChange={(e) => setNewPortfolioItem(e.target.value)}
                  className="bg-black/30 border-purple-500/30 text-white"
                  placeholder="Ссылка на проект или работу..."
                  onKeyPress={(e) =>
                    e.key === "Enter" &&
                    (e.preventDefault(), addPortfolioItem())
                  }
                />
                <Button
                  type="button"
                  onClick={addPortfolioItem}
                  className="bg-purple-500 hover:bg-purple-600"
                >
                  <Icon name="Plus" size={16} />
                </Button>
              </div>
              <div className="space-y-2">
                {portfolio.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-black/30 border border-purple-500/30 rounded-lg p-3"
                  >
                    <span className="text-white">{item}</span>
                    <button
                      type="button"
                      onClick={() => removePortfolioItem(item)}
                      className="text-red-400 hover:text-red-600"
                    >
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Voice Recording for Soft Skills */}
          <Card className="bg-black/40 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="Mic" className="mr-2" size={24} />
                Голосовая презентация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Запишите короткое голосовое сообщение (до 2 минут), рассказав о
                себе, своих целях и мотивации. Это поможет работодателю лучше
                понять вас как личность.
              </p>

              {!voiceRecording ? (
                <div className="text-center">
                  {!isRecording ? (
                    <Button
                      type="button"
                      onClick={startRecording}
                      className="bg-red-500 hover:bg-red-600"
                    >
                      <Icon name="Mic" className="mr-2" size={16} />
                      Начать запись
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center text-red-400">
                        <Icon
                          name="Mic"
                          className="mr-2 animate-pulse"
                          size={24}
                        />
                        <span>Идет запись...</span>
                      </div>
                      <Button
                        type="button"
                        onClick={stopRecording}
                        variant="outline"
                        className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                      >
                        <Icon name="Square" className="mr-2" size={16} />
                        Остановить запись
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-black/30 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-green-400">
                      <Icon name="CheckCircle" className="mr-2" size={20} />
                      <span>Голосовое сообщение записано</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
                      >
                        <Icon name="Play" size={16} />
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                        onClick={removeVoiceRecording}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-center gap-4">
            <Button
              type="button"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              onClick={() => navigate("/jobs")}
            >
              Отмена
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Создать резюме
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateResume;
