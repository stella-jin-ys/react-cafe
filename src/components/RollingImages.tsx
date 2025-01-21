const images = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1494314671902-399b18174975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxjYWZlfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1664970900401-0756aa4d8459?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxjYWZlfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1669687924558-386bff1a0469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
];

export default function RollingImages() {
  return (
    <div className="overflow-hidden relative w-4/5 md:w-2/3 lg:w-1/2 h-96 ">
      <div
        className="flex animate-infinite-scroll "
        style={{
          width: `${images.length * 10}rem`, // Dynamically calculate width for images + gap
        }}
      >
        {images.concat(images).map((image, i) => (
          <button className="flex-shrink-0 w-48 h-48  rounded-lg overflow-hidden mr-5 transform transition-transform hover:scale-110">
            <img
              key={i}
              src={image}
              alt="Rolling image"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
