import React from 'react'
import { ResponsiveSunburst } from '@nivo/sunburst'
import { Sunburst } from '../chartData/sunburstData'
import '../chart/chart.css'
import { ResponsiveChord } from '@nivo/chord'
import { LineData } from '../chartData/barData'
import { ResponsiveBar } from '@nivo/bar'

import { BarrData } from '../chartData/barrData'

const MyResponsiveSunburst = () => {
    return (
        <div>
            <div className='container'>
                <div className='row  m-3 p-3'>
                    <div className='col chart-row'>
                        <h2>Closure </h2>
                        <h3>Chart</h3>
                        <div style={{ height: '200px', width: '200px' }} >
                            <ResponsiveSunburst
                                data={Sunburst}
                                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                                id="name"

                                value="loc"
                                cornerRadius={2}
                                borderColor={{ theme: 'background' }}
                                colors={{ scheme: 'nivo' }}
                                childColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'brighter',
                                            0.1
                                        ]
                                    ]
                                }}
                                enableArcLabels={true}
                                arcLabelsSkipAngle={10}
                                arcLabelsTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1.4
                                        ]
                                    ]
                                }}
                            />
                        </div>
                    </div>
                    <div className='col chart-row'>
                        <h2>Closure</h2>
                        <h3>Chart</h3>
                        <div style={{ height: '200px', width: '200px' }} >
                            <ResponsiveSunburst
                                data={Sunburst}
                                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                                id="name"

                                value="loc"
                                cornerRadius={2}
                                borderColor={{ theme: 'background' }}
                                colors={{ scheme: 'nivo' }}
                                childColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'brighter',
                                            0.1
                                        ]
                                    ]
                                }}
                                enableArcLabels={true}
                                arcLabelsSkipAngle={10}
                                arcLabelsTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1.4
                                        ]
                                    ]
                                }}
                            />
                        </div>
                    </div>
                    <div className='col chart-row'>
                        <h2>Closure</h2>
                        <h3>Chart</h3>
                        <div style={{ height: '200px', width: '200px' }} >
                            <ResponsiveSunburst
                                data={Sunburst}
                                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                                id="name"

                                value="loc"
                                cornerRadius={2}
                                borderColor={{ theme: 'background' }}
                                colors={{ scheme: 'nivo' }}
                                childColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'brighter',
                                            0.1
                                        ]
                                    ]
                                }}
                                enableArcLabels={true}
                                arcLabelsSkipAngle={10}
                                arcLabelsTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1.4
                                        ]
                                    ]
                                }}
                            />
                        </div>
                    </div>
                    <div className='col chart-row'>
                        <h2>Closure</h2>
                        <h3>Chart</h3>
                        <div style={{ height: '200px', width: '200px' }} >
                            <ResponsiveSunburst
                                data={Sunburst}
                                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                                id="name"

                                value="loc"
                                cornerRadius={2}
                                borderColor={{ theme: 'background' }}
                                colors={{ scheme: 'nivo' }}
                                childColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'brighter',
                                            0.1
                                        ]
                                    ]
                                }}
                                enableArcLabels={true}
                                arcLabelsSkipAngle={10}
                                arcLabelsTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1.4
                                        ]
                                    ]
                                }}
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className='container '>
                <div className='row mx-5 p-3'>
                    <div className='col-3 chart-row2' style={{ height: '350px', width: '450px' }}>
                        <h2>Closure</h2>
                        <h3>Chart</h3>
                        <div style={{ height: '300px', width: '450px' }} >
                            <ResponsiveChord
                                data={LineData}
                                keys={['John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim']}
                                margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
                                valueFormat=".2f"
                                padAngle={0.02}
                                innerRadiusRatio={0.96}
                                innerRadiusOffset={0.02}
                                inactiveArcOpacity={0.25}
                                arcBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                activeRibbonOpacity={0.75}
                                inactiveRibbonOpacity={0.25}
                                ribbonBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                labelRotation={-90}
                                labelTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1
                                        ]
                                    ]
                                }}
                                colors={{ scheme: 'nivo' }}
                                motionConfig="stiff"
                                legends={[
                                    {
                                        anchor: 'bottom',
                                        direction: 'row',
                                        justify: false,
                                        translateX: 0,
                                        translateY: 70,
                                        itemWidth: 80,
                                        itemHeight: 14,
                                        itemsSpacing: 0,
                                        itemTextColor: '#999',
                                        itemDirection: 'left-to-right',
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemTextColor: '#000'
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />

                        </div>

                    </div>
                    <div className='col-3 chart-row2' style={{ height: '350px', width: '450px' }}>
                        <h2>Closure</h2>
                        <h3>Chart</h3>
                        <div style={{ height: '300px', width: '450px' }} >
                            <ResponsiveChord
                                data={LineData}
                                keys={['John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim']}
                                margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
                                valueFormat=".2f"
                                padAngle={0.02}
                                innerRadiusRatio={0.96}
                                innerRadiusOffset={0.02}
                                inactiveArcOpacity={0.25}
                                arcBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                activeRibbonOpacity={0.75}
                                inactiveRibbonOpacity={0.25}
                                ribbonBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                labelRotation={-90}
                                labelTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1
                                        ]
                                    ]
                                }}
                                colors={{ scheme: 'nivo' }}
                                motionConfig="stiff"
                                legends={[
                                    {
                                        anchor: 'bottom',
                                        direction: 'row',
                                        justify: false,
                                        translateX: 0,
                                        translateY: 70,
                                        itemWidth: 80,
                                        itemHeight: 14,
                                        itemsSpacing: 0,
                                        itemTextColor: '#999',
                                        itemDirection: 'left-to-right',
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemTextColor: '#000'
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />

                        </div>

                    </div>
                    <div className='col-3 chart-row2' style={{ height: '350px', width: '450px' }}>
                        <h2>Closure</h2>
                        <h3>Chart</h3>
                        <div style={{ height: '300px', width: '450px' }} >
                            <ResponsiveChord
                                data={LineData}
                                keys={['John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim']}
                                margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
                                valueFormat=".2f"
                                padAngle={0.02}
                                innerRadiusRatio={0.96}
                                innerRadiusOffset={0.02}
                                inactiveArcOpacity={0.25}
                                arcBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                activeRibbonOpacity={0.75}
                                inactiveRibbonOpacity={0.25}
                                ribbonBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                labelRotation={-90}
                                labelTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1
                                        ]
                                    ]
                                }}
                                colors={{ scheme: 'nivo' }}
                                motionConfig="stiff"
                                legends={[
                                    {
                                        anchor: 'bottom',
                                        direction: 'row',
                                        justify: false,
                                        translateX: 0,
                                        translateY: 70,
                                        itemWidth: 80,
                                        itemHeight: 14,
                                        itemsSpacing: 0,
                                        itemTextColor: '#999',
                                        itemDirection: 'left-to-right',
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemTextColor: '#000'
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />

                        </div>

                    </div>
                    <div className='col-3 chart-row2' style={{ height: '350px', width: '450px' }}>
                        <h2>Closure</h2>
                        <h3>Chart</h3>
                        <div style={{ height: '300px', width: '450px' }} >
                            <ResponsiveChord
                                data={LineData}
                                keys={['John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim']}
                                margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
                                valueFormat=".2f"
                                padAngle={0.02}
                                innerRadiusRatio={0.96}
                                innerRadiusOffset={0.02}
                                inactiveArcOpacity={0.25}
                                arcBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                activeRibbonOpacity={0.75}
                                inactiveRibbonOpacity={0.25}
                                ribbonBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                labelRotation={-90}
                                labelTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1
                                        ]
                                    ]
                                }}
                                colors={{ scheme: 'nivo' }}
                                motionConfig="stiff"
                                legends={[
                                    {
                                        anchor: 'bottom',
                                        direction: 'row',
                                        justify: false,
                                        translateX: 0,
                                        translateY: 70,
                                        itemWidth: 80,
                                        itemHeight: 14,
                                        itemsSpacing: 0,
                                        itemTextColor: '#999',
                                        itemDirection: 'left-to-right',
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemTextColor: '#000'
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />

                        </div>

                    </div>
                </div>


            </div>

            <div className='container '>
                <div className='row mx-5 p-3'>
                    <div className='col-3 chart-row2' style={{ height: '350px', width: '450px' }}>
                        <h2>Closure</h2>
                        <h3>Chart</h3>
                        <div style={{ height: '300px', width: '450px' }} >
                            <ResponsiveBar
                                data={BarrData}
                                keys={[
                                    'hot dog',
                                    'burger',
                                    'sandwich',
                                    'kebab',
                                    'fries',
                                    'donut'
                                ]}
                                indexBy="country"
                                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                padding={0.3}
                                valueScale={{ type: 'linear' }}
                                indexScale={{ type: 'band', round: true }}
                                colors={{ scheme: 'nivo' }}
                                defs={[
                                    {
                                        id: 'dots',
                                        type: 'patternDots',
                                        background: 'inherit',
                                        color: '#38bcb2',
                                        size: 4,
                                        padding: 1,
                                        stagger: true
                                    },
                                    {
                                        id: 'lines',
                                        type: 'patternLines',
                                        background: 'inherit',
                                        color: '#eed312',
                                        rotation: -45,
                                        lineWidth: 6,
                                        spacing: 10
                                    }
                                ]}
                                fill={[
                                    {
                                        match: {
                                            id: 'fries'
                                        },
                                        id: 'dots'
                                    },
                                    {
                                        match: {
                                            id: 'sandwich'
                                        },
                                        id: 'lines'
                                    }
                                ]}
                                borderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1.6
                                        ]
                                    ]
                                }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'country',
                                    legendPosition: 'middle',
                                    legendOffset: 32
                                }}
                                axisLeft={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'food',
                                    legendPosition: 'middle',
                                    legendOffset: -40
                                }}
                                labelSkipWidth={12}
                                labelSkipHeight={12}
                                labelTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1.6
                                        ]
                                    ]
                                }}
                                legends={[
                                    {
                                        dataFrom: 'keys',
                                        anchor: 'bottom-right',
                                        direction: 'column',
                                        justify: false,
                                        translateX: 120,
                                        translateY: 0,
                                        itemsSpacing: 2,
                                        itemWidth: 100,
                                        itemHeight: 20,
                                        itemDirection: 'left-to-right',
                                        itemOpacity: 0.85,
                                        symbolSize: 20,
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemOpacity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]}
                                role="application"
                                ariaLabel="Nivo bar chart demo"
                                barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                            />

                        </div>

                    </div>
                    
                    <div className='col-3 chart-row2' style={{ height: '350px', width: '450px' }}>
                        <h2>Closure</h2>
                        <h3>Chart</h3>
                        <div style={{ height: '300px', width: '450px' }} >
                            <ResponsiveBar
                                data={BarrData}
                                keys={[
                                    'hot dog',
                                    'burger',
                                    'sandwich',
                                    'kebab',
                                    'fries',
                                    'donut'
                                ]}
                                indexBy="country"
                                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                padding={0.3}
                                valueScale={{ type: 'linear' }}
                                indexScale={{ type: 'band', round: true }}
                                colors={{ scheme: 'nivo' }}
                                defs={[
                                    {
                                        id: 'dots',
                                        type: 'patternDots',
                                        background: 'inherit',
                                        color: '#38bcb2',
                                        size: 4,
                                        padding: 1,
                                        stagger: true
                                    },
                                    {
                                        id: 'lines',
                                        type: 'patternLines',
                                        background: 'inherit',
                                        color: '#eed312',
                                        rotation: -45,
                                        lineWidth: 6,
                                        spacing: 10
                                    }
                                ]}
                                fill={[
                                    {
                                        match: {
                                            id: 'fries'
                                        },
                                        id: 'dots'
                                    },
                                    {
                                        match: {
                                            id: 'sandwich'
                                        },
                                        id: 'lines'
                                    }
                                ]}
                                borderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1.6
                                        ]
                                    ]
                                }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'country',
                                    legendPosition: 'middle',
                                    legendOffset: 32
                                }}
                                axisLeft={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'food',
                                    legendPosition: 'middle',
                                    legendOffset: -40
                                }}
                                labelSkipWidth={12}
                                labelSkipHeight={12}
                                labelTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1.6
                                        ]
                                    ]
                                }}
                                legends={[
                                    {
                                        dataFrom: 'keys',
                                        anchor: 'bottom-right',
                                        direction: 'column',
                                        justify: false,
                                        translateX: 120,
                                        translateY: 0,
                                        itemsSpacing: 2,
                                        itemWidth: 100,
                                        itemHeight: 20,
                                        itemDirection: 'left-to-right',
                                        itemOpacity: 0.85,
                                        symbolSize: 20,
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemOpacity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]}
                                role="application"
                                ariaLabel="Nivo bar chart demo"
                                barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                            />

                        </div>

                    </div>
                   
                </div>


            </div>
        </div>




    )

}

export default MyResponsiveSunburst;