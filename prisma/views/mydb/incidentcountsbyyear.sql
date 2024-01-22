SELECT
  row_number() OVER (
    ORDER BY
      min(`mydb`.`incidents`.`date_time_of_call`)
  ) AS `incident_year_id`,
  date_format(`mydb`.`incidents`.`date_time_of_call`, '%Y') AS `year`,
  count(0) AS `incident_count`
FROM
  `mydb`.`incidents`
GROUP BY
  `year`
ORDER BY
  `incident_count` DESC