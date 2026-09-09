---
schema: wang-person/v1
id: p_a7DEqZ193PNQ52JznrYMkR
status: active
merged_into: null
display_name: 王萬安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9TTqJcXxF3Bk7Ydeyj7wP9
        subject_person_id: p_a7DEqZ193PNQ52JznrYMkR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gd84v9FSNjMvdFMvKstGQS
          claim_id: c_9TTqJcXxF3Bk7Ydeyj7wP9
          source_id: s_KD4wLYW2NEFEpG9wXGomoh
          stance: supports
          locator: CBDB:640117
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640117）
          source: &a1
            id: s_KD4wLYW2NEFEpG9wXGomoh
            source_type: api_record
            title: 中国历代人物传记资料库：王萬安（CBDB 640117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640117&o=json
            external_identifier: CBDB:640117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.156Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sgu6eoY8HTHFz83hWX35AF
        subject_person_id: p_a7DEqZ193PNQ52JznrYMkR
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
        - id: cs_PTRVRazVvxYqhE3wJ7ApU6
          claim_id: c_Sgu6eoY8HTHFz83hWX35AF
          source_id: s_KD4wLYW2NEFEpG9wXGomoh
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

# 王萬安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬安 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬安（CBDB 640117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640117&o=json)
