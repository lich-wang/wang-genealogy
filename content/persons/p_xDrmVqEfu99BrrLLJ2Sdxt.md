---
schema: wang-person/v1
id: p_xDrmVqEfu99BrrLLJ2Sdxt
status: active
merged_into: null
display_name: 王邦奇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EDPGCFGuFAQ4NuRVVSXPEi
        subject_person_id: p_xDrmVqEfu99BrrLLJ2Sdxt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UFnaj3pP1TufwAXLkmEbBJ
          claim_id: c_EDPGCFGuFAQ4NuRVVSXPEi
          source_id: s_zNP4yTwH62WSReXXLSX7Yd
          stance: supports
          locator: CBDB:459494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459494）
          source: &a1
            id: s_zNP4yTwH62WSReXXLSX7Yd
            source_type: api_record
            title: 中国历代人物传记资料库：王邦奇（CBDB 459494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459494&o=json
            external_identifier: CBDB:459494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pAMc9Eih1UzYDo9HMu7PpX
        subject_person_id: p_xDrmVqEfu99BrrLLJ2Sdxt
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
        - id: cs_Uj8skG7RD4Y5qwF3NH7f9p
          claim_id: c_pAMc9Eih1UzYDo9HMu7PpX
          source_id: s_zNP4yTwH62WSReXXLSX7Yd
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

# 王邦奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦奇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦奇（CBDB 459494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459494&o=json)
