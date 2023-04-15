import React, {useState, useEffect} from 'react';
import arrowLeft from './img/arrow-left.svg'
import arrowRight from './img/arrow-right.svg'
import { Professions } from './data';

function App() {

    const [offset, setOffset] = useState<number>(0) // величина смещения карточек
    const [screenWidth, setScreenWidth] = useState<number>(document.documentElement.clientWidth)
    const [opacityLeftTop, setOpacityLeftTop] = useState<number>(0) // видимость стрелки для перемещения карточек влево (вверх для мобильных)
    const [opacityRightBottom, setOpacityRightBottom] = useState<number>(100) // видимость стрелки для перемещения карточек вправо (вниз для мобильных)

    // величина смещения карточек в зависимости от ширины экрана
    const elementWidth: number = (screenWidth < 768) ? 210 : 300

    // обнуление состояний при изменении ширины экрана для корректной работы слайдера
    useEffect(() => {
        const setWindowDimensions  = () => setScreenWidth(document.documentElement.clientWidth)
        window.addEventListener('resize', setWindowDimensions)
        return(() => {
            window.removeEventListener('resize', setWindowDimensions)
            setOffset(0)
            setOpacityLeftTop(0)
            setOpacityRightBottom(100)
        })
    },[screenWidth])

    // реализация автопрокрутки карточек с интервалом в 3 сек.

    useEffect (() => {

        const interval = setInterval (() => {
            if (offset !== (-elementWidth * (Professions.length - 2))) {
                const newOffset: number = offset - elementWidth
                if (newOffset === (-elementWidth * (Professions.length - 2))) {
                    setOffset(newOffset)
                    setOpacityRightBottom(0)
                    setOpacityLeftTop(100)
                }
                setOffset(newOffset)
                setOpacityLeftTop(100)
            } else {
                setOffset(0)
                setOpacityLeftTop(0)
                setOpacityRightBottom(100)
            }   
        }, 3000)

        return () => clearInterval(interval)

    },[offset, elementWidth])

    //  функция для кнопок влево (вверх) и вправо (вниз)

    const handleClick = (e:React.MouseEvent) => {

        if (e.currentTarget.getAttribute('value') === 'left') {
            if (offset !== 0) {
                const newOffset: number = offset + elementWidth
                if (newOffset === 0) {
                    setOffset(newOffset)
                    setOpacityLeftTop(0)
                    setOpacityRightBottom(100)
                }

                setOffset(newOffset)
                setOpacityRightBottom(100)
            }   
        }

        if (e.currentTarget.getAttribute('value') === 'right') {
            if (offset !== (-elementWidth * (Professions.length - 2))){
                const newOffset: number = offset - elementWidth
                if (newOffset === (-elementWidth * (Professions.length - 2))){

                    setOpacityRightBottom(0)
                    setOffset(newOffset)
                    setOpacityLeftTop(100)
                }

                setOffset(newOffset)
                setOpacityLeftTop(100)
            }
        }
    }

    //  верстка слайдера

    const slider = (
        <div className='flex justify-center flex-col md:flex-row items-center'>
            <button className='w-[35px] hover:scale-[1.4] transition justify-self-center' style={{opacity: opacityLeftTop}}
                onClick={handleClick} value='left'><img src={arrowLeft} alt="left" className='rotate-90 md:rotate-0' /></button>
            <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-start w-[280px] md:w-[600px] overflow-hidden h-[420px] md:h-[210px]'>
                {Professions.map( task => (
                    <div key={task.id} className='m-[10px] min-w-[280px] h-[190px] flex flex-col items-center border-2 box-border transition-transform duration-[1000ms]' 
                        style={(screenWidth < 768) ? {transform: `translateY(${offset}px)`} : {transform: `translateX(${offset}px)`}}
                    >
                        <img src={task.icon} alt="" className=''/>
                        <p className='text-lg mt-3'>{task.name}</p>
                    </div>
                ))}
            </div>
            <button className='w-[35px] hover:scale-[1.4] transition self-center' style={{opacity: opacityRightBottom}}
                onClick={handleClick} value='right'>
                <img src={arrowRight} alt="right" className='rotate-90 md:rotate-0'/>
            </button>
        </div>
    )

  return (
    <div className="mx-auto flex flex-col items-center">
      <h1 className='text-3xl my-4'>Доступные профессии</h1>
      {slider}
    </div>
  );
}

export default App;
