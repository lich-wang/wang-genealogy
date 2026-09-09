---
schema: wang-person/v1
id: p_5zaBchA9B323RtJizb87yy
status: active
merged_into: null
display_name: 王之樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s5rMbckkfXfpjZff179Nkv
        subject_person_id: p_5zaBchA9B323RtJizb87yy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q9gaQ7KFNm4hmxNF76gCZn
          claim_id: c_s5rMbckkfXfpjZff179Nkv
          source_id: s_1iAKRZLZAQd21E1GmY7nG3
          stance: supports
          locator: CBDB:59912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（59912）
          source: &a1
            id: s_1iAKRZLZAQd21E1GmY7nG3
            source_type: api_record
            title: 中国历代人物传记资料库：王之樞（CBDB 59912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59912&o=json
            external_identifier: CBDB:59912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rLtoQ2gygKQMG6qjPbYou7
        subject_person_id: p_5zaBchA9B323RtJizb87yy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1666年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ogZ3nMyTPHnjDJJKfXbgJQ
          claim_id: c_rLtoQ2gygKQMG6qjPbYou7
          source_id: s_1iAKRZLZAQd21E1GmY7nG3
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
        id: c_JWkSrLhmGhjLAnUJzq6T8G
        subject_person_id: p_5zaBchA9B323RtJizb87yy
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
        - id: cs_ZQ4Bdz4ZNqkwY5cFMwTBE9
          claim_id: c_JWkSrLhmGhjLAnUJzq6T8G
          source_id: s_1iAKRZLZAQd21E1GmY7nG3
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

# 王之樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之樞 | accepted |
| birth.date | 1666年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之樞（CBDB 59912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59912&o=json)
