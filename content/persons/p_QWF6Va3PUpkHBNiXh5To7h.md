---
schema: wang-person/v1
id: p_QWF6Va3PUpkHBNiXh5To7h
status: active
merged_into: null
display_name: 王曰輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5yo6QJp868TiwxDCb7LFGW
        subject_person_id: p_QWF6Va3PUpkHBNiXh5To7h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DweH8SRPSFBKiFNrdoeEiz
          claim_id: c_5yo6QJp868TiwxDCb7LFGW
          source_id: s_YCx7uQNCHddBwNL6wS2bif
          stance: supports
          locator: CBDB:638529
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638529）
          source: &a1
            id: s_YCx7uQNCHddBwNL6wS2bif
            source_type: api_record
            title: 中国历代人物传记资料库：王曰輔（CBDB 638529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638529&o=json
            external_identifier: CBDB:638529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5c3HZ6nq4DUGd9swWZFY5Q
        subject_person_id: p_QWF6Va3PUpkHBNiXh5To7h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰輔，清人物。籍贯成縣，曾任復設訓導。（中国历代人物传记资料库 CBDB 638529）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LG7YS9h8Qkn4o25ZK9fmsk
          claim_id: c_5c3HZ6nq4DUGd9swWZFY5Q
          source_id: s_YCx7uQNCHddBwNL6wS2bif
          stance: supports
          locator: CBDB:638529
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

# 王曰輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曰輔 | accepted |
| bio.summary | 王曰輔，清人物。籍贯成縣，曾任復設訓導。（中国历代人物传记资料库 CBDB 638529） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曰輔（CBDB 638529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638529&o=json)
