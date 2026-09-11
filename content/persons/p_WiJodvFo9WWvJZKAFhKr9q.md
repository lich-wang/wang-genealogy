---
schema: wang-person/v1
id: p_WiJodvFo9WWvJZKAFhKr9q
status: active
merged_into: null
display_name: 王兢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QHrWo5xCUaETLnkDoUbX8b
        subject_person_id: p_WiJodvFo9WWvJZKAFhKr9q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_era5DwPTZndpg4AURnkUMf
          claim_id: c_QHrWo5xCUaETLnkDoUbX8b
          source_id: s_746aM5SKyTHCdZ3hrx2YH5
          stance: supports
          locator: CBDB:18185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18185）
          source: &a1
            id: s_746aM5SKyTHCdZ3hrx2YH5
            source_type: api_record
            title: 中国历代人物传记资料库：王兢（CBDB 18185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18185&o=json
            external_identifier: CBDB:18185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8yvA9Piyxw1zsjvDLjSiLh
        subject_person_id: p_WiJodvFo9WWvJZKAFhKr9q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兢，宋人物。籍贯北海。（中国历代人物传记资料库 CBDB 18185）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qjGLVTGKqpFdfUIDv4v76t
          claim_id: c_8yvA9Piyxw1zsjvDLjSiLh
          source_id: s_746aM5SKyTHCdZ3hrx2YH5
          stance: supports
          locator: CBDB:18185
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

# 王兢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兢 | accepted |
| bio.summary | 王兢，宋人物。籍贯北海。（中国历代人物传记资料库 CBDB 18185） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兢（CBDB 18185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18185&o=json)
