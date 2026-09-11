---
schema: wang-person/v1
id: p_sMgCZ6QJhNBHyTJLQw3P1S
status: active
merged_into: null
display_name: 王朝聘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x2CLZLwXER55LX1a85Ph8j
        subject_person_id: p_sMgCZ6QJhNBHyTJLQw3P1S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tTdstmVSgpDMJSAf61ey8W
          claim_id: c_x2CLZLwXER55LX1a85Ph8j
          source_id: s_HCa9UzTsDhtw4kFy2KEkDB
          stance: supports
          locator: CBDB:333525
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333525）
          source: &a1
            id: s_HCa9UzTsDhtw4kFy2KEkDB
            source_type: api_record
            title: 中国历代人物传记资料库：王朝聘（CBDB 333525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333525&o=json
            external_identifier: CBDB:333525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.410Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sVXoRnWWTDDHkjZaGNKFGm
        subject_person_id: p_sMgCZ6QJhNBHyTJLQw3P1S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝聘，明人物。嘉靖四十四年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 333525）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_No8anM4oWPGceDKA3kfV08
          claim_id: c_sVXoRnWWTDDHkjZaGNKFGm
          source_id: s_HCa9UzTsDhtw4kFy2KEkDB
          stance: supports
          locator: CBDB:333525
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_oG59-G_6yAb8_be1WkHeMg
        subject_person_id: p_sMgCZ6QJhNBHyTJLQw3P1S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C9cGcDit6NRvdLZ3oy6Mbe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SI5tQ8vLfNYf1i3zcfiIeh
          claim_id: c_oG59-G_6yAb8_be1WkHeMg
          source_id: s_ojc1Nx2sKvUhzNK6QBShJA
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第三百一十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ojc1Nx2sKvUhzNK6QBShJA
            source_type: api_record
            title: 中国历代人物传记资料库：王一治（CBDB 205461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205461&o=json
            external_identifier: CBDB:205461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.862Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C9cGcDit6NRvdLZ3oy6Mbe
        status: active
        display_name: 王一治
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝聘 | accepted |
| bio.summary | 王朝聘，明人物。嘉靖四十四年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 333525） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_C9cGcDit6NRvdLZ3oy6Mbe | 王一治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝聘（CBDB 333525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333525&o=json)
- [中国历代人物传记资料库：王一治（CBDB 205461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205461&o=json)
