DROP DATABASE IF EXISTS `dagl`;
CREATE DATABASE `dagl`;
USE `dagl`;

#
# Source for table dagl_dept
#

DROP TABLE IF EXISTS `dagl_dept`;
CREATE TABLE `dagl_dept` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dept_name` varchar(255) DEFAULT NULL COMMENT '部门名称',
  `unit_id` bigint(20) DEFAULT NULL COMMENT '所属单位id',
  `dept_duty` varchar(255) DEFAULT NULL COMMENT '部门职责',
  `dept_tell` varchar(255) DEFAULT NULL COMMENT '部门电话',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='部门表';

#
# Dumping data for table dagl_dept
#

LOCK TABLES `dagl_dept` WRITE;
/*!40000 ALTER TABLE `dagl_dept` DISABLE KEYS */;
INSERT INTO `dagl_dept` VALUES (1,'计算中心',0,'管理','13333333333');
/*!40000 ALTER TABLE `dagl_dept` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table dagl_role
#

DROP TABLE IF EXISTS `dagl_role`;
CREATE TABLE `dagl_role` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `p_id` bigint(20) DEFAULT NULL COMMENT '父类ID',
  `role_code` varchar(40) DEFAULT NULL COMMENT '角色code',
  `role_name` varchar(255) DEFAULT NULL COMMENT '角色名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='权限表';

#
# Dumping data for table dagl_role
#

LOCK TABLES `dagl_role` WRITE;
/*!40000 ALTER TABLE `dagl_role` DISABLE KEYS */;
INSERT INTO `dagl_role` VALUES (1,0,'ROLE_SQ','申请');
INSERT INTO `dagl_role` VALUES (2,0,'ROLE_SH','审核');
INSERT INTO `dagl_role` VALUES (999,0,'ROLE_ADMIN','管理员');
/*!40000 ALTER TABLE `dagl_role` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table dagl_user
#

DROP TABLE IF EXISTS `dagl_user`;
CREATE TABLE `dagl_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增型主键',
  `login_id` varchar(20) NOT NULL DEFAULT '' COMMENT '登录ID',
  `password` varchar(32) NOT NULL COMMENT '登录密码(MD5加密)',
  `user_name` varchar(20) DEFAULT NULL COMMENT '姓名',
  `user_name_py` varchar(20) DEFAULT NULL COMMENT '姓名简拼',
  `gender` int(1) DEFAULT NULL COMMENT '性别(0:女, 1:男)',
  `office_tell` varchar(20) DEFAULT NULL COMMENT '办公室电话',
  `phone_no` varchar(11) DEFAULT NULL COMMENT '个人电话',
  `home_address` varchar(120) DEFAULT NULL COMMENT '家庭住址',
  `emaill` varchar(40) DEFAULT NULL COMMENT '电子信箱',
  `birthday` varchar(10) DEFAULT NULL COMMENT '出生日期(格式:2011-11-22)',
  `id_number` varchar(18) DEFAULT NULL COMMENT '身份证号',
  `card_no` varchar(20) DEFAULT NULL COMMENT '卡号',
  `remark` varchar(400) DEFAULT NULL COMMENT '备注',
  `dept_id` bigint(20) DEFAULT NULL COMMENT '部门ID(关联部门表)',
  `level` varchar(20) DEFAULT NULL COMMENT '职务',
  `sorting` varchar(20) DEFAULT NULL COMMENT '排序号',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `AK_LOGIN_ID` (`LOGIN_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='人员表';

#
# Source for table dagl_user_role
#

DROP TABLE IF EXISTS `dagl_user_role`;
CREATE TABLE `dagl_user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login_id` varchar(20) DEFAULT NULL COMMENT '用户登录ID',
  `role_id` bigint(20) DEFAULT NULL COMMENT '权限ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='用户权限表';


#
# Source for table dagl_jbqk
#

DROP TABLE IF EXISTS `dagl_jbqk`;
CREATE TABLE `dagl_jbqk` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增型主键',
  `user_name` varchar(20) DEFAULT NULL COMMENT '姓名',
  `user_name_py` varchar(20) DEFAULT NULL COMMENT '姓名简拼',
  `gender` int(1) DEFAULT NULL COMMENT '性别(0:女, 1:男)',
  `mz` varchar(20) DEFAULT NULL COMMENT '民族',
  `hyzk` varchar(20) DEFAULT NULL COMMENT '婚姻状况',
  `whcd` varchar(20) DEFAULT NULL COMMENT '文化程度',
  `zzmm` varchar(20) DEFAULT NULL COMMENT '政治面貌',
  `rdsj` varchar(10) DEFAULT NULL COMMENT '入党时间',
  `cgsj` varchar(10) DEFAULT NULL COMMENT '参加工作时间(格式:2011-11-22)',
  `office_tell` varchar(20) DEFAULT NULL COMMENT '办公室电话',
  `phone_no` varchar(11) DEFAULT NULL COMMENT '个人电话',
  `dept_name` varchar(200) DEFAULT NULL COMMENT '单位',
  `dept_type` varchar(100) DEFAULT NULL COMMENT '单位性质',
  `post` varchar(120) DEFAULT NULL COMMENT '职务',
  `level` varchar(120) DEFAULT NULL COMMENT '级别',
  `title` varchar(120) DEFAULT NULL COMMENT '职称',
  `work_name` varchar(200) DEFAULT NULL COMMENT '分管工作',
  `rzsj` varchar(20) DEFAULT NULL COMMENT '任职时间',
  `home_address` varchar(1000) DEFAULT NULL COMMENT '家庭住址',
  `emaill` varchar(40) DEFAULT NULL COMMENT '电子信箱',
  `birthday` varchar(10) DEFAULT NULL COMMENT '出生日期(格式:2011-11-22)',
  `id_number` varchar(18) DEFAULT NULL COMMENT '身份证号',
  `login_id` varchar(20) DEFAULT NULL COMMENT '填报人',
  `create_date` varchar(20) DEFAULT NULL COMMENT '创建时间',
  `remark` varchar(400) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='干部基本情况表';


#
# Source for table dagl_jbqk_detail
#

DROP TABLE IF EXISTS `dagl_jbqk_detail`;
CREATE TABLE `dagl_jbqk_detail` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增型主键',
  `jbqk_id` bigint(20) DEFAULT NULL COMMENT '基本情况表主键ID',
  `type` varchar(20) DEFAULT NULL COMMENT '类别1、个人事项2、信息档案3、例行谈话4、述责述廉5、重大事项6、问题线索7、处置问责8、立案处理',
  `title` varchar(500) DEFAULT NULL COMMENT '标题',
  `memo` text COMMENT '内容',
  `create_date` varchar(20) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='干部基本情况详细表';


#
# Source for table dagl_jbqk_file
#

DROP TABLE IF EXISTS `dagl_jbqk_file`;
CREATE TABLE `dagl_jbqk_file` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增型主键',
  `detail_id` bigint(20) DEFAULT NULL COMMENT '基本情况详细表主键ID',
  `type` varchar(20) DEFAULT NULL COMMENT '类别1、个人事项2、信息档案3、例行谈话4、述责述廉5、重大事项6、问题线索7、处置问责8、立案处理',
  `file_type` varchar(20) DEFAULT NULL COMMENT '文件类型1、图片2、文档3、音频4、视频',
  `file_path` varchar(1000) DEFAULT NULL COMMENT '文件路径',
  `create_date` varchar(20) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='干部基本情况详细附件表';