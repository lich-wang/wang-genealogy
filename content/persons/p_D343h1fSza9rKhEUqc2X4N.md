---
schema: wang-person/v1
id: p_D343h1fSza9rKhEUqc2X4N
status: active
merged_into: null
display_name: 王去疾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ztbbe7tdzvQthFbQZXxx17
        subject_person_id: p_D343h1fSza9rKhEUqc2X4N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王去疾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z6aUCQC5v437Ky2An8QC4u
          claim_id: c_ztbbe7tdzvQthFbQZXxx17
          source_id: s_goQKWFYhexzQjKS7JRqwqz
          stance: supports
          locator: CBDB:101121
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101121）
          source: &a1
            id: s_goQKWFYhexzQjKS7JRqwqz
            source_type: api_record
            title: 中国历代人物传记资料库：王去疾（CBDB 101121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101121&o=json
            external_identifier: CBDB:101121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FJP3o3fQU94dG2EPTXeKaB
        subject_person_id: p_D343h1fSza9rKhEUqc2X4N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T5yyYkonhUCee5n9F56tkY
          claim_id: c_FJP3o3fQU94dG2EPTXeKaB
          source_id: s_goQKWFYhexzQjKS7JRqwqz
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

# 王去疾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王去疾 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王去疾（CBDB 101121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101121&o=json)
