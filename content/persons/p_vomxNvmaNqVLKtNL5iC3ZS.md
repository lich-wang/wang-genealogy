---
schema: wang-person/v1
id: p_vomxNvmaNqVLKtNL5iC3ZS
status: active
merged_into: null
display_name: 王仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aqQFHMunkspFmWKaG1N5cZ
        subject_person_id: p_vomxNvmaNqVLKtNL5iC3ZS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5gUGpQs51azTiFQXvYMQK3
          claim_id: c_aqQFHMunkspFmWKaG1N5cZ
          source_id: s_mUEgX4idbijUoBPLGMDTCf
          stance: supports
          locator: CBDB:561765
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561765）
          source: &a1
            id: s_mUEgX4idbijUoBPLGMDTCf
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 561765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561765&o=json
            external_identifier: CBDB:561765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uJJC6wp2utAUbk3drKE7BU
        subject_person_id: p_vomxNvmaNqVLKtNL5iC3ZS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁，明人物。籍贯南昌，入仕以茂才,才行,武功,廉仁等科舉/授官 （非制科），曾任知縣。（中国历代人物传记资料库 CBDB 561765）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QKPRuNMSduFpYO8CQJ1KRV
          claim_id: c_uJJC6wp2utAUbk3drKE7BU
          source_id: s_mUEgX4idbijUoBPLGMDTCf
          stance: supports
          locator: CBDB:561765
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

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| bio.summary | 王仁，明人物。籍贯南昌，入仕以茂才,才行,武功,廉仁等科舉/授官 （非制科），曾任知縣。（中国历代人物传记资料库 CBDB 561765） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 561765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561765&o=json)
