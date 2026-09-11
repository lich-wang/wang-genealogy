---
schema: wang-person/v1
id: p_QdxTkWSt2UQo7g1B9wh2V2
status: active
merged_into: null
display_name: 王沆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mJt2PtXcFnWC3FeN5pK7gz
        subject_person_id: p_QdxTkWSt2UQo7g1B9wh2V2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ac6yZCZaDN8CJvK6oakGGC
          claim_id: c_mJt2PtXcFnWC3FeN5pK7gz
          source_id: s_4WhupS7YyLaUKdsHZ8V821
          stance: supports
          locator: CBDB:467090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467090）
          source: &a1
            id: s_4WhupS7YyLaUKdsHZ8V821
            source_type: api_record
            title: 中国历代人物传记资料库：王沆（CBDB 467090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467090&o=json
            external_identifier: CBDB:467090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BbfiuwexsiC7W6PNVEvhbc
        subject_person_id: p_QdxTkWSt2UQo7g1B9wh2V2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王沆，清人物。籍贯嘉興，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任縣丞。（中国历代人物传记资料库 CBDB 467090）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d59CJX_o54gKlNw9qo9L3U
          claim_id: c_BbfiuwexsiC7W6PNVEvhbc
          source_id: s_4WhupS7YyLaUKdsHZ8V821
          stance: supports
          locator: CBDB:467090
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

# 王沆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沆 | accepted |
| bio.summary | 王沆，清人物。籍贯嘉興，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任縣丞。（中国历代人物传记资料库 CBDB 467090） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沆（CBDB 467090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467090&o=json)
