---
schema: wang-person/v1
id: p_48URpP6LWKRknUFDSLgt27
status: active
merged_into: null
display_name: 王體名
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6xAcEZ93uK65WTV5LGK3JC
        subject_person_id: p_48URpP6LWKRknUFDSLgt27
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體名
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gb6hTKuh1DxFBBBXqqVfsh
          claim_id: c_6xAcEZ93uK65WTV5LGK3JC
          source_id: s_sab5C4rszB2uteGs3NDzwA
          stance: supports
          locator: CBDB:640907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640907）
          source: &a1
            id: s_sab5C4rszB2uteGs3NDzwA
            source_type: api_record
            title: 中国历代人物传记资料库：王體名（CBDB 640907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640907&o=json
            external_identifier: CBDB:640907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kGjsgUHUYYgzfo3dDrdFM3
        subject_person_id: p_48URpP6LWKRknUFDSLgt27
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體名，清人物。籍贯遵義，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640907）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P2B-FEWMn4jwD27PXlTBHn
          claim_id: c_kGjsgUHUYYgzfo3dDrdFM3
          source_id: s_sab5C4rszB2uteGs3NDzwA
          stance: supports
          locator: CBDB:640907
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

# 王體名

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王體名 | accepted |
| bio.summary | 王體名，清人物。籍贯遵義，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640907） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王體名（CBDB 640907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640907&o=json)
