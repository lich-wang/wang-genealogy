---
schema: wang-person/v1
id: p_xcSr3e3mJTqFTEMmc1TDKf
status: active
merged_into: null
display_name: 王鵬南
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W1HcVP7tdYmH64q9H9H68Q
        subject_person_id: p_xcSr3e3mJTqFTEMmc1TDKf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬南
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6BPS2QiNxh97UASFLM5jLF
          claim_id: c_W1HcVP7tdYmH64q9H9H68Q
          source_id: s_7u3nKXPFALRvaA66LSx9J9
          stance: supports
          locator: CBDB:641008
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641008）
          source: &a1
            id: s_7u3nKXPFALRvaA66LSx9J9
            source_type: api_record
            title: 中国历代人物传记资料库：王鵬南（CBDB 641008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641008&o=json
            external_identifier: CBDB:641008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CmGLdJXZAGJjR2Aamk4RTW
        subject_person_id: p_xcSr3e3mJTqFTEMmc1TDKf
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
        - id: cs_mmEJHUMcRP55JYtvmKRwa5
          claim_id: c_CmGLdJXZAGJjR2Aamk4RTW
          source_id: s_7u3nKXPFALRvaA66LSx9J9
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

# 王鵬南

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵬南 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鵬南（CBDB 641008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641008&o=json)
