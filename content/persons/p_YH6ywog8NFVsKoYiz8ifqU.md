---
schema: wang-person/v1
id: p_YH6ywog8NFVsKoYiz8ifqU
status: active
merged_into: null
display_name: 王潛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tecAsGy41HA1G4Hhb1AESy
        subject_person_id: p_YH6ywog8NFVsKoYiz8ifqU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CCW5haEHbFS43kVzzPTyoM
          claim_id: c_tecAsGy41HA1G4Hhb1AESy
          source_id: s_zV7p9KupYaR8vFQLRezaFq
          stance: supports
          locator: CBDB:277076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（277076）
          source: &a1
            id: s_zV7p9KupYaR8vFQLRezaFq
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 277076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277076&o=json
            external_identifier: CBDB:277076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.955Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Am1XyFa5RTC5Xd8nzDLqBM
        subject_person_id: p_YH6ywog8NFVsKoYiz8ifqU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潛，明人物。正德六年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 277076）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_55URmNLa684mqyT8djD5gk
          claim_id: c_Am1XyFa5RTC5Xd8nzDLqBM
          source_id: s_zV7p9KupYaR8vFQLRezaFq
          stance: supports
          locator: CBDB:277076
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TUPHs5QAkRzCZbZQQi_cSB
        subject_person_id: p_TBRbQ4tV2WfCnjRSSpkfCv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YH6ywog8NFVsKoYiz8ifqU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JTvSUI8wa7LtCe7926O5K6
          claim_id: c_TUPHs5QAkRzCZbZQQi_cSB
          source_id: s_akHuUON6tnzi_tm2xO3LG1
          stance: supports
          locator: CBDB：兄弟 王江（126498）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王潛 与 王江 为同胞（CBDB 记「兄」），王江 之父／母即 王潛 之父／母。
          source:
            id: s_akHuUON6tnzi_tm2xO3LG1
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 277076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277076&o=json
            external_identifier: CBDB:277076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TBRbQ4tV2WfCnjRSSpkfCv
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tPQ9qrUS-0xd3iWtHNXMle
        subject_person_id: p_CcL9yeQgRriMhVY3hPmz5a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YH6ywog8NFVsKoYiz8ifqU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-mLkaT5AGLCrIxC9Z8glUz
          claim_id: c_tPQ9qrUS-0xd3iWtHNXMle
          source_id: s_akHuUON6tnzi_tm2xO3LG1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126498 王江）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_akHuUON6tnzi_tm2xO3LG1
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 277076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277076&o=json
            external_identifier: CBDB:277076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CcL9yeQgRriMhVY3hPmz5a
        status: active
        display_name: 王江
        merged_into_person_id: null
---

# 王潛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潛 | accepted |
| bio.summary | 王潛，明人物。正德六年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 277076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TBRbQ4tV2WfCnjRSSpkfCv | 王釗 | accepted |
| other | p_CcL9yeQgRriMhVY3hPmz5a | 王江 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潛（CBDB 277076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277076&o=json)
