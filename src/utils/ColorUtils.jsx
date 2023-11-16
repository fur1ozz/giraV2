// Text color utility function
export const getMonthTextColor = (creationDate) => {
    const month = new Date(creationDate).getMonth();

    const monthColors = {
        0: 'text-cyan-600',
        1: 'text-teal-600',
        2: 'text-emerald-600',
        3: 'text-green-600',
        4: 'text-lime-600',
        5: 'text-yellow-600',
        6: 'text-amber-600',
        7: 'text-orange-600',
        8: 'text-red-600',
        9: 'text-pink-600',
        10: 'text-violet-600',
        11: 'text-sky-600',
    };

    return monthColors[month] || 'text-neutral-600'; // Default color
};

// Background color utility function
export const getMonthBackgroundColor = (creationDate) => {
    const month = new Date(creationDate).getMonth();

    const monthColors = {
        0: 'bg-cyan-600',
        1: 'bg-teal-600',
        2: 'bg-emerald-600',
        3: 'bg-green-600',
        4: 'bg-lime-600',
        5: 'bg-yellow-600',
        6: 'bg-amber-600',
        7: 'bg-orange-600',
        8: 'bg-red-600',
        9: 'bg-pink-600',
        10: 'bg-violet-600',
        11: 'bg-sky-600',
    };

    return monthColors[month] || 'bg-neutral-600'; // Default color
};
