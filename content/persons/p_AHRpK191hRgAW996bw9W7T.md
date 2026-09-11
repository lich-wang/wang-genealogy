---
schema: wang-person/v1
id: p_AHRpK191hRgAW996bw9W7T
status: active
merged_into: null
display_name: 王光炘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5pXqNr9j7r4kBL5svTjk6W
        subject_person_id: p_AHRpK191hRgAW996bw9W7T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光炘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zQFVCUe8rHbJmV84VYNaew
          claim_id: c_5pXqNr9j7r4kBL5svTjk6W
          source_id: s_L85mZW67AL4N7M8WG3juHP
          stance: supports
          locator: CBDB:636261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636261）
          source: &a1
            id: s_L85mZW67AL4N7M8WG3juHP
            source_type: api_record
            title: 中国历代人物传记资料库：王光炘（CBDB 636261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636261&o=json
            external_identifier: CBDB:636261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vCACW233CRfa8Sr2sc8wGR
        subject_person_id: p_AHRpK191hRgAW996bw9W7T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光炘，清人物。籍贯錢塘，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636261）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_10I3prpANl5j_72a_AUKMh
          claim_id: c_vCACW233CRfa8Sr2sc8wGR
          source_id: s_L85mZW67AL4N7M8WG3juHP
          stance: supports
          locator: CBDB:636261
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

# 王光炘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光炘 | accepted |
| bio.summary | 王光炘，清人物。籍贯錢塘，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636261） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光炘（CBDB 636261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636261&o=json)
