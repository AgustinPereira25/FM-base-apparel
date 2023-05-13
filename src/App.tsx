

function App() {

  return (
    <div className="flex w-full min-h-screen">
      <div className="flex justify-center px-20 py-10 grow w-3/4 flex-col bg-[url('/bg-pattern-desktop.svg')]">
          <div className="absolute top-10">
            <img
              src="/logo.svg"
              alt = 'Image'
              width={150}
              height={100}
            />
          </div>
          <div className="flex flex-col w-2/3">
            <p className="tracking-[.25em] text-7xl font-light text-pink-800 text-opacity-50">WE'RE</p>
            <p className="tracking-[.25em] text-7xl font-medium">COMING</p>
            <p className="tracking-[.25em] text-7xl font-medium">SOON</p>
            <div className="pt-10">
              <p className="text-md font-medium text-pink-800 text-opacity-50">Hello fellow shoppers! We're currently building our new</p>
              <p className="py-1 text-md font-medium text-pink-800 text-opacity-50">fashion store. Add your email below to stay up-to-date with</p>
              <p className="text-md font-medium text-pink-800 text-opacity-50">annoucements and out lunch deals.</p>
            </div>
          </div>
      </div>
      <div className="flex">
        <img
          src="/hero-desktop.jpg"
          alt = 'Image'
          // height={'100%'}
          // width={'100%'}
        />
      </div>
    </div>
  )
}

export default App
