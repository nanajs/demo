### document.

#### readyState描述了文档的加载状态

值：

- loading正在加载
- interactive 文档已被解析，"**正在加载**"状态结束，但是诸如图像，样式表和框架之类的子资源仍在加载
- complete 文档和所有子资源已完成加载。表示 `load` 状态的事件即将被触发

对应事件onreadystatechange，状态改变时发生

