---
schema: wang-person/v1
id: p_idAqtCA49fAuSQ93m8FvKi
status: active
merged_into: null
display_name: 王鳳鳴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F2a6b96Zb2zBmkNXZ821Xa
        subject_person_id: p_idAqtCA49fAuSQ93m8FvKi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳鳴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b4hyvp6R9XfcsZQCyenMhZ
          claim_id: c_F2a6b96Zb2zBmkNXZ821Xa
          source_id: s_ByGC2s85uPNnB1wqGvyHwv
          stance: supports
          locator: CBDB:343607
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343607）
          source: &a1
            id: s_ByGC2s85uPNnB1wqGvyHwv
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳鳴（CBDB 343607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343607&o=json
            external_identifier: CBDB:343607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.419Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GJ2HH4n9um8h7mhra5oD8c
        subject_person_id: p_idAqtCA49fAuSQ93m8FvKi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NdDqT2UFkgfMdyQvTZpiZD
          claim_id: c_GJ2HH4n9um8h7mhra5oD8c
          source_id: s_ByGC2s85uPNnB1wqGvyHwv
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

# 王鳳鳴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳鳴 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳鳴（CBDB 343607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343607&o=json)
