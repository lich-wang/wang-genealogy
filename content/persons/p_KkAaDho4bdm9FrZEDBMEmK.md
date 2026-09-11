---
schema: wang-person/v1
id: p_KkAaDho4bdm9FrZEDBMEmK
status: active
merged_into: null
display_name: 王國訓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uu6dEnFbYBdNWmTRcAGoJZ
        subject_person_id: p_KkAaDho4bdm9FrZEDBMEmK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_at32fTZTbH7pbn5GsTJ3dA
          claim_id: c_uu6dEnFbYBdNWmTRcAGoJZ
          source_id: s_fspgb6wzdYF7kH4qwxP4L9
          stance: supports
          locator: CBDB:123623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（123623）
          source: &a1
            id: s_fspgb6wzdYF7kH4qwxP4L9
            source_type: api_record
            title: 中国历代人物传记资料库：王國訓（CBDB 123623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123623&o=json
            external_identifier: CBDB:123623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_v3WScFETY6NrCMKQHP448y
        subject_person_id: p_KkAaDho4bdm9FrZEDBMEmK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1635年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZersPS1CymjbNwF1T2Yn49
          claim_id: c_v3WScFETY6NrCMKQHP448y
          source_id: s_fspgb6wzdYF7kH4qwxP4L9
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
        id: c_J1AAr5gCnE4HFP9KU5SjuL
        subject_person_id: p_KkAaDho4bdm9FrZEDBMEmK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國訓（卒于1635年），明人物。明清進士進士，籍贯解州，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 123623）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uwFbM_6H12L-RnFFO_0Alg
          claim_id: c_J1AAr5gCnE4HFP9KU5SjuL
          source_id: s_fspgb6wzdYF7kH4qwxP4L9
          stance: supports
          locator: CBDB:123623
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

# 王國訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國訓 | accepted |
| death.date | 1635年 | accepted |
| bio.summary | 王國訓（卒于1635年），明人物。明清進士進士，籍贯解州，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 123623） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國訓（CBDB 123623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123623&o=json)
