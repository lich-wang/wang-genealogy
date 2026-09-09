---
schema: wang-person/v1
id: p_LuUQdBEURLkKSd5MjE4H5J
status: active
merged_into: null
display_name: 王嶠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mo5Z3uDrmVnpTkdHzdZwph
        subject_person_id: p_LuUQdBEURLkKSd5MjE4H5J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HRz91v7Ciwa7HAdDmAghEE
          claim_id: c_mo5Z3uDrmVnpTkdHzdZwph
          source_id: s_FPF72CfSqGtohQG2jiuMyj
          stance: supports
          locator: CBDB:637378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637378）
          source: &a1
            id: s_FPF72CfSqGtohQG2jiuMyj
            source_type: api_record
            title: 中国历代人物传记资料库：王嶠（CBDB 637378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637378&o=json
            external_identifier: CBDB:637378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.395Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vRjXr5Jb7q6CPFceH5n76E
        subject_person_id: p_LuUQdBEURLkKSd5MjE4H5J
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
        - id: cs_xWAR4WQQVw2r6v4TFU3chp
          claim_id: c_vRjXr5Jb7q6CPFceH5n76E
          source_id: s_FPF72CfSqGtohQG2jiuMyj
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

# 王嶠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嶠（CBDB 637378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637378&o=json)
