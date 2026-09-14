---
schema: wang-person/v1
id: p_MLikYG8QhwVJUZ5hXPsjPN
status: active
merged_into: null
display_name: 王良士
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fARZzXjPDywC3js5bDs8ii
        subject_person_id: p_MLikYG8QhwVJUZ5hXPsjPN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良士
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g8PQG4ngFq3LgDV2y7gneZ
          claim_id: c_fARZzXjPDywC3js5bDs8ii
          source_id: s_dFKwvq4J9icYk9NYncbSVs
          stance: supports
          locator: CBDB:309427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309427）
          source: &a1
            id: s_dFKwvq4J9icYk9NYncbSVs
            source_type: api_record
            title: 中国历代人物传记资料库：王良士（CBDB 309427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309427&o=json
            external_identifier: CBDB:309427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_huv3MTAE5BYrWA6gb9ttDB
        subject_person_id: p_MLikYG8QhwVJUZ5hXPsjPN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良士，明人物。嘉靖二十六年進士，籍贯寧津。（中国历代人物传记资料库 CBDB 309427）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ObmtCGRJdLkDbJyej0P1dP
          claim_id: c_huv3MTAE5BYrWA6gb9ttDB
          source_id: s_dFKwvq4J9icYk9NYncbSVs
          stance: supports
          locator: CBDB:309427
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Mv8rgyOSFkwSWH0tMmf-lG
        subject_person_id: p_BzRS9JFfmbPcLsHDaoLQcY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MLikYG8QhwVJUZ5hXPsjPN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0ynx9M7EM2_aKmPh9MjErW
          claim_id: c_Mv8rgyOSFkwSWH0tMmf-lG
          source_id: s_Z9nN2sDiHs_IGtYXBj7DHh
          stance: supports
          locator: CBDB：兄弟 王良貴（126530）之父／母 王玶
          quotation: null
          interpretation_note: 由兄弟关系推断：王良士 与 王良貴 为同胞（CBDB 记「兄」），王良貴 之父／母即 王良士 之父／母。
          source:
            id: s_Z9nN2sDiHs_IGtYXBj7DHh
            source_type: api_record
            title: 中国历代人物传记资料库：王良士（CBDB 309427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309427&o=json
            external_identifier: CBDB:309427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BzRS9JFfmbPcLsHDaoLQcY
        status: active
        display_name: 王玶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2GvmHgAjncwmYyBa8mOLpF
        subject_person_id: p_2i8i45vd3ioWAFSmwmfK42
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MLikYG8QhwVJUZ5hXPsjPN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sacCPvC5Ry1OxPi5FQFXsb
          claim_id: c_2GvmHgAjncwmYyBa8mOLpF
          source_id: s_Z9nN2sDiHs_IGtYXBj7DHh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126530 王良貴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Z9nN2sDiHs_IGtYXBj7DHh
            source_type: api_record
            title: 中国历代人物传记资料库：王良士（CBDB 309427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309427&o=json
            external_identifier: CBDB:309427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2i8i45vd3ioWAFSmwmfK42
        status: active
        display_name: 王良貴
        merged_into_person_id: null
---

# 王良士

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良士 | accepted |
| bio.summary | 王良士，明人物。嘉靖二十六年進士，籍贯寧津。（中国历代人物传记资料库 CBDB 309427） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BzRS9JFfmbPcLsHDaoLQcY | 王玶 | accepted |
| other | p_2i8i45vd3ioWAFSmwmfK42 | 王良貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良士（CBDB 309427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309427&o=json)
