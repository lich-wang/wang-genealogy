---
schema: wang-person/v1
id: p_CNQq29PPARqLQdyYsUrpxT
status: active
merged_into: null
display_name: 王辯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BB1RUaYMV5YobC9PYTYoVw
        subject_person_id: p_CNQq29PPARqLQdyYsUrpxT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z2EFBbJm2ZeEUHc3yQ23fh
          claim_id: c_BB1RUaYMV5YobC9PYTYoVw
          source_id: s_F9s62EoXN9pasHwFnDDFVS
          stance: supports
          locator: CBDB:700887
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700887）
          source: &a1
            id: s_F9s62EoXN9pasHwFnDDFVS
            source_type: api_record
            title: 中国历代人物传记资料库：王辯（CBDB 700887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700887&o=json
            external_identifier: CBDB:700887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xQA7o7CViXQqYH7aE6eneD
        subject_person_id: p_CNQq29PPARqLQdyYsUrpxT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1019年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xRVtXjycQj3yGxYB72Ydpp
          claim_id: c_xQA7o7CViXQqYH7aE6eneD
          source_id: s_F9s62EoXN9pasHwFnDDFVS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_R3684BEk967PZYoBrLCeFV
        subject_person_id: p_CNQq29PPARqLQdyYsUrpxT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1064年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TqcJZFYtFm2V17fJMNbJ3e
          claim_id: c_R3684BEk967PZYoBrLCeFV
          source_id: s_F9s62EoXN9pasHwFnDDFVS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_29uRdESpRKq2XZ5XdwB8AB
        subject_person_id: p_CNQq29PPARqLQdyYsUrpxT
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
        - id: cs_AKE1bBEz2bE1eaJ33y1Ppm
          claim_id: c_29uRdESpRKq2XZ5XdwB8AB
          source_id: s_F9s62EoXN9pasHwFnDDFVS
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

# 王辯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王辯 | accepted |
| birth.date | 1019年 | accepted |
| death.date | 1064年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王辯（CBDB 700887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700887&o=json)
