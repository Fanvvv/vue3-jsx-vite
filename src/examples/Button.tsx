import {
  defineComponent,
  PropType
} from "vue"

import classes from "./button.module.scss"

export const BasicButton = () => {
  return <Button text={"Hello button!!"} />
}

export const Slots = () => {
  return (
    <Panel header={<span>Title</span>}>
      <span>Hello Content</span>
    </Panel>
  )
}

const Panel = defineComponent({
  props: {
    header: Object as PropType<JSX.Element>,
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div>
          <header>{props.header}</header>
          {slots.default!()}
        </div>
      )
    }
  },
})

const Button = defineComponent({
  props: {
    text: {
      type: String,
    },
  },
  setup({ text }) {
    // CSS Module
    return () => (
      <button
        class={classes.btn}
        style={{
          backgroundColor: "red",
        }}
      >
        {text}
      </button>
    )
  },
})
