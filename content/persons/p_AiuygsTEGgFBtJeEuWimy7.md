---
schema: wang-person/v1
id: p_AiuygsTEGgFBtJeEuWimy7
status: active
merged_into: null
display_name: 王猷琠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_va4HSzKXvMnh5WbenVfH4p
        subject_person_id: p_AiuygsTEGgFBtJeEuWimy7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王猷琠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TnNfLps3nQGQKJx3zBH1JA
          claim_id: c_va4HSzKXvMnh5WbenVfH4p
          source_id: s_5N5twXFvfSwaMYp7acXFyt
          stance: supports
          locator: CBDB:639367
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639367）
          source: &a1
            id: s_5N5twXFvfSwaMYp7acXFyt
            source_type: api_record
            title: 中国历代人物传记资料库：王猷琠（CBDB 639367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639367&o=json
            external_identifier: CBDB:639367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sq8NKMv3oJobX8d35eAoLj
        subject_person_id: p_AiuygsTEGgFBtJeEuWimy7
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
        - id: cs_4PQ9wQP8HxB8aXatLNtcDg
          claim_id: c_Sq8NKMv3oJobX8d35eAoLj
          source_id: s_5N5twXFvfSwaMYp7acXFyt
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

# 王猷琠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王猷琠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王猷琠（CBDB 639367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639367&o=json)
