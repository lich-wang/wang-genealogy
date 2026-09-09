---
schema: wang-person/v1
id: p_Wk3sC5J4yRt2WoJturnPL7
status: active
merged_into: null
display_name: 王三俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LW9kMoYdG21mpgZmUermgX
        subject_person_id: p_Wk3sC5J4yRt2WoJturnPL7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iPz1P93q6hLAZnDQgkK3Gu
          claim_id: c_LW9kMoYdG21mpgZmUermgX
          source_id: s_MtUC5T1p26NteR2W9qtSjp
          stance: supports
          locator: CBDB:279882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279882）
          source: &a1
            id: s_MtUC5T1p26NteR2W9qtSjp
            source_type: api_record
            title: 中国历代人物传记资料库：王三俊（CBDB 279882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279882&o=json
            external_identifier: CBDB:279882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_chHhjKqngXcD2UZ6KksJeC
        subject_person_id: p_Wk3sC5J4yRt2WoJturnPL7
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
        - id: cs_u9kyMccBpmzWGuoFEh4awG
          claim_id: c_chHhjKqngXcD2UZ6KksJeC
          source_id: s_MtUC5T1p26NteR2W9qtSjp
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

# 王三俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三俊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三俊（CBDB 279882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279882&o=json)
