---
schema: wang-person/v1
id: p_GD557R9tpiLg87ViNK5wDo
status: active
merged_into: null
display_name: 王璇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LikoZ2pmkMJtDdcPoezx2n
        subject_person_id: p_GD557R9tpiLg87ViNK5wDo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3uKRcKv2Zz4F3AKx3Ks3RJ
          claim_id: c_LikoZ2pmkMJtDdcPoezx2n
          source_id: s_rzt2VMG8dn2UUF86CpEhNL
          stance: supports
          locator: CBDB:324185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324185）
          source: &a1
            id: s_rzt2VMG8dn2UUF86CpEhNL
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 324185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324185&o=json
            external_identifier: CBDB:324185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GSTyekBUoLrfHXkAeApfUR
        subject_person_id: p_GD557R9tpiLg87ViNK5wDo
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
        - id: cs_Rd6pRBAHb2mf8jNhoDdRDY
          claim_id: c_GSTyekBUoLrfHXkAeApfUR
          source_id: s_rzt2VMG8dn2UUF86CpEhNL
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

# 王璇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璇（CBDB 324185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324185&o=json)
