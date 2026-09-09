---
schema: wang-person/v1
id: p_wNv8Vbc7JutZFa8E8V91oD
status: active
merged_into: null
display_name: 王重祿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wM97s2L6vFoADL3wNjqt15
        subject_person_id: p_wNv8Vbc7JutZFa8E8V91oD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5WHP4vpwb7S7pWQ6yFVixr
          claim_id: c_wM97s2L6vFoADL3wNjqt15
          source_id: s_HwN52wWXDgZ2FN6kJkwa3u
          stance: supports
          locator: CBDB:640501
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640501）
          source: &a1
            id: s_HwN52wWXDgZ2FN6kJkwa3u
            source_type: api_record
            title: 中国历代人物传记资料库：王重祿（CBDB 640501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640501&o=json
            external_identifier: CBDB:640501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9c8C7NxAsVYJPhMBLipFMQ
        subject_person_id: p_wNv8Vbc7JutZFa8E8V91oD
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
        - id: cs_NQFq9hE2zpEawsxQAKAYn7
          claim_id: c_9c8C7NxAsVYJPhMBLipFMQ
          source_id: s_HwN52wWXDgZ2FN6kJkwa3u
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

# 王重祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重祿 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王重祿（CBDB 640501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640501&o=json)
