
<!-- TOC -->
* [Docker Commands](#docker-commands)
* [Docker run](#docker-run)
  * [docker run的配置命令](#docker-run的配置命令)
    * [1. **指定容器名称**](#1-指定容器名称)
    * [2. **设置环境变量**](#2-设置环境变量)
    * [3. **端口映射**](#3-端口映射)
    * [4. **挂载卷**](#4-挂载卷)
    * [5. **后台运行容器**](#5-后台运行容器)
    * [6. **限制资源使用**](#6-限制资源使用)
    * [7. **自动重启**](#7-自动重启)
    * [8. **连接到网络**](#8-连接到网络)
    * [9. **设置工作目录**](#9-设置工作目录)
    * [10. **只运行一次性命令**](#10-只运行一次性命令)
    * [4. `-detach-keys` 选项](#4--detach-keys-选项)
    * [与 `stdin` 交互的其他方式](#与-stdin-交互的其他方式)
    * [`stdin` 在不同场景中的作用](#stdin-在不同场景中的作用)
  * [docker run 与容器交互举例](#docker-run-与容器交互举例)
    * [**1. 使用 `/bin/sh`**](#1-使用-binsh)
    * [**2. 运行 Python 解释器**](#2-运行-python-解释器)
    * [**3. 运行 Node.js REPL**](#3-运行-nodejs-repl)
    * [**4. 运行 MySQL/MariaDB 客户端**](#4-运行-mysqlmariadb-客户端)
    * [**5. 运行 PostgreSQL 客户端**](#5-运行-postgresql-客户端)
    * [**6. 使用 `top` 查看进程**](#6-使用-top-查看进程)
    * [**7. 运行 Redis CLI**](#7-运行-redis-cli)
    * [**8. 使用 `curl` 进行 HTTP 请求**](#8-使用-curl-进行-http-请求)
    * [**9. 运行自定义脚本或程序**](#9-运行自定义脚本或程序)
    * [**10. 使用 `docker run` 执行单次命令**](#10-使用-docker-run-执行单次命令)
    * [**总结**](#总结)
  * [如何找到可以与容器交互的脚本命令等？](#如何找到可以与容器交互的脚本命令等)
    * [**1. 查看 Docker 镜像文档**](#1-查看-docker-镜像文档)
    * [**2. 启动容器并进入交互式 Shell**](#2-启动容器并进入交互式-shell)
    * [**3. 使用 `docker exec` 进入已运行的容器**](#3-使用-docker-exec-进入已运行的容器)
    * [**4. 查看镜像的 Dockerfile**](#4-查看镜像的-dockerfile)
    * [**5. 使用 `-help` 选项**](#5-使用--help-选项)
    * [**6. 查看镜像的 ENTRYPOINT 或 CMD**](#6-查看镜像的-entrypoint-或-cmd)
    * [**7. 参考社区资源和教程**](#7-参考社区资源和教程)
    * [**8. 尝试通用的命令**](#8-尝试通用的命令)
* [How to create custom image?](#how-to-create-custom-image)
    * [1. **编写 `Dockerfile`**](#1-编写-dockerfile)
    * [`Dockerfile` 示例](#dockerfile-示例)
    * [解释：](#解释)
    * [2. **构建 Docker 镜像**](#2-构建-docker-镜像)
    * [3. **运行 Docker 镜像**](#3-运行-docker-镜像)
    * [4. **推送镜像到 Docker Registry（可选）**](#4-推送镜像到-docker-registry可选)
    * [总结](#总结-1)
* [**Docker network**](#docker-network)
    * [**1. Bridge Network（桥接网络）**](#1-bridge-network桥接网络)
    * [**2. Host Network（主机网络）**](#2-host-network主机网络)
    * [**3. Overlay Network（覆盖网络）**](#3-overlay-network覆盖网络)
    * [**4. None Network（无网络）**](#4-none-network无网络)
    * [**5. Macvlan Network（MAC 虚拟局域网网络）**](#5-macvlan-networkmac-虚拟局域网网络)
    * [**6. IPvlan Network**](#6-ipvlan-network)
    * [**7. Custom Network（自定义网络）**](#7-custom-network自定义网络)
* [Docker 架构](#docker-架构)
    * [1. **Docker Client (Docker 客户端)**](#1-docker-client-docker-客户端)
    * [2. **Docker Daemon (Docker 守护进程)**](#2-docker-daemon-docker-守护进程)
    * [3. **Docker Image (Docker 镜像)**](#3-docker-image-docker-镜像)
    * [4. **Docker Container (Docker 容器)**](#4-docker-container-docker-容器)
    * [5. **Docker Registry (Docker 仓库)**](#5-docker-registry-docker-仓库)
    * [6. **Docker Engine (Docker 引擎)**](#6-docker-engine-docker-引擎)
    * [7. **Docker Networking (Docker 网络)**](#7-docker-networking-docker-网络)
    * [8. **Docker Volumes (Docker 卷)**](#8-docker-volumes-docker-卷)
    * [9. **Docker Compose**](#9-docker-compose)
    * [10. **Docker Swarm**](#10-docker-swarm)
    * [**Docker 架构图示**](#docker-架构图示)
    * [**总结**](#总结-2)
* [Docker的分层结构（layered structure）](#docker的分层结构layered-structure)
    * [1. **镜像的分层构造**](#1-镜像的分层构造)
    * [层的形成：](#层的形成)
    * [2. **层的共享和重用**](#2-层的共享和重用)
    * [好处：](#好处)
    * [3. **写时复制（Copy-on-Write）机制**](#3-写时复制copy-on-write机制)
    * [机制：](#机制)
    * [4. **层的顺序和依赖**](#4-层的顺序和依赖)
    * [5. **缓存机制**](#5-缓存机制)
    * [例子：](#例子)
    * [6. **镜像分发的高效性**](#6-镜像分发的高效性)
    * [**总结**](#总结-3)
* [Q & A](#q--a)
  * [**输出格式化？**](#输出格式化)
  * [**docker --link**](#docker---link)
    * [**基本用法**](#基本用法)
    * [**1. 创建数据库服务容器**](#1-创建数据库服务容器)
    * [**2. 启动应用容器并链接到数据库服务**](#2-启动应用容器并链接到数据库服务)
    * [**详细解释**](#详细解释)
    * [**连接效果**](#连接效果)
    * [**过时与替代方案**](#过时与替代方案)
    * [**使用 Docker 网络的替代方法**](#使用-docker-网络的替代方法)
    * [**总结**](#总结-4)
  * [Image vs Container](#image-vs-container)
    * [1. **Docker Image（Docker 镜像）**](#1-docker-imagedocker-镜像)
    * [2. **Docker Container（Docker 容器）**](#2-docker-containerdocker-容器)
    * [**3. 关系**](#3-关系)
  * [CMD vs ENTRYPOINT](#cmd-vs-entrypoint)
    * [**`CMD` 指令**](#cmd-指令)
    * [**`ENTRYPOINT` 指令**](#entrypoint-指令)
    * [**主要区别**](#主要区别)
    * [**使用场景**](#使用场景)
    * [**示例对比**](#示例对比)
    * [使用 `CMD`](#使用-cmd)
    * [使用 `ENTRYPOINT`](#使用-entrypoint)
    * [**总结**](#总结-5)
  * [Docker的分层机制与代码更改](#docker的分层机制与代码更改)
    * [1. **重新构建镜像**](#1-重新构建镜像)
    * [2. **利用缓存机制**](#2-利用缓存机制)
    * [例子：](#例子-1)
    * [3. **最佳实践：分离构建和代码层**](#3-最佳实践分离构建和代码层)
    * [示例优化：](#示例优化)
    * [4. **重新运行容器**](#4-重新运行容器)
    * [5. **使用 `docker-compose`（可选）**](#5-使用-docker-compose可选)
    * [示例 `docker-compose.yml`:](#示例-docker-composeyml)
    * [**总结**](#总结-6)
  * [Docker Container vs Virtual Machine](#docker-container-vs-virtual-machine)
    * [**1. 架构和技术栈**](#1-架构和技术栈)
      * [**Docker 容器**](#docker-容器)
      * [**虚拟机 (VM)**](#虚拟机-vm)
    * [**2. 性能和资源利用率**](#2-性能和资源利用率)
    * [**3. 隔离性和安全性**](#3-隔离性和安全性)
    * [**4. 使用场景**](#4-使用场景)
    * [**5. 管理工具和生态系统**](#5-管理工具和生态系统)
    * [**6. 联系和互补性**](#6-联系和互补性)
    * [**总结**](#总结-7)
<!-- TOC -->

# Docker Commands

```bash
docker ps 
#list all running containers 
docker stop 
#stop container
docker rm 
#remove container
docker images 
#list all images
docker rmi
#remove image
docker pull
#pull image
docker inspect 
docker network ls
docker network inspect
docker logs

```

# Docker run

## docker run的配置命令

### 1. **指定容器名称**

- **`-name`**: 为容器指定一个名称，便于后续管理（如启动、停止、删除等）。
- **示例**:
    
    ```bash
    docker run --name my_container_name my_image
    
    ```
    

### 2. **设置环境变量**

- **`e`**: 在容器中设置环境变量，传递配置参数或敏感信息。
- **示例**:
    
    ```bash
    docker run -e MY_ENV_VAR=value my_image
    
    ```
    

### 3. **端口映射**

- **`p`**: 将主机的端口映射到容器的端口，允许外部访问容器内的服务。
- **示例**:
这会将主机的 `8080` 端口映射到容器的 `80` 端口。
    
    ```bash
    docker run -p 8080:80 my_image
    
    ```
    

### 4. **挂载卷**

- **`v`**: 将主机的目录或文件挂载到容器中，允许数据在主机和容器之间共享。
- **示例**:
这会将主机上的 `/host/path` 挂载到容器内的 `/container/path`。
    
    ```bash
    docker run -v /host/path:/container/path my_image
    
    ```
    

### 5. **后台运行容器**

- **`d`**: 让容器在后台运行（以分离模式运行），容器启动后会返回容器 ID。
- **示例**:
容器将在后台运行，你可以继续使用终端。
    
    ```bash
    docker run -d my_image
    
    ```
    

### 6. **限制资源使用**

- **`-memory` 或 `m`**: 限制容器可以使用的最大内存。
- **`-cpus`**: 限制容器可以使用的 CPU 数量。
- **示例**:
这会限制容器最多使用 512MB 的内存和 1.5 个 CPU。
    
    ```bash
    docker run -m 512m --cpus="1.5" my_image
    
    ```
    

### 7. **自动重启**

- **`-restart`**: 配置容器在特定情况下自动重启（如失败后）。
- **示例**:
这个选项会让容器在除非手动停止，否则容器总是重启。
    
    ```bash
    docker run --restart unless-stopped my_image
    
    ```
    

### 8. **连接到网络**

- **`-network`**: 将容器连接到指定的网络。
- **示例**:
这会将容器连接到名为 `my_network` 的 Docker 网络。
    
    ```bash
    docker run --network my_network my_image
    
    ```
    

### 9. **设置工作目录**

- **`w`**: 设置容器内的工作目录，即在该目录下执行容器内的命令。
- **示例**:
这会将工作目录设置为 `/app`，并在该目录下执行命令。
    
    ```bash
    docker run -w /app my_image
    
    ```
    

### 10. **只运行一次性命令**

```
- **`--rm`**: 容器在运行命令后自动删除。
- **示例**:
  ```bash
  docker run --rm my_image echo "Hello World"
  ```
  这个命令在执行 `echo "Hello World"` 后自动删除容器。

```

### 11. **指定容器用户**

```
- **`-u`**: 指定容器内运行进程的用户。
- **示例**:
  ```bash
  docker run -u 1000:1000 my_image
  ```
  这会以 UID 1000 和 GID 1000 的用户身份运行容器。

```

### 12. **指定入口点**

```
- **`--entrypoint`**: 覆盖 Docker 镜像的默认入口点（EntryPoint）。
- **示例**:
  ```bash
  docker run --entrypoint /bin/sh my_image
  ```
  这会覆盖默认的入口点，并以 `/bin/sh` 启动容器。

```

### 13. **链接容器**

```
- **`--link`**: 连接一个容器到另一个容器，使它们能够通过名称相互通信（不推荐，建议使用 Docker 网络）。
- **示例**:
  ```bash
  docker run --link some_container:alias my_image
  ```
  这会将当前容器连接到 `some_container`，并通过 `alias` 名称访问。

```

### 14. **附加额外的命令**

```
- **附加命令**: `docker run` 可以指定要在容器内运行的命令或脚本。
- **示例**:
  ```bash
  docker run my_image /bin/bash -c "echo Hello World"
  ```
  这个命令在容器启动后执行 `echo Hello World`。

```

### 15. **查看容器日志**

```
- **`--log-driver`**: 指定容器使用的日志驱动程序。
- **示例**:
  ```bash
  docker run --log-driver syslog my_image
  ```
  这会将容器的日志发送到 syslog。

```

## docker run stdin 容器标准输入

在 Docker 中，`stdin` 是指容器的标准输入（Standard Input）。Docker 容器运行时，可以通过几种方式与容器的 `stdin` 交互。以下是一些常见的与 `stdin` 相关的选项和用法：

### 1. `i` (Interactive) 选项

- 使用 `i` 选项时，Docker 会保持容器的标准输入（`stdin`）打开，即使容器不是附加在终端上的。通常与 `t` 选项结合使用。

### 2. `t` (TTY) 选项

- `t` 选项为容器分配一个伪终端（pseudo-TTY），使得你可以在容器中获得一个终端会话。通常与 `i` 选项结合使用。

### 3. `docker run -it` 命令

- `it` 是 `i` 和 `t` 的结合，常用于需要在容器内交互的场景，例如启动一个带有交互式 shell 的容器。
- **示例**:这个命令会启动一个 Ubuntu 容器，并在启动时进入一个交互式的 Bash shell。在这个过程中，`stdin` 会保持打开，你可以在容器内输入命令并得到实时输出。

```bash
docker run -it ubuntu /bin/bash
```

### 4. `-detach-keys` 选项

- 这个选项允许你在附加到容器的标准输入时，使用特定的键组合来分离（detach）会话。

### 与 `stdin` 交互的其他方式

- **`docker attach`**: 如果你启动了一个容器，并且想要附加到它的 `stdin` 以继续输入，可以使用 `docker attach` 命令。
- **`docker exec -it <container_id> <command>`**: 如果你想在一个已经运行的容器中执行命令并与其 `stdin` 交互，可以使用 `docker exec` 命令。

### `stdin` 在不同场景中的作用

- 在非交互式场景下（如后台运行的容器），通常不需要 `i` 选项。
- 在需要传入数据给容器应用的场景下（例如，通过管道传输输入数据），`stdin` 的保持打开是必要的。

## docker run 与容器交互举例

### **1. 使用 `/bin/sh`**

- **适用场景**: 当目标容器是基于精简的 Linux 发行版（如 Alpine）时，可能没有 `bash`，但有 `sh` 。
    
    ```
     docker run -it alpine /bin/sh
    ```
    
- **解释**: 这个命令启动一个基于 Alpine 的容器，并进入一个交互式的 `sh` shell。

### **2. 运行 Python 解释器**

- **适用场景**: 当使用一个包含 Python 的容器，并希望直接进入 Python 解释器。
    
    ```
     docker run -it python:3 python
    ```
    
- **解释**: 这个命令启动一个包含 Python 3 的容器，并进入交互式 Python 解释器环境。

### **3. 运行 Node.js REPL**

- **适用场景**: 在 Node.js 环境中进行交互式 JavaScript 编程。
    
    ```
     docker run -it node node
    ```
    
- **解释**: 这个命令启动一个 Node.js 容器，并进入 Node.js 的交互式 REPL 环境。

### **4. 运行 MySQL/MariaDB 客户端**

- **适用场景**: 直接在容器中使用 MySQL 客户端连接到数据库。
    
    ```
     docker run -it mysql mysql -u root -p
    ```
    
- **解释**: 这个命令启动一个 MySQL 容器，并进入 MySQL 客户端，可以输入密码并连接到数据库。

### **5. 运行 PostgreSQL 客户端**

- **适用场景**: 连接到 PostgreSQL 数据库并执行 SQL 查询。
    
    ```
     docker run -it postgres psql -U postgres
    ```
    
- **解释**: 这个命令启动一个 PostgreSQL 容器，并进入 PostgreSQL 客户端，连接到默认的 `postgres` 数据库用户。

### **6. 使用 `top` 查看进程**

- **适用场景**: 查看容器内的进程活动。
    
    ```
     docker run -it ubuntu top
    ```
    
- **解释**: 这个命令启动一个 Ubuntu 容器，并使用 `top` 命令实时监控容器内的进程。

### **7. 运行 Redis CLI**

- **适用场景**: 直接在 Redis 容器中使用 Redis CLI 连接到 Redis 实例。
    
    ```
     docker run -it redis redis-cli
    ```
    
- **解释**: 这个命令启动一个 Redis 容器，并进入 Redis 命令行客户端，允许你与 Redis 数据库交互。

### **8. 使用 `curl` 进行 HTTP 请求**

- **适用场景**: 在容器内测试 HTTP 请求。
    
    ```
     docker run --rm curlimages/curl curl http://example.com
    ```
    
- **解释**: 这个命令启动一个包含 `curl` 工具的容器，并执行一次 HTTP 请求，`-rm` 参数表示在执行完毕后自动删除容器。

### **9. 运行自定义脚本或程序**

- **适用场景**: 运行一个已存在于容器内的脚本或程序。
    
    ```
     docker run -it my_custom_image /path/to/my_script.sh
    ```
    
- **解释**: 这个命令启动一个自定义镜像，并执行指定路径的脚本或程序。

### **10. 使用 `docker run` 执行单次命令**

- **适用场景**: 仅执行一次性任务或命令，而不需要保持交互式会话。
    
    ```
     docker run ubuntu echo "Hello, Docker!"
    ```
    
- **解释**: 这个命令启动一个 Ubuntu 容器，并执行 `echo "Hello, Docker!"` 命令，然后退出。

### **总结**

除了 `/bin/bash` 之外，你可以在 `docker run` 命令中指定任何可执行文件、脚本或命令，只要它存在于容器内并且有相应的权限。具体使用哪种命令，取决于容器内的环境和你希望达成的目标。

## 如何找到可以与容器交互的脚本命令等？

### **1. 查看 Docker 镜像文档**

- **官方文档**: 许多流行的 Docker 镜像（例如 PostgreSQL、MySQL、Redis 等）都有官方的 Docker Hub 页面，详细列出了镜像的使用说明、默认包含的命令以及示例。
- **示例**: PostgreSQL 官方镜像在 Docker Hub 上有文档，说明了如何使用 `psql` 命令连接到数据库。
- 你可以通过访问 [PostgreSQL 的 Docker Hub 页面](https://hub.docker.com/_/postgres) 来查看详细文档。

### **2. 启动容器并进入交互式 Shell**

- 你可以启动一个容器并进入交互式 shell，以便手动检查容器内的环境和可用的命令。这是探索容器内部内容的最直接方法。
- **示例**:
    
    ```bash
     docker run -it postgres /bin/bash
    ```
    
    或者
    
    ```bash
     docker run -it postgres /bin/sh
    ```
    
- 进入容器后，你可以使用以下方法来探索可用命令和文件：
    - **查看环境变量**:
        
        ```bash
         env
        ```
        
    - **列出安装的软件包**:
        
        ```bash
         dpkg -l   # 适用于基于 Debian/Ubuntu 的镜像
         rpm -qa   # 适用于基于 CentOS/Fedora 的镜像
         apk list  # 适用于基于 Alpine 的镜像
        ```
        
    - **检查可执行文件**:
        
        ```bash
         ls /usr/bin
         ls /usr/local/bin
        ```
        

### **3. 使用 `docker exec` 进入已运行的容器**

- 如果容器已经在运行，你可以使用 `docker exec` 命令进入容器的 shell，然后进行进一步探索。
- **示例**:
    
    ```
     docker exec -it <container_id> /bin/bash
    ```
    

### **4. 查看镜像的 Dockerfile**

- Docker 镜像通常是由一个 `Dockerfile` 构建的，`Dockerfile` 定义了镜像内包含的所有内容。你可以查看镜像的 `Dockerfile`，了解它如何构建以及安装了哪些软件。
- **获取 Dockerfile**:
    - 在 Docker Hub 或 GitHub 上搜索相应镜像的源代码仓库。
    - 查找或下载 `Dockerfile` 文件并查看其内容。
- **示例**:
    
    ```bash
     FROM postgres:latest
     RUN apt-get update && apt-get install -y some-package
    ```
    
- 通过阅读 `Dockerfile`，你可以了解安装了哪些工具、设置了哪些环境变量，以及默认的入口命令是什么。

### **5. 使用 `-help` 选项**

- 对于已知的命令，可以通过在命令后添加 `-help` 来查看帮助信息，了解该命令的用法和选项。
- **示例**:
    
    ```bash
     psql --help
    ```
    

### **6. 查看镜像的 ENTRYPOINT 或 CMD**

- 某些镜像会使用 `ENTRYPOINT` 或 `CMD` 来指定容器启动时默认执行的命令。你可以查看这些指令来了解容器在启动时执行了什么。
- **查看 ENTRYPOINT 和 CMD**:
    
    ```bash
     docker inspect --format='{{.Config.Entrypoint}}' <image_name>
     docker inspect --format='{{.Config.Cmd}}' <image_name>
    ```
    

### **7. 参考社区资源和教程**

- 如果不确定某个镜像的具体用法，可以参考社区的博客、教程或问答网站（如 Stack Overflow）。这些资源中通常会有一些使用该镜像的实际案例和常见命令的介绍。

### **8. 尝试通用的命令**

- 有些命令是常见的 UNIX/Linux 命令，可能出现在大多数容器中（如 `ls`、`cat`、`grep` 等）。你可以尝试在容器中运行这些命令来查看和管理容器内的文件和数据。

# How to create custom image?

创建自己的 Docker 镜像通常包括以下步骤：编写一个 `Dockerfile`，然后使用 `docker build` 命令构建镜像。以下是一个详细的指南，帮助你创建自己的 Docker 镜像。

### 1. **编写 `Dockerfile`**

`Dockerfile` 是一个包含了构建镜像所需指令的文本文件。每条指令定义了镜像中的一个层。

### `Dockerfile` 示例

以下是一个简单的 `Dockerfile` 示例，构建一个基于 Ubuntu 的镜像，并在其中安装 Nginx 服务器：

```
# 使用官方的 Ubuntu 镜像作为基础镜像
FROM ubuntu:20.04

# 设置维护者信息（可选）
LABEL maintainer="your_email@example.com"

# 更新 apt 包索引并安装 Nginx
RUN apt-get update && apt-get install -y nginx

# 复制本地目录下的文件到容器中的指定位置（可选）
# COPY ./index.html /var/www/html/index.html

# 暴露容器的端口（可选，常用于文档目的）
EXPOSE 80

# 设置启动容器时默认执行的命令
CMD ["nginx", "-g", "daemon off;"]

```

### 解释：

- **`FROM ubuntu:20.04`**: 指定基础镜像，这里使用 Ubuntu 20.04。
- **`LABEL maintainer`**: 设置镜像的维护者信息。
- **`RUN apt-get update && apt-get install -y nginx`**: 更新包管理器并安装 Nginx。
- **`COPY`**: 将主机上的文件复制到容器内。比如将一个本地的 `index.html` 文件复制到容器的 Nginx 根目录中。
- **`EXPOSE 80`**: 指定容器开放的端口，这里开放的是 HTTP 的默认端口 80。
- **`CMD ["nginx", "-g", "daemon off;"]`**: 设置容器启动时默认执行的命令，这里启动 Nginx 并使其在前台运行。

### 2. **构建 Docker 镜像**

在包含 `Dockerfile` 的目录下，使用以下命令来构建 Docker 镜像：

```bash
docker build -t my_nginx_image .

```

- **`t my_nginx_image`**: `t` 选项用于为镜像指定一个标签（名称），这里是 `my_nginx_image`。
- **`.`**: 表示 Dockerfile 所在的当前目录。

构建过程会根据 `Dockerfile` 中的指令逐步生成镜像。完成后，你会在本地镜像列表中看到新创建的镜像。

### 3. **运行 Docker 镜像**

构建完成后，你可以通过以下命令运行刚刚创建的镜像：

```bash
docker run -d -p 8080:80 my_nginx_image

```

- **`d`**: 表示以后台模式运行容器。
- **`p 8080:80`**: 将主机的 8080 端口映射到容器的 80 端口。
- **`my_nginx_image`**: 使用你创建的镜像来启动容器。

运行后，你可以通过访问 `http://localhost:8080` 来查看 Nginx 是否已成功运行。

### 4. **推送镜像到 Docker Registry（可选）**

如果你希望分享镜像或在其他地方使用它，可以将其推送到 Docker Hub 或其他 Docker Registry。

首先，你需要登录 Docker Hub：

```bash
docker login
```

然后将镜像推送到 Docker Hub：

```bash
docker tag my_nginx_image your_dockerhub_username/my_nginx_image
docker push your_dockerhub_username/my_nginx_image
```

这会将镜像推送到 Docker Hub，你可以从任何地方拉取并运行这个镜像。

### 总结

创建 Docker 镜像的核心步骤包括编写 `Dockerfile`、使用 `docker build` 构建镜像、运行镜像以及（可选）将其推送到 Docker Registry。这一过程为你提供了高度自定义的能力，可以根据需求打包任何应用程序及其依赖项。

# **Docker network**

Docker 支持几种不同类型的网络驱动程序（network drivers），每种类型适用于不同的应用场景。理解这些网络类型可以帮助你更好地配置和管理容器之间的通信。以下是 Docker 中主要的网络类型：

### **1. Bridge Network（桥接网络）**

- **默认网络类型**: 当你在 Docker 中启动一个新容器且未指定网络时，它会默认连接到 `bridge` 网络。
- **使用场景**: 常用于单机环境下，多个容器之间的通信。每个容器会被分配一个虚拟网卡，并通过该网卡连接到 Docker 主机的 `bridge` 网络。
- **特点**:
    - 容器之间可以通过 IP 地址或容器名称相互访问。
    - `bridge` 网络只在本地主机上有效，无法跨主机通信。
    - 可以通过 `docker network create` 自定义桥接网络。
- **示例**:
    
    ```
     docker run -d --name my-container --network bridge nginx
    ```
    

### **2. Host Network（主机网络）**

- **使用场景**: 当你需要容器使用主机的网络堆栈，而不是 Docker 提供的隔离网络时，可以使用 `host` 网络。例如需要最大化性能或容器需要与主机的网络服务紧密集成时。
- **特点**:
    - 容器直接使用主机的网络接口，容器内的服务将使用主机的 IP 地址。
    - 没有网络隔离，容器中的端口直接暴露在主机网络上。
    - 适合需要高性能网络的应用，但存在安全风险，因为主机与容器之间没有网络隔离。
- **示例**:
    
    ```
     docker run -d --name my-container --network host nginx
    ```
    

### **3. Overlay Network（覆盖网络）**

- **使用场景**: 适用于 Docker Swarm 或 Kubernetes 集群中的跨主机容器通信。在多个 Docker 主机上创建的容器可以通过 `overlay` 网络进行通信。
- **特点**:
    - 容器可以跨多个 Docker 主机相互通信。
    - 使用了分布式键值存储（如 Etcd、Consul 或 Docker 内置的键值存储）来管理网络配置。
    - 适合多主机部署的容器化应用场景，例如分布式微服务架构。
- **示例**:
    
    ```
     docker network create --driver overlay my-overlay-network
     docker service create --name my-service --network my-overlay-network nginx
    ```
    

### **4. None Network（无网络）**

- **使用场景**: 当你不希望容器连接到任何网络时，可以使用 `none` 网络。适用于完全隔离的容器，通常用于调试或测试环境。
- **特点**:
    - 容器不会自动连接到任何网络。
    - 适用于需要完全隔离的容器实例。
- **示例**:
    
    ```
     docker run -d --name my-container --network none nginx
    ```
    

### **5. Macvlan Network（MAC 虚拟局域网网络）**

- **使用场景**: 当你希望容器拥有一个独立的 MAC 地址，并像物理设备一样出现在网络上时，可以使用 `macvlan` 网络。这种模式下，容器可以直接与物理网络设备进行通信。
- **特点**:
    - 容器像物理设备一样出现在网络中，并拥有自己的 MAC 地址。
    - 容器可以通过网络桥直接与外部网络通信。
    - 适用于需要容器被视为网络上独立主机的场景。
- **示例**:
    
    ```
     docker network create -d macvlan \
         --subnet=192.168.1.0/24 \
         --gateway=192.168.1.1 \
         -o parent=eth0 my-macvlan-network
     docker run -d --name my-container --network my-macvlan-network nginx
    ```
    

### **6. IPvlan Network**

- **使用场景**: 类似于 `macvlan` 网络，`ipvlan` 网络允许更精细的控制和更高的性能。适用于需要高度可定制的网络配置的场景。
- **特点**:
    - 更低的开销和更高的性能。
    - 比 `macvlan` 网络更复杂的配置选项。
- **示例**:
    
    ```
     docker network create -d ipvlan \
         --subnet=192.168.1.0/24 \
         --gateway=192.168.1.1 \
         -o parent=eth0 my-ipvlan-network
     docker run -d --name my-container --network my-ipvlan-network nginx
    ```
    

### **7. Custom Network（自定义网络）**

- **使用场景**: 自定义网络通常是基于 `bridge` 或 `overlay` 网络驱动程序创建的。它们允许更灵活的网络配置，如自定义子网和网关，隔离网络段，或者设置容器的 DNS 解析。
- **特点**:
    - 支持网络隔离和自定义配置。
    - 适用于需要自定义网络拓扑的应用场景。
- **示例**:
    
    ```
     docker network create my-custom-network
     docker run -d --name my-container --network my-custom-network nginx
    ```
    

# Docker 架构

Docker 的架构是一个用于创建、部署和运行容器化应用程序的平台，由多个组件组成。这些组件一起协同工作，以提供一个完整的容器化解决方案。Docker 的架构可以从以下几个关键部分来理解：

### 1. **Docker Client (Docker 客户端)**

- **功能**: Docker 客户端是用户与 Docker 的接口。用户通过 Docker 客户端发送命令，如 `docker run`、`docker build` 等，这些命令被传递给 Docker Daemon 处理。
- **通信**: Docker 客户端通过 REST API、Unix socket 或网络接口与 Docker Daemon 通信。
- **使用**: Docker 客户端可以在本地主机或远程主机上运行，主要用于与 Docker Daemon 交互。

### 2. **Docker Daemon (Docker 守护进程)**

- **功能**: Docker Daemon 是 Docker 的核心部分，负责处理 Docker 客户端的请求，并管理容器的生命周期。它包括构建、运行和分发容器的所有逻辑。
- **运行方式**: 通常在后台运行，监听来自 Docker 客户端的请求并执行相应的操作。

### 3. **Docker Image (Docker 镜像)**

- **功能**: Docker 镜像是一个只读的模板，用于创建容器。镜像包含了应用程序的代码、运行时环境、库、依赖项和配置等。
- **分层结构**: Docker 镜像采用分层存储，每一层都是一个文件系统的增量更新。镜像层之间通过共享机制可以大大节省存储空间和加快构建速度。

### 4. **Docker Container (Docker 容器)**

- **功能**: 容器是 Docker 镜像的一个实例，是镜像在运行时的表现形式。容器是独立的环境，包含应用程序及其所有依赖项。它们共享主机的操作系统内核，但与其他容器隔离。
- **特性**: 容器可以启动、停止、删除和迁移，具有轻量级和快速启动的特点。

### 5. **Docker Registry (Docker 仓库)**

- **功能**: Docker Registry 是存储和分发 Docker 镜像的地方。Docker Hub 是一个公共的 Docker Registry，可以存储公开或私有的镜像。用户也可以搭建私有的 Docker Registry 来存储和管理镜像。
- **镜像存储与拉取**: 用户可以将构建好的镜像推送到 Docker Registry，也可以从 Docker Registry 拉取镜像到本地使用。

### 6. **Docker Engine (Docker 引擎)**

- **功能**: Docker Engine 是用于构建和运行 Docker 容器的核心引擎。它由 Docker Daemon、REST API 和 Docker CLI（命令行界面）组成。
- **组件**:
    - **Docker Daemon**: 管理 Docker 对象，如镜像、容器、网络和存储卷。
    - **REST API**: 提供与 Docker Daemon 交互的接口。
    - **Docker CLI**: 用户与 Docker Daemon 交互的命令行工具。

### 7. **Docker Networking (Docker 网络)**

- **功能**: Docker 网络组件负责管理容器之间、容器与主机之间的网络通信。Docker 提供了多种网络驱动，如 bridge、host、overlay 等，帮助实现灵活的网络配置。
- **常见类型**:
    - **Bridge 网络**: 默认网络类型，适用于独立容器之间的通信。
    - **Host 网络**: 容器与主机共享网络栈，性能高但隔离性低。
    - **Overlay 网络**: 用于跨多主机的容器通信，适合 Swarm 和 Kubernetes 集群。

### 8. **Docker Volumes (Docker 卷)**

- **功能**: Docker 卷用于在容器和主机之间共享数据，或者在多个容器之间共享数据。卷可以独立于容器的生命周期，容器删除后卷中的数据仍然存在。
- **用途**: 用于持久化存储，如数据库文件、配置文件等。

### 9. **Docker Compose**

- **功能**: Docker Compose 是一个用于定义和管理多容器 Docker 应用的工具。通过一个 YAML 文件（`docker-compose.yml`），用户可以定义应用的服务、网络和卷，并通过一条命令启动整个应用。
- **使用场景**: 适用于需要协调多个服务的应用开发和测试环境。

### 10. **Docker Swarm**

- **功能**: Docker Swarm 是 Docker 内置的容器编排工具，支持将多个 Docker 主机组织成一个虚拟的 Docker 主机，实现容器的集群管理。
- **特性**: 支持容器的自动负载均衡、服务发现、滚动更新等。

### **Docker 架构图示**

可以通过一个简单的图示来概述 Docker 的架构：

```
          +-------------------+
          | Docker Registry   |
          | (Docker Hub,      |
          |  Private Registry)|
          +---------^---------+
                    |
                    |
          +---------v---------+
          |  Docker Client    |
          +---------+---------+
                    |
                    |
          +---------v---------+
          |  Docker Daemon    |
          | (Docker Engine)   |
          | +---------------+ |
          | | Docker Engine | |
          | | REST API      | |
          | | CLI           | |
          | +---------------+ |
          +---------+---------+
                    |
                    |
    +---------------v---------------+
    |           Docker Objects       |
    | +---------+  +---------------+ |
    | | Images  |  | Containers    | |
    | +---------+  +---------------+ |
    | +---------+  +---------------+ |
    | | Volumes |  | Networks      | |
    | +---------+  +---------------+ |
    +--------------------------------+

```

### **总结**

Docker 的架构由多个组件组成，包括 Docker 客户端、Docker Daemon、镜像、容器、网络、卷等，它们共同协作，提供了一个灵活、轻量级的容器化平台，广泛应用于开发、测试和生产环境中。

# Docker的分层结构（layered structure）

Docker 采用分层结构（layered structure）的设计，这一结构对于 Docker 镜像的创建、存储、分发以及高效管理非常关键。以下是为什么 Docker 被称为分层结构的几个关键点：

### 1. **镜像的分层构造**

Docker 镜像是由一系列独立的只读层（layers）组成的。每一层都代表了一次对镜像的修改或增加的内容。比如在 `Dockerfile` 中的每一条指令都会创建一个新的层。这些层依次叠加，形成最终的镜像。

### 层的形成：

- **基础层**: 例如 `FROM ubuntu:20.04` 指定了一个基础镜像，它本身是由多个层组成的。
- **中间层**: 每条 `RUN`、`COPY`、`ADD` 指令都会在前一层之上创建一个新的层。
- **顶层**: 最终的层通常是由 `CMD` 或 `ENTRYPOINT` 指令创建的。

### 2. **层的共享和重用**

由于 Docker 镜像是分层构建的，不同镜像可以共享相同的基础层。例如，如果两个镜像都基于相同的 Ubuntu 20.04 镜像，它们会共享这个基础层，从而避免了重复存储和传输同样的数据。

### 好处：

- **节省存储空间**: 由于层可以被多个镜像共享，主机只需要存储一份相同的层。
- **加速构建和部署**: 当镜像更新时，Docker 只需下载或构建发生变化的那一层，而不是整个镜像。这大大减少了构建和传输的时间。

### 3. **写时复制（Copy-on-Write）机制**

在容器运行时，Docker 会在镜像的只读层之上添加一个可写层。这意味着对文件系统的所有更改都只发生在这个可写层中，而不会影响底层的只读层。

### 机制：

- **只读层**: 包含镜像的所有内容，这些层不会在容器运行时被修改。
- **可写层**: 容器运行时的新内容会写入这个层，删除的文件只是从文件系统的视角中“隐藏”起来，但底层数据仍然保留。

### 4. **层的顺序和依赖**

每一层都依赖于前面的层，这意味着删除或修改某一层可能会导致其后的所有层都无效。构建镜像时，Docker 会从第一层开始逐层构建，每一层都会依赖之前层的内容。

### 5. **缓存机制**

Docker 利用了分层结构的缓存机制来加速镜像的构建过程。当你重新构建一个镜像时，如果某些指令生成的层已经存在且没有发生变化，Docker 会直接使用缓存的层，而不必重新执行这些指令。

### 例子：

- 如果你在 `Dockerfile` 中更新了底层的基础镜像（如 `FROM` 指令），Docker 将重新构建所有层。
- 但如果你只更新了 `CMD` 指令，Docker 只会重新创建最后一层。

### 6. **镜像分发的高效性**

在 Docker 镜像被推送到 Docker Registry 或从 Registry 拉取到本地时，分层结构使得镜像的分发非常高效。只有那些本地没有的层才会被实际传输，显著减少了传输的数据量。

### **总结**

Docker 被称为分层结构是因为它将镜像的构建过程分解为多个独立的、可重用的层，每一层都对应一次修改或添加。分层结构带来了显著的存储和构建效率的提升，使得 Docker 能够更快地构建、分发和运行容器化的应用程序。

# Q & A

## **输出格式化？**

`docker ps` 命令用于列出当前运行的 Docker 容器。为了使输出更符合需求，Docker 提供了 `--format` 选项，这允许用户通过 Go 模板来格式化输出。这是一个强大的功能，可以让你自定义 `docker ps` 的输出，以便只显示感兴趣的信息。

**使用 `-format` 选项**

- `-format` 选项允许你使用 Go 模板来指定输出的格式。你可以选择显示哪些字段以及它们的排列方式。以下是一些常见的格式化示例：

1. **显示容器 ID、镜像和状态**
    
    ```
     docker ps --format "{{.ID}} {{.Image}} {{.Status}}"
    ```
    
    - `{{.Image}}`：镜像名称
    - `{{.Status}}`：容器状态
2. **显示容器 ID 和端口映射**
    
    ```
     docker ps --format "{{.ID}} {{range .Ports}}{{.PublicPort}}{{end}}"
    ```
    
    - `{{range .Ports}}{{.PublicPort}}{{end}}`：容器的端口映射
3. **以表格形式显示多列**

```
 docker ps --format "table {{.ID}}\t{{.Image}}\t{{.Names}}\t{{.Status}}"
```

- `table` 关键字用于以表格形式格式化输出。
- `\t` 是制表符，用于分隔列。
1. **按自定义格式显示**

```
 docker ps --format "{{.ID}} - {{.Names}} - {{.Status}} ({{.Ports}})"
```

- 这会按你定义的格式显示容器 ID、名称、状态和端口映射。

**其他常见字段**

以下是一些常用的 `docker ps` 字段，你可以在 `--format` 选项中使用这些字段：

- **`{{.ID}}`**: 容器的短 ID
- **`{{.Image}}`**: 容器使用的镜像名称
- **`{{.Names}}`**: 容器的名称
- **`{{.Status}}`**: 容器的状态（如“Up 5 minutes”）
- **`{{.Ports}}`**: 容器的端口映射
- **`{{.CreatedAt}}`**: 容器创建时间
- **`{{.RunningFor}}`**: 容器已运行的时间
- **`{{.Labels}}`**: 容器的标签

## **docker --link**

`docker --link` 是 Docker 中的一个选项，用于在启动容器时建立容器之间的连接，使得一个容器可以轻松访问另一个容器的网络服务。它允许你将两个容器关联起来，使得一个容器可以通过名称解析、环境变量等方式访问另一个容器的网络服务。

### **基本用法**

假设你有一个容器在运行一个数据库服务，你可以使用 `--link` 选项将另一个容器与这个数据库服务容器关联起来。这样，新的容器可以通过简单的方式访问数据库服务。

### **1. 创建数据库服务容器**

```
 docker run -d --name db_container postgres
```

### **2. 启动应用容器并链接到数据库服务**

```
 docker run -d --name app_container --link db_container:db my_app_image
```

### **详细解释**

- **`-link db_container:db`**:
    - `db_container` 是已经运行的数据库容器的名称。
    - `db` 是你在新容器中用来访问 `db_container` 的别名。在 `app_container` 内，`db` 就像是 `db_container` 的一个主机名，你可以用这个名称来访问 `db_container` 提供的服务。

### **连接效果**

1. **环境变量**:
Docker 会在新容器中自动创建一些环境变量，这些环境变量包含了被链接容器的 IP 地址和端口信息。例如，在 `app_container` 中，你可能会看到类似以下内容的环境变量：
    
    ```
     DB_PORT=tcp://172.17.0.2:5432
     DB_PORT_5432_TCP=tcp://172.17.0.2:5432
     DB_PORT_5432_TCP_ADDR=172.17.0.2
     DB_PORT_5432_TCP_PORT=5432
     DB_PORT_5432_TCP_PROTO=tcp
    ```
    
2. **主机名解析**:
新容器中的 `/etc/hosts` 文件会更新，使得你可以通过别名 `db` 来访问 `db_container`。例如，在 `app_container` 中，你可以用 `db` 作为主机名连接到数据库。
    
    ```
     psql -h db -U postgres
    ```
    

### **过时与替代方案**

值得注意的是，`--link` 选项已经被认为是过时的做法，不推荐在新项目中使用。Docker 网络提供了更为强大和灵活的功能，通常通过创建自定义网络（如 `bridge` 网络）来实现容器之间的连接。这种方式提供了更多的控制和更好的可扩展性。

### **使用 Docker 网络的替代方法**

而不是使用 `--link`，你可以创建一个自定义桥接网络，将多个容器连接到同一个网络，这样它们可以通过容器名称相互访问：

```
 # 创建自定义桥接网络
 docker network create my_bridge_network
 ​
 # 启动容器并将它们连接到自定义网络
 docker run -d --name db_container --network my_bridge_network postgres
 docker run -d --name app_container --network my_bridge_network my_app_image
```

在这种情况下，`app_container` 可以直接通过 `db_container` 的名称访问数据库服务，无需使用 `--link`。

### **总结**

- `-link` 允许你将两个容器连接起来，使得一个容器能够轻松访问另一个容器的网络服务。然而，由于它的局限性和被认为过时的状态，推荐使用 Docker 自定义网络功能作为替代方案，这样可以获得更强的灵活性和可管理性。

## Image vs Container

Docker Image 和 Docker Container 是 Docker 的两个核心概念，它们在容器化应用程序的构建、部署和运行中起着至关重要的作用。以下是对它们的解释：

### 1. **Docker Image（Docker 镜像）**

- **定义**: Docker 镜像是一个只读的模板，用于创建 Docker 容器。它包含了应用程序的所有依赖项、库、配置文件、环境变量以及启动应用程序所需的所有指令。
- **特点**:
    - **不可变性**: 镜像一旦创建，就不能被修改。如果需要更新镜像，则需要基于原有镜像构建一个新的镜像。
    - **分层结构**: Docker 镜像是分层的，每一层代表一个文件系统的增量更新。通过这种分层结构，可以高效地复用镜像的各个部分。
    - **共享性**: 镜像可以被推送到 Docker Hub 或其他镜像仓库，供其他人下载并使用。

### 2. **Docker Container（Docker 容器）**

- **定义**: Docker 容器是镜像的一个实例，它是在 Docker 引擎中运行的一个可读写的进程。容器可以看作是镜像的运行时状态。
- **特点**:
    - **轻量级**: 容器共享主机的操作系统内核，但彼此隔离，消耗的资源相对较少。
    - **可变性**: 容器运行时是可变的，可以写入文件、修改设置等。但是这些更改只存在于该容器的生命周期内，容器一旦删除，所有修改都会丢失。
    - **瞬时性**: 容器通常是短暂的，用完即销毁。当一个容器被删除后，所有的状态和数据都会丢失，除非明确保存它们。

### **3. 关系**

- **镜像是容器的模板**: 每次创建容器时，都是基于某个镜像进行的。镜像包含了启动容器所需的一切。
- **容器是镜像的运行实例**: 一个镜像可以运行多个容器，每个容器都是独立的，并且可以具有不同的配置和状态。

简单来说，Docker 镜像是应用程序的蓝图，而 Docker 容器是基于这个蓝图运行的实例。

## CMD vs ENTRYPOINT

在 Docker 中，`CMD` 和 `ENTRYPOINT` 是两个常用的指令，它们用于指定容器启动时执行的命令。虽然它们在功能上有一些相似之处，但它们的使用场景和行为有重要的区别。

### **`CMD` 指令**

- **作用**: `CMD` 指定了一个容器启动时的默认命令或参数。如果在运行容器时没有提供任何命令，Docker 将执行 `CMD` 指定的命令。
- **形式**: `CMD` 可以有三种形式：
    1. **Shell 形式**:
        
        ```
        CMD echo "Hello, Docker!"
        
        ```
        
        这会在 `/bin/sh -c` 中执行命令。
        
    2. **Exec 形式**:
        
        ```
        CMD ["executable", "param1", "param2"]
        
        ```
        
        这是推荐的形式，避免了 shell 的额外开销。
        
    3. **参数形式**:
        
        ```
        CMD ["param1", "param2"]
        
        ```
        
        在这种情况下，`CMD` 提供的是默认参数，用于传递给由 `ENTRYPOINT` 指定的可执行文件。
        
- **覆盖行为**: 如果你在运行容器时提供了命令，这个命令会覆盖 `CMD`。

### **`ENTRYPOINT` 指令**

- **作用**: `ENTRYPOINT` 定义了一个容器启动时的主进程（即入口点）。它的设计目的在于确保容器以特定的应用程序或命令启动。与 `CMD` 不同的是，`ENTRYPOINT` 定义的命令不会轻易被覆盖。
- **形式**: `ENTRYPOINT` 通常有两种形式：
    1. **Exec 形式**:
        
        ```
        ENTRYPOINT ["executable", "param1", "param2"]
        
        ```
        
        推荐使用这种形式，直接指定执行的程序和参数。
        
    2. **Shell 形式**:
        
        ```
        ENTRYPOINT command param1 param2
        
        ```
        
        类似 `CMD` 的 shell 形式，但不推荐使用，因为它依赖 `/bin/sh`。
        
- **结合 `CMD` 使用**: `ENTRYPOINT` 和 `CMD` 可以结合使用。`ENTRYPOINT` 定义主要的可执行文件，`CMD` 定义默认参数。
    
    例如：
    
    ```
    ENTRYPOINT ["nginx"]
    CMD ["-g", "daemon off;"]
    
    ```
    
    运行容器时，这两者会组合成 `nginx -g 'daemon off;'`。
    
- **覆盖行为**: 运行容器时可以通过 `-entrypoint` 覆盖 `ENTRYPOINT`，而 `CMD` 提供的默认参数可以被命令行参数覆盖。

### **主要区别**

1. **可覆盖性**:
    - `CMD` 定义的命令在运行容器时可以被用户指定的命令轻易覆盖。
    - `ENTRYPOINT` 更为强制，运行容器时不会被简单的命令所覆盖，除非使用 `-entrypoint` 选项显式覆盖。
2. **用途**:
    - `CMD` 更适合用于指定默认的命令或参数，用户在需要时可以覆盖。
    - `ENTRYPOINT` 更适合用于定义固定的、不可更改的启动行为，比如一个始终要运行的主应用程序。
3. **组合使用**:
    - `ENTRYPOINT` + `CMD` 组合使用时，可以有效地创建既有固定入口点，又可以通过 `CMD` 指定默认参数的容器。

### **使用场景**

- 如果你的容器需要有一个可以轻松覆盖的默认命令（比如一个脚本），使用 `CMD` 会更合适。
- 如果你的容器是为一个特定的用途设计的，用户通常不会更改主进程，只可能传递一些参数，那么使用 `ENTRYPOINT` 更加合适。

### **示例对比**

### 使用 `CMD`

```
# Dockerfile
FROM ubuntu:20.04
CMD ["echo", "Hello, World!"]

```

```bash
# 默认执行 CMD 中的命令
docker run myimage
# 覆盖 CMD 中的命令
docker run myimage echo "Goodbye, World!"

```

### 使用 `ENTRYPOINT`

```
# Dockerfile
FROM ubuntu:20.04
ENTRYPOINT ["echo"]
CMD ["Hello, World!"]

```

```bash
# 默认执行 echo "Hello, World!"
docker run myimage
# 覆盖 CMD 中的参数
docker run myimage "Goodbye, World!"
# 使用 --entrypoint 覆盖 ENTRYPOINT
docker run --entrypoint /bin/bash myimage -c "echo Overridden!"

```

### **总结**

- 使用 `CMD` 定义可覆盖的默认命令。
- 使用 `ENTRYPOINT` 定义不易覆盖的固定入口点。
- 结合 `CMD` 和 `ENTRYPOINT` 提供灵活且功能强大的容器启动方式。

## Docker的分层机制与代码更改

当代码发生变化时，你需要重新构建 Docker 镜像，以便将这些更改应用到容器中并查看更新后的应用程序表现。不过，由于 Docker 使用了分层结构和缓存机制，重新构建镜像并不总是需要从头开始，以下是详细的步骤和一些优化方法：

### 1. **重新构建镜像**

当你修改了代码或 `Dockerfile` 中的某些内容后，你可以使用以下命令重新构建镜像：

```bash
docker build -t my_app_image .

```

- **`t my_app_image`**: 这里指定镜像的名称（和标签），可以与你之前使用的相同。
- **`.`**: 表示 Dockerfile 和代码所在的当前目录。

### 2. **利用缓存机制**

Docker 的缓存机制会自动检测到哪些层发生了变化，只重新构建那些变化的层。其他未改变的层将直接从缓存中获取，从而加速构建过程。

### 例子：

- 如果你在 `Dockerfile` 的上层（如基础镜像或依赖安装部分）做了修改，Docker 将重新构建这些层以及其后的所有层。
- 如果你只修改了代码（假设代码是通过 `COPY` 指令加入镜像的），Docker 只会重新执行 `COPY` 指令和之后的层。

### 3. **最佳实践：分离构建和代码层**

为了优化构建速度，可以将不常变动的部分（如依赖安装）放在 `Dockerfile` 的前面，将频繁变动的部分（如代码）放在后面。

### 示例优化：

```
# 使用 Node.js 作为基础镜像
FROM node:14

# 安装应用的依赖
COPY package.json /app/
RUN cd /app && npm install

# 复制应用代码
COPY . /app

# 启动应用
CMD ["node", "/app/index.js"]

```

在这个例子中，如果你只修改了代码，`npm install` 的结果将会被缓存，Docker 只需重新复制代码并构建最后的几层。

### 4. **重新运行容器**

构建新的镜像后，你可以使用新的镜像来运行容器，以查看代码更改后的效果：

```bash
docker run -d -p 8080:8080 my_app_image

```

- **`d`**: 表示以后台模式运行容器。
- **`p 8080:8080`**: 将主机的 8080 端口映射到容器的 8080 端口。

### 5. **使用 `docker-compose`（可选）**

如果你在开发时频繁修改代码并需要快速查看效果，可以使用 `docker-compose` 来简化构建和运行的流程。`docker-compose` 会自动检测到文件的变化并重新构建镜像和重启服务。

### 示例 `docker-compose.yml`:

```yaml
version: '3'
services:
  app:
    build: .
    ports:
      - "8080:8080"

```

运行 `docker-compose up --build` 将会自动重新构建镜像并启动容器。

### **总结**

当代码发生变化时，重新构建 Docker 镜像是必要的，以便将更改反映到应用程序中。通过合理组织 `Dockerfile`，利用缓存机制，可以加速镜像的重新构建过程。使用 `docker-compose` 还可以进一步简化和自动化开发流程。

## Docker Container vs Virtual Machine

Docker 容器技术和虚拟机 (Virtual Machine, VM) 是两种流行的虚拟化技术，它们都用于在同一物理硬件上运行多个独立的操作系统环境。但它们的工作原理、架构和使用场景有显著的区别。以下是 Docker 容器和虚拟机的主要区别和联系。

### **1. 架构和技术栈**

#### **Docker 容器**

- **轻量级**: Docker 容器运行在宿主操作系统之上，所有容器共享宿主操作系统的内核（例如 Linux 内核）。
- **依赖于操作系统的隔离**: 容器通过操作系统级别的虚拟化技术（如 Linux 的 cgroups 和 namespaces）来实现隔离。这种方式使得容器启动和运行更加轻量和快速。
- **无操作系统内核**: 每个容器只包含应用程序及其依赖库，而不需要包含一个完整的操作系统。

#### **虚拟机 (VM)**

- **重量级**: 虚拟机包括完整的操作系统（Guest OS），它们通过虚拟化软件（如 Hypervisor）运行在宿主操作系统或直接运行在硬件上。
- **硬件级虚拟化**: 虚拟机通过 Hypervisor 实现对硬件资源的虚拟化，每个虚拟机都有自己独立的内核、驱动程序和操作系统。
- **较大的资源开销**: 因为每个虚拟机包含完整的操作系统内核和驱动程序，它们通常比容器占用更多的资源。

### **2. 性能和资源利用率**

- **Docker 容器**: 容器共享宿主操作系统的内核，因此启动速度更快（通常是秒级），并且占用的资源更少。这使得容器更适合需要高密度、快速启动和停止的场景，例如微服务架构中的应用部署。

- **虚拟机 (VM)**: 由于每个虚拟机包含完整的操作系统，启动时间较长（通常是分钟级），并且需要更多的计算资源（CPU、内存、存储）。然而，虚拟机提供了更强的隔离性和兼容性，因为它们可以运行与宿主操作系统不同的操作系统（例如在 Linux 主机上运行 Windows 虚拟机）。

### **3. 隔离性和安全性**

- **Docker 容器**: 容器之间的隔离主要依赖于操作系统级别的机制（如 namespaces 和 cgroups）。虽然隔离性较好，但由于共享宿主操作系统内核，容器之间的安全性依赖于内核本身的安全性。恶意容器有可能通过内核漏洞影响宿主系统或其他容器。

- **虚拟机 (VM)**: 虚拟机提供了更强的隔离性，每个虚拟机都有自己的操作系统内核，因此即使一个虚拟机被攻破，其他虚拟机和宿主系统仍然保持安全。这使得虚拟机适合需要严格安全隔离的环境。

### **4. 使用场景**

- **Docker 容器**:
  - 适用于微服务架构：容器轻量且启动快，非常适合部署和管理大量的微服务。
  - 开发和测试环境：容器提供一致的开发环境，使得开发人员能够轻松地在本地和生产环境之间迁移应用。
  - 持续集成/持续交付 (CI/CD)：在 CI/CD 管道中，容器可以快速构建、测试和部署应用。

- **虚拟机 (VM)**:
  - 适用于多操作系统需求：需要在同一物理主机上运行不同的操作系统（如 Windows 和 Linux）。
  - 传统应用和遗留系统：一些传统应用依赖于完整的操作系统环境，这些应用在虚拟机上运行更为合适。
  - 高隔离性需求的环境：对于需要更高安全隔离的场景，如金融、医疗等领域，虚拟机是更好的选择。

### **5. 管理工具和生态系统**

- **Docker 容器**: Docker 提供了丰富的管理工具，如 Docker Compose、Docker Swarm 以及与 Kubernetes 集成的容器编排工具。Docker Hub 也提供了大量预构建的镜像，方便用户快速部署应用。

- **虚拟机 (VM)**: 虚拟机管理工具如 VMware、Hyper-V、KVM、VirtualBox 等，以及云平台（如 AWS、Azure）的虚拟机服务（EC2、VMware Cloud）为用户提供了全面的虚拟机管理和监控功能。

### **6. 联系和互补性**

虽然 Docker 容器和虚拟机有显著的区别，但它们可以互补使用。在实际场景中，常常会在虚拟机上运行 Docker 容器，从而结合两者的优点。例如：

- **混合部署**: 可以在一个虚拟机中运行多个容器，从而同时利用虚拟机的隔离性和容器的轻量级特性。
- **云环境**: 在云计算中，虚拟机仍然是主要的基础设施单元，但在虚拟机上运行的容器为应用提供了更好的灵活性和可移植性。

### **总结**

Docker 容器和虚拟机各有优劣，Docker 提供了更轻量、更高效的应用虚拟化方式，适合现代微服务架构和 DevOps 工作流程；而虚拟机提供了更强的隔离性和兼容性，适合传统应用和需要运行多操作系统的场景。它们可以根据具体需求进行选择和结合使用。