---
schema: wang-person/v1
id: p_1wXPtvz3skCJhc9NMLK9o8
status: active
merged_into: null
display_name: 王允則
cbdb_id: 36566
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3mB9HCBuNt2oQP49Ea7Mj7
        subject_person_id: p_1wXPtvz3skCJhc9NMLK9o8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允則，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 36566）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_cRQzVUKQbkQ-coz2c8FdSz
          claim_id: c_3mB9HCBuNt2oQP49Ea7Mj7
          source_id: s_HnvqDvoncwikDusMQAHAb9
          stance: supports
          locator: CBDB:36566
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HnvqDvoncwikDusMQAHAb9
            source_type: api_record
            title: 中国历代人物传记资料库：王允則（CBDB 36566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36566&o=json
            external_identifier: CBDB:36566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LUCSQ18TM1iLsFapTJQjry
        subject_person_id: p_1wXPtvz3skCJhc9NMLK9o8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允則
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iBAtHvNcbWpqg1TE93umQf
          claim_id: c_LUCSQ18TM1iLsFapTJQjry
          source_id: s_HnvqDvoncwikDusMQAHAb9
          stance: supports
          locator: CBDB:36566
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_C7bP2KQsfQEpBd_qLY6SMX
        subject_person_id: p_JYpSiXVBWgzadHuSV7cx62
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1wXPtvz3skCJhc9NMLK9o8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WcKa2fwErLEf1soWtNphF1
          claim_id: c_C7bP2KQsfQEpBd_qLY6SMX
          source_id: s_v3IniTKYKaKTKHb-9V3smB
          stance: supports
          locator: CBDB 亲属：父（KinPerson 26291）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_v3IniTKYKaKTKHb-9V3smB
            source_type: api_record
            title: 中国历代人物传记资料库：王允則（CBDB 36566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36566&o=json
            external_identifier: CBDB:36566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JYpSiXVBWgzadHuSV7cx62
        status: active
        display_name: 王知和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王允則

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王允則，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 36566） | accepted |
| name.primary | 王允則 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JYpSiXVBWgzadHuSV7cx62 | 王知和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王允則（CBDB 36566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36566&o=json)
