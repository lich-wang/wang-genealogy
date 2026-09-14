---
schema: wang-person/v1
id: p_PFEEVn7vzFDQrWE6HRQdn5
status: active
merged_into: null
display_name: 王敘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cKKHYe12yrjn2XpoVRSNGY
        subject_person_id: p_PFEEVn7vzFDQrWE6HRQdn5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1A9FUyKuvFgKiKKvYRxJq6
          claim_id: c_cKKHYe12yrjn2XpoVRSNGY
          source_id: s_fT5tXsNNCNrsSGBDvfEoSr
          stance: supports
          locator: CBDB:274400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274400）
          source: &a1
            id: s_fT5tXsNNCNrsSGBDvfEoSr
            source_type: api_record
            title: 中国历代人物传记资料库：王敘（CBDB 274400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274400&o=json
            external_identifier: CBDB:274400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hp9RW1dvpARM2FmJU4mgmK
        subject_person_id: p_PFEEVn7vzFDQrWE6HRQdn5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敘，明人物。弘治十八年進士，籍贯宜賓。（中国历代人物传记资料库 CBDB 274400）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N68iWbs2mohI0-UVRavuTA
          claim_id: c_Hp9RW1dvpARM2FmJU4mgmK
          source_id: s_fT5tXsNNCNrsSGBDvfEoSr
          stance: supports
          locator: CBDB:274400
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CMW3j4fNaBFU884VnWKtsC
        subject_person_id: p_NfKwwb2ui975AMQi4qTG12
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PFEEVn7vzFDQrWE6HRQdn5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9yDurP3ipkVRwUfewJYbdQ
          claim_id: c_CMW3j4fNaBFU884VnWKtsC
          source_id: s_0c4H5B-7GPfyZHtNRWcz0Q
          stance: supports
          locator: CBDB：兄弟 王敎（201563）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王敘 与 王敎 为同胞（CBDB 记「兄」），王敎 之父／母即 王敘 之父／母。
          source:
            id: s_0c4H5B-7GPfyZHtNRWcz0Q
            source_type: api_record
            title: 中国历代人物传记资料库：王敘（CBDB 274400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274400&o=json
            external_identifier: CBDB:274400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NfKwwb2ui975AMQi4qTG12
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oqkn7EIKMsqkZKSAcV5dTq
        subject_person_id: p_3VTZoWGHQLyQ9mnF79uy7J
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PFEEVn7vzFDQrWE6HRQdn5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hgUOu6muRO_IUoIFyFqDCq
          claim_id: c_oqkn7EIKMsqkZKSAcV5dTq
          source_id: s_0c4H5B-7GPfyZHtNRWcz0Q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201563 王敎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0c4H5B-7GPfyZHtNRWcz0Q
            source_type: api_record
            title: 中国历代人物传记资料库：王敘（CBDB 274400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274400&o=json
            external_identifier: CBDB:274400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3VTZoWGHQLyQ9mnF79uy7J
        status: active
        display_name: 王敎
        merged_into_person_id: null
---

# 王敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敘 | accepted |
| bio.summary | 王敘，明人物。弘治十八年進士，籍贯宜賓。（中国历代人物传记资料库 CBDB 274400） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NfKwwb2ui975AMQi4qTG12 | 王言 | accepted |
| other | p_3VTZoWGHQLyQ9mnF79uy7J | 王敎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敘（CBDB 274400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274400&o=json)
