---
schema: wang-person/v1
id: p_a2JWCcAj9d9wHsQ9G7QHmj
status: active
merged_into: null
display_name: 王循
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6YyKGgDFVMGgpGDvnaUJa4
        subject_person_id: p_a2JWCcAj9d9wHsQ9G7QHmj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王循
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aQNyWSDMxdokbNq39iG3V7
          claim_id: c_6YyKGgDFVMGgpGDvnaUJa4
          source_id: s_F37ouJ45YLVRMmgysV9pMK
          stance: supports
          locator: CBDB:483909
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483909）
          source: &a1
            id: s_F37ouJ45YLVRMmgysV9pMK
            source_type: api_record
            title: 中国历代人物传记资料库：王循（CBDB 483909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483909&o=json
            external_identifier: CBDB:483909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FCwrRKPWEH65R5wPrDbuJE
        subject_person_id: p_a2JWCcAj9d9wHsQ9G7QHmj
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
        - id: cs_FGTa9jgFv8ETP31sRMj8Cx
          claim_id: c_FCwrRKPWEH65R5wPrDbuJE
          source_id: s_F37ouJ45YLVRMmgysV9pMK
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

# 王循

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王循 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王循（CBDB 483909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483909&o=json)
