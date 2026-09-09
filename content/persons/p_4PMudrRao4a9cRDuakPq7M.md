---
schema: wang-person/v1
id: p_4PMudrRao4a9cRDuakPq7M
status: active
merged_into: null
display_name: 王同讚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gygj79qcyiZqgJ9d685A6z
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同讚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FM6CYJSwxLQjDgL6KBMF9g
          claim_id: c_gygj79qcyiZqgJ9d685A6z
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
          stance: supports
          locator: CBDB:204969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204969）
          source: &a1
            id: s_1rvQicHBV2nhuQQ8M41Xjf
            source_type: api_record
            title: 中国历代人物传记资料库：王同讚（CBDB 204969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204969&o=json
            external_identifier: CBDB:204969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7dJ7M2KQN3V9tACFiM6UVw
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1532年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iQkGoDGyF8CeSiW6QNApQS
          claim_id: c_7dJ7M2KQN3V9tACFiM6UVw
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
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
        id: c_c9sMYCd9bU2BTBsPdreqyQ
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
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
        - id: cs_VQM2Z7nn8QGApFrbs2SYTU
          claim_id: c_c9sMYCd9bU2BTBsPdreqyQ
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
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

# 王同讚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同讚 | accepted |
| birth.date | 1532年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同讚（CBDB 204969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204969&o=json)
