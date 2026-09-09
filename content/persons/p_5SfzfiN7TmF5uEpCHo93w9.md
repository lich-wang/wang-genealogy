---
schema: wang-person/v1
id: p_5SfzfiN7TmF5uEpCHo93w9
status: active
merged_into: null
display_name: 王世芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hd49pc6UP3y2PaA29L8E1i
        subject_person_id: p_5SfzfiN7TmF5uEpCHo93w9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1JJ5pJqMsyCkzqgX38wa2A
          claim_id: c_Hd49pc6UP3y2PaA29L8E1i
          source_id: s_8GbUjTZhHFLJiX3gkxwUN8
          stance: supports
          locator: CBDB:333617
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333617）
          source: &a1
            id: s_8GbUjTZhHFLJiX3gkxwUN8
            source_type: api_record
            title: 中国历代人物传记资料库：王世芳（CBDB 333617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333617&o=json
            external_identifier: CBDB:333617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YPjPNN4H5d7BjKvbh7qTwQ
        subject_person_id: p_5SfzfiN7TmF5uEpCHo93w9
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
        - id: cs_M4ugqiZdttLuRmiJ3S13Wp
          claim_id: c_YPjPNN4H5d7BjKvbh7qTwQ
          source_id: s_8GbUjTZhHFLJiX3gkxwUN8
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

# 王世芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世芳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世芳（CBDB 333617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333617&o=json)
