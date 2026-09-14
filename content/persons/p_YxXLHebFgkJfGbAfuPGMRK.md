---
schema: wang-person/v1
id: p_YxXLHebFgkJfGbAfuPGMRK
status: active
merged_into: null
display_name: 王璋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BteitD5M4wMc7qJ5L91Q1L
        subject_person_id: p_YxXLHebFgkJfGbAfuPGMRK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sUUVN6hXTTcvi1zLxevF6G
          claim_id: c_BteitD5M4wMc7qJ5L91Q1L
          source_id: s_wHjGmKC3jpfzX71Td4rr7X
          stance: supports
          locator: CBDB:563038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563038）
          source: &a1
            id: s_wHjGmKC3jpfzX71Td4rr7X
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 563038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563038&o=json
            external_identifier: CBDB:563038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vH9cPWLF8PBVuX8n8xrJw4
        subject_person_id: p_YxXLHebFgkJfGbAfuPGMRK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋，宋人物。曾任忠訓郎。（中国历代人物传记资料库 CBDB 563038）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c1myqS_oy28RJPlc3aOFjD
          claim_id: c_vH9cPWLF8PBVuX8n8xrJw4
          source_id: s_wHjGmKC3jpfzX71Td4rr7X
          stance: supports
          locator: CBDB:563038
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6UO-3M7iJu6rWhfoc25Wtk
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YxXLHebFgkJfGbAfuPGMRK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H4AhYSOioVkPIty-lVfyz6
          claim_id: c_6UO-3M7iJu6rWhfoc25Wtk
          source_id: s_1VkaIO2ADsbmpwDnnP8MZ1
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_1VkaIO2ADsbmpwDnnP8MZ1
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 563038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563038&o=json
            external_identifier: CBDB:563038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vfZA8CNHYRGPvaenX91t3P
        status: active
        display_name: 王德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璋 | accepted |
| bio.summary | 王璋，宋人物。曾任忠訓郎。（中国历代人物传记资料库 CBDB 563038） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vfZA8CNHYRGPvaenX91t3P | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璋（CBDB 563038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563038&o=json)
