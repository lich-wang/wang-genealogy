---
schema: wang-person/v1
id: p_F1EWWjwpLty1CEek4iRGS3
status: active
merged_into: null
display_name: 王昌南
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F9FUQucoXQLurC3HK3Y9iJ
        subject_person_id: p_F1EWWjwpLty1CEek4iRGS3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌南
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ToPMbHNgYCDw1Rrh2eDbD
          claim_id: c_F9FUQucoXQLurC3HK3Y9iJ
          source_id: s_Z2aZuDtKDR7KzoBx5E6CMx
          stance: supports
          locator: CBDB:638367
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638367）
          source: &a1
            id: s_Z2aZuDtKDR7KzoBx5E6CMx
            source_type: api_record
            title: 中国历代人物传记资料库：王昌南（CBDB 638367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638367&o=json
            external_identifier: CBDB:638367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uujSbrMjdGkQL11DQYUPkC
        subject_person_id: p_F1EWWjwpLty1CEek4iRGS3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌南，清人物。籍贯湘陰，入仕縣學附生，曾任知縣。（中国历代人物传记资料库 CBDB 638367）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aPvlEsNURrYwbGzM_8rGDO
          claim_id: c_uujSbrMjdGkQL11DQYUPkC
          source_id: s_Z2aZuDtKDR7KzoBx5E6CMx
          stance: supports
          locator: CBDB:638367
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

# 王昌南

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌南 | accepted |
| bio.summary | 王昌南，清人物。籍贯湘陰，入仕縣學附生，曾任知縣。（中国历代人物传记资料库 CBDB 638367） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌南（CBDB 638367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638367&o=json)
