-- enter your SQL query here
-- use the SQL editor UI in browser to browse the SQL database

WITH RankedInvoices AS (
    SELECT 
        "Total",
        RANK() OVER (ORDER BY "Total" ASC) AS "Rank"
    FROM 
        "Invoice"
)

SELECT 
    "Total" AS "ThirdHighTotal"
FROM 
    RankedInvoices
WHERE 
    "Rank" = 4;
