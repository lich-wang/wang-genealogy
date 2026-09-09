---
schema: wang-person/v1
id: p_Pd7rw4tLGNm538sjjG5uo4
status: active
merged_into: null
display_name: 王定城
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RHXUbbBXLQAEFXJ27FNBr3
        subject_person_id: p_Pd7rw4tLGNm538sjjG5uo4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定城
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ECnTWt3QKHgCsFmjtb8PjF
          claim_id: c_RHXUbbBXLQAEFXJ27FNBr3
          source_id: s_3ZjR98Qor4pJFZJDKth6Kp
          stance: supports
          locator: CBDB:637133
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637133）
          source: &a1
            id: s_3ZjR98Qor4pJFZJDKth6Kp
            source_type: api_record
            title: 中国历代人物传记资料库：王定城（CBDB 637133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637133&o=json
            external_identifier: CBDB:637133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.213Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nHot61F2S1ykLSWVf4oY4n
        subject_person_id: p_Pd7rw4tLGNm538sjjG5uo4
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
        - id: cs_pSytJ4cUSBJVuCtg6ubcaV
          claim_id: c_nHot61F2S1ykLSWVf4oY4n
          source_id: s_3ZjR98Qor4pJFZJDKth6Kp
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

# 王定城

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定城 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定城（CBDB 637133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637133&o=json)
