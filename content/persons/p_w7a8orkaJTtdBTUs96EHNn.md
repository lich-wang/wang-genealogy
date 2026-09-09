---
schema: wang-person/v1
id: p_w7a8orkaJTtdBTUs96EHNn
status: active
merged_into: null
display_name: 王宗賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9EA8ZPKVfw7sbzQUFuHXNw
        subject_person_id: p_w7a8orkaJTtdBTUs96EHNn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hucP77oK3mahKH7WhVdzQ4
          claim_id: c_9EA8ZPKVfw7sbzQUFuHXNw
          source_id: s_PmT8HLhGQSygmicRqhs282
          stance: supports
          locator: CBDB:307069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（307069）
          source: &a1
            id: s_PmT8HLhGQSygmicRqhs282
            source_type: api_record
            title: 中国历代人物传记资料库：王宗賢（CBDB 307069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307069&o=json
            external_identifier: CBDB:307069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zsc359mS6M6npWFXb2nk6K
        subject_person_id: p_w7a8orkaJTtdBTUs96EHNn
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
        - id: cs_8rJaKM7DJ1tuvvybBrYepJ
          claim_id: c_Zsc359mS6M6npWFXb2nk6K
          source_id: s_PmT8HLhGQSygmicRqhs282
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

# 王宗賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗賢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗賢（CBDB 307069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307069&o=json)
