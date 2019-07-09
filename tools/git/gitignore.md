****前提：****假如你项目中有对应的打包或者依赖文件，但每次代码提交时都不需要提交这部分代码，则需要配置gitignore文件
如果配置好了对应的过滤条件，下次想要提交时，则需要打开对应的限制条件，要么就提交不了对应的文件
~~~
$ git add node_modules
The following paths are ignored by one of your .gitignore files:
node_modules
Use -f if you really want to add them. //如果你确实想要添加此文件，则可使用-f强制添加
~~~

#### 常用过滤配置

- 空行不匹配任何文件，因此它可以作为可读性的分隔符。
- 以＃开头的行作为注释。对于以哈希开头的模式，在第一个哈希值前加一个反斜杠（"\"）。
- 除非使用反斜杠（“ `\`”）引用尾随空格，否则将忽略尾随空格。
- 前缀为`!`时表示不过滤该文件。如果排除了文件的父目录，则不可能重新包含该文件。由于性能原因，Git没有列出排除的目录，因此无论在何处定义，所包含文件的任何模式都不起作用。对于以`!`文字开头的，在第一个`!`前面加一个反斜杠`\`。例如“ `\!important!.txt`”。
- 如果以斜杠结尾，则处于以下描述的目的将其删除，但他只会找到与目录匹配的内容。换句话说，`foo/`将匹配目录foo及其下面的路径，但不匹配常规文件或符号链接`foo`（这与在Git中一般使用pathspec的方式一致）。  斜杠结尾只会匹配对应的文件夹及文件夹下文件，不会匹配和文件夹重名的其他文件
- 如果模式不包含斜杠*/*，Git会将其视为shell glob模式，并检查相对于`.gitignore`文件位置的路径名的匹配（相对于工作树的顶层，如果不是来自 `.gitignore`文件）。
- 否则，Git将模式视为shell glob：“ `*`”匹配除“ `/`” 之外的任何内容，“ `?`”匹配除“ `/`” 之外的任何一个字符，并且“ `[]`”匹配所选范围中的一个字符。有关更详细的说明，请参阅fnmatch（3）和FNM_PATHNAME标志。
- 前导斜杠与路径名的开头匹配。例如, "/*.c" matches "cat-file.c" but not "mozilla-sha1/sha1.c".与完整路径名匹配的模式中的两个连续星号（“**”）可能具有特殊含义：
- `**`前面带有斜杠表示所有目录中的匹配。例如，“ `**/foo`”将文件或目录“ ”匹配`foo`在任何地方，与模式“ `foo`” 相同。“ `**/foo/bar`”匹配文件或目录“ `bar`”直接位于目录“ `foo`” 下的任何位置。
- 尾随“ `/**`”匹配内部的一切。例如，“ `abc/**`”匹配目录“ `abc`” 内的所有文件，相对于`.gitignore`文件的位置，具有无限深度。
- 斜杠后跟两个连续的星号，然后斜杠匹配零个或多个目录。例如，“ `a/**/b`”匹配“ `a/b`”，“ `a/x/b`”，“ `a/x/y/b`”等。
- 其他连续的星号被认为是常规星号，并且将根据先前的规则匹配。

#### 常见配置

mtk/   过滤对应的文件夹，路径中含有mtk就被忽略

/mtk/do.c   表示指定过滤某个文件下具体文件，和gitignore同级

*.mdb  文件名是mdb的所有文件被忽略

.mdb  文件名是mdb的一个文件被忽略

 *.[oa]    支持通配符：过滤repo中所有以.o或者.a为扩展名的文件

##### 对应参考文档

[ignoring-files](https://help.github.com/en/articles/ignoring-files/<https://help.github.com/cn/articles/ignoring-files)

[gitignore.io](https://www.gitignore.io/)

[docs/gitignore](https://git-scm.com/docs/gitignore)

