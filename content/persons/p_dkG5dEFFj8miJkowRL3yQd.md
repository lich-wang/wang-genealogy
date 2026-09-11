---
schema: wang-person/v1
id: p_dkG5dEFFj8miJkowRL3yQd
status: active
merged_into: null
display_name: 王榕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n5M4nrGDnvS7TY4oLANq4J
        subject_person_id: p_dkG5dEFFj8miJkowRL3yQd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Me27fRK77Xt7sh4zT4hi3T
          claim_id: c_n5M4nrGDnvS7TY4oLANq4J
          source_id: s_jBR6zP3HZzdMhMm4vV7TW7
          stance: supports
          locator: CBDB:484789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（484789）
          source: &a1
            id: s_jBR6zP3HZzdMhMm4vV7TW7
            source_type: api_record
            title: 中国历代人物传记资料库：王榕（CBDB 484789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484789&o=json
            external_identifier: CBDB:484789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6E4EDjX9jJU6rxQUdFgA6s
        subject_person_id: p_dkG5dEFFj8miJkowRL3yQd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榕，宋人物。曾任縣尉。（中国历代人物传记资料库 CBDB 484789）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ysNHlOEGIdeoIi1VTT4d16
          claim_id: c_6E4EDjX9jJU6rxQUdFgA6s
          source_id: s_jBR6zP3HZzdMhMm4vV7TW7
          stance: supports
          locator: CBDB:484789
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

# 王榕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榕 | accepted |
| bio.summary | 王榕，宋人物。曾任縣尉。（中国历代人物传记资料库 CBDB 484789） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榕（CBDB 484789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484789&o=json)
