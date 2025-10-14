import Wave from "react-wavify";

export default function Header() {
  return (
    <header className="relative w-screen h-[20rem] bg-bgColorHeader flex flex-col justify-between overflow-hidden">
      <Wave
        fill="#ea2845"
        options={{
          height: 1,
          amplitude: 40,
          speed: 0.2,
          points: 4,
        }}
        style={{
          transform: "rotate(180deg)",
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        backdrop-blur-sm bg-gradient-to-r from-[#FFFFFF70] to-[#99999970] h-50 w-100 rounded-xl flex flex-col
        items-center justify-center"
      >
        <h1 className="bg-bgColorHeaderContent w-80 h-20 text-center text-xl rounded-md p-2 flex justify-center items-center">Bem vindo ao meu portifólio</h1>
      </div>
      <Wave
        fill="#4f28ea"
        options={{
          height: 1,
          amplitude: 30,
          speed: 0.2,
          points: 6,
        }}
      />
    </header>
  );
}
