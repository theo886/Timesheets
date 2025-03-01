import { useState, useEffect } from 'react';

const useWeeklyTracker = () => {
  const [entries, setEntries] = useState([
    { id: Date.now(), projectId: "", percentage: "100", isManuallySet: false }
  ]);
  const [manuallyEditedIds, setManuallyEditedIds] = useState(new Set());
  const [isPinned, setIsPinned] = useState(false);
  const [error, setError] = useState("");
  const [previousSubmissions, setPreviousSubmissions] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(() => {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(today.setDate(diff));
    monday.setHours(0, 0, 0, 0);
    return monday;
  });

  const formatWeekRange = (startDate) => {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);
    
    const formatDate = (date) => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    };
    
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  const calculateTotal = () => {
    return entries.reduce((sum, entry) => {
      const percentage = parseInt(entry.percentage) || 0;
      return sum + percentage;
    }, 0);
  };

  const isDuplicateProject = (projectId) => {
    return entries.filter(entry => entry.projectId === projectId).length > 1;
  };

  const submitTimesheet = () => {
    const total = calculateTotal();
    
    if (total !== 100) {
      setError("Total percentage must equal 100%");
      return;
    }
    
    if (entries.some(entry => !entry.projectId)) {
      setError("Please select a project for all entries");
      return;
    }
    
    const projectIds = entries.map(entry => entry.projectId);
    const uniqueProjectIds = new Set(projectIds);
    
    if (uniqueProjectIds.size !== projectIds.length) {
      setError("Duplicate projects are not allowed");
      return;
    }
    
    const timesheetData = {
      weekStarting: formatWeekRange(currentWeek),
      entries: entries.map(entry => ({
        projectId: entry.projectId,
        percentage: entry.percentage
      })),
      total: total
    };
    
    console.log("Submitting timesheet:", timesheetData);
    
    const weekKey = formatWeekRange(currentWeek);
    setPreviousSubmissions({
      ...previousSubmissions,
      [weekKey]: [...entries]
    });
    
    setIsSubmitted(true);
    setIsModified(false);
  };

  return {
    entries,
    setEntries,
    manuallyEditedIds,
    setManuallyEditedIds,
    isPinned,
    setIsPinned,
    error,
    setError,
    previousSubmissions,
    setPreviousSubmissions,
    isSubmitted,
    setIsSubmitted,
    isModified,
    setIsModified,
    currentWeek,
    setCurrentWeek,
    formatWeekRange,
    calculateTotal,
    isDuplicateProject,
    submitTimesheet
  };
};

export default useWeeklyTracker;