import { RouterLink, RouterView } from "vue-router"
import { MyRouteType } from "./mytypes"

export default (props: {
  routes: MyRouteType[]
}) => {
  return <>
    <header>学习vue3+jsx的写法</header>
    <div className="body">
      <ul className="menu">
        {
          props.routes.map(route => {
            return (
              <li key={ route.key }>
                <RouterLink to={ route.path }>{ route.key }</RouterLink>
              </li>
            )
          })
        }
      </ul>
      <div className="content">
        <RouterView />
      </div>
    </div>
  </>
}
