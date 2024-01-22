SELECT
  `i`.`incidentNumber` AS `incidentNumber`,
  `i`.`date_time_of_call` AS `date_time_of_call`,
  `i`.`finYear` AS `finYear`,
  `i`.`pump_count` AS `pump_count`,
  `i`.`pump_hours_total` AS `pump_hours_total`,
  `a`.`name` AS `name`
FROM
  (
    `mydb`.`incidents` `i`
    LEFT JOIN `mydb`.`animalgroupparents` `a` ON((`a`.`id` = `i`.`animal_group_parents_id`))
  )
WHERE
  (`i`.`pump_count` = 3)