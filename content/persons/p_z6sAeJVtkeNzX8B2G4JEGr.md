---
schema: wang-person/v1
id: p_z6sAeJVtkeNzX8B2G4JEGr
status: active
merged_into: null
display_name: 王友端
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PXSx9okJj7thiSXZFYJD2H
        subject_person_id: p_z6sAeJVtkeNzX8B2G4JEGr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kmP24yRfLHsVR9Mq38YEDp
          claim_id: c_PXSx9okJj7thiSXZFYJD2H
          source_id: s_pLLsmQCq4HHJw6Gd6GaezY
          stance: supports
          locator: CBDB:69077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69077）
          source: &a1
            id: s_pLLsmQCq4HHJw6Gd6GaezY
            source_type: api_record
            title: 中国历代人物传记资料库：王友端（CBDB 69077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69077&o=json
            external_identifier: CBDB:69077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.108Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qyeqtfEUyuCWMX1vVzdLFb
        subject_person_id: p_z6sAeJVtkeNzX8B2G4JEGr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1818年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wSEZMQzP4m2tEJPYmfKy3R
          claim_id: c_qyeqtfEUyuCWMX1vVzdLFb
          source_id: s_pLLsmQCq4HHJw6Gd6GaezY
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
        id: c_AJriSdvU3fwgSbm34hZ6P5
        subject_person_id: p_z6sAeJVtkeNzX8B2G4JEGr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1860年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uVAUQdeWPGJ2zvtuqd8ur3
          claim_id: c_AJriSdvU3fwgSbm34hZ6P5
          source_id: s_pLLsmQCq4HHJw6Gd6GaezY
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
        id: c_HQKofLJcCFHARhxzBAwMmN
        subject_person_id: p_z6sAeJVtkeNzX8B2G4JEGr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友端（1818年—1860年），清人物。明清進士進士，籍贯婺源，入仕進士，曾任布政使司布政使、鹽運使銜。（中国历代人物传记资料库 CBDB 69077）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0LeL6PU581-FHO-2IMguqn
          claim_id: c_HQKofLJcCFHARhxzBAwMmN
          source_id: s_pLLsmQCq4HHJw6Gd6GaezY
          stance: supports
          locator: CBDB:69077
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

# 王友端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友端 | accepted |
| birth.date | 1818年 | accepted |
| death.date | 1860年 | accepted |
| bio.summary | 王友端（1818年—1860年），清人物。明清進士進士，籍贯婺源，入仕進士，曾任布政使司布政使、鹽運使銜。（中国历代人物传记资料库 CBDB 69077） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友端（CBDB 69077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69077&o=json)
