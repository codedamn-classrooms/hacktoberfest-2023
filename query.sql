-- enter your SQL query here
-- use the SQL editor UI in browser to browse the SQL database

SELECT
    c."CustomerId",
    MAX(i."InvoiceId") AS "MaxInvoiceDate"
FROM 
    "Customer" c
JOIN
    "Invoice" i
ON 
    c."CustomerId" = i."CustomerId"
GROUP BY 
    c."CustomerId"
ORDER BY 
    c."CustomerId" ASC;

