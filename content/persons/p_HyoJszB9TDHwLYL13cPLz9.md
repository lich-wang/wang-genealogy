---
schema: wang-person/v1
id: p_HyoJszB9TDHwLYL13cPLz9
status: active
merged_into: null
display_name: 王叔和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QfLKqycKqRmPWjdHsyg72j
        subject_person_id: p_HyoJszB9TDHwLYL13cPLz9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a1NDxDM5rB6kMGQTnxAHtP
          claim_id: c_QfLKqycKqRmPWjdHsyg72j
          source_id: s_fpN4F4xxEeUuUDGZjBbgdP
          stance: supports
          locator: CBDB:533258
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（533258）
          source: &a1
            id: s_fpN4F4xxEeUuUDGZjBbgdP
            source_type: api_record
            title: 中国历代人物传记资料库：王叔和（CBDB 533258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=533258&o=json
            external_identifier: CBDB:533258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C7FNo53eDCc58UVzm2U8Q7
        subject_person_id: p_HyoJszB9TDHwLYL13cPLz9
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
        - id: cs_aJbwtc3L4rAB6VYhB53WJb
          claim_id: c_C7FNo53eDCc58UVzm2U8Q7
          source_id: s_fpN4F4xxEeUuUDGZjBbgdP
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

# 王叔和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔和 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔和（CBDB 533258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=533258&o=json)
