---
schema: wang-person/v1
id: p_maYRENQxzfRp4y47Nm1HV9
status: active
merged_into: null
display_name: 王棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8GyM8s6Wj7M33cD2GfxSS4
        subject_person_id: p_maYRENQxzfRp4y47Nm1HV9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6nmjM8sJgS8EV5T3RFT31a
          claim_id: c_8GyM8s6Wj7M33cD2GfxSS4
          source_id: s_61JNk2CZYMxqcxHzS36gew
          stance: supports
          locator: CBDB:329699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329699）
          source: &a1
            id: s_61JNk2CZYMxqcxHzS36gew
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 329699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329699&o=json
            external_identifier: CBDB:329699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z4jWmXcb1tfNg7sG9raUz6
        subject_person_id: p_maYRENQxzfRp4y47Nm1HV9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟，明人物。嘉靖四十四年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 329699）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nOymWxRsFA-v0zXSccWlhG
          claim_id: c_z4jWmXcb1tfNg7sG9raUz6
          source_id: s_61JNk2CZYMxqcxHzS36gew
          stance: supports
          locator: CBDB:329699
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

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | 王棟，明人物。嘉靖四十四年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 329699） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 329699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329699&o=json)
