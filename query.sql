-- Running Total of Invoices per Customer

WITH InvoiceJoin AS (
    SELECT 
        i1."CustomerId",
        i1."InvoiceDate" AS "InvoiceDate",
        SUM(i1."Total") AS "RunningTotal"
    FROM "Invoice" i1
    JOIN "Invoice" i2 ON i1."CustomerId" = i2."CustomerId" 
    AND i2."InvoiceDate" >= i1."InvoiceDate" 
    GROUP BY i1."CustomerId", i1."InvoiceDate", i1."Total" 
)

SELECT 
    "CustomerId", 
    "InvoiceDate", 
    "RunningTotal"
FROM InvoiceJoin; 
