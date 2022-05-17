---
title: 鼠标拖拽建立选区，选中元素
theme: default
tag: Vuejs
time: 2021.7.14
---

近段时间做一个编辑器，就需要一个鼠标拖拽选区的功能，方便批量选中元素，进行相应操作，所有就有了这篇文章。

### 效果展示

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24bade2b81104b6e8b2e874445214281~tplv-k3u1fbpfcp-watermark.image)
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/af27fb546f2941ea8ebe7e12f656818b~tplv-k3u1fbpfcp-watermark.image)

### 建立选区组件

1、要想选中元素，肯定要先建立选区

- 根据两个坐标点确定选区位置，并绘制出选区
- 根据两个坐标删除选区的宽与高

```js
const size = computed(() => {
  const width =
    props.endPoint.x === 0
      ? 0
      : Math.abs(props.startPoint.x - props.endPoint.x);
  const height =
    props.endPoint.y === 0
      ? 0
      : Math.abs(props.startPoint.y - props.endPoint.y);
  return {
    width,
    height,
  };
});
```

- 确定起始坐标点
  - 不管从何处点击都需要找到两个坐标点所绘制的矩形的左上角的坐标点。
  - 左上角的坐标点，很明显是所有坐标的最小值，也就是 X,Y 取最小的值的点（如下）
  - 还需要考虑终点还没有产生时的情况，也就是排除终点为初始值也就是 0 的情况

```js
const Point = computed(() => {
  const x =
    props.endPoint.x === 0
      ? props.startPoint.x
      : Math.min(props.startPoint.x, props.endPoint.x);
  const y =
    props.endPoint.y === 0
      ? props.startPoint.y
      : Math.min(props.startPoint.y, props.endPoint.y);
  return {
    x,
    y,
  };
});
```

- 这样就可绘制出一个选区

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/23bbd40e8ac84f689ca434e0df18fac9~tplv-k3u1fbpfcp-watermark.image)

2、根据选区，筛选出选中的元素

- 筛选选区的元素主要是根据 nodeType 选中出编辑区所有可选择的元素节点。
- 怎么才算可选元素，这就得看自己需要，我在元素节点上标注了 canChecked，通过这个属性排除非可选元素

```js
/*
 * 获取该元素下可以被选中的元素集合
 * @param parentElement 父元素
 * @param keyCode 可选元素标识
 * @returns
 */
function getChildrens(parentElement: HTMLElement, keyCode: string) {
  const ary = [];
  const childs = parentElement.childNodes;
  for (let i = 0; i < childs.length; i++) {
    if (childs[i].nodeType === 1) {
      if ((childs[i] as HTMLElement).getAttribute(keyCode) !== null) {
        ary.push(childs[i]);
      }
    }
  }
  return ary as Array<HTMLElement>;
}
```

3、判断节点是否在选区内

- 这个主要根据 getBoundingClientRect 方法返回的信息

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62e7e3fc2e13479f980cebf410316f9e~tplv-k3u1fbpfcp-watermark.image)

- 当选区的 top 与 left 小于判断元素，bottom 与大于判断元素，即认为该元素在选区内。

```js
/**
 * 判断元素是否在选区内
 * @param selectBoxElement 选区元素
 * @param canCheckedElements  可选中元素列表
 */
function judgeContainElement(
  selectBoxElement: HTMLElement,
  canCheckedElements: Array<HTMLElement>
) {
  const ContainElement: Array<HTMLElement> = [];
  const { left, right, bottom, top } = selectBoxElement.getBoundingClientRect();
  canCheckedElements.forEach((item) => {
    const child = item.getBoundingClientRect();
    if (
      child.left > left &&
      child.top > top &&
      child.bottom < bottom &&
      child.right < right
    ) {
      ContainElement.push(item);
    }
  });
  return ContainElement;
}
```

4、至此我们已经可以获得到选区内选中元素了，然后就可对选中元素做需要的操作了，也就是如效果图所示/

### 完整代码附上

1、组件基础结构文件

```vue
<template>
  <div
    id="select-area"
    class="select-area"
    :style="[
      { width: size.width + 'px' },
      { height: size.height + 'px' },
      { top: Point.y + 'px' },
      { left: Point.x + 'px' },
    ]"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import type { PropType } from 'vue';
interface Point {
  x: number;
  y: number;
}
export default defineComponent({
  name: 'SelectArea',
  props: {
    startPoint: {
      type: Object as PropType<Point>,
      required: true,
    },
    endPoint: {
      type: Object as PropType<Point>,
      required: true,
    },
  },
  setup(props) {
    const Point = computed(() => {
      const x =
        props.endPoint.x === 0
          ? props.startPoint.x
          : Math.min(props.startPoint.x, props.endPoint.x);
      const y =
        props.endPoint.y === 0
          ? props.startPoint.y
          : Math.min(props.startPoint.y, props.endPoint.y);
      return {
        x,
        y,
      };
    });
    const size = computed(() => {
      const width =
        props.endPoint.x === 0
          ? 0
          : Math.abs(props.startPoint.x - props.endPoint.x);
      const height =
        props.endPoint.y === 0
          ? 0
          : Math.abs(props.startPoint.y - props.endPoint.y);
      return {
        width,
        height,
      };
    });
    return {
      Point,
      size,
    };
  },
});
</script>
<style lang="less" scoped>
.select-area {
  position: fixed;
  background-color: rgba(255, 192, 203, 0.1);
  border: 1px solid red;
  z-index: 9;
}
</style>
```

2、导出组件文件

```js
import { createVNode, render } from 'vue';
import SelectAreaConstructor from './SelectArea.vue';
let instence: HTMLElement | undefined;
let instenceIsExit = false;
const SelectArea = function(options: any) {
  if (instenceIsExit) {
    document.body.removeChild(instence as HTMLElement);
    instenceIsExit = false;
  }
  const vm = createVNode(SelectAreaConstructor, options);
  const container = document.createElement('div');
  render(vm, container);
  instence = container.firstElementChild as HTMLElement;
  document.body.appendChild(instence);
  instenceIsExit = true;
  return instence;
};

const close = () => {
  if (instenceIsExit) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    instenceIsExit = false;
    document.body.removeChild(instence as HTMLElement);
    instence = undefined;
  }
};
export { SelectArea, close };

```

3、应用文件 setup 部分

```js
 setup() {
    let selectProps = reactive({
      startPoint: {
        x: 0,
        y: 0,
      },
      endPoint: {
        x: 0,
        y: 0,
      },
    });
    let mouseKey = ref(false); // 是否监听鼠标移动（移出编辑区范围，不再监听鼠标移动事件）
    let mouseComplete = ref(false); // 鼠标移动事件是否完成（鼠标按下到抬起的流程）
    const headleMouseDown = (e: MouseEvent) => {
      close();
      selectProps.startPoint.x = e.clientX;
      selectProps.startPoint.y = e.clientY;
      SelectArea(selectProps);
      mouseKey.value = true;
      mouseComplete.value = false;
    };
    const headleMouseMove = (e: MouseEvent) => {
      if (mouseKey.value && !mouseComplete.value) {
        selectProps.endPoint.x = e.clientX;
        selectProps.endPoint.y = e.clientY;
        const div = document.querySelector('#select-area');
        const parent = document.querySelector('.edit-area');
        const containDiv = selectElement(
          parent as HTMLElement,
          div as HTMLElement,
          'canChecked'
        );
        containDiv.canCheckedElements.forEach((item) => {
          item.style.border = 'none';
        });
        containDiv.containElements.forEach((item) => {
          item.style.border = '1px solid red';
          item.style.cursor = 'move';
        });
      }
    };
    const headleDrag = (e: MouseEvent) => {
      // 防止与拖动事件冲突
      e.preventDefault();
    };
    const headleMouseUp = () => {
      mouseKey.value = false;
      mouseComplete.value = true;
      selectProps.startPoint.x = 0;
      selectProps.startPoint.y = 0;
      selectProps.endPoint.x = 0;
      selectProps.endPoint.y = 0;
      close();
    };
    window.addEventListener('mousedown', headleMouseDown);
    window.addEventListener('mousemove', headleMouseMove);
    window.addEventListener('mouseup', headleMouseUp);
    onUnmounted(() => {
      window.removeEventListener('mousedown', headleMouseDown);
      window.removeEventListener('mousemove', headleMouseMove);
      window.removeEventListener('mouseup', headleMouseUp);
    });
    const saveWeekly = () => {
      console.log('click');
    };
    return {
      headleMouseDown,
      headleMouseMove,
      headleMouseUp,
      headleDrag,
      saveWeekly,
    };
  },
```

4、辅助工具函数文件

```js
/**
 * 获取该元素下可以被选中的元素集合
 * @param parentElement 父元素
 * @param selectBoxElement 选择框元素
 * @param keyCode 可选元素标识
 * @returns
 */
function selectElement(
  parentElement: HTMLElement,
  selectBoxElement: HTMLElement,
  keyCode: string
) {
  const canCheckedElements = getChildrens(parentElement, keyCode);
  const containElements = judgeContainElement(
    selectBoxElement,
    canCheckedElements
  );
  return {
    containElements,
    canCheckedElements,
  };
}
export { selectElement };

/**
 *
 * 获取该元素下可以被选中的元素集合
 * @param parentElement 父元素
 * @param keyCode 可选元素标识
 * @returns
 */
function getChildrens(parentElement: HTMLElement, keyCode: string) {
  const ary = [];
  const childs = parentElement.childNodes;
  for (let i = 0; i < childs.length; i++) {
    if (childs[i].nodeType === 1) {
      if ((childs[i] as HTMLElement).getAttribute(keyCode) !== null) {
        ary.push(childs[i]);
      }
    }
  }
  return ary as Array<HTMLElement>;
}
function judgeContainElement(
  selectBoxElement: HTMLElement,
  canCheckedElements: Array<HTMLElement>
) {
  const ContainElement: Array<HTMLElement> = [];
  const { left, right, bottom, top } = selectBoxElement.getBoundingClientRect();
  canCheckedElements.forEach((item) => {
    const child = item.getBoundingClientRect();
    if (
      child.left > left &&
      child.top > top &&
      child.bottom < bottom &&
      child.right < right
    ) {
      ContainElement.push(item);
    }
  });
  return ContainElement;
}

```
