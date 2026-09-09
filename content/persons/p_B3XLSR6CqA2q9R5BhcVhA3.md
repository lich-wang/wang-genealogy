---
schema: wang-person/v1
id: p_B3XLSR6CqA2q9R5BhcVhA3
status: active
merged_into: null
display_name: 王克誠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N3p18F9BWT3HtLqoE4QVJh
        subject_person_id: p_B3XLSR6CqA2q9R5BhcVhA3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n5xz6MB7C6Q98Bw3kn7Tfj
          claim_id: c_N3p18F9BWT3HtLqoE4QVJh
          source_id: s_b1BkED5SZ28nq7xm5UqpES
          stance: supports
          locator: CBDB:244053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244053）
          source: &a1
            id: s_b1BkED5SZ28nq7xm5UqpES
            source_type: api_record
            title: 中国历代人物传记资料库：王克誠（CBDB 244053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244053&o=json
            external_identifier: CBDB:244053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DKgg4JfG59rmVrJd77upHU
        subject_person_id: p_B3XLSR6CqA2q9R5BhcVhA3
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
        - id: cs_TvCWm8RYhnpDWuyYzCUjP2
          claim_id: c_DKgg4JfG59rmVrJd77upHU
          source_id: s_b1BkED5SZ28nq7xm5UqpES
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

# 王克誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克誠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克誠（CBDB 244053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244053&o=json)
