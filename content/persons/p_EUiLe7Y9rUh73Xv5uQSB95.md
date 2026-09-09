---
schema: wang-person/v1
id: p_EUiLe7Y9rUh73Xv5uQSB95
status: active
merged_into: null
display_name: 王純
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_41xEwC7x4VATG3oLHyhF4d
        subject_person_id: p_EUiLe7Y9rUh73Xv5uQSB95
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NtdrprWsWZEb8m163Bi1by
          claim_id: c_41xEwC7x4VATG3oLHyhF4d
          source_id: s_7WDGdkfjVWKEwME7rFzoPM
          stance: supports
          locator: CBDB:453520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453520）
          source: &a1
            id: s_7WDGdkfjVWKEwME7rFzoPM
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 453520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453520&o=json
            external_identifier: CBDB:453520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QC9FR7rssZDRiHqaXNhcCa
        subject_person_id: p_EUiLe7Y9rUh73Xv5uQSB95
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
        - id: cs_jK7x7x17CNKL9tvnkaX1px
          claim_id: c_QC9FR7rssZDRiHqaXNhcCa
          source_id: s_7WDGdkfjVWKEwME7rFzoPM
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

# 王純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 453520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453520&o=json)
