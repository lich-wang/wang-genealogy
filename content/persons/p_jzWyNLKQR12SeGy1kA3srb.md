---
schema: wang-person/v1
id: p_jzWyNLKQR12SeGy1kA3srb
status: active
merged_into: null
display_name: 王錫命
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x6EzN8kp3DPey5zVQgx2AP
        subject_person_id: p_jzWyNLKQR12SeGy1kA3srb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫命
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CM3LFHPShvjQ81mfz7Wrot
          claim_id: c_x6EzN8kp3DPey5zVQgx2AP
          source_id: s_CZ2L2NWeTaJW5xAE34QjAs
          stance: supports
          locator: CBDB:456184
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456184）
          source: &a1
            id: s_CZ2L2NWeTaJW5xAE34QjAs
            source_type: api_record
            title: 中国历代人物传记资料库：王錫命（CBDB 456184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456184&o=json
            external_identifier: CBDB:456184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.567Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7V268h3YKSYCyZbEVeMXe5
        subject_person_id: p_jzWyNLKQR12SeGy1kA3srb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫命，清人物。入仕進士，曾任同知。（中国历代人物传记资料库 CBDB 456184）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jtCUsZv1I_Wnrhid_zTaFA
          claim_id: c_7V268h3YKSYCyZbEVeMXe5
          source_id: s_CZ2L2NWeTaJW5xAE34QjAs
          stance: supports
          locator: CBDB:456184
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

# 王錫命

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫命 | accepted |
| bio.summary | 王錫命，清人物。入仕進士，曾任同知。（中国历代人物传记资料库 CBDB 456184） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫命（CBDB 456184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456184&o=json)
