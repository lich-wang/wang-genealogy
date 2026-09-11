---
schema: wang-person/v1
id: p_Dg4y15aZqidaYw1n6UAGYW
status: active
merged_into: null
display_name: 王余修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jbYN7Su4LRBPon29mcMQ4t
        subject_person_id: p_Dg4y15aZqidaYw1n6UAGYW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王余修
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BsRofggcUrtyZiL2CATg9p
          claim_id: c_jbYN7Su4LRBPon29mcMQ4t
          source_id: s_Rnm6y99ZSxFvF3UykrPkfj
          stance: supports
          locator: CBDB:635993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635993）
          source: &a1
            id: s_Rnm6y99ZSxFvF3UykrPkfj
            source_type: api_record
            title: 中国历代人物传记资料库：王余修（CBDB 635993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635993&o=json
            external_identifier: CBDB:635993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_czy9y61u164GFs5rJoM7B4
        subject_person_id: p_Dg4y15aZqidaYw1n6UAGYW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王余修，清人物。籍贯富順，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 635993）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_li8B0toXARL0ssfVsMrHI0
          claim_id: c_czy9y61u164GFs5rJoM7B4
          source_id: s_Rnm6y99ZSxFvF3UykrPkfj
          stance: supports
          locator: CBDB:635993
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

# 王余修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王余修 | accepted |
| bio.summary | 王余修，清人物。籍贯富順，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 635993） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王余修（CBDB 635993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635993&o=json)
