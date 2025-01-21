import Nav from "../components/Nav";
import RollingImages from "../components/RollingImages";

export default function Home() {
  return (
    <div className="bg-gray h-full">
      <Nav />
      <div className="w-auto justify-center p-10 sm:flex sm:items-center gap-10 md:gap-0">
        <div className="md:border-b border-zinc-400  text-wrap self-center text text-5xl sm:w-1/4">
          <div className="font-kings-regular text-slate-800 w-2/3 lg:px-5">
            SIP, SAVOR, AND STAY A WHILE
          </div>
        </div>
        <div className="max-h-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
            className="w-auto max-h-screen object-cover"
            alt="home page"
          />
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="w-1/2 lg:w-1/4 my-20 text-center font-kings-regular">
          <h2 className="text-3xl font-semibold mb-10">
            Our coffee is expertly brewed with freshly ground beans, sourced
            from the best coffee farms around the world.
          </h2>
          <p className="text-sm">
            We believe that every cup of coffee should be an experience. From
            the aroma to the last sip, each drink is crafted with care to
            deliver a rich, full-bodied flavor. Whether you're starting your day
            or taking a well-deserved break, our handcrafted beverages will warm
            your soul and energize your spirit.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-100">
        <RollingImages />
      </div>
    </div>
  );
}
