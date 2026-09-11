---
schema: wang-person/v1
id: p_8yGASCXkmGtZ8WhTeW8oEp
status: active
merged_into: null
display_name: 王鍇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HWDRGmK2HQr2siHXcJRKup
        subject_person_id: p_8yGASCXkmGtZ8WhTeW8oEp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2EdVSNy8GfZKtP2jGiKeYj
          claim_id: c_HWDRGmK2HQr2siHXcJRKup
          source_id: s_FVM56HPPuBRJXHpW77HhMm
          stance: supports
          locator: CBDB:465561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465561）
          source: &a1
            id: s_FVM56HPPuBRJXHpW77HhMm
            source_type: api_record
            title: 中国历代人物传记资料库：王鍇（CBDB 465561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465561&o=json
            external_identifier: CBDB:465561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o5E2fgvxJCcQJEQMDRDqpA
        subject_person_id: p_8yGASCXkmGtZ8WhTeW8oEp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍇，明人物。入仕監生，曾任通判。（中国历代人物传记资料库 CBDB 465561）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2wOvO5pTeb9WkicYZtf7dI
          claim_id: c_o5E2fgvxJCcQJEQMDRDqpA
          source_id: s_FVM56HPPuBRJXHpW77HhMm
          stance: supports
          locator: CBDB:465561
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

# 王鍇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍇 | accepted |
| bio.summary | 王鍇，明人物。入仕監生，曾任通判。（中国历代人物传记资料库 CBDB 465561） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍇（CBDB 465561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465561&o=json)
