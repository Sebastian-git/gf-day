import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Box, IconButton, Fade } from '@mui/material';
import { VolumeUp, VolumeOff } from '@mui/icons-material';

const AudioPlayer = forwardRef((props, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(process.env.PUBLIC_URL + '/music/You and Me - Lifehouse (Lyrics).mp3'));

    useImperativeHandle(ref, () => ({
        play: () => {
            if (!isPlaying) {
                audioRef.current.play();
                audioRef.current.loop = true;
                audioRef.current.volume = 0.2;
                setIsPlaying(true);
            }
        }
    }));

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            audioRef.current.loop = true;
            audioRef.current.volume = 0.2;
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <Fade in>
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    zIndex: 9999,
                    background: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '50%',
                    padding: 1.5,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.1)',
                    },
                }}
            >
                <IconButton
                    onClick={togglePlay}
                    sx={{
                        color: 'white',
                        fontSize: '2rem',
                        padding: 1,
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        },
                    }}
                >
                    {isPlaying ? <VolumeUp /> : <VolumeOff />}
                </IconButton>
            </Box>
        </Fade>
    )
});

export default AudioPlayer;
