---
schema: wang-person/v1
id: p_55fApgx9tYt94QVDDeQvHv
status: active
merged_into: null
display_name: 王棚鼇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3GY4gNm8BCh9EJEXiMi9XC
        subject_person_id: p_55fApgx9tYt94QVDDeQvHv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棚鼇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R74p239bLMyXh4hJ5uEpPG
          claim_id: c_3GY4gNm8BCh9EJEXiMi9XC
          source_id: s_zUUjJPBiyxGLZB6aqnkMnY
          stance: supports
          locator: CBDB:638725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638725）
          source: &a1
            id: s_zUUjJPBiyxGLZB6aqnkMnY
            source_type: api_record
            title: 中国历代人物传记资料库：王棚鼇（CBDB 638725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638725&o=json
            external_identifier: CBDB:638725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KRuWUSf8eGsckKvD5Nw9ei
        subject_person_id: p_55fApgx9tYt94QVDDeQvHv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棚鼇，清人物。籍贯垣曲，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638725）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VRBpdNoYtFtXF1D7F6Bper
          claim_id: c_KRuWUSf8eGsckKvD5Nw9ei
          source_id: s_zUUjJPBiyxGLZB6aqnkMnY
          stance: supports
          locator: CBDB:638725
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

# 王棚鼇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棚鼇 | accepted |
| bio.summary | 王棚鼇，清人物。籍贯垣曲，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638725） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棚鼇（CBDB 638725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638725&o=json)
