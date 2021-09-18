-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 11, 2021 at 03:06 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hr_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `department_id` int(10) UNSIGNED NOT NULL,
  `department_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`department_id`, `department_name`) VALUES
(1, 'Management'),
(2, 'FrontEnd'),
(3, 'Backend'),
(4, 'QC'),
(5, 'HR');

-- --------------------------------------------------------

--
-- Table structure for table `employee_manager_mapping`
--

CREATE TABLE `employee_manager_mapping` (
  `employee_manager_mapping_id` int(10) UNSIGNED NOT NULL,
  `emp_id` int(10) UNSIGNED DEFAULT NULL,
  `manager_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee_manager_mapping`
--

INSERT INTO `employee_manager_mapping` (`employee_manager_mapping_id`, `emp_id`, `manager_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `hr`
--

CREATE TABLE `hr` (
  `hr_id` int(10) UNSIGNED NOT NULL,
  `emp_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hr`
--

INSERT INTO `hr` (`hr_id`, `emp_id`) VALUES
(1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '20210822154303_init.js', 1, '2021-08-22 16:22:23'),
(2, '20210824165028_init.js', 2, '2021-08-24 17:24:33'),
(3, '20210824172936_update-limit.js', 3, '2021-08-24 17:33:23');

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

CREATE TABLE `manager` (
  `manager_id` int(10) UNSIGNED NOT NULL,
  `emp_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `manager`
--

INSERT INTO `manager` (`manager_id`, `emp_id`) VALUES
(1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(10) UNSIGNED NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `role`) VALUES
(1, 'Employee'),
(2, 'Team Lead'),
(3, 'HR'),
(4, 'Admin'),
(5, 'Manager');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(255) NOT NULL,
  `sess` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`sess`)),
  `expired` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `sess`, `expired`) VALUES
('xSqtjL2XvHpt7zN-aJ3Hss6EKoBvYgLu', '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-08-31T18:59:24.304Z\",\"httpOnly\":true,\"path\":\"/\"}}', '2021-08-31 18:59:24');

-- --------------------------------------------------------

--
-- Table structure for table `team_lead`
--

CREATE TABLE `team_lead` (
  `lead_id` int(10) UNSIGNED NOT NULL,
  `emp_id` int(10) UNSIGNED DEFAULT NULL,
  `dep_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `team_lead`
--

INSERT INTO `team_lead` (`lead_id`, `emp_id`, `dep_id`) VALUES
(1, 4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `employee_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_role` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `employee_name`, `email`, `password`, `created_at`, `updated_at`, `user_role`) VALUES
(1, 'Badsha', 'badsha@sample.net', '994137957de56715b67032d3d4c451a6', '2021-08-22 16:24:13', '2021-08-22 16:24:13', 1),
(2, 'HR1', 'hr1@sample.net', 'f00f368765acd9868de88e1f1932fc6c', '2021-08-22 16:24:13', '2021-08-22 16:24:13', 3),
(3, 'Manager1', 'manager1@sample.net', '88737b58a123b87543da5b907b65b955', '2021-08-22 16:24:13', '2021-08-22 16:24:13', 5),
(4, 'Frontend team lead', 'Fteamlead@paperplane.net', '0d5c84b47f503778220ea0ea01567f8c', '2021-08-22 16:24:13', '2021-08-22 16:24:13', 2),
(5, 'admin', 'admin@paperplane.net', 'admin@123#', '2021-08-22 16:24:13', '2021-08-22 16:24:13', 4),
(6, 'bb', 'bb@pp.net', '8d28c5dce210d8d3fec787e721e54a1d', '2021-08-24 09:06:56', '2021-08-24 09:06:56', 1);

-- --------------------------------------------------------

--
-- Table structure for table `work_from_home_log`
--

CREATE TABLE `work_from_home_log` (
  `work_from_home_log_id` int(10) UNSIGNED NOT NULL,
  `emp_id` int(10) UNSIGNED DEFAULT NULL,
  `status` int(10) UNSIGNED DEFAULT NULL,
  `Note` varchar(255) DEFAULT NULL,
  `work_log_date` date DEFAULT NULL,
  `status_updated_by` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `work_from_home_log_details`
--

CREATE TABLE `work_from_home_log_details` (
  `work_from_home_log_details_id` int(10) UNSIGNED NOT NULL,
  `wfh_id` int(10) UNSIGNED DEFAULT NULL,
  `task_description` varchar(2000) DEFAULT NULL,
  `task_start_time` time DEFAULT NULL,
  `task_end_time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `work_from_home_log_status`
--

CREATE TABLE `work_from_home_log_status` (
  `work_from_home_log_status_id` int(10) UNSIGNED NOT NULL,
  `work_from_home_log_status_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `work_from_home_log_status`
--

INSERT INTO `work_from_home_log_status` (`work_from_home_log_status_id`, `work_from_home_log_status_name`) VALUES
(1, 'Pending'),
(2, 'Approved'),
(3, 'Rejected');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `employee_manager_mapping`
--
ALTER TABLE `employee_manager_mapping`
  ADD PRIMARY KEY (`employee_manager_mapping_id`),
  ADD KEY `employee_manager_mapping_emp_id_foreign` (`emp_id`),
  ADD KEY `employee_manager_mapping_manager_id_foreign` (`manager_id`);

--
-- Indexes for table `hr`
--
ALTER TABLE `hr`
  ADD PRIMARY KEY (`hr_id`),
  ADD KEY `hr_emp_id_foreign` (`emp_id`);

--
-- Indexes for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`manager_id`),
  ADD KEY `manager_emp_id_foreign` (`emp_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`),
  ADD KEY `sessions_expired_index` (`expired`);

--
-- Indexes for table `team_lead`
--
ALTER TABLE `team_lead`
  ADD PRIMARY KEY (`lead_id`),
  ADD KEY `team_lead_emp_id_foreign` (`emp_id`),
  ADD KEY `team_lead_dep_id_foreign` (`dep_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `users_user_role_foreign` (`user_role`);

--
-- Indexes for table `work_from_home_log`
--
ALTER TABLE `work_from_home_log`
  ADD PRIMARY KEY (`work_from_home_log_id`),
  ADD KEY `work_from_home_log_emp_id_foreign` (`emp_id`),
  ADD KEY `work_from_home_log_status_foreign` (`status`),
  ADD KEY `work_from_home_log_status_updated_by_foreign` (`status_updated_by`);

--
-- Indexes for table `work_from_home_log_details`
--
ALTER TABLE `work_from_home_log_details`
  ADD PRIMARY KEY (`work_from_home_log_details_id`),
  ADD KEY `work_from_home_log_details_wfh_id_foreign` (`wfh_id`);

--
-- Indexes for table `work_from_home_log_status`
--
ALTER TABLE `work_from_home_log_status`
  ADD PRIMARY KEY (`work_from_home_log_status_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `department_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `employee_manager_mapping`
--
ALTER TABLE `employee_manager_mapping`
  MODIFY `employee_manager_mapping_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `hr`
--
ALTER TABLE `hr`
  MODIFY `hr_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `manager`
--
ALTER TABLE `manager`
  MODIFY `manager_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `team_lead`
--
ALTER TABLE `team_lead`
  MODIFY `lead_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `work_from_home_log`
--
ALTER TABLE `work_from_home_log`
  MODIFY `work_from_home_log_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `work_from_home_log_details`
--
ALTER TABLE `work_from_home_log_details`
  MODIFY `work_from_home_log_details_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `work_from_home_log_status`
--
ALTER TABLE `work_from_home_log_status`
  MODIFY `work_from_home_log_status_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee_manager_mapping`
--
ALTER TABLE `employee_manager_mapping`
  ADD CONSTRAINT `employee_manager_mapping_emp_id_foreign` FOREIGN KEY (`emp_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `employee_manager_mapping_manager_id_foreign` FOREIGN KEY (`manager_id`) REFERENCES `manager` (`manager_id`);

--
-- Constraints for table `hr`
--
ALTER TABLE `hr`
  ADD CONSTRAINT `hr_emp_id_foreign` FOREIGN KEY (`emp_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `manager`
--
ALTER TABLE `manager`
  ADD CONSTRAINT `manager_emp_id_foreign` FOREIGN KEY (`emp_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `team_lead`
--
ALTER TABLE `team_lead`
  ADD CONSTRAINT `team_lead_dep_id_foreign` FOREIGN KEY (`dep_id`) REFERENCES `department` (`department_id`),
  ADD CONSTRAINT `team_lead_emp_id_foreign` FOREIGN KEY (`emp_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_user_role_foreign` FOREIGN KEY (`user_role`) REFERENCES `roles` (`role_id`);

--
-- Constraints for table `work_from_home_log`
--
ALTER TABLE `work_from_home_log`
  ADD CONSTRAINT `work_from_home_log_emp_id_foreign` FOREIGN KEY (`emp_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `work_from_home_log_status_foreign` FOREIGN KEY (`status`) REFERENCES `work_from_home_log_status` (`work_from_home_log_status_id`),
  ADD CONSTRAINT `work_from_home_log_status_updated_by_foreign` FOREIGN KEY (`status_updated_by`) REFERENCES `manager` (`manager_id`);

--
-- Constraints for table `work_from_home_log_details`
--
ALTER TABLE `work_from_home_log_details`
  ADD CONSTRAINT `work_from_home_log_details_wfh_id_foreign` FOREIGN KEY (`wfh_id`) REFERENCES `work_from_home_log` (`work_from_home_log_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
