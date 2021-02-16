import { createSelector } from 'reselect';

const selectSparepart = state => state.sparepartReducer


export const selectSparepartList = createSelector(
    [selectSparepart],
    sparepartRed => sparepartRed.sparepartList
)

export const selectSparepartListFull = createSelector(
    [selectSparepart],
    sparepartRed => sparepartRed.sparepartListFull.data.map(sp => ({
        value: sp.id,
        label: sp.part_number,
    }))
)