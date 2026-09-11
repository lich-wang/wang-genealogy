---
schema: wang-person/v1
id: p_NKRTwMMZgM5Yzw8TFve37E
status: active
merged_into: null
display_name: 王懿修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Uq38cz2HNcH2reJH38n1kY
        subject_person_id: p_NKRTwMMZgM5Yzw8TFve37E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懿修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Sbt6zVLSxPcCEAkYZbw6xF
          claim_id: c_Uq38cz2HNcH2reJH38n1kY
          source_id: s_wMEBpto3q8Fw9ZGY98sxrF
          stance: supports
          locator: CBDB:343270
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343270）
          source: &a1
            id: s_wMEBpto3q8Fw9ZGY98sxrF
            source_type: api_record
            title: 中国历代人物传记资料库：王懿修（CBDB 343270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343270&o=json
            external_identifier: CBDB:343270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wC29BuSdWrHQ1vMJ1TAxoJ
        subject_person_id: p_NKRTwMMZgM5Yzw8TFve37E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懿修，清人物。明清進士進士，籍贯青陽，入仕進士，曾任編修、會試考官、禮部尚書。（中国历代人物传记资料库 CBDB 343270）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A026uUV3w3zbUvmNqe30By
          claim_id: c_wC29BuSdWrHQ1vMJ1TAxoJ
          source_id: s_wMEBpto3q8Fw9ZGY98sxrF
          stance: supports
          locator: CBDB:343270
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

# 王懿修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懿修 | accepted |
| bio.summary | 王懿修，清人物。明清進士進士，籍贯青陽，入仕進士，曾任編修、會試考官、禮部尚書。（中国历代人物传记资料库 CBDB 343270） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懿修（CBDB 343270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343270&o=json)
