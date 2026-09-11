---
schema: wang-person/v1
id: p_U6UjVfpVm6NLf9vqhJmG2J
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 558507
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_lUQX3K7zGfzUGM8X2YnnJk
        subject_person_id: p_U6UjVfpVm6NLf9vqhJmG2J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏，清人物。籍贯信陽州。（中国历代人物传记资料库 CBDB 558507）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4nza8dG8hcMDG4kOcnxR5Y
          claim_id: c_lUQX3K7zGfzUGM8X2YnnJk
          source_id: s_DOODX_GHQDWpVU1KRcermr
          stance: supports
          locator: CBDB:558507
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DOODX_GHQDWpVU1KRcermr
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王翼妻)（CBDB 558507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558507&o=json
            external_identifier: CBDB:558507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tFJYuFRr-22YAqm0hOowqU
        subject_person_id: p_U6UjVfpVm6NLf9vqhJmG2J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZzggzsQWL8RoFpNSyWOJU6
          claim_id: c_tFJYuFRr-22YAqm0hOowqU
          source_id: s_DOODX_GHQDWpVU1KRcermr
          stance: supports
          locator: CBDB:558507
          quotation: null
          interpretation_note: CBDB 明确记录的王翼配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_FfWEGrdns5rKM19lzUUJxf
        subject_person_id: p_9rzXYbkJA2dqMivPhhBtNU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_U6UjVfpVm6NLf9vqhJmG2J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7dK610y_UGf5194Uh7GjOw
          claim_id: c_FfWEGrdns5rKM19lzUUJxf
          source_id: s_DOODX_GHQDWpVU1KRcermr
          stance: supports
          locator: (乾隆)信陽州志，lgid=868525：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9rzXYbkJA2dqMivPhhBtNU
        status: active
        display_name: 王翼
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳氏，清人物。籍贯信陽州。（中国历代人物传记资料库 CBDB 558507） | accepted |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_9rzXYbkJA2dqMivPhhBtNU | 王翼 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王翼妻)（CBDB 558507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558507&o=json)
