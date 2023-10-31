-- enter your SQL query here
-- use the SQL editor UI in browser to browse the SQL database
-- only write your SELECT statement here, comment rest of the statements if present

SELECT
    admission_date,
    SUM(admission_date) as admission_day,
    SUM(admission_date) - LAG(SUM(admission_date)) OVER(ORDER BY admission_date ASC) AS admission_count_change 
FROM admissions
GROUP BY admission_date
ORDER BY admission_date DESC;
