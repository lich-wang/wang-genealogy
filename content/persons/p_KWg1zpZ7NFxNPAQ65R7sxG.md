---
schema: wang-person/v1
id: p_KWg1zpZ7NFxNPAQ65R7sxG
status: active
merged_into: null
display_name: 王景壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g3sMdJgXV7QV9m7dMwG7BE
        subject_person_id: p_KWg1zpZ7NFxNPAQ65R7sxG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ubL5auJHk7a6Ng9xDAJqK6
          claim_id: c_g3sMdJgXV7QV9m7dMwG7BE
          source_id: s_HQKX3ARAqsNxQTV7Jv2edS
          stance: supports
          locator: CBDB:546205
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（546205）
          source: &a1
            id: s_HQKX3ARAqsNxQTV7Jv2edS
            source_type: api_record
            title: 中国历代人物传记资料库：王景壽（CBDB 546205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546205&o=json
            external_identifier: CBDB:546205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EG6hX7mCJM4ZzFRmZWrETt
        subject_person_id: p_KWg1zpZ7NFxNPAQ65R7sxG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HAqYcperhSzYorKb9icQ2V
          claim_id: c_EG6hX7mCJM4ZzFRmZWrETt
          source_id: s_HQKX3ARAqsNxQTV7Jv2edS
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

# 王景壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景壽 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景壽（CBDB 546205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546205&o=json)
