---
schema: wang-person/v1
id: p_BtHRUza4xHJn7tgwcs6Rw9
status: active
merged_into: null
display_name: 王極
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3B6iq5azu1pqqm7YK4dG2p
        subject_person_id: p_BtHRUza4xHJn7tgwcs6Rw9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王極
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ngHT8GhL7fmPXBoFgAAKNf
          claim_id: c_3B6iq5azu1pqqm7YK4dG2p
          source_id: s_x9JyU5H3fANizaaGqzJBRa
          stance: supports
          locator: CBDB:492624
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492624）
          source: &a1
            id: s_x9JyU5H3fANizaaGqzJBRa
            source_type: api_record
            title: 中国历代人物传记资料库：王極（CBDB 492624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492624&o=json
            external_identifier: CBDB:492624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.317Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hD1oRS4Cg8ACHZBuN25hs1
        subject_person_id: p_BtHRUza4xHJn7tgwcs6Rw9
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
        - id: cs_yLcMR8Ue88Bcqa97n9YKKD
          claim_id: c_hD1oRS4Cg8ACHZBuN25hs1
          source_id: s_x9JyU5H3fANizaaGqzJBRa
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

# 王極

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王極 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王極（CBDB 492624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492624&o=json)
