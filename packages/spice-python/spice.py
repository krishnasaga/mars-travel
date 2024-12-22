'''
Plot Earth-Mars relative distance for years 2040-2050
'''

# AWP libraries
import spice_data  as sd
import spice_tools as st

# 3rd party libraries
import spiceypy as spice
import numpy as np
import matplotlib.pyplot as plt
plt.style.use( 'dark_background' )

if __name__ == '__main__':
    spice.furnsh( sd.leapseconds_kernel )
    spice.furnsh( sd.de432  )

    et0   = spice.str2et( '2024-01-01' )
    et1   = spice.str2et( '2034-01-01' )

    ets   = np.arange( et0, et1, 50000 )
    rs    = st.calc_ephemeris( 399, ets, 'J2000', 4 )[ :, :3 ]
   
    dists = np.linalg.norm( rs, axis = 1 ) / 149.6e6
    ts    = ( ets - et0 ) / ( 3600 * 24 * 365.0 ) + 2024.0

    print(rs);
    
    plt.figure( figsize = ( 12, 8 ) )
    plt.plot( ts, dists, 'm' )
    plt.xlabel( 'Time (years)' )
    plt.ylabel( 'Earth-Mars Relative Distance (AU)' )
    plt.title( 'Earth-Mars Relative Distance {0} - {1}'.format(et0,et1) )
    plt.grid()
    plt.show()
