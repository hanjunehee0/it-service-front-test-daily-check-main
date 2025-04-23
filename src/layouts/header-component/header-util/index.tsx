import { useEffect, useState } from 'react'

import FullscreenIcon from '@mui/icons-material/Fullscreen'

export const HeaderUtil = () => {
    const [isFullScreen, setFullScreen] = useState(Boolean(document.fullscreenElement))
    const onToggleFullScreen = () => {
        setFullScreen((isFullScreen) => !isFullScreen)

        if (document.fullscreenElement) {
            return document.exitFullscreen()
        } else {
            return document.documentElement.requestFullscreen()
        }
    }
    useEffect(() => {
        const handleFullScreen = () => {
            setFullScreen(Boolean(document.fullscreenElement))
        }
        document.addEventListener('fullscreenchange', handleFullScreen)
        return () => {
            document.removeEventListener('fullscreenchange', handleFullScreen)
        }
    }, [])
    return (
        <button type="button" className="w-[30px] h-[30px] font-bold" onClick={onToggleFullScreen}>
            <FullscreenIcon
                sx={{
                    color: '#636363',
                    fontSize: '16px',
                }}
            />
            <span className="sr-only">{isFullScreen ? 'offFull' : 'onFull'}</span>
        </button>
    )
}
