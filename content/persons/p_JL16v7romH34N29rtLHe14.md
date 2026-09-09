---
schema: wang-person/v1
id: p_JL16v7romH34N29rtLHe14
status: active
merged_into: null
display_name: 王辰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1W6ZK1govYM4Vk6KcRtLFi
        subject_person_id: p_JL16v7romH34N29rtLHe14
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BXf6G32QdzfMQ5y7gWb2fu
          claim_id: c_1W6ZK1govYM4Vk6KcRtLFi
          source_id: s_Wt4SYLdcKSnjFC16MPrP78
          stance: supports
          locator: CBDB:343564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343564）
          source: &a1
            id: s_Wt4SYLdcKSnjFC16MPrP78
            source_type: api_record
            title: 中国历代人物传记资料库：王辰（CBDB 343564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343564&o=json
            external_identifier: CBDB:343564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.402Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bq4M6JEkqDpr8eNZq2zm2C
        subject_person_id: p_JL16v7romH34N29rtLHe14
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
        - id: cs_WUW7vdKoYmn1TWeyGbMCUJ
          claim_id: c_Bq4M6JEkqDpr8eNZq2zm2C
          source_id: s_Wt4SYLdcKSnjFC16MPrP78
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

# 王辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王辰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王辰（CBDB 343564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343564&o=json)
