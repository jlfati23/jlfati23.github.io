# 用Intellij/Maven查看测试覆盖率和测试报告

**目录**

[概览](notion://www.notion.so/Intellij-Maven-9ee41d580c2e4553873dd4d7fa67bcf0#%E6%A6%82%E8%A7%88)

[Intellij](notion://www.notion.so/Intellij-Maven-9ee41d580c2e4553873dd4d7fa67bcf0#Intellij)

[Maven](notion://www.notion.so/Intellij-Maven-9ee41d580c2e4553873dd4d7fa67bcf0#Maven)

[配置](notion://www.notion.so/Intellij-Maven-9ee41d580c2e4553873dd4d7fa67bcf0#%E9%85%8D%E7%BD%AE)

[查看测试报告](notion://www.notion.so/Intellij-Maven-9ee41d580c2e4553873dd4d7fa67bcf0#%E6%9F%A5%E7%9C%8B%E6%B5%8B%E8%AF%95%E6%8A%A5%E5%91%8A)

[用maven插件](notion://www.notion.so/Intellij-Maven-9ee41d580c2e4553873dd4d7fa67bcf0#%E7%94%A8maven%E6%8F%92%E4%BB%B6)

[用Jacoco (Java Code Coverage)](notion://www.notion.so/Intellij-Maven-9ee41d580c2e4553873dd4d7fa67bcf0#%E7%94%A8Jacoco%20(Java%20Code%20Coverage))

[Note](notion://www.notion.so/Intellij-Maven-9ee41d580c2e4553873dd4d7fa67bcf0#%C2%A0Note)

---

# 概览

Intellij自带查看测试覆盖率和测试报告的工具，也可以用maven插件，集成jacoco。

# Intellij

用  run 'test' with coverage

![https://img-blog.csdnimg.cn/21c484091c3447b294e76ce76b64a9b4.png](https://img-blog.csdnimg.cn/21c484091c3447b294e76ce76b64a9b4.png)

[data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

编辑之后会有一个coverage侧边栏，点击可生成测试覆盖率文件

![https://img-blog.csdnimg.cn/ac8019cacf744881a24a642c3e410863.png](https://img-blog.csdnimg.cn/ac8019cacf744881a24a642c3e410863.png)

[data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

编辑

在测试结果栏点击可导出测试报告，具体参考链接[Testing | IntelliJ IDEA Documentation](https://www.jetbrains.com/help/idea/tests-in-ide.html)

# 编辑

![https://img-blog.csdnimg.cn/b81b4e5f737f4ab7b19b2e64d7407e09.png](https://img-blog.csdnimg.cn/b81b4e5f737f4ab7b19b2e64d7407e09.png)

[data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

# Maven

## 配置

maven不会自动去发现JUnit5测试，在没有任何配置执行mvn clean test的时候Tests run的数量为0

将maven surefire plugin 配置到pom文件中，加上version信息，此时执行mvn clean test命令可以发现JUnit5测试文件。

```
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>3.0.0-M5</version>
</plugin>
```

[data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

## 查看测试报告

### 用maven插件

此时执行mvn clean test之后可以在target/site目录下发现测试报告，但是是未经过渲染的。

```
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-report-plugin</artifactId>
    <version>3.0.0-M5</version>
    <executions>
        <execution>
            <phase>test</phase>
            <goals>
                <goal>report</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

[data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

再次执行mvn site -DgenerateReports=false可以**渲染**测试报告，false表示不覆盖执行mvn clean test命令生成的测试报告。

但是当有测试失败时，mvn插件不会生成测试报告，此时需要配置，表示有错误测试时仍然生成测试报告。

```
     <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.0.0-M5</version>

                <configuration>
                    <testFailureIgnore>true</testFailureIgnore>
                </configuration>

            </plugin>
```

[data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

### 用Jacoco (Java Code Coverage)

配置

```
      <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <version>0.8.7</version>

                <executions>
                    <execution>
                        <id>jacoco-prepare</id>
                        <goals>
                            <goal>prepare-agent</goal>
                        </goals>
                    </execution>

                    <execution>
                        <id>jacoco-report</id>
                        <phase>test</phase>
                        <goals>
                            <goal>report</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
```

[data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

执行mvn clean test后可在target/site/jacoco目录下发现测试报告。

### Note

mvn的测试报告默认使用测试名，在某些场景下需要用DisplayName来展示测试结果，同样需要配置，具体链接[Maven Surefire Plugin – Using JUnit 5 Platform](https://maven.apache.org/surefire/maven-surefire-plugin/examples/junit-platform.html#surefire-extensions-and-reports-configuration-for-displayname)

```
 <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.0.0-M5</version>

                <configuration>

                    <statelessTestsetReporter implementation="org.apache.maven.plugin.surefire.extensions.junit5.JUnit5Xml30StatelessReporter">
                        <usePhrasedTestCaseMethodName>true</usePhrasedTestCaseMethodName>
                    </statelessTestsetReporter>
                </configuration>

            </plugin>
```

[data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)