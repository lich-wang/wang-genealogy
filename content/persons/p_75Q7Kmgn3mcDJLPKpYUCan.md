---
schema: wang-person/v1
id: p_75Q7Kmgn3mcDJLPKpYUCan
status: active
merged_into: null
display_name: 王會圖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pwMfTVqEqJoUw8vPLRW82p
        subject_person_id: p_75Q7Kmgn3mcDJLPKpYUCan
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會圖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s3GaZ7Ti3wjv7MxdkLGHwL
          claim_id: c_pwMfTVqEqJoUw8vPLRW82p
          source_id: s_BAppEaPnrwq8jzM7gr7V1P
          stance: supports
          locator: CBDB:501473
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501473）
          source: &a1
            id: s_BAppEaPnrwq8jzM7gr7V1P
            source_type: api_record
            title: 中国历代人物传记资料库：王會圖（CBDB 501473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501473&o=json
            external_identifier: CBDB:501473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9yZqfEUffH4nXENPNCmkn8
        subject_person_id: p_75Q7Kmgn3mcDJLPKpYUCan
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
        - id: cs_KDGaN7Bdhmp3DkNBu8cdLg
          claim_id: c_9yZqfEUffH4nXENPNCmkn8
          source_id: s_BAppEaPnrwq8jzM7gr7V1P
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

# 王會圖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會圖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王會圖（CBDB 501473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501473&o=json)
