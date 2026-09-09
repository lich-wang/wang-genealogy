---
schema: wang-person/v1
id: p_DDUMHYJrvdMaw8GcMtM4Py
status: active
merged_into: null
display_name: 王明遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W3rHxfAXFBn4gxNxySUAsa
        subject_person_id: p_DDUMHYJrvdMaw8GcMtM4Py
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pa9gbiHgE5ZHB8twWgTRdT
          claim_id: c_W3rHxfAXFBn4gxNxySUAsa
          source_id: s_xirkS9uRkbKG95aD9eb1AM
          stance: supports
          locator: CBDB:638395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638395）
          source: &a1
            id: s_xirkS9uRkbKG95aD9eb1AM
            source_type: api_record
            title: 中国历代人物传记资料库：王明遠（CBDB 638395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638395&o=json
            external_identifier: CBDB:638395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BtZnR2B4GViuiNh93vJe1V
        subject_person_id: p_DDUMHYJrvdMaw8GcMtM4Py
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
        - id: cs_DCHn6hML2U6RLGUM8DNyG8
          claim_id: c_BtZnR2B4GViuiNh93vJe1V
          source_id: s_xirkS9uRkbKG95aD9eb1AM
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

# 王明遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明遠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明遠（CBDB 638395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638395&o=json)
