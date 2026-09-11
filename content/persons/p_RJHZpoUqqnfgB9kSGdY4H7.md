---
schema: wang-person/v1
id: p_RJHZpoUqqnfgB9kSGdY4H7
status: active
merged_into: null
display_name: 王德榜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KZwXU62Dw6uzzjehahvVxm
        subject_person_id: p_RJHZpoUqqnfgB9kSGdY4H7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德榜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fCu4dUP5ho4Lad6NvKckS7
          claim_id: c_KZwXU62Dw6uzzjehahvVxm
          source_id: s_qBqQM2e3EYkUFDzgSya5gc
          stance: supports
          locator: CBDB:69446
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69446）
          source: &a1
            id: s_qBqQM2e3EYkUFDzgSya5gc
            source_type: api_record
            title: 中国历代人物传记资料库：王德榜（CBDB 69446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69446&o=json
            external_identifier: CBDB:69446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jhfp38ChQ8crAJdt1K46ws
        subject_person_id: p_RJHZpoUqqnfgB9kSGdY4H7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1837年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S38fsunnyr397Bw8ahLV8h
          claim_id: c_jhfp38ChQ8crAJdt1K46ws
          source_id: s_qBqQM2e3EYkUFDzgSya5gc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_syVmwWiymNGkPGCH5zXNan
        subject_person_id: p_RJHZpoUqqnfgB9kSGdY4H7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1893年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1omM59f4C5wxxxjxQXg9XM
          claim_id: c_syVmwWiymNGkPGCH5zXNan
          source_id: s_qBqQM2e3EYkUFDzgSya5gc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QfN5rJ7yS7PC3gBCEUrQeK
        subject_person_id: p_RJHZpoUqqnfgB9kSGdY4H7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gouteu3r2h2AxK5mh8Jjnb
          claim_id: c_QfN5rJ7yS7PC3gBCEUrQeK
          source_id: s_qBqQM2e3EYkUFDzgSya5gc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8gY_tRTJaXmtgnHL3cjpxJ
        subject_person_id: p_RJHZpoUqqnfgB9kSGdY4H7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MPWyfqbGRaD5HaUeAYS86D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_idg0Roo5pAe8uhk3cI6GyP
          claim_id: c_8gY_tRTJaXmtgnHL3cjpxJ
          source_id: s_E9AQ4uD7Lmn2ptMPvQXei1
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13157：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E9AQ4uD7Lmn2ptMPvQXei1
            source_type: api_record
            title: 中国历代人物传记资料库：王漢文（CBDB 526977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526977&o=json
            external_identifier: CBDB:526977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.326Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MPWyfqbGRaD5HaUeAYS86D
        status: active
        display_name: 王漢文
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德榜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德榜 | accepted |
| birth.date | 1837年 | accepted |
| death.date | 1893年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MPWyfqbGRaD5HaUeAYS86D | 王漢文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德榜（CBDB 69446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69446&o=json)
- [中国历代人物传记资料库：王漢文（CBDB 526977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526977&o=json)
