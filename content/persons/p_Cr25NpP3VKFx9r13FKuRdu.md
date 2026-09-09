---
schema: wang-person/v1
id: p_Cr25NpP3VKFx9r13FKuRdu
status: active
merged_into: null
display_name: 王詠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bExfSYGDRHcJMa2sogJdYX
        subject_person_id: p_Cr25NpP3VKFx9r13FKuRdu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VSEg4zkqXJS8KVjtR6fSzf
          claim_id: c_bExfSYGDRHcJMa2sogJdYX
          source_id: s_Ep3QtZtuYxyMKpdKnfLMnb
          stance: supports
          locator: CBDB:215877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215877）
          source: &a1
            id: s_Ep3QtZtuYxyMKpdKnfLMnb
            source_type: api_record
            title: 中国历代人物传记资料库：王詠（CBDB 215877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215877&o=json
            external_identifier: CBDB:215877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gcpCHKXNBk8sNhHF3BLT77
        subject_person_id: p_Cr25NpP3VKFx9r13FKuRdu
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
        - id: cs_LXLQfsdWc48Ho2K6Sme3gK
          claim_id: c_gcpCHKXNBk8sNhHF3BLT77
          source_id: s_Ep3QtZtuYxyMKpdKnfLMnb
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

# 王詠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詠（CBDB 215877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215877&o=json)
