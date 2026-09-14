---
schema: wang-person/v1
id: p_sb5cjjXQ84NJKYWgy9z4Eg
status: active
merged_into: null
display_name: 王希舜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eoGCQcWKyNKhR3MJdwetKS
        subject_person_id: p_sb5cjjXQ84NJKYWgy9z4Eg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希舜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QXNiqQ8kfXQvPL4sxLwBge
          claim_id: c_eoGCQcWKyNKhR3MJdwetKS
          source_id: s_zn1NV2NS1Ux2Fr1TD73xWu
          stance: supports
          locator: CBDB:312977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312977）
          source: &a1
            id: s_zn1NV2NS1Ux2Fr1TD73xWu
            source_type: api_record
            title: 中国历代人物传记资料库：王希舜（CBDB 312977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312977&o=json
            external_identifier: CBDB:312977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GUCuEkafcCpJME5RMvuFdx
        subject_person_id: p_sb5cjjXQ84NJKYWgy9z4Eg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希舜，明人物。嘉靖二十九年進士，籍贯安化，曾任分巡道、知州。（中国历代人物传记资料库 CBDB 312977）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9VSgiLvByi5iae1KI7OUDl
          claim_id: c_GUCuEkafcCpJME5RMvuFdx
          source_id: s_zn1NV2NS1Ux2Fr1TD73xWu
          stance: supports
          locator: CBDB:312977
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DgFcA1chnG74iVBCe4UYmJ
        subject_person_id: p_Fn3VWmbwHWaLfGAks8JyJ5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sb5cjjXQ84NJKYWgy9z4Eg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hzo7LNajaBNocsVvyC41LN
          claim_id: c_DgFcA1chnG74iVBCe4UYmJ
          source_id: s_XSZP260uc0q9w4cLTbc_9O
          stance: supports
          locator: CBDB：兄弟 王希堯（203993）之父／母 王守正
          quotation: null
          interpretation_note: 由兄弟关系推断：王希舜 与 王希堯 为同胞（CBDB 记「兄」），王希堯 之父／母即 王希舜 之父／母。
          source:
            id: s_XSZP260uc0q9w4cLTbc_9O
            source_type: api_record
            title: 中国历代人物传记资料库：王希舜（CBDB 312977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312977&o=json
            external_identifier: CBDB:312977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Fn3VWmbwHWaLfGAks8JyJ5
        status: active
        display_name: 王守正
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_P-jkLOXBhqFDoVb3velul8
        subject_person_id: p_WQT1Hm7LSS63rTgZwvcsM7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sb5cjjXQ84NJKYWgy9z4Eg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eurO3y7uoeJcrjz5ImWSVm
          claim_id: c_P-jkLOXBhqFDoVb3velul8
          source_id: s_XSZP260uc0q9w4cLTbc_9O
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203993 王希堯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XSZP260uc0q9w4cLTbc_9O
            source_type: api_record
            title: 中国历代人物传记资料库：王希舜（CBDB 312977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312977&o=json
            external_identifier: CBDB:312977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WQT1Hm7LSS63rTgZwvcsM7
        status: active
        display_name: 王希堯
        merged_into_person_id: null
---

# 王希舜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希舜 | accepted |
| bio.summary | 王希舜，明人物。嘉靖二十九年進士，籍贯安化，曾任分巡道、知州。（中国历代人物传记资料库 CBDB 312977） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Fn3VWmbwHWaLfGAks8JyJ5 | 王守正 | accepted |
| other | p_WQT1Hm7LSS63rTgZwvcsM7 | 王希堯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希舜（CBDB 312977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312977&o=json)
