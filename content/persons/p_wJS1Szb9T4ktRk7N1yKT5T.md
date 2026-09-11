---
schema: wang-person/v1
id: p_wJS1Szb9T4ktRk7N1yKT5T
status: active
merged_into: null
display_name: 王彥暉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wKzCq3ZuwCSJR5ZfvE96Ei
        subject_person_id: p_wJS1Szb9T4ktRk7N1yKT5T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥暉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y94NkF7XnJQ9LCvA9iGtSk
          claim_id: c_wKzCq3ZuwCSJR5ZfvE96Ei
          source_id: s_Uieh1aNWMDMRHS2pLJrPNG
          stance: supports
          locator: CBDB:37632
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37632）
          source: &a1
            id: s_Uieh1aNWMDMRHS2pLJrPNG
            source_type: api_record
            title: 中国历代人物传记资料库：王彥暉（CBDB 37632）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37632&o=json
            external_identifier: CBDB:37632
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.207Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fPNCeX4aFVNc7Aw1YCrQ1L
        subject_person_id: p_wJS1Szb9T4ktRk7N1yKT5T
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1113年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dQajwbZz8DeNP2pTnyrQwy
          claim_id: c_fPNCeX4aFVNc7Aw1YCrQ1L
          source_id: s_Uieh1aNWMDMRHS2pLJrPNG
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
        id: c_gXQ6LMDT4wh88ZyxpGWPgQ
        subject_person_id: p_wJS1Szb9T4ktRk7N1yKT5T
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1184年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LQdCak5cKuR4hMaqdJQNbG
          claim_id: c_gXQ6LMDT4wh88ZyxpGWPgQ
          source_id: s_Uieh1aNWMDMRHS2pLJrPNG
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
        id: c_T7pXDMPwmy4gmPtThzmfsH
        subject_person_id: p_wJS1Szb9T4ktRk7N1yKT5T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tQNCcvPe19p44e1S3HLm6s
          claim_id: c_T7pXDMPwmy4gmPtThzmfsH
          source_id: s_Uieh1aNWMDMRHS2pLJrPNG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_I6AZ1EuiJ-W0OWHsTHsATL
        subject_person_id: p_wJS1Szb9T4ktRk7N1yKT5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UL2zaY4tRMEVGWumyaLfQ3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bwtqm1lnNfdsqTikCrbPa0
          claim_id: c_I6AZ1EuiJ-W0OWHsTHsATL
          source_id: s_auk34DNNBsbeAA87qaDoDK
          stance: supports
          locator: CBDB 双向互证（父 王彥暉 ⇄ 子 王安）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_auk34DNNBsbeAA87qaDoDK
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 37633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37633&o=json
            external_identifier: CBDB:37633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UL2zaY4tRMEVGWumyaLfQ3
        status: active
        display_name: 王安
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_V6_7p7zxy0optZiS8GLEHV
        subject_person_id: p_wJS1Szb9T4ktRk7N1yKT5T
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Y4c17HyEMjm9pCE72vh89y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ceQJEQoGZSSMgd_1_wnm7k
          claim_id: c_V6_7p7zxy0optZiS8GLEHV
          source_id: s_0btNhHnNKpIKgXqjtF7lqV
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1761;1762：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_0btNhHnNKpIKgXqjtF7lqV
            source_type: api_record
            title: 中国历代人物传记资料库：程氏(王彥暉妻)（CBDB 37634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37634&o=json
            external_identifier: CBDB:37634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Y4c17HyEMjm9pCE72vh89y
        status: active
        display_name: 程氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王彥暉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥暉 | accepted |
| birth.date | 1113年 | accepted |
| death.date | 1184年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UL2zaY4tRMEVGWumyaLfQ3 | 王安 | accepted |
| spouses | p_Y4c17HyEMjm9pCE72vh89y | 程氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：程氏(王彥暉妻)（CBDB 37634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37634&o=json)
- [中国历代人物传记资料库：王安（CBDB 37633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37633&o=json)
- [中国历代人物传记资料库：王彥暉（CBDB 37632）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37632&o=json)
