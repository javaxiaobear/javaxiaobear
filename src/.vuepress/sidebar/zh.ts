import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/study-tutorial/": [
    {
      icon: "line",
      text: "Java学习路线",
      collapsible: true,
      prefix: "route/",
      children: [
        'mine.md'
      ],
    },
    {
      icon: "java",
      text: "Java基础必备",
      collapsible: true,
      prefix: "basic/",
      children: [
        {
          text: "Java数据结果与算法",
          prefix: "dataAndAlgorithm/",
          collapsible: true,
          children: [
              "overview.md",
              "analysis.md",
              "simplesort.md",
              "advancedsort.md",
              "lineartable.md",
              "symboltable.md",
              "binarytree.md",
              "heap.md",
              "priorityqueue.md",
              "Treeadvancement.md",
              "andlookup.md",
              "graph.md",
          ],
        },
        {
          text: "Java新特性",
          prefix: "features/",
          collapsible: true,
          children: ["java8.md" ],
        },
      ],
    },
    {
      icon: "table",
      text: "数据库技术",
      prefix: "database/",
      collapsible: true,
      children: [
        {
          text: "MySQL基础",
          prefix: "mysql/",
          collapsible: true,
          children: [
            "overview.md",
            "environment-build.md",
            "basic-select.md",
            "operator.md",
            "sorting-and-paging.md",
            "multi-table-query.md",
            "one-line-function.md",
            "aggregate-function.md",
            "subquery.md",
            "management-table.md",
            "crud.md",
            "type-of-data.md",
            "constraint.md",
            "view.md",
            "stored-procedure.md",
            "process-control.md",
          ],
        },
      ],
    },
    {
      icon: "java",
      text: "Java开发框架",
      prefix: "frame/",
      collapsible: true,
      children: [
        {
          text: "JavaWeb技术",
          prefix: "javaweb/",
          collapsible: true,
          children: [
            "concept.md",
            "servlet.md",
            "http.md",
            "httpServlet.md",
            "jsp.md",
            "listener.md",
            "el-and-jstl.md",
            "file-upload-or-download.md",
            "cookie&session.md",
            "filter.md",
            "json&ajax&i18n.md",
          ],
        },
        {
          text: "Spring 6",
          prefix: "spring/",
          collapsible: true,
          children: [
            "overview.md",
            "getting-started.md",
            "ioc.md",
            "handwriting-ioc.md",
            "aop.md"
          ],
        },
        {
          text: "Spring MVC",
          prefix: "spring-mvc/",
          collapsible: true,
          children: [
            "spring.md",
            "helloword.md",
            "working_principle.md",
            "annotation_based.md",
            "dispatcherServlet.md",
            "requestMapping.md",
            "restFul.md",
            "handle_data.md",
            "json.md",
            "upload.md",
            "interceptor.md",
            "static_resource.md",
          ],
        },
        {
          text: "MyBatis技术",
          prefix: "mybatis/",
          collapsible: true,
          children: [
            "introduction.md",
            "first_program.md",
            "crud.md",
            "global_config.md",
            "resultMap.md",
            "log.md",
            "page.md",
            "step_query.md",
            "dynamic_sql.md",
            "cache_mechanism.md"
          ],
        },
        {
          text: "MyBatis-Plus技术",
          prefix: "mybatis-plus/",
          collapsible: true,
          children: [
            "overview.md",
            "crud.md",
            "other.md",
          ],
        },
      ],
    },
    {
      icon: "software",
      text: "微服务技术",
      prefix: "microservice/",
      collapsible: true,
      children: [
        {
          text: "Spring Boot2",
          prefix: "spring-boot2/",
          collapsible: true,
          children: [
              'started.md',
              'config.md',
              'log.md',
              'web_development.md',
              'data_access.md',
              'start_principle.md',
              'diy_starter.md',
            {
              text: "Spring Boot2整合",
              prefix: "integrate/",
              collapsible: true,
              children: [
                  'shiro.md',
                  'swagger.md',
                  'dubbo_zookeeper.md',
                  'jedis.md',
                  'lettuce.md',
                  'spring_boot_admin.md',
                  'upload.md',
              ],
            },
          ],
        },
        {
          text: "Spring Boot3",
          prefix: "spring-boot3/",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Spring Cloud",
          prefix: "spring-cloud/",
          collapsible: true,
          children: [
              'microservice.md',
              'spring_cloud.md',
              'consumer_provider.md',
              'eureka.md',
              'consul.md',
              'ribbon.md',
              'openFeign.md',
              'hystrix.md',
              'spring_cloud_gateWay.md',
              'spring_cloud_config.md',
              'spring_cloud_bus.md',
              'spring_cloud_stream.md',
              'spring_cloud_sleuth.md',
          ],
        },
        {
          text: "Spring Cloud Alibaba",
          prefix: "spring-cloud-alibaba/",
          collapsible: true,
          children: [
            'started.md',
            'nacos.md',
            'sentinel.md',
          ],
        }
      ],
    },
    {
      icon: "any",
      text: "分布式技术",
      prefix: "distributed/",
      collapsible: true,
      children: [
        {
          text: "RabbitMQ",
          prefix: "rabbitmq/",
          collapsible: true,
          children: [
            'overview.md',
            'hello_word.md',
            'work_queues.md',
            'publish_confirmation.md',
            'exchanges.md',
            'dead_queue.md',
            'delayed_queue.md',
            'advanced.md',
            'other.md',
          ],
        },
        {
          text: "Redis",
          prefix: "redis/",
          collapsible: true,
          children: [
            'get-started.md',
            {
              text: "2、Redis实战",
              prefix: "combat/",
              collapsible: true,
              children: [
                'sms_login.md',
                'select_cache.md',
                'coupon_skill.md',
                'sortedSet.md',
                'friends_follow.md',
                'nearby_merchants.md',
                'user_sign.md',
                'uv_statistics.md',
              ],
            }
          ],
        },
        {
          text: "Elasticsearch",
          prefix: "elasticsearch/",
          collapsible: true,
          children: [
            'overview.md',
            'get_started.md',
            'java_api.md',
          ],
        },
        {
          text: "Docker",
          prefix: "docker/",
          collapsible: true,
          children: [
            'introduction.md',
            'install.md',
            'common_commands.md',
            'image.md',
            'upload.md',
            'publish_private_library.md',
            'data_volume.md',
            'regular_install.md',
            'complex_install.md',
            'dockerFile.md',
            'microservice.md',
            'network.md',
            'docker_compose.md',
            'portainer.md',
          ],
        },
      ],
    },
    {
      icon: "tool",
      text: "开发工具",
      prefix: "devTools/",
      collapsible: true,
      children: [
        "GitNote.md",
        {
          text: "IDEA",
          prefix: "idea/",
          collapsible: true,
          children: [
            'know.md',
            'hello_world.md',
            'detailed_settings.md',
            'module.md',
            'code_template.md',
            'shortcut_key.md',
            'debug.md',
            'diff_project.md',
            'database.md',
            'plugins.md'
          ],
        },
          "Linux.md"
      ],
    },
    {
      icon: "frame",
      text: "框架组件",
      prefix: "components/",
      collapsible: true,
      children: [
        "CAT.md",
        "HATEOAS.md",
        {
          text: "Java可视化报表POI",
          prefix: "report/",
          collapsible: true,
          children: [
            'overview.md',
            'excel.md',
            'write_data.md',
            'opencsv.md',
            'word.md',
            'easypoi.md',
            'report.md',
          ],
        },
        {
          text: "流程引擎Activiti7",
          prefix: "activity/",
          collapsible: true,
          children: [
            {
              text: "activity基础篇",
              prefix: "basic/",
              collapsible: true,
              children: [
                'introduce.md',
                'overview.md',
                'environment.md',
                'relation_chart.md',
                'getting_started.md',
                'operate.md'
              ],
            },
            {
              text: "activity进阶篇",
              prefix: "basic/",
              collapsible: true,
              children: [
            
              ],
            },
            {
              text: "activity整合篇",
              prefix: "basic/",
              collapsible: true,
              children: [
          
              ],
            },
          ],
        },
      ],
    },
  ],
  /** 面试专栏 */
  "/interview/": [
    {
      icon: "linter",
      text: "面试秘籍",
      collapsible: true,
      prefix: "cheats/",
      children: [
        "cv.md", 
        "hr.md", 
      ],
    },
    {
      icon: "java",
      text: "Java基础",
      collapsible: true,
      prefix: "javaBasics/",
      children: [
        "overview/",
        "objectOriented/",
        "javaSE/",
        "typeOfData/",
        "exception/",
        "collection/",
        "io/",
        "innerClass/",
        "enumGeneric/"
      ],
    },
    {
      text: "Java高级",
      icon: "java",
      collapsible: true,
      prefix: "javaHighLevel/",
      children: [
          "reflection/",
          "jvm/",
          "multithreading/",
          "concurrency",
          "designPatterns",
          "java-web"
      ],
    },
    {
      text: "计算机基础",
      icon: "computer",
      collapsible: true,
      prefix: "computer/",
      children: [
        "network/",
        "algorithms.md"
      ],
    },
    {
      text: "数据库",
      icon: "grid",
      collapsible: true,
      prefix: "database/",
      children: [
        "MySQL/",
        {
          text: "尚硅谷MySQL面试题",
          prefix: "150mysql/",
          collapsible: true,
          children: ["index.md" , "technical-Architecture.md", "transaction.md","development.md"],
        },
      ],
    },
    {
      text: "Java框架",
      icon: "module",
      collapsible: true,
      prefix: "framework/",
      children: [
        "Spring.md/",
        "Spring MVC.md/",
        "Mybatis.md/",
        "Spring Boot.md/",
        "Spring Cloud.md/",
        "Spring Cloud Alibaba.md/",
      ],
    },
    {
      text: "分布式",
      icon: "relation",
      collapsible: true,
      prefix: "distributed/",
      children: [
        "redis.md/",
        "RabbitMQ.md/",
        "ElasticSearch.md"
      ],
    },
    {
      text: "源码剖析",
      icon: "bit",
      collapsible: true,
      prefix: "sourceCode/",
      children: [
        {
          text: "Java 源码专栏",
          prefix: "java/",
          collapsible: true,
          children: ["ArrayList.md" , "HashMap.md"],
        },
        {
          text: "Spring 源码专栏",
          prefix: "spring/",
          collapsible: true,
          children: ["Spring-bean.md" ,  "Spring-refresh.md","Spring-tx.md"],
        },
      ],
    },
    {
      text: "架构设计面试",
      icon: "advance",
      collapsible: true,
      prefix: "architecture/",
      link: "architecture/",
    },
  ],
  /**添砖Java */
  "/lick-brick-java/": [
    {
      icon: "java",
      text: "Java开发砖",
      collapsible: true,
      prefix: "java-dev/",
      children: [
        {
          text: "剖析《阿里巴巴开发手册》",
          prefix: "AlibabaDevelopmentManual/",
          collapsible: true,
          children: [
            "integer-cache.md",
            "serialization.md"
           ],
        },
      ],
    },
    {
      icon: "box",
      text: "避坑指南",
      collapsible: true,
      prefix: "avoid/",
      children: [
        {
          text: "代码篇",
          prefix: "code/",
          collapsible: true,
          children: [
            "thread-safe.md",
            "http.md",
          ],
        },
      ],
    },
  ],
  /** 开发必备 */
  "/dev-necessary/": [
    {
      icon: "config",
      text: "安装教程",
      collapsible: true,
      prefix: "install/",
      children: [
        "windows.md/",
        "Linux.md/",
        "Linux-offline.md/",
        "docker.md/",
      ],
    },
    {
      icon: "select",
      text: "激活指南",
      collapsible: true,
      prefix: "activation/",
      children: [
        "idea.md",
        "navicat.md",
        "xmind.md",
        "typora.md"
      ],
    },
    {
      icon: "study",
      text: "珍藏资源",
      collapsible: true,
      prefix: "resource/",
      children: [
        "free.md",
      ],
    },
    {
      icon: "ask",
      text: "常见问题",
      collapsible: true,
      prefix: "problem/",
      children: [
        "MySQL.md/",
        "Linux.md/",
      ],
    },
  
  ],

  /** 架构设计 */
  "/architecture/": [
    {
      icon: "structure",
      text: "架构基础",
      collapsible: true,
      prefix: "basic/",
      children: [
        "system.md/",
        "principles.md/",
        "method.md/",
        "evolution.md/",
      ],
    },
    {
      icon: "software",
      text: "微服务设计",
      collapsible: true,
      prefix: "microservices/",
      link: "microservices/",
      children: [
        "microservices_design.md/",
        "design_experience.md/"
      ],
    },
    {
      icon: "structure",
      text: "分布式",
      collapsible: true,
      prefix: "distributed/",
      link: "distributed/",
      children: [
        "consistency.md",
        "distributedId.md",
        "session.md",
        "task.md",
        "message-queue.md"
      ],
    },
    {
      icon: "guide",
      text: "系统设计",
      collapsible: true,
      prefix: "design/",
      link: "design/",
      children: [
        "taobaoId.md"
      ],
    },
  ],

  /** 关于 */
  "/about/": [
    {
      icon: "at",
      text: "关于",
      collapsible: false,
      children: [
        "me.md/",
        "originalIntention.md/",
        "communicate.md/",
        "feedback.md/",
        "donate.md/",
        "changelog.md",
      ],
    },
  ],
});
