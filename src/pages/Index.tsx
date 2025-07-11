import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Printer" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">PrintHouse</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#services"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Услуги
              </a>
              <a
                href="#gallery"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Галерея
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              Заказать печать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Цифровая печать
                <span className="block text-yellow-300">нового поколения</span>
              </h2>
              <p className="text-xl mb-8 text-orange-100">
                Профессиональная печать визиток и флаеров с превосходным
                качеством. Быстро, качественно, доступно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать сейчас
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src="/img/e6a16816-7a04-48e0-96a8-8f842f299e8e.jpg"
                alt="Образцы цифровой печати"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Широкий спектр услуг цифровой печати
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CreditCard" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Визитки</CardTitle>
                <CardDescription>
                  Профессиональные визитки любых размеров
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Плотная бумага 300г/м²
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Матовое и глянцевое покрытие
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Быстрая печать от 1 часа
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    От{" "}
                    <span className="text-2xl font-bold text-primary">50₽</span>{" "}
                    за 100 шт
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Флаеры</CardTitle>
                <CardDescription>
                  Яркие флаеры для рекламы и промо
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Форматы A4, A5, A6
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Цветная печать 4+0, 4+4
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Срочная печать за 2 часа
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    От{" "}
                    <span className="text-2xl font-bold text-primary">30₽</span>{" "}
                    за 100 шт
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Дизайн</CardTitle>
                <CardDescription>Разработка макетов под ключ</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Индивидуальный дизайн
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Корпоративный стиль
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Готовые шаблоны
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    От{" "}
                    <span className="text-2xl font-bold text-primary">
                      500₽
                    </span>{" "}
                    за макет
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Галерея работ
            </h2>
            <p className="text-xl text-gray-600">Примеры наших лучших работ</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="hover-lift">
              <img
                src="/img/1463ea9e-e60a-484a-ba9d-471d84770e46.jpg"
                alt="Процесс печати"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="mt-4">
                <h3 className="font-semibold text-lg">Процесс печати</h3>
                <p className="text-gray-600">
                  Современное оборудование для высокого качества
                </p>
              </div>
            </div>

            <div className="hover-lift">
              <img
                src="/img/862f3815-28f5-4285-b30d-569864c51d94.jpg"
                alt="Образцы дизайна"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="mt-4">
                <h3 className="font-semibold text-lg">Дизайн и верстка</h3>
                <p className="text-gray-600">
                  Креативные решения для вашего бизнеса
                </p>
              </div>
            </div>

            <div className="hover-lift">
              <img
                src="/img/e6a16816-7a04-48e0-96a8-8f842f299e8e.jpg"
                alt="Готовые работы"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="mt-4">
                <h3 className="font-semibold text-lg">Готовые работы</h3>
                <p className="text-gray-600">
                  Качество, которое говорит само за себя
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Связаться с нами
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Готовы воплотить ваши идеи в жизнь? Свяжитесь с нами для
                консультации и расчета стоимости.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@printhouse.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Адрес</h3>
                    <p className="text-gray-600">
                      г. Москва, ул. Печатников, 15
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Время работы</h3>
                    <p className="text-gray-600">
                      Пн-Пт: 9:00-18:00
                      <br />
                      Сб: 10:00-16:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl">Отправить заявку</CardTitle>
                <CardDescription>
                  Мы свяжемся с вами в течение 30 минут
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <Textarea placeholder="Опишите ваш проект..." rows={4} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Printer" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">PrintHouse</h3>
              </div>
              <p className="text-gray-400">
                Профессиональная цифровая печать с 2010 года. Качество,
                скорость, доступные цены.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Печать визиток
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Печать флаеров
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Дизайн макетов
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Срочная печать
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@printhouse.ru</li>
                <li>г. Москва, ул. Печатников, 15</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon name="Facebook" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon name="Instagram" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PrintHouse. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
