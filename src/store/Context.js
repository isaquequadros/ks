import React from 'react'
import appLogo from '../images/amplichat.png'
import coverImage from '../images/p.png'

// endorsement images
import dreamhub_filled from '../images/dreamhub_filled.png'
import voiceqna_filled from '../images/voiceqna_fill_v2_gradient.png'
import voicemirror_filled from '../images/voice_mirror_v_1024.png'

// section images
import simple from '../images/simple.png'
import sky from '../images/sky.png'
import baloon from '../images/b.png'

export const initialState = {
    // when in dev, change appURL to local url
    // appURL: 'http://localhost:3000',  
    // when in production, change appURL to real url
    appURL: 'https://localhost:3000',

    appLogo: appLogo,
    appName: 'Kadima Solutions',

    coverTitle: 'Stay Connected',
    coverText: 'Stay up to date with the latest news and follow us on the Play Store.',

    coverImage: coverImage,

    endorsementTitle: `Discover our applications`,
    endorsementText: `Lista de compras, Notas, Notes.`,
    endorsementList: [
        {
            title: `Lista de compras`,
            titleColor: `orangeRed`,
            image: dreamhub_filled,
            URL: ``,
        },
        {
            title: `Notas`,
            titleColor: `forestGreen`,
            image: voiceqna_filled,
            URL: ``,
        },
        {
            title: `Notes`,
            titleColor: `blue`,
            image: voicemirror_filled,
            URL: ``,
        },
    ],

    sectionList: [
        {
            'title': `Simple`,
            'text': `Simple and easy to use.`,
            'image': simple,
        },
        {
            'title': `Productivity`,
            'text': `increase your productivity.`,
            'image': sky,
        },
        {
            'title': `Experience`,
            'text': `Unique experience when using our apps.`,
            'image': baloon,
        },
    ],
}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)
