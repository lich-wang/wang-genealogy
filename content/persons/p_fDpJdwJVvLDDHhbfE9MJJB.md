---
schema: wang-person/v1
id: p_fDpJdwJVvLDDHhbfE9MJJB
status: active
merged_into: null
display_name: 王炳離
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J2Q7XXaN3QS1VNDG44tQ72
        subject_person_id: p_fDpJdwJVvLDDHhbfE9MJJB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳離
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D3Yy7XBSWXY2LTDY6jwb2L
          claim_id: c_J2Q7XXaN3QS1VNDG44tQ72
          source_id: s_YwjKm5Cd3i2mZnaWoZXLR5
          stance: supports
          locator: CBDB:639292
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639292）
          source: &a1
            id: s_YwjKm5Cd3i2mZnaWoZXLR5
            source_type: api_record
            title: 中国历代人物传记资料库：王炳離（CBDB 639292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639292&o=json
            external_identifier: CBDB:639292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_56vdAn5PrxXV7bPGaFPS2b
        subject_person_id: p_fDpJdwJVvLDDHhbfE9MJJB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳離，清人物。籍贯西安，曾任訓導。（中国历代人物传记资料库 CBDB 639292）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UBqH7N0MtwskKPl2R1grLk
          claim_id: c_56vdAn5PrxXV7bPGaFPS2b
          source_id: s_YwjKm5Cd3i2mZnaWoZXLR5
          stance: supports
          locator: CBDB:639292
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王炳離

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳離 | accepted |
| bio.summary | 王炳離，清人物。籍贯西安，曾任訓導。（中国历代人物传记资料库 CBDB 639292） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳離（CBDB 639292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639292&o=json)
