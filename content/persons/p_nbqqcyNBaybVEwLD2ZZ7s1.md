---
schema: wang-person/v1
id: p_nbqqcyNBaybVEwLD2ZZ7s1
status: active
merged_into: null
display_name: 王鏡萸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h8oEhg5eR1yD1PpnxASPHs
        subject_person_id: p_nbqqcyNBaybVEwLD2ZZ7s1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏡萸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QchtfBaqgKebR4Tj1F8L1F
          claim_id: c_h8oEhg5eR1yD1PpnxASPHs
          source_id: s_3Kiy7VrckCmj7t5AT2PEFT
          stance: supports
          locator: CBDB:568801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568801）
          source: &a1
            id: s_3Kiy7VrckCmj7t5AT2PEFT
            source_type: api_record
            title: 中国历代人物传记资料库：王鏡萸（CBDB 568801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568801&o=json
            external_identifier: CBDB:568801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EShgVT3CUzGkXs9B4moH4W
        subject_person_id: p_nbqqcyNBaybVEwLD2ZZ7s1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏡萸，清人物。籍贯太湖聽。（中国历代人物传记资料库 CBDB 568801）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CChyRizNyN00FQM1P5yVTT
          claim_id: c_EShgVT3CUzGkXs9B4moH4W
          source_id: s_3Kiy7VrckCmj7t5AT2PEFT
          stance: supports
          locator: CBDB:568801
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王鏡萸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏡萸 | accepted |
| bio.summary | 王鏡萸，清人物。籍贯太湖聽。（中国历代人物传记资料库 CBDB 568801） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏡萸（CBDB 568801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568801&o=json)
