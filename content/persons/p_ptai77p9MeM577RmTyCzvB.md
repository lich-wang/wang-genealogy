---
schema: wang-person/v1
id: p_ptai77p9MeM577RmTyCzvB
status: active
merged_into: null
display_name: 王小青
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xZpCCwTiLJnWuQ5FtH7xX1
        subject_person_id: p_ptai77p9MeM577RmTyCzvB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王小青
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QCgX2WiX15enRDYreeh5bu
          claim_id: c_xZpCCwTiLJnWuQ5FtH7xX1
          source_id: s_Pdx7Gyj2tuSDy35KyrAPgJ
          stance: supports
          locator: CBDB:683953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683953）
          source: &a1
            id: s_Pdx7Gyj2tuSDy35KyrAPgJ
            source_type: api_record
            title: 中国历代人物传记资料库：王小青（CBDB 683953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683953&o=json
            external_identifier: CBDB:683953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9fdNMCyDMzASsa4gp4hTxf
        subject_person_id: p_ptai77p9MeM577RmTyCzvB
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
        - id: cs_5gF3g4GwDXMn9348ttmBE5
          claim_id: c_9fdNMCyDMzASsa4gp4hTxf
          source_id: s_Pdx7Gyj2tuSDy35KyrAPgJ
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

# 王小青

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王小青 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王小青（CBDB 683953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683953&o=json)
