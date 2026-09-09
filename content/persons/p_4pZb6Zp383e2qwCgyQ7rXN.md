---
schema: wang-person/v1
id: p_4pZb6Zp383e2qwCgyQ7rXN
status: active
merged_into: null
display_name: 王正之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K2M6qx3ZqaNeh4dHbDfi25
        subject_person_id: p_4pZb6Zp383e2qwCgyQ7rXN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D2UHtAUh4ig3pi1AMbsXwk
          claim_id: c_K2M6qx3ZqaNeh4dHbDfi25
          source_id: s_BZ3cbaA6Mj3WLJM7NffZjq
          stance: supports
          locator: CBDB:531547
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（531547）
          source: &a1
            id: s_BZ3cbaA6Mj3WLJM7NffZjq
            source_type: api_record
            title: 中国历代人物传记资料库：王正之（CBDB 531547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531547&o=json
            external_identifier: CBDB:531547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zu5x3nqJjjCLPquBBP8dkB
        subject_person_id: p_4pZb6Zp383e2qwCgyQ7rXN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JYYK3snbDBUk2PrEL344Ce
          claim_id: c_zu5x3nqJjjCLPquBBP8dkB
          source_id: s_BZ3cbaA6Mj3WLJM7NffZjq
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

# 王正之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正之 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正之（CBDB 531547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531547&o=json)
