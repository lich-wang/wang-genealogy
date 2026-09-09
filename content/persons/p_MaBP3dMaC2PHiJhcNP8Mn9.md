---
schema: wang-person/v1
id: p_MaBP3dMaC2PHiJhcNP8Mn9
status: active
merged_into: null
display_name: 王蘭昇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2bpcSLvFTYQQ52unLw78bd
        subject_person_id: p_MaBP3dMaC2PHiJhcNP8Mn9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8nNvtxLrBvJeQxS3TrpeMt
          claim_id: c_2bpcSLvFTYQQ52unLw78bd
          source_id: s_7SiU1XorZcd8bf7aCChcm9
          stance: supports
          locator: CBDB:71499
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71499）
          source: &a1
            id: s_7SiU1XorZcd8bf7aCChcm9
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭昇（CBDB 71499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71499&o=json
            external_identifier: CBDB:71499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iQeqKj5cWhGcavHuEGSjaL
        subject_person_id: p_MaBP3dMaC2PHiJhcNP8Mn9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1829年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S9M77263aArP4TWaUr3zAT
          claim_id: c_iQeqKj5cWhGcavHuEGSjaL
          source_id: s_7SiU1XorZcd8bf7aCChcm9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MFbq1yiFiRERLNQ22CzJNX
        subject_person_id: p_MaBP3dMaC2PHiJhcNP8Mn9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1880年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1RLheLDtQvFX2pZLNh2Xf7
          claim_id: c_MFbq1yiFiRERLNQ22CzJNX
          source_id: s_7SiU1XorZcd8bf7aCChcm9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tvc1uXUyjBHrxpQXTaUgm7
        subject_person_id: p_MaBP3dMaC2PHiJhcNP8Mn9
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
        - id: cs_FEDJXp2RS8wykjQr94LDB2
          claim_id: c_tvc1uXUyjBHrxpQXTaUgm7
          source_id: s_7SiU1XorZcd8bf7aCChcm9
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

# 王蘭昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭昇 | accepted |
| birth.date | 1829年 | accepted |
| death.date | 1880年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘭昇（CBDB 71499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71499&o=json)
