---
schema: wang-person/v1
id: p_YwaGX3UU284F1p236y8Cp7
status: active
merged_into: null
display_name: 王明燄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aAgKsMhMJ9D74xy469YVB9
        subject_person_id: p_YwaGX3UU284F1p236y8Cp7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明燄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1aGnaaNSddgun5x2A5LFVZ
          claim_id: c_aAgKsMhMJ9D74xy469YVB9
          source_id: s_FMHPn3FuB64WGbMPc1MjdZ
          stance: supports
          locator: CBDB:638386
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638386）
          source: &a1
            id: s_FMHPn3FuB64WGbMPc1MjdZ
            source_type: api_record
            title: 中国历代人物传记资料库：王明燄（CBDB 638386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638386&o=json
            external_identifier: CBDB:638386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_osGgRJ1taoV6aiW5iPGM53
        subject_person_id: p_YwaGX3UU284F1p236y8Cp7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明燄，清人物。籍贯成都，曾任知縣。（中国历代人物传记资料库 CBDB 638386）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NN62TpPi3StzWXxCfmBbR4
          claim_id: c_osGgRJ1taoV6aiW5iPGM53
          source_id: s_FMHPn3FuB64WGbMPc1MjdZ
          stance: supports
          locator: CBDB:638386
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

# 王明燄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明燄 | accepted |
| bio.summary | 王明燄，清人物。籍贯成都，曾任知縣。（中国历代人物传记资料库 CBDB 638386） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明燄（CBDB 638386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638386&o=json)
