import Completed from './status/Completed'
import Progress from './status/Progress'
import styles from './PostCard.module.css'
import Delete from './status/Delete'
import Edit from './status/Edit'

function PostCard(props: any) {
  // const value = localStorage.getItem('username')
  return (
    <article className={styles.__article}>
      <div className={styles.art__sec}>
        <div className="text-center">
          <h3 className="font-medium sm:text-lg">
            <a href="#" className="hover:underline">
              {props.title}
            </a>
          </h3>

          <p className="line-clamp-3 text-sm text-gray-700 text-justify">
            {props.description}
          </p>
        </div>
      </div>
      <dl className="ml-7 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">CreatedAt</dt>
          <dd className="text-xs text-gray-500">{props.created}</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">UpdatedAt</dt>
          <dd className="text-xs text-gray-500">{props.lastUpdated}</dd>
        </div>
      </dl>
      <div className="flex justify-end">
        {props.isCompleted ? <Completed /> : <Progress />}
        <Edit />
        <Delete />
      </div>
      <div className="flex justify-end my-1"></div>
    </article>
  )
}

export default PostCard
