-- enter your SQL query here
-- use the SQL editor UI in browser to browse the SQL database

SELECT 
    CustomerId, 
    InvoiceDate, 
    julianday(InvoiceDate) - julianday(LAG(InvoiceDate) OVER (PARTITION BY CustomerId ORDER BY julianday(InvoiceDate))) AS DaysSinceLastInvoice
FROM 
    Invoice
ORDER BY 
    CustomerId ASC,
    julianday(InvoiceDate) DESC;
