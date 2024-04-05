import React from 'react'
import { motion } from 'framer-motion'
import UserIconAnimatedTooltip from '../basicComponents/UserIconAnimatedTooltip'
import basicUtils from '../../utils/basicUtils'
import GitHubIcon from '@mui/icons-material/GitHub';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ChatIcon from '@mui/icons-material/Chat';
import IconButtonMui from '../basicComponents/Button/IconButtonMui';

const ProjectModal = ({selected, setSelected}) => {
    
    if(selected === null){
        return <></>
    }
  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl mx-auto my-8 px-8 cursor-default"
      >
        <motion.div layoutId={`card-${selected._id}`}>
          <img src={selected.project_icon} alt={selected.repo_name}/>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="bg-white p-4 flex flex-col"
        >
          <h3 className="text-2xl font-bold mb-2">{basicUtils.formatGithubRepoName(selected.repo_name)}</h3>
          <div className='flex flex-row flex-wrap'>

          {selected.languages.map((tag) => {
            return (
              <div
              className="badge bg-base-300 border-none text-zinc-600 mr-1 mb-1"
              key={tag}
              >
                {tag}
              </div>
            );
          })}
          </div>
          <p className="my-4">{selected.description}</p>
          <div className='mt-1 gap-2 flex flex-wrap flex-row'>
            <IconButtonMui icon={<GitHubIcon/>} text={'Github'}/>
            <IconButtonMui icon={<StarOutlineIcon/>} text={'Star'}/>
            <IconButtonMui icon={<ChatIcon/>} text={'Chat'}/>
          </div>
          {/* <button className="btn btn-primary btn-block">Download</button> */}
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectModal
