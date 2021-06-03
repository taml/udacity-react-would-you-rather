import React from 'react'
import Nav from './Nav'
import { EmojiSadIcon } from '@heroicons/react/outline'

function ErrorPage(props) {
    return(
        <div className="bg-gray-50">
            <Nav />
            <div className="container -mt-14 mx-auto px-4">
                <div className="flex h-screen justify-center items-center">
                    <div className="w-2/5 text-center bg-gray-700 rounded-xl">
                        <EmojiSadIcon className="w-24 text-indigo-500 mx-auto pt-24" />
                        <h3 className="font-extrabold text-3xl text-white pt-10 pb-10">Error 404</h3>
                        <p className="text-white px-8 pb-24">{props.errorMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage