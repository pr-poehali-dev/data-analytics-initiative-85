const advantages = [
  { icon: "🎯", title: "Комнаты по параметрам", desc: "Ставка, формат, количество игроков — выбирайте комнату, которая подходит именно вам" },
  { icon: "🏆", title: "Честная игра", desc: "Все розыгрыши проходят в режиме реального времени с прозрачными результатами" },
  { icon: "💰", title: "Крупные джекпоты", desc: "Миллионные призовые фонды разыгрываются ежедневно среди всех участников" },
];

export default function Featured() {
  return (
    <div id="rooms" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Игровые комнаты Столото"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Почему выбирают нас</h3>
        <p className="text-3xl lg:text-5xl mb-10 text-neutral-900 leading-tight font-bold">
          Каждый находит свою игру
        </p>
        <div className="flex flex-col gap-6 mb-10">
          {advantages.map((item) => (
            <div key={item.title} className="flex gap-4 items-start">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-bold text-neutral-900 mb-1">{item.title}</p>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="#play" className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 cursor-pointer w-fit uppercase tracking-wide font-semibold">
          Смотреть комнаты
        </a>
      </div>
    </div>
  );
}