---
schema: wang-person/v1
id: p_JJVNEEM87Q9sBUqrYf9DpQ
status: active
merged_into: null
display_name: 王瓊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fmJAY3HoVc5Amk3A71Nga6
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hoosVzKwBHGhvkWxYwEqMF
          claim_id: c_fmJAY3HoVc5Amk3A71Nga6
          source_id: s_3WV1SaBi3ghD6oEqEXPGRG
          stance: supports
          locator: CBDB:271103
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271103）
          source: &a1
            id: s_3WV1SaBi3ghD6oEqEXPGRG
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 271103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271103&o=json
            external_identifier: CBDB:271103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F4FQ1K32FM4EGmSU6TUzWT
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
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
        - id: cs_uTbo1LT3RcVA3zabQABi7C
          claim_id: c_F4FQ1K32FM4EGmSU6TUzWT
          source_id: s_3WV1SaBi3ghD6oEqEXPGRG
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

# 王瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 271103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271103&o=json)
