---
schema: wang-person/v1
id: p_sD71to4STvwXGKqEqwHD4o
status: active
merged_into: null
display_name: 靳氏
revision: 1
cbdb_id: 28731
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KNvK1Umo7r7DccRkOvqbE_
        subject_person_id: p_sD71to4STvwXGKqEqwHD4o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 靳氏（1205—1249），元人物。籍贯安陽，入仕封贈。（中国历代人物传记资料库 CBDB 28731）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f5_36QyeYQSyCo_A3AMsey
          claim_id: c_KNvK1Umo7r7DccRkOvqbE_
          source_id: s_XlUfGlanytdCo5TvP5yhjH
          stance: supports
          locator: CBDB:28731
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XlUfGlanytdCo5TvP5yhjH
            source_type: api_record
            title: 中国历代人物传记资料库：靳氏(王天鐸妻)（CBDB 28731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28731&o=json
            external_identifier: CBDB:28731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4GQA5lE4D779Ri7Eu11yVa
        subject_person_id: p_sD71to4STvwXGKqEqwHD4o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 靳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oSDS-JyxBh8y9dxRk9sqVP
          claim_id: c_4GQA5lE4D779Ri7Eu11yVa
          source_id: s_XlUfGlanytdCo5TvP5yhjH
          stance: supports
          locator: CBDB:28731
          quotation: null
          interpretation_note: CBDB 明确记录的王天鐸配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_3dYTixKMQSwnZthvPMt8UE
        subject_person_id: p_VhEE1K9QYVSnK1V1eF11SZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sD71to4STvwXGKqEqwHD4o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7kmEQasx88r-GLv7ojvsmF
          claim_id: c_3dYTixKMQSwnZthvPMt8UE
          source_id: s_XlUfGlanytdCo5TvP5yhjH
          stance: supports
          locator: CBDB 双向互证（妻子 靳氏(王天鐸妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VhEE1K9QYVSnK1V1eF11SZ
        status: active
        display_name: 王天鐸
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 靳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 靳氏（1205—1249），元人物。籍贯安陽，入仕封贈。（中国历代人物传记资料库 CBDB 28731） | accepted |
| name.primary | 靳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_VhEE1K9QYVSnK1V1eF11SZ | 王天鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：靳氏(王天鐸妻)（CBDB 28731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28731&o=json)
