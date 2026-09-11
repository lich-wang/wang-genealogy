---
schema: wang-person/v1
id: p_txmGNUSLN748iJB41SWQzU
status: active
merged_into: null
display_name: 王致祥
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ad6H4UF2iZEX3eZKsfkA7M
        subject_person_id: p_txmGNUSLN748iJB41SWQzU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_92DYf97HZzG3fV76HX9Zi1
          claim_id: c_Ad6H4UF2iZEX3eZKsfkA7M
          source_id: s_dH3fiY3YrG4CgwJ7XDTXE4
          stance: supports
          locator: CBDB:126646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126646）
          source: &a1
            id: s_dH3fiY3YrG4CgwJ7XDTXE4
            source_type: api_record
            title: 中国历代人物传记资料库：王致祥（CBDB 126646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126646&o=json
            external_identifier: CBDB:126646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.180Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2FtVLUTwK7VZJ9RWU4Mbs7
        subject_person_id: p_txmGNUSLN748iJB41SWQzU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1544年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bGiQjhkZZKbbmiKkiQGhv7
          claim_id: c_2FtVLUTwK7VZJ9RWU4Mbs7
          source_id: s_dH3fiY3YrG4CgwJ7XDTXE4
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
        id: c_AphMNYKqL8afQht5zdMr1t
        subject_person_id: p_txmGNUSLN748iJB41SWQzU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1593年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QnJr9Nyt8MH4ynZzfgpE3s
          claim_id: c_AphMNYKqL8afQht5zdMr1t
          source_id: s_dH3fiY3YrG4CgwJ7XDTXE4
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
        id: c_E8DtSUkohLkDMJB59a46Af
        subject_person_id: p_txmGNUSLN748iJB41SWQzU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致祥（1544年—1593年），明人物。明清進士進士，籍贯忻州，入仕進士。（中国历代人物传记资料库 CBDB 126646）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JfmwessnWc7iYXf8YN03_K
          claim_id: c_E8DtSUkohLkDMJB59a46Af
          source_id: s_dH3fiY3YrG4CgwJ7XDTXE4
          stance: supports
          locator: CBDB:126646
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vbiQJ98belEgVDeAkXsKnQ
        subject_person_id: p_fhHf3Ju1yjz535vtqX8da8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_txmGNUSLN748iJB41SWQzU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MaSGIvIr0MKYy9sdSZumYn
          claim_id: c_vbiQJ98belEgVDeAkXsKnQ
          source_id: s_EPq6BjuK4FMZTush73Qkx5
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EPq6BjuK4FMZTush73Qkx5
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 212066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212066&o=json
            external_identifier: CBDB:212066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fhHf3Ju1yjz535vtqX8da8
        status: active
        display_name: 王金
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Z6LJnh1HYd0JUOVOmjMKmq
        subject_person_id: p_1mLdDgpxj23zTcm4MRc5MF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_txmGNUSLN748iJB41SWQzU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tB7oKpee_XYWD3y2ZFNc02
          claim_id: c_Z6LJnh1HYd0JUOVOmjMKmq
          source_id: s_76q1MDi3JK9AVkcgLk2HEe
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_76q1MDi3JK9AVkcgLk2HEe
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 212064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212064&o=json
            external_identifier: CBDB:212064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1mLdDgpxj23zTcm4MRc5MF
        status: active
        display_name: 王永
        merged_into_person_id: null
    - claim:
        id: c_R2Chf9UF-qAvSMFVQHO1XL
        subject_person_id: p_YonJAznChqqmsAQ6CTYGne
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_txmGNUSLN748iJB41SWQzU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yR0m956raC-ZL9ppDmvjpQ
          claim_id: c_R2Chf9UF-qAvSMFVQHO1XL
          source_id: s_7g5TYf9XGtC8wnxh4FY9KG
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7g5TYf9XGtC8wnxh4FY9KG
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 212065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212065&o=json
            external_identifier: CBDB:212065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YonJAznChqqmsAQ6CTYGne
        status: active
        display_name: 王懋
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王致祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致祥 | accepted |
| birth.date | 1544年 | accepted |
| death.date | 1593年 | accepted |
| bio.summary | 王致祥（1544年—1593年），明人物。明清進士進士，籍贯忻州，入仕進士。（中国历代人物传记资料库 CBDB 126646） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fhHf3Ju1yjz535vtqX8da8 | 王金 | accepted |
| ancestors | p_1mLdDgpxj23zTcm4MRc5MF | 王永 | accepted |
| ancestors | p_YonJAznChqqmsAQ6CTYGne | 王懋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王金（CBDB 212066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212066&o=json)
- [中国历代人物传记资料库：王懋（CBDB 212065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212065&o=json)
- [中国历代人物传记资料库：王永（CBDB 212064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212064&o=json)
- [中国历代人物传记资料库：王致祥（CBDB 126646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126646&o=json)
