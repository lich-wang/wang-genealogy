---
schema: wang-person/v1
id: p_dwywJ5YLzEEvdBVA87Wsub
status: active
merged_into: null
display_name: 王玲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7e6DoW982474h2G7jQP28g
        subject_person_id: p_dwywJ5YLzEEvdBVA87Wsub
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zKw65o97GNEBTn41UREQNh
          claim_id: c_7e6DoW982474h2G7jQP28g
          source_id: s_9NsJRTXMCWtHYbZFdwKcHU
          stance: supports
          locator: CBDB:555065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555065）
          source: &a1
            id: s_9NsJRTXMCWtHYbZFdwKcHU
            source_type: api_record
            title: 中国历代人物传记资料库：王玲（CBDB 555065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555065&o=json
            external_identifier: CBDB:555065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FDtcFkGu1Vs9cig88v1GUh
        subject_person_id: p_dwywJ5YLzEEvdBVA87Wsub
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玲，明人物。籍贯南召。（中国历代人物传记资料库 CBDB 555065）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DbkJfe_O2MRp7sw5dPc9_k
          claim_id: c_FDtcFkGu1Vs9cig88v1GUh
          source_id: s_9NsJRTXMCWtHYbZFdwKcHU
          stance: supports
          locator: CBDB:555065
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

# 王玲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玲 | accepted |
| bio.summary | 王玲，明人物。籍贯南召。（中国历代人物传记资料库 CBDB 555065） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玲（CBDB 555065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555065&o=json)
