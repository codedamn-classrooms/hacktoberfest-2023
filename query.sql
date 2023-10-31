-- enter your SQL query here
-- use the SQL editor UI in browser to browse the SQL database

SELECT
    i."CustomerId",
    MAX(i."InvoiceDate") AS "MaxInvoiceDate"
FROM 
    "Customer" c
LEFT JOIN
    "Invoice" i
ON 
    c."CustomerId" = i."CustomerId"
GROUP BY 
    i."CustomerId"
ORDER BY 
    c."CustomerId" ASC;
