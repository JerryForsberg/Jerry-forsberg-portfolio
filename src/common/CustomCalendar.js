import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomCalendar.scss';

const CustomCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState({});
    const [cumulativeTotals, setCumulativeTotals] = useState({});
    const [editingTransaction, setEditingTransaction] = useState(null); // Track the transaction being edited

    const handleDateChange = (date) => {
        console.log('Selected Date:', selectedDate);
        setSelectedDate(date);
    };

    // Wrapper function to update events and recalculate cumulative totals
    const updateEvents = (updater) => {
        setEvents((prev) => {
            const updatedEvents = typeof updater === 'function' ? updater(prev) : updater;
            const updatedCumulativeTotals = calculateCumulativeTotals(updatedEvents);
            setCumulativeTotals(updatedCumulativeTotals);
            return updatedEvents;
        });
    };

    useEffect(() => {
        const savedEvents = localStorage.getItem('calendarEvents');
        const savedTotals = localStorage.getItem('cumulativeTotals');

        if (savedEvents) {
            setEvents(JSON.parse(savedEvents));
        } else {
            console.warn('No events found in localStorage');
        }
        if (savedTotals) {
            setCumulativeTotals(JSON.parse(savedTotals));
        } else {
            console.warn('No cumulative totals found in localStorage');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('calendarEvents', JSON.stringify(events));
        localStorage.setItem('cumulativeTotals', JSON.stringify(cumulativeTotals));
    }, [events, cumulativeTotals]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const description = e.target.description.value;
        const type = e.target.type.value;
        const amount = parseFloat(e.target.amount.value) || 0;
        const isRecurring = e.target.isRecurring.checked;
        const intervalValue = parseInt(e.target.intervalValue.value, 10) || 1;
        const intervalType = e.target.intervalType.value;
        const key = selectedDate.toISOString().split('T')[0];
        console.log('Updated Events:', events);

        const newTransaction = {
            id: editingTransaction ? editingTransaction.id : Date.now(),
            description,
            type,
            amount,
            isRecurring,
            interval: { value: intervalValue, type: intervalType },
            timestamp: new Date().toISOString(),
        };

        updateEvents((prev) => {
            const updatedEvents = { ...prev };

            if (editingTransaction) {
                // Update the existing transaction
                const transactionDateKey = editingTransaction.dateKey;
                updatedEvents[transactionDateKey] = updatedEvents[transactionDateKey].map((transaction) =>
                    transaction.id === editingTransaction.id ? newTransaction : transaction
                );
            } else {
                // Add a new transaction
                updatedEvents[key] = [...(updatedEvents[key] || []), newTransaction];
            }

            return updatedEvents;
        });

        setEditingTransaction(null); // Clear editing state
        e.target.reset();
    };

    const handleEditTransaction = (dateKey, transaction) => {
        setEditingTransaction({ ...transaction, dateKey });
        setSelectedDate(new Date(dateKey));
    };

    const handleRemoveTransaction = (dateKey, transactionId) => {
        updateEvents((prev) => {
            const updatedEvents = {
                ...prev,
                [dateKey]: prev[dateKey].filter((transaction) => transaction.id !== transactionId),
            };

            if (updatedEvents[dateKey].length === 0) {
                delete updatedEvents[dateKey];
            }

            return updatedEvents;
        });
    };

    const calculateDayTotal = (transactions) => {
        return transactions.reduce((total, transaction) => {
            return total + (transaction.type === 'income' ? transaction.amount : -transaction.amount);
        }, 0);
    };

    const generateDateRange = (startDate, endDate) => {
        const dates = [];
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            dates.push(currentDate.toISOString().split('T')[0]); // Add date in YYYY-MM-DD format
            currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
        }

        return dates;
    };

    const calculateCumulativeTotals = (updatedEvents = events) => {
        // Determine the earliest and latest dates
        const eventDates = Object.keys(updatedEvents);
        const recurringDates = [];

        // Collect all recurring transaction dates
        Object.keys(updatedEvents).forEach((eventDateKey) => {
            const transactions = updatedEvents[eventDateKey] || [];
            transactions.forEach((transaction) => {
                if (transaction.isRecurring) {
                    const transactionDate = new Date(eventDateKey);
                    const { value, type } = transaction.interval;

                    // Generate all recurring dates for this transaction
                    let currentDate = new Date(transactionDate);
                    while (currentDate <= new Date()) {
                        recurringDates.push(currentDate.toISOString().split('T')[0]);

                        // Increment the date based on the interval type
                        if (type === 'daily') {
                            currentDate.setDate(currentDate.getDate() + value);
                        } else if (type === 'weekly') {
                            currentDate.setDate(currentDate.getDate() + value * 7);
                        } else if (type === 'monthly') {
                            currentDate = addMonthsSafely(currentDate, value);
                        }
                    }
                }
            });
        });

        // Combine event dates and recurring dates to find the full range
        const allDates = [...eventDates, ...recurringDates];
        const earliestDate = new Date(Math.min(...allDates.map((date) => new Date(date).getTime())));
        const latestDate = new Date(); // Start from today
        latestDate.setFullYear(latestDate.getFullYear() + 1); // Set max date to one year from today

        // Generate all dates between the earliest and latest dates
        const completeDateRange = generateDateRange(earliestDate, latestDate);
        console.log('Complete Date Range:', completeDateRange);
        console.log('Events:', updatedEvents);

        let runningTotal = 0;
        const totals = {};

        // Calculate cumulative totals for all dates
        completeDateRange.forEach((date) => {
            const originalTransactions = updatedEvents[date] || [];
            const recurringTransactions = getRecurringTransactions(date, updatedEvents); // Include recurring transactions
            const dayTransactions = [...originalTransactions, ...recurringTransactions];

            const dayTotal = calculateDayTotal(dayTransactions); // Calculate total for the day
            runningTotal += dayTotal; // Update the running total
            totals[date] = runningTotal; // Store the cumulative total for the date
        });

        return totals; // Return the calculated totals
    };

    const addMonthsSafely = (date, months) => {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() + months);

        // Handle cases where the target month has fewer days
        if (newDate.getDate() !== date.getDate()) {
            newDate.setDate(0); // Set to the last day of the previous month
        }

        return newDate;
    };

    const getRecurringTransactions = (dateKey, updatedEvents = events) => {
        const allTransactions = [];
        const currentDate = new Date(dateKey);

        Object.keys(updatedEvents).forEach((eventDateKey) => {
            const transactions = updatedEvents[eventDateKey] || [];
            transactions.forEach((transaction) => {
                if (transaction.isRecurring) {
                    const transactionDate = new Date(eventDateKey);
                    const { value, type } = transaction.interval;

                    if (type === 'daily') {
                        const diffInDays = Math.floor(
                            (currentDate - transactionDate) / (1000 * 60 * 60 * 24)
                        );
                        if (diffInDays > 0 && diffInDays % value === 0) {
                            allTransactions.push({ ...transaction, isRecurringInstance: true });
                        }
                    } else if (type === 'weekly') {
                        const diffInDays = Math.floor(
                            (currentDate - transactionDate) / (1000 * 60 * 60 * 24)
                        );
                        if (diffInDays > 0 && diffInDays % (value * 7) === 0) {
                            allTransactions.push({ ...transaction, isRecurringInstance: true });
                        }
                    } else if (type === 'monthly') {
                        const diffInMonths =
                            currentDate.getMonth() -
                            transactionDate.getMonth() +
                            12 * (currentDate.getFullYear() - transactionDate.getFullYear());

                        const expectedDate = addMonthsSafely(transactionDate, diffInMonths);

                        if (
                            diffInMonths > 0 && // Ensure it's not the original transaction date
                            diffInMonths % value === 0 &&
                            currentDate.getTime() === expectedDate.getTime()
                        ) {
                            allTransactions.push({ ...transaction, isRecurringInstance: true });
                        }
                    }
                }
            });
        });

        return allTransactions;
    };

    const renderDayContent = (day) => {
        console.log('Day passed to renderDayContent:', day);
        const dateKey = day.toISOString().split('T')[0];
        const originalTransactions = events[dateKey] || [];
        const recurringTransactions = getRecurringTransactions(dateKey);
        const dayTransactions = [...originalTransactions, ...recurringTransactions];
        console.log('Rendering content for date:', dateKey);
        console.log('cumulativeTotals:', cumulativeTotals);
        console.log('events:', events);
        const cumulativeTotal = cumulativeTotals[dateKey] || 0;

        return (
            <div className="calendar-day-card">
                <div className="day-number">{day.getDate()}</div>
                <div className="transactions-list">
                    {dayTransactions.map((transaction) => (
                        <div key={transaction.id} className="transaction-item">
                            <div className="description">{transaction.description}
                                {transaction.isRecurringInstance && <p className='recurring-transaction'>Recurring</p>}
                            </div>
                            <div className={`amount ${transaction.type}`}>
                                {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                            </div>
                            {!transaction.isRecurringInstance && (
                                <>
                                    <button
                                        className="edit-transaction"
                                        onClick={() => handleEditTransaction(dateKey, transaction)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="remove-transaction"
                                        onClick={() => handleRemoveTransaction(dateKey, transaction.id)}
                                    >
                                        X
                                    </button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className={`cumulative-total ${cumulativeTotal >= 0 ? 'positive' : 'negative'}`}>
                    Total: ${Math.abs(cumulativeTotal).toFixed(2)}
                </div>
            </div>
        );
    };

    return (
        <div className="calendar-container">
            <h2>Transaction Calendar</h2>
            <div className="calendar-layout">
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    inline
                    renderDayContents={(day, date) => renderDayContent(date)}
                    calendarClassName="custom-calendar"
                />
                {selectedDate && (
                    <form onSubmit={handleSubmit} className="transaction-form">
                        <h3>{editingTransaction ? 'Edit Transaction' : 'Add Transaction'} for {selectedDate.toLocaleDateString()}</h3>
                        <div className="form-group">
                            <label>Description:</label>
                            <input
                                type="text"
                                name="description"
                                required
                                defaultValue={editingTransaction?.description || ''}
                                placeholder="Enter description"
                            />
                        </div>
                        <div className="form-group">
                            <label>Type:</label>
                            <select name="type" required defaultValue={editingTransaction?.type || 'income'}>
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Amount:</label>
                            <input
                                type="number"
                                name="amount"
                                step="0.01"
                                min="0"
                                required
                                defaultValue={editingTransaction?.amount || ''}
                                placeholder="Enter amount"
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="isRecurring"
                                    defaultChecked={editingTransaction?.isRecurring || false}
                                />
                                Recurring
                            </label>
                        </div>
                        <div className="form-group">
                            <label>Interval:</label>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <input
                                    type="number"
                                    name="intervalValue"
                                    min="1"
                                    defaultValue={editingTransaction?.interval?.value || 1}
                                    style={{ width: '60px' }}
                                />
                                <select
                                    name="intervalType"
                                    defaultValue={editingTransaction?.interval?.type || 'daily'}
                                >
                                    <option value="daily">Days</option>
                                    <option value="weekly">Weeks</option>
                                    <option value="monthly">Months</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit">{editingTransaction ? 'Update Transaction' : 'Add Transaction'}</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default CustomCalendar;