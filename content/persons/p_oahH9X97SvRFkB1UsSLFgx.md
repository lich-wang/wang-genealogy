---
schema: wang-person/v1
id: p_oahH9X97SvRFkB1UsSLFgx
status: active
merged_into: null
display_name: 王國勳
cbdb_id: 212071
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y3TKXsQBvqAAQhMNZJTChb
        subject_person_id: p_oahH9X97SvRFkB1UsSLFgx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國勳，明人物。隆慶五年進士，籍贯忻州，曾任指揮僉事。（中国历代人物传记资料库 CBDB 212071）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8zd2n-9wXGbB9Iu8vf9SSm
          claim_id: c_y3TKXsQBvqAAQhMNZJTChb
          source_id: s_a1YJmc5X1BRJMFEHgTeybv
          stance: supports
          locator: CBDB:212071
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_a1YJmc5X1BRJMFEHgTeybv
            source_type: api_record
            title: 中国历代人物传记资料库：王國勳（CBDB 212071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212071&o=json
            external_identifier: CBDB:212071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4XfnWkbByZC1edYK1XYDEn
        subject_person_id: p_oahH9X97SvRFkB1UsSLFgx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Kq8ZTxBDWDJFEjWMbdJsAg
          claim_id: c_4XfnWkbByZC1edYK1XYDEn
          source_id: s_a1YJmc5X1BRJMFEHgTeybv
          stance: supports
          locator: CBDB:212071
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rDWyRp2n49uosXWfsfnETz
        subject_person_id: p_fhHf3Ju1yjz535vtqX8da8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oahH9X97SvRFkB1UsSLFgx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wWFkDP_NMz6cTybE2qQ6w5
          claim_id: c_rDWyRp2n49uosXWfsfnETz
          source_id: s_Ox4Us6h1M9X53wPXBYrDM6
          stance: supports
          locator: CBDB：兄弟 王致祥（126646）之父／母 王金
          quotation: null
          interpretation_note: 由兄弟关系推断：王國勳 与 王致祥 为同胞（CBDB 记「弟」），王致祥 之父／母即 王國勳 之父／母。
          source:
            id: s_Ox4Us6h1M9X53wPXBYrDM6
            source_type: api_record
            title: 中国历代人物传记资料库：王國勳（CBDB 212071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212071&o=json
            external_identifier: CBDB:212071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fhHf3Ju1yjz535vtqX8da8
        status: active
        display_name: 王金
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pMiWSxWz9WyptTB8SCHVqw
        subject_person_id: p_oahH9X97SvRFkB1UsSLFgx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_txmGNUSLN748iJB41SWQzU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a08N--7w0nuRmurGOl7Si1
          claim_id: c_pMiWSxWz9WyptTB8SCHVqw
          source_id: s_Ox4Us6h1M9X53wPXBYrDM6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126646 王致祥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ox4Us6h1M9X53wPXBYrDM6
            source_type: api_record
            title: 中国历代人物传记资料库：王國勳（CBDB 212071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212071&o=json
            external_identifier: CBDB:212071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_txmGNUSLN748iJB41SWQzU
        status: active
        display_name: 王致祥
        merged_into_person_id: null
---

# 王國勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國勳，明人物。隆慶五年進士，籍贯忻州，曾任指揮僉事。（中国历代人物传记资料库 CBDB 212071） | accepted |
| name.primary | 王國勳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fhHf3Ju1yjz535vtqX8da8 | 王金 | accepted |
| other | p_txmGNUSLN748iJB41SWQzU | 王致祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國勳（CBDB 212071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212071&o=json)
