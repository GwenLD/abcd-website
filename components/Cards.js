// Friday: let's make the BlogCard more responsive for small screens
// https://tailwindcss.com/docs/responsive-design

export function BlogCard({ children }) {
  return (
    <div className="flex-1 md:w-4/5 lg:w-4/5 sm:w-full text-justify px-8 py-4 mx-4 mb-10 border shadow-lg w-full rounded-lg bg-gray-100">
      {children}
    </div>
  );
}

export function AnotherCard({ children }) {
  return (
    <div
      className="flex-1 lg:w-3/6 lg:h-auto sm:py-28 pt-28 pb-14 text-justify px-4 mb-5 
                sm:w-full xs:w-full bg-gradient-to-r from-gray-400 to-blue-500 md:bg-none lg:bg-none xl:bg-none"
    >
      {children}
    </div>
  );
}

export function ImageCard({ children }) {
  return (
    <div
      className="flex-1 lg:w-3/6 lg:h-auto text-center py-16 px-4 mb-5 
                sm:w-full xs:w-full"
    >
      {children}
    </div>
  );
}

export function InfoCard({ children }) {
  return (
    <div
      className="flex-1 lg:w-2/5 lg:h-auto sm:py-28 py-16 px-4 text-center mb-5 
                sm:w-full xs:w-full"
    >
      {children}
    </div>
  );
}


export function AboutCard({ children }) {
  return (
    <div class="max-w-md mx-auto xl:mx-5 my-10 xl:my-0 bg-white rounded-xl shadow-md overflow-hidden">
      {children}
    </div>
  )
}
