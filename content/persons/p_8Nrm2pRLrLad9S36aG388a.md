---
schema: wang-person/v1
id: p_8Nrm2pRLrLad9S36aG388a
status: active
merged_into: null
display_name: 王如綸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_15A6A1GwXFdMK1wnN2Jjdh
        subject_person_id: p_8Nrm2pRLrLad9S36aG388a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hP6H1PntNdE7Zd8UbbKXir
          claim_id: c_15A6A1GwXFdMK1wnN2Jjdh
          source_id: s_8W2VYGh3VApMKMuR5VTdJt
          stance: supports
          locator: CBDB:636976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636976）
          source: &a1
            id: s_8W2VYGh3VApMKMuR5VTdJt
            source_type: api_record
            title: 中国历代人物传记资料库：王如綸（CBDB 636976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636976&o=json
            external_identifier: CBDB:636976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.305Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8LX95wxtxi5Wm8x37RYK37
        subject_person_id: p_8Nrm2pRLrLad9S36aG388a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如綸，清人物。籍贯雲南，入仕副榜，曾任復設訓導。（中国历代人物传记资料库 CBDB 636976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eKDR7Ydk-luQli0fga0CX6
          claim_id: c_8LX95wxtxi5Wm8x37RYK37
          source_id: s_8W2VYGh3VApMKMuR5VTdJt
          stance: supports
          locator: CBDB:636976
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

# 王如綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王如綸 | accepted |
| bio.summary | 王如綸，清人物。籍贯雲南，入仕副榜，曾任復設訓導。（中国历代人物传记资料库 CBDB 636976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王如綸（CBDB 636976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636976&o=json)
