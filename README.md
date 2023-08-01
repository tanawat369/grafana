# grafana
grafana docker

query cmd
SELECT
  UNIX_TIMESTAMP(Timestamp) as time_sec,
  cast(Flow as signed) as value
 FROM stock
WHERE $__timeFilter(Timestamp)
ORDER BY Timestamp ASC
