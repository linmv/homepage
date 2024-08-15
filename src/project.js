import P1Demo from "./project1_demo.mp4"
import P2Demo from "./project2_demo.mp4"
import React from "react"
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"
import {useEffect} from 'react'
import {useAnimation} from 'framer-motion'

const projectData = [
    {
        title: 'Intelligent Library Seat Management Platform',
        description: 'Seat Occupancy Detection with Image Recognition',
        media: P1Demo,
        mediaType: 'video/mp4',
    },
    {
        title: 'Cultural Programmes Data Extraction and Optimization System',
        description: 'Data Crawler and Visualizer with searching and personalization',
        media: './images/p3.png',
        mediaType: 'image/png',
    },
    {
        title: 'Find Tutor',
        description: 'Platform for private tutoring matching between tutors and students',
        media: P2Demo,
        mediaType: 'video/mp4',
    },
];

function ProjectItem({title, description, media, mediaType}) {
    const [ref, inView] = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({x: 0});
        } else {
            controls.start({x: -200});
        }
    }, [controls, inView]);

    return (
        <motion.div className="rowStyle" ref={ref} initial={{x: -200}} animate={controls}>
            <div className={'mediaContainerWidth'}>
                {mediaType.startsWith('video') ? (
                    <video width="100%" height="auto" controls preload="true" muted autoPlay={false}>
                        <source src={media} type={mediaType}/>
                    </video>
                ) : (
                    <img style={{height: 'auto', maxWidth: '100%'}} src={media} alt=""/>
                )}
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </motion.div>
    );
}

function Project() {
    return (
        <div className="container-fluid">
            <div className="colStyle">
                <h3 style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}> Projects </h3>
                {projectData.map((project, index) => (
                    <div key={index}>
                        <ProjectItem {...project} />
                        <br/>
                    </div>
                ))}
            </div>
        </div>
    );
}

// /* 1st, 3rd row slide from L to R, 2nd row slide from R to L */
// function Project() {
//     const [ref1, inView1] = useInView();
//     const [ref2, inView2] = useInView();
//     const [ref3, inView3] = useInView();
//
//     const controls1 = useAnimation();
//     const controls2 = useAnimation();
//     const controls3 = useAnimation();
//
//     useEffect(() => {
//         if (inView1) {
//             controls1.start({ x: 0 });
//         } else {
//             controls1.start({ x: -1000 });
//         }
//     }, [controls1, inView1]);
//
//     useEffect(() => {
//         if (inView2) {
//             controls2.start({ x: 0 });
//         } else {
//             controls2.start({ x: 1000 });
//         }
//     }, [controls2, inView2]);
//
//     useEffect(() => {
//         if (inView3) {
//             controls3.start({ x: 0 });
//         } else {
//             controls3.start({ x: -1000 });
//         }
//     }, [controls3, inView3]);
//
//     return (
//         <div className="container-fluid">
//             {/* 3 projects displayed with a paper plane flying*/}
//             <div className="colStyle">
//                 <h3 style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}> Projects </h3>
//                 <motion.div className="rowStyle" ref={ref1} initial={{ x: -1000 }} animate={controls1}>
//                     <div className={"mediaContainerWidth"}>
//                         <video width="100%" height="auto" id="project1_demo" controls preload="true" muted
//                                autoPlay={false}>
//                             <source src={P1Demo} type="video/mp4"/>
//                         </video>
//                     </div>
//                     <div>
//                         <h3>Real time library seat availability system</h3>
//                         <p>Seat Occupancy Detection with Image Recognition</p>
//                     </div>
//                 </motion.div>
//                 <br></br>
//                 <motion.div className="rowStyle" ref={ref2} initial={{ x: 1000 }} animate={controls2}>
//                     <div>
//                         <h3>LCSD Cultural Programmes</h3>
//                         <p>Data Crawler and Visualizer with searching and personalization</p>
//                     </div>
//                     <div className={"mediaContainerWidth"}>
//                         <img style={{height: "auto", maxWidth: "100%"}} src={"./images/p3.png"} alt=""/>
//                     </div>
//                 </motion.div>
//                 <br></br>
//                 <motion.div className="rowStyle" ref={ref3} initial={{ x: -1000 }} animate={controls3}>
//                     <div className={"mediaContainerWidth"}>
//                         <video width="100%" height="auto" id="project2_demo" controls preload="true" muted
//                                autoPlay={false}>
//                             <source src={P2Demo} type="video/mp4"/>
//                         </video>
//                     </div>
//                     <div>
//                         <h3>Find Tutor</h3>
//                         <p>This platform for private tutoring matching between tutors and students</p>
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     )
// }

export default Project
