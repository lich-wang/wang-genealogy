---
schema: wang-person/v1
id: p_m1N3msPxNs5DuPXm4Fcy7u
status: active
merged_into: null
display_name: 王慶壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tJ7HSNUr6mkyhSouCegxHp
        subject_person_id: p_m1N3msPxNs5DuPXm4Fcy7u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XpeG9qemu4qxMfo4ECNQe7
          claim_id: c_tJ7HSNUr6mkyhSouCegxHp
          source_id: s_sryCt8YV35sCG6Ya66mV4c
          stance: supports
          locator: CBDB:35390
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35390）
          source: &a1
            id: s_sryCt8YV35sCG6Ya66mV4c
            source_type: api_record
            title: 中国历代人物传记资料库：王慶壽（CBDB 35390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35390&o=json
            external_identifier: CBDB:35390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.134Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RSU9HRPAesUGVbcaY4ttkE
        subject_person_id: p_m1N3msPxNs5DuPXm4Fcy7u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c1qcERmAFHmvk2JJmGUP25
          claim_id: c_RSU9HRPAesUGVbcaY4ttkE
          source_id: s_sryCt8YV35sCG6Ya66mV4c
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

# 王慶壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶壽 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶壽（CBDB 35390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35390&o=json)
