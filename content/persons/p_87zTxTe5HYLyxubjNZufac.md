---
schema: wang-person/v1
id: p_87zTxTe5HYLyxubjNZufac
status: active
merged_into: null
display_name: 王學
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JHGBfNc6urvMBKr2Y4x1Xa
        subject_person_id: p_87zTxTe5HYLyxubjNZufac
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6FeccA7252eMWqcNFU7FHk
          claim_id: c_JHGBfNc6urvMBKr2Y4x1Xa
          source_id: s_D3PtxNm1hfrv8KsrX8hKEF
          stance: supports
          locator: CBDB:217542
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217542）
          source: &a1
            id: s_D3PtxNm1hfrv8KsrX8hKEF
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 217542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217542&o=json
            external_identifier: CBDB:217542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.254Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KbFvRJ91hAwbu1fS1hnWqn
        subject_person_id: p_87zTxTe5HYLyxubjNZufac
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
        - id: cs_nGZqwbJ7zfmS5pYD7GZhwF
          claim_id: c_KbFvRJ91hAwbu1fS1hnWqn
          source_id: s_D3PtxNm1hfrv8KsrX8hKEF
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

# 王學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學（CBDB 217542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217542&o=json)
