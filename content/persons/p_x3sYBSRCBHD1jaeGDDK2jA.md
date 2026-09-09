---
schema: wang-person/v1
id: p_x3sYBSRCBHD1jaeGDDK2jA
status: active
merged_into: null
display_name: 王處遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Y7DM91ow2NLPth3SXzZZD
        subject_person_id: p_x3sYBSRCBHD1jaeGDDK2jA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q7Q3FFXsJu91teG5NG2WWo
          claim_id: c_4Y7DM91ow2NLPth3SXzZZD
          source_id: s_ysJU6Buc6yDZqEo1Gqs2nc
          stance: supports
          locator: CBDB:640197
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640197）
          source: &a1
            id: s_ysJU6Buc6yDZqEo1Gqs2nc
            source_type: api_record
            title: 中国历代人物传记资料库：王處遠（CBDB 640197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640197&o=json
            external_identifier: CBDB:640197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1W7eckCG47qjia9JGsKQvc
        subject_person_id: p_x3sYBSRCBHD1jaeGDDK2jA
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
        - id: cs_j955QcbvUmBZckkRRfecGv
          claim_id: c_1W7eckCG47qjia9JGsKQvc
          source_id: s_ysJU6Buc6yDZqEo1Gqs2nc
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

# 王處遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王處遠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王處遠（CBDB 640197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640197&o=json)
