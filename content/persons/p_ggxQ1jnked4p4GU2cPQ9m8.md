---
schema: wang-person/v1
id: p_ggxQ1jnked4p4GU2cPQ9m8
status: active
merged_into: null
display_name: 王蕃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h76JgNEutRN4wCKDhWNHwR
        subject_person_id: p_ggxQ1jnked4p4GU2cPQ9m8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9KfacRqoK1NWTDn6h7CqNM
          claim_id: c_h76JgNEutRN4wCKDhWNHwR
          source_id: s_AUwcaGbxkny6Yepk2snYQo
          stance: supports
          locator: CBDB:244421
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244421）
          source: &a1
            id: s_AUwcaGbxkny6Yepk2snYQo
            source_type: api_record
            title: 中国历代人物传记资料库：王蕃（CBDB 244421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244421&o=json
            external_identifier: CBDB:244421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.032Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2TLCTmMCRsiLsK1kzE17wb
        subject_person_id: p_ggxQ1jnked4p4GU2cPQ9m8
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
        - id: cs_eXVRAJMUxqmnK9sE3VLhzD
          claim_id: c_2TLCTmMCRsiLsK1kzE17wb
          source_id: s_AUwcaGbxkny6Yepk2snYQo
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

# 王蕃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蕃 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蕃（CBDB 244421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244421&o=json)
