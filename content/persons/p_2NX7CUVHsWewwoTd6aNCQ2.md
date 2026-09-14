---
schema: wang-person/v1
id: p_2NX7CUVHsWewwoTd6aNCQ2
status: active
merged_into: null
display_name: 王汝寀
cbdb_id: 313776
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oYGR4rRCdD3egDpmZ2KbkP
        subject_person_id: p_2NX7CUVHsWewwoTd6aNCQ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝寀，明人物。嘉靖二十九年進士，籍贯雄縣。（中国历代人物传记资料库 CBDB 313776）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_HRl-TDgRPEXJWaUeRWe0U-
          claim_id: c_oYGR4rRCdD3egDpmZ2KbkP
          source_id: s_26GvfN8jxsBSEBVKtLHjWi
          stance: supports
          locator: CBDB:313776
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_26GvfN8jxsBSEBVKtLHjWi
            source_type: api_record
            title: 中国历代人物传记资料库：王汝寀（CBDB 313776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313776&o=json
            external_identifier: CBDB:313776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9HJ9oCmuvkZFo9JHHcF7sa
        subject_person_id: p_2NX7CUVHsWewwoTd6aNCQ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝寀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Z5kyAroqSmCW5UGNu7ekp5
          claim_id: c_9HJ9oCmuvkZFo9JHHcF7sa
          source_id: s_26GvfN8jxsBSEBVKtLHjWi
          stance: supports
          locator: CBDB:313776
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kYDcCS_NCQTytQ0xcBH4Kh
        subject_person_id: p_Jr1uT74hLZawrDdoEK3XZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2NX7CUVHsWewwoTd6aNCQ2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KEur4cmi7uy7OrNtcPbE3k
          claim_id: c_kYDcCS_NCQTytQ0xcBH4Kh
          source_id: s_4P8xE4CnZgeLy64wCHw9rY
          stance: supports
          locator: CBDB：兄弟 王汝安（204050）之父／母 王舉
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝寀 与 王汝安 为同胞（CBDB 记「兄」），王汝安 之父／母即 王汝寀 之父／母。
          source:
            id: s_4P8xE4CnZgeLy64wCHw9rY
            source_type: api_record
            title: 中国历代人物传记资料库：王汝寀（CBDB 313776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313776&o=json
            external_identifier: CBDB:313776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jr1uT74hLZawrDdoEK3XZV
        status: active
        display_name: 王舉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9H4rOHsL3QtL0c6kJqTpC8
        subject_person_id: p_2NX7CUVHsWewwoTd6aNCQ2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LuGtcLnNAnJs1yiVnMjgcK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ke3Je8FiugpPqnuNCiEQ4g
          claim_id: c_9H4rOHsL3QtL0c6kJqTpC8
          source_id: s_4P8xE4CnZgeLy64wCHw9rY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204050 王汝安）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4P8xE4CnZgeLy64wCHw9rY
            source_type: api_record
            title: 中国历代人物传记资料库：王汝寀（CBDB 313776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313776&o=json
            external_identifier: CBDB:313776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LuGtcLnNAnJs1yiVnMjgcK
        status: active
        display_name: 王汝安
        merged_into_person_id: null
---

# 王汝寀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝寀，明人物。嘉靖二十九年進士，籍贯雄縣。（中国历代人物传记资料库 CBDB 313776） | accepted |
| name.primary | 王汝寀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jr1uT74hLZawrDdoEK3XZV | 王舉 | accepted |
| other | p_LuGtcLnNAnJs1yiVnMjgcK | 王汝安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝寀（CBDB 313776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313776&o=json)
