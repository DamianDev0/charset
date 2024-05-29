document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById("charts").getContext("2d");
//
    const name = ["damian", "alejandro", "diego", "pedro"];
    const ages = [34, 23, 45, 58];

    const chart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: name,
            datasets: [
                {
                    label: "Edad",
                    data: ages,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(255, 206, 86, 0.2)"
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(255, 206, 86, 1)"
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw} años`;
                        }
                    }
                }
            }
        }
    });
});
