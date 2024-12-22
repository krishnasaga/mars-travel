# Export `ets` and `rs` to JSON
import spiceypy as spice
import numpy as np
import spice_data as sd
import spice_tools as st
import json

def main():
    # Load SPICE kernels
    spice.furnsh(sd.leapseconds_kernel)
    spice.furnsh(sd.de432)

    # Define time range
    et0 = spice.str2et('2024-01-01')
    et1 = spice.str2et('2034-01-01')

    # Generate ephemeris time array and calculate positions
    ets = np.arange(et0, et1, 50000)
    rs = st.calc_ephemeris(399, ets, 'J2000', 4)[:, :3]
    dists = np.linalg.norm( rs, axis = 1 )

    # Prepare data for JSON
    data = [{"et": float(et), "rs": rs_row.tolist()} for et, rs_row in zip(ets, dists)]

    # Write to a JSON file
    output_file = "earth_mars_data.json"
    with open(output_file, "w") as f:
        json.dump(data, f, indent=4)

    print(f"Data has been written to {output_file}")

if __name__ == '__main__':
    main()
