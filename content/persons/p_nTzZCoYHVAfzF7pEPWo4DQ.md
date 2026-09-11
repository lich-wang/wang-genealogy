---
schema: wang-person/v1
id: p_nTzZCoYHVAfzF7pEPWo4DQ
status: active
merged_into: null
display_name: 王承衎
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8VNnby47jN5aDiAaAB2GH6
        subject_person_id: p_nTzZCoYHVAfzF7pEPWo4DQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承衎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3w3WjDiDJXg6Z1CL2e1Rk8
          claim_id: c_8VNnby47jN5aDiAaAB2GH6
          source_id: s_DDAMZaL3iDuNQjXrQ76pyK
          stance: supports
          locator: CBDB:17747
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17747）
          source: &a1
            id: s_DDAMZaL3iDuNQjXrQ76pyK
            source_type: api_record
            title: 中国历代人物传记资料库：王承衎（CBDB 17747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17747&o=json
            external_identifier: CBDB:17747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wpPZ77trCvDhv1Q69eLK4J
        subject_person_id: p_nTzZCoYHVAfzF7pEPWo4DQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 961年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AmHkGS9KjjmBZwpsPhy7SB
          claim_id: c_wpPZ77trCvDhv1Q69eLK4J
          source_id: s_DDAMZaL3iDuNQjXrQ76pyK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_h6L74qxqoAcc2Hx23h5bAN
        subject_person_id: p_nTzZCoYHVAfzF7pEPWo4DQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1009年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DVCpvyi45JKyve6pBc4oxC
          claim_id: c_h6L74qxqoAcc2Hx23h5bAN
          source_id: s_DDAMZaL3iDuNQjXrQ76pyK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gn9z27LeTEfdQkTtRUFiec
        subject_person_id: p_nTzZCoYHVAfzF7pEPWo4DQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承衎（961年—1009年），宋人物。籍贯洛陽，身份为武將、詩人，曾任刺史、監軍、尚食使。（中国历代人物传记资料库 CBDB 17747）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j1WxnZ_ICfgFFmtjyAxl_s
          claim_id: c_gn9z27LeTEfdQkTtRUFiec
          source_id: s_DDAMZaL3iDuNQjXrQ76pyK
          stance: supports
          locator: CBDB:17747
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pvd9Fh73E00AZE4D_BMEAW
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nTzZCoYHVAfzF7pEPWo4DQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mXLrvDBUJGXFAIdh3LQXjQ
          claim_id: c_pvd9Fh73E00AZE4D_BMEAW
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
          stance: supports
          locator: CBDB 双向互证（子 王承衎 ⇄ 父 王審琦）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_kXDqY3oX1V5PnHzqot3UVv
            source_type: api_record
            title: 中国历代人物传记资料库：王審琦（CBDB 3976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json
            external_identifier: CBDB:3976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3FwfmVLuawARCoZyhyo5mg
        status: active
        display_name: 王審琦
        merged_into_person_id: null
  children:
    - claim:
        id: c_gvwxbbn8T14NkSoW7SF_vY
        subject_person_id: p_nTzZCoYHVAfzF7pEPWo4DQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fZCKDibqxiGEPCHN3pgHKu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XZTdUYIe0gwWSnfmAPy70a
          claim_id: c_gvwxbbn8T14NkSoW7SF_vY
          source_id: s_kioaNN46XxQssV2VBjYCrn
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kioaNN46XxQssV2VBjYCrn
            source_type: api_record
            title: 中国历代人物传记资料库：王世文（CBDB 119757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119757&o=json
            external_identifier: CBDB:119757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fZCKDibqxiGEPCHN3pgHKu
        status: active
        display_name: 王世文
        merged_into_person_id: null
    - claim:
        id: c_T5ew_rwM5BNCFjG5d22nv2
        subject_person_id: p_nTzZCoYHVAfzF7pEPWo4DQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rbXnPV51xwLHZPNhGrDAL1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TfW7dC0_Zd6hb6xwbkl1Jc
          claim_id: c_T5ew_rwM5BNCFjG5d22nv2
          source_id: s_g79pWQbwh5s5sw6FvH65MU
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g79pWQbwh5s5sw6FvH65MU
            source_type: api_record
            title: 中国历代人物传记资料库：王世京（CBDB 119758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119758&o=json
            external_identifier: CBDB:119758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_rbXnPV51xwLHZPNhGrDAL1
        status: active
        display_name: 王世京
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承衎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承衎 | accepted |
| birth.date | 961年 | accepted |
| death.date | 1009年 | accepted |
| bio.summary | 王承衎（961年—1009年），宋人物。籍贯洛陽，身份为武將、詩人，曾任刺史、監軍、尚食使。（中国历代人物传记资料库 CBDB 17747） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3FwfmVLuawARCoZyhyo5mg | 王審琦 | accepted |
| children | p_fZCKDibqxiGEPCHN3pgHKu | 王世文 | accepted |
| children | p_rbXnPV51xwLHZPNhGrDAL1 | 王世京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承衎（CBDB 17747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17747&o=json)
- [中国历代人物传记资料库：王審琦（CBDB 3976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json)
- [中国历代人物传记资料库：王世京（CBDB 119758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119758&o=json)
- [中国历代人物传记资料库：王世文（CBDB 119757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119757&o=json)
