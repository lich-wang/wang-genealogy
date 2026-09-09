---
schema: wang-person/v1
id: p_xtv9ZeYU8HwujUAR6mfF6T
status: active
merged_into: null
display_name: 王淑貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dqQkAhcsGeCUWh9x4DzXUG
        subject_person_id: p_xtv9ZeYU8HwujUAR6mfF6T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FTgE1RjsoDF3EeNm96xVwa
          claim_id: c_dqQkAhcsGeCUWh9x4DzXUG
          source_id: s_MEm8c5oQqAPL5qK9pCb96g
          stance: supports
          locator: CBDB:568762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568762）
          source: &a1
            id: s_MEm8c5oQqAPL5qK9pCb96g
            source_type: api_record
            title: 中国历代人物传记资料库：王淑貞（CBDB 568762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568762&o=json
            external_identifier: CBDB:568762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RLGJDa6dMUc8uyAEiSHrTx
        subject_person_id: p_xtv9ZeYU8HwujUAR6mfF6T
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
        - id: cs_MmiWd5dRW9TvQFhAdGLZsf
          claim_id: c_RLGJDa6dMUc8uyAEiSHrTx
          source_id: s_MEm8c5oQqAPL5qK9pCb96g
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

# 王淑貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑貞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淑貞（CBDB 568762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568762&o=json)
