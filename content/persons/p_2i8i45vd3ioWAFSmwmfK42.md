---
schema: wang-person/v1
id: p_2i8i45vd3ioWAFSmwmfK42
status: active
merged_into: null
display_name: 王良貴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zoiuBtMUVveSk9Gq4aeEBS
        subject_person_id: p_2i8i45vd3ioWAFSmwmfK42
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_13M7Ldpv85cNZzz91f9jN1
          claim_id: c_zoiuBtMUVveSk9Gq4aeEBS
          source_id: s_b4gLzeKTw3AayU519ocN97
          stance: supports
          locator: CBDB:126530
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126530）
          source: &a1
            id: s_b4gLzeKTw3AayU519ocN97
            source_type: api_record
            title: 中国历代人物传记资料库：王良貴（CBDB 126530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126530&o=json
            external_identifier: CBDB:126530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gepRZC2sWawTgy5ui8ifan
        subject_person_id: p_2i8i45vd3ioWAFSmwmfK42
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QJT9Ki5kRXYhqdYyvNhhaA
          claim_id: c_gepRZC2sWawTgy5ui8ifan
          source_id: s_b4gLzeKTw3AayU519ocN97
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王良貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良貴 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良貴（CBDB 126530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126530&o=json)
