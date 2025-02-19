import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header className='text-gray-700 border-b border-gray-200'>
        <div className='container flex mx-auto p-5  flex-col md:flex-row items-center'>
          <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>NisshoCode</span>
          </a>
          <nav className='md:ml-auto text-base gap-5'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href="#Skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href="#blog" className=' hover:text-blue-400 duration-300'>Blog</a>
          </nav>
        </div>
      </header>
      <section className='text-gray-700' id="home" >
        <div className='flex container mx-auto py-20 px-5  flex-col md:flex-row items-center'>
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-16 ,d:pr-16 text-center md:text-left'>
            <h1 className='md-8 leading-relaxed'>Nissho code<br />
              My Portfolio Website</h1>
            <p>現在、Webエンジニアとしてデビューしたてほやほやです。得意な言語はHTML.CSS,JavaScript,TypeScript,
              PHP,SQL,Reactなどweb全般とPythonです。自身が作ったものを公開していますので、ぜひ見ていってください。
            </p>
            <button className='text-white bg-green-500 py-2 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg'>
            <img src="./public/img/myPicture.png" alt="" />
          </div>
        </div>
      </section>
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
            <p className='pb-10'>
              これまで、マーケティング業界に数年財務分析を行ってきました。現在はIT業界でシステム構築に従事しながら副業としてWebサイトやWebAppを個人として受注しております。また投資やコンサルティングも積極的に行っており、ご相談されたい方はコンタクトお待ちしております。
            </p>
            <p>
              以下に個人としての成果物を公開しております。主にＳＮＳなどのchatアプリの構築をReactのJSやTSで実装しています。また、Pythonを使ってAIによる株価の予測サイトを構築しました。また、数件の事業所Webサイト構築など多岐にわたります。
            </p>
          </div>
          <div className='flex flex-wrap'>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App
                  </div>
                </div>
                <div className="">
                  <p>
                    ReactとJavaScriptで投稿機能付きのChatApp。仕様はReact、JavaScript、HTML、css、firebase、AWS、ログイン、ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。
                  </p>
                  <a href="#" className='mt-3 text-green-500 items-center'>
                    もっと見る
                  </a>
                </div>

              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App
                  </div>
                </div>
                <div className="">
                  <p>
                    ReactとJavaScriptで投稿機能付きのChatApp。仕様はReact、JavaScript、HTML、css、firebase、AWS、ログイン、ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。
                  </p>
                  <a href="#" className='mt-3 text-green-500 items-center'>
                    もっと見る
                  </a>
                </div>

              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App
                  </div>
                </div>
                <div className="">
                  <p>
                    ReactとJavaScriptで投稿機能付きのChatApp。仕様はReact、JavaScript、HTML、css、firebase、AWS、ログイン、ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。
                  </p>
                  <a href="#" className='mt-3 text-green-500 items-center'>
                    もっと見る
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* leftside */}
          <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
            <img src="./public/img/pc.jpg" alt="" className='rounded' />
          </div>
          {/* rightside */}
          <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">My skills</h1>
            <h2>HTML</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "85%" }}>85%

              </div>
            </div>
            <h2>JavaScript</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-orange-600 text-xs leading-none py-1 text-center text-white' style={{ width: "85%" }}>85%

              </div>
            </div>
            <h2>React</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{ width: "85%" }}>85%

              </div>
            </div>
            <h2>Python</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-yellow-600 text-xs leading-none py-1 text-center text-white' style={{ width: "85%" }}>85%

              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default App
