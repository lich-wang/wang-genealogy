---
schema: wang-person/v1
id: p_HBqNcNEuSsrmChhBUqSG2T
status: active
merged_into: null
display_name: 王材
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qPwWmgBhWncCnk8gKNmGAp
        subject_person_id: p_HBqNcNEuSsrmChhBUqSG2T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kqfk2nP7TLeeSTPLzz2t4B
          claim_id: c_qPwWmgBhWncCnk8gKNmGAp
          source_id: s_cnyH91ifaYyfsDD69R8mNR
          stance: supports
          locator: CBDB:314305
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314305）
          source: &a1
            id: s_cnyH91ifaYyfsDD69R8mNR
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 314305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314305&o=json
            external_identifier: CBDB:314305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eXHBo7nB5GeM2ES5o3HhFn
        subject_person_id: p_HBqNcNEuSsrmChhBUqSG2T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材，明人物。嘉靖二十九年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 314305）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gRWQ3iq6kQELiQlTNXENXp
          claim_id: c_eXHBo7nB5GeM2ES5o3HhFn
          source_id: s_cnyH91ifaYyfsDD69R8mNR
          stance: supports
          locator: CBDB:314305
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vuJEk370t5QfOh9A2rWoni
        subject_person_id: p_zRQ8vX2mq2ef6gtHZ8hFkm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HBqNcNEuSsrmChhBUqSG2T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2pNhI9ckvkE2qSjTVl4P1A
          claim_id: c_vuJEk370t5QfOh9A2rWoni
          source_id: s_8zAMdwDeWzBBtY9JLB2dA4
          stance: supports
          locator: CBDB：兄弟 王元春（126470）之父／母 王滋
          quotation: null
          interpretation_note: 由兄弟关系推断：王材 与 王元春 为同胞（CBDB 记「兄」），王元春 之父／母即 王材 之父／母。
          source:
            id: s_8zAMdwDeWzBBtY9JLB2dA4
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 314305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314305&o=json
            external_identifier: CBDB:314305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zRQ8vX2mq2ef6gtHZ8hFkm
        status: active
        display_name: 王滋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZSRYNdjS93pzeOYLSIxCWn
        subject_person_id: p_HBqNcNEuSsrmChhBUqSG2T
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qb7zDu2gwfuaD8yT1H3cXc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Za8RLUL225TjPsA00MG8b1
          claim_id: c_ZSRYNdjS93pzeOYLSIxCWn
          source_id: s_8zAMdwDeWzBBtY9JLB2dA4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126470 王元春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8zAMdwDeWzBBtY9JLB2dA4
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 314305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314305&o=json
            external_identifier: CBDB:314305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qb7zDu2gwfuaD8yT1H3cXc
        status: active
        display_name: 王元春
        merged_into_person_id: null
---

# 王材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王材 | accepted |
| bio.summary | 王材，明人物。嘉靖二十九年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 314305） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zRQ8vX2mq2ef6gtHZ8hFkm | 王滋 | accepted |
| other | p_qb7zDu2gwfuaD8yT1H3cXc | 王元春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王材（CBDB 314305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314305&o=json)
