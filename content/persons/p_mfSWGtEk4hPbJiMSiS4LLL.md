---
schema: wang-person/v1
id: p_mfSWGtEk4hPbJiMSiS4LLL
status: active
merged_into: null
display_name: 王景賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tSHL9oK9P6f8Gonex5aGfp
        subject_person_id: p_mfSWGtEk4hPbJiMSiS4LLL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_62UMJCAJdjmuBMEdTXq6JZ
          claim_id: c_tSHL9oK9P6f8Gonex5aGfp
          source_id: s_DgKjYTdydrhyRcFjkX4fJi
          stance: supports
          locator: CBDB:72067
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72067）
          source: &a1
            id: s_DgKjYTdydrhyRcFjkX4fJi
            source_type: api_record
            title: 中国历代人物传记资料库：王景賢（CBDB 72067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72067&o=json
            external_identifier: CBDB:72067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5MazrLzRhTLkrN1NupxnQS
        subject_person_id: p_mfSWGtEk4hPbJiMSiS4LLL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1832年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_off12jFDr88atk5wrWrp96
          claim_id: c_5MazrLzRhTLkrN1NupxnQS
          source_id: s_DgKjYTdydrhyRcFjkX4fJi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4uE1Fy9ua3KrmbpCMhGnn7
        subject_person_id: p_mfSWGtEk4hPbJiMSiS4LLL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景賢（生于1832年），清人物。籍贯秀水。（中国历代人物传记资料库 CBDB 72067）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZTdKl6I5x9UCX6cxPC3rv3
          claim_id: c_4uE1Fy9ua3KrmbpCMhGnn7
          source_id: s_DgKjYTdydrhyRcFjkX4fJi
          stance: supports
          locator: CBDB:72067
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

# 王景賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景賢 | accepted |
| birth.date | 1832年 | accepted |
| bio.summary | 王景賢（生于1832年），清人物。籍贯秀水。（中国历代人物传记资料库 CBDB 72067） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景賢（CBDB 72067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72067&o=json)
