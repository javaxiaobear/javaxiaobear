import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,e as t}from"./app-aeb4ead9.js";const e={},i=t(`<h3 id="_1-1、mybatis-历史" tabindex="-1"><a class="header-anchor" href="#_1-1、mybatis-历史" aria-hidden="true">#</a> 1.1、MyBatis 历史</h3><ul><li><p>MyBatis是Apache 的一个开源项目iBatis, 2010 年6 月这个项目由Apache Software Foundation 迁移到了</p><p>Google Code，随着开发团队转投Google Code 旗下， iBatis3.x正式更名为MyBatis ，代码于2013 年11 月</p><p>迁移到Github</p></li><li><p>iBatis 一词来源于“internet”和“abatis”的组合，是一个基于Java 的持久层框架。iBatis提供的持久层框架包括</p><p>SQL Maps 和Data Access Objects（DAO）</p></li></ul><h3 id="_1-2、简介" tabindex="-1"><a class="header-anchor" href="#_1-2、简介" aria-hidden="true">#</a> 1.2、简介</h3><ul><li>MyBatis 是支持定制化SQL、存储过程以及高级映射的优秀的<strong>持久层框架</strong></li><li>MyBatis 避免了几乎所有的JDBC 代码和手动设置参数以及获取结果集</li><li>MyBatis 可以使用简单的XML 或注解用于配置和原始映射，将接口和Java 的POJO（Plain Old Java Objects，普通的Java 对象）映射成数据库中的记录</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>Maven仓库
<span class="token comment">&lt;!-- https://mvnrepository.com/artifact/org.mybatis/mybatis --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.5.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3、为什么使用mybatis-现有持久化技术的对比" tabindex="-1"><a class="header-anchor" href="#_1-3、为什么使用mybatis-现有持久化技术的对比" aria-hidden="true">#</a> 1.3、为什么使用Mybatis---现有持久化技术的对比</h3><h4 id="_1-3-1、jdbc" tabindex="-1"><a class="header-anchor" href="#_1-3-1、jdbc" aria-hidden="true">#</a> 1.3.1、JDBC</h4><ul><li>SQL 夹在Java 代码块里，耦合度高导致硬编码内伤</li><li>维护不易且实际开发需求中sql 是有变化，频繁修改的情况多见</li></ul><h4 id="_1-3-2、hibernate-和jpa" tabindex="-1"><a class="header-anchor" href="#_1-3-2、hibernate-和jpa" aria-hidden="true">#</a> 1.3.2、Hibernate 和JPA</h4><ul><li>长难复杂SQL，对于Hibernate 而言处理也不容易</li><li>内部自动生产的SQL，不容易做特殊优化</li><li>基于全映射的全自动框架，大量字段的POJO 进行部分映射时比较困难。导致数据</li><li>库性能下降</li></ul><h4 id="_1-3-3、mybatis" tabindex="-1"><a class="header-anchor" href="#_1-3-3、mybatis" aria-hidden="true">#</a> 1.3.3、MyBatis</h4><ul><li>对开发人员而言，核心sql 还是需要自己优化</li><li>sql 和java 编码分开，功能边界清晰，一个专注业务、一个专注数据</li></ul>`,12),l=[i];function p(c,o){return s(),n("div",null,l)}const u=a(e,[["render",p],["__file","introduction.html.vue"]]);export{u as default};
