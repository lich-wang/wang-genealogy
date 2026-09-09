---
schema: wang-person/v1
id: p_gFygQ7tuxUBRH1guyqGQYP
status: active
merged_into: null
display_name: 王澈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8KRUBNR6o5JSx6vTqeV2dG
        subject_person_id: p_gFygQ7tuxUBRH1guyqGQYP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bjJQDBtbcGa7KG5uZmCafF
          claim_id: c_8KRUBNR6o5JSx6vTqeV2dG
          source_id: s_x897G6bbUTk1KAL3VE7sHQ
          stance: supports
          locator: CBDB:328614
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328614）
          source: &a1
            id: s_x897G6bbUTk1KAL3VE7sHQ
            source_type: api_record
            title: 中国历代人物传记资料库：王澈（CBDB 328614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328614&o=json
            external_identifier: CBDB:328614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UdADK1RbQz3cU3ktUhsrS4
        subject_person_id: p_gFygQ7tuxUBRH1guyqGQYP
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
        - id: cs_4MaF7GT8GPNMBzjoGCQMPL
          claim_id: c_UdADK1RbQz3cU3ktUhsrS4
          source_id: s_x897G6bbUTk1KAL3VE7sHQ
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

# 王澈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澈 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澈（CBDB 328614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328614&o=json)
