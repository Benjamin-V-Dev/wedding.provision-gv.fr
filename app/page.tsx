import { DrawCircleText } from '@/Components/Title';
import { VideoPlayer } from '@/Components/VideoPlayer';

export default function Home() {
    return (
        <main>
            {/* <h1 className='text-4xl lg:text-6xl font-bold text-center my-[5%] font-(family-name:--font-dm-serif-text) leading-[1.]'>
                VALLON Guillaume <br></br> Vidéographer
            </h1> */}
            <DrawCircleText />
            <section>
                <h2 className='font-roboto text-2xl font-bold mb-[2.5%] border-b-2 w-fit border-yellow-400'>
                    Judith & Guillaume
                </h2>
                <VideoPlayer
                    videoSrc='https://github.com/Benjamin-V-Dev/wedding.provision-gv.fr/releases/download/media-v1/Guillaume.Judith.mp4'
                    previewImage='/Vignette-video-1.webp'
                    title='Vidéo n°1 - Judith & Guillaume'
                />
            </section>
            <section>
                <h2 className='font-roboto text-2xl font-bold mb-[2.5%] border-b-2 w-fit border-yellow-400'>
                    Kildine & Jeremie
                </h2>
                <VideoPlayer
                    videoSrc='/https://github.com/Benjamin-V-Dev/wedding.provision-gv.fr/releases/download/media-v1/Kildine.Jeremie.mp4'
                    previewImage='/Vignette-video-2.webp'
                    title='Vidéo n°1 - Kildine & Jeremie'
                />
            </section>
            <section>
                <h2 className='font-roboto text-2xl font-bold mb-[2.5%] border-b-2 w-fit border-yellow-400'>
                    Sarah & Stépahe
                </h2>
                <VideoPlayer
                    videoSrc='/https://github.com/Benjamin-V-Dev/wedding.provision-gv.fr/releases/download/media-v1/Stepahe.Sarah.mp4'
                    previewImage='/Vignette-video-3.webp'
                    title='Vidéo n°1 - Sarah & Stépahe'
                />
            </section>
        </main>
    );
}
