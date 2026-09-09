---
schema: wang-person/v1
id: p_G5bAkYBtfoQ9N4uGS4LVix
status: active
merged_into: null
display_name: 王師虺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WaZ5yaX2rAUr6UU1EzdSG3
        subject_person_id: p_G5bAkYBtfoQ9N4uGS4LVix
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師虺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AzjU8wWBCm46P2UEGrMQqG
          claim_id: c_WaZ5yaX2rAUr6UU1EzdSG3
          source_id: s_XiMgnmLvFoF7DxfgYU5EHG
          stance: supports
          locator: CBDB:555356
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555356）
          source: &a1
            id: s_XiMgnmLvFoF7DxfgYU5EHG
            source_type: api_record
            title: 中国历代人物传记资料库：王師虺（CBDB 555356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555356&o=json
            external_identifier: CBDB:555356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_huga14o3X9r8dXPPh3MnT6
        subject_person_id: p_G5bAkYBtfoQ9N4uGS4LVix
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
        - id: cs_8n3Y9uQjf1VmpWuyMHbYaE
          claim_id: c_huga14o3X9r8dXPPh3MnT6
          source_id: s_XiMgnmLvFoF7DxfgYU5EHG
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

# 王師虺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師虺 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師虺（CBDB 555356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555356&o=json)
