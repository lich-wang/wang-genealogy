---
schema: wang-person/v1
id: p_PFnZLXWBaZSZreaimdGwAe
status: active
merged_into: null
display_name: 王瑀
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zsweLXLvCojeZkxJ56rMVs
        subject_person_id: p_PFnZLXWBaZSZreaimdGwAe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9TUk6BpUsbH6nbvdimT4FK
          claim_id: c_zsweLXLvCojeZkxJ56rMVs
          source_id: s_2TVn1dFcpjb5BZcZ36Ds1b
          stance: supports
          locator: CBDB:259316
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259316）
          source: &a1
            id: s_2TVn1dFcpjb5BZcZ36Ds1b
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 259316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259316&o=json
            external_identifier: CBDB:259316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RPYjkhGn9yrg92K9hLC3cN
        subject_person_id: p_PFnZLXWBaZSZreaimdGwAe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀，明人物。成化二十三年進士，籍贯保安。（中国历代人物传记资料库 CBDB 259316）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C801fKanN2WUEiUNL2iNIa
          claim_id: c_RPYjkhGn9yrg92K9hLC3cN
          source_id: s_2TVn1dFcpjb5BZcZ36Ds1b
          stance: supports
          locator: CBDB:259316
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_I1NlPLoI12ya_MACWX5CN-
        subject_person_id: p_PFnZLXWBaZSZreaimdGwAe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LG7z9nE3SbHJEkwafJSkBi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rg1c628F704wbSCH_28UIv
          claim_id: c_I1NlPLoI12ya_MACWX5CN-
          source_id: s_2TVn1dFcpjb5BZcZ36Ds1b
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第七十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LG7z9nE3SbHJEkwafJSkBi
        status: active
        display_name: 王鐸
        merged_into_person_id: null
    - claim:
        id: c_u_ZuLoZANnP9TAwxaTLxkw
        subject_person_id: p_PFnZLXWBaZSZreaimdGwAe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9eRpiDmqcQ2isxwTryiBdJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Ws1PL6eZ6fn_HL0L2vT9N
          claim_id: c_u_ZuLoZANnP9TAwxaTLxkw
          source_id: s_3TAuIkiD9mYbOPo4hat1jJ
          stance: supports
          locator: CBDB：兄弟 王鐸（200528）之父／母 王瑀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉉 与 王鐸 为同胞（CBDB 记「兄」），王鐸 之父／母即 王鉉 之父／母。
          source:
            id: s_3TAuIkiD9mYbOPo4hat1jJ
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 259320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259320&o=json
            external_identifier: CBDB:259320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9eRpiDmqcQ2isxwTryiBdJ
        status: active
        display_name: 王鉉
        merged_into_person_id: null
    - claim:
        id: c_PYmvCJfE4V_a76ywZy5gzt
        subject_person_id: p_PFnZLXWBaZSZreaimdGwAe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DEv3ohYtiLoCf7yFP5svrc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OlGRztP1s5s2dXS7-q13xv
          claim_id: c_PYmvCJfE4V_a76ywZy5gzt
          source_id: s_oJhGQ-ydZ-PMHUbme6ff9M
          stance: supports
          locator: CBDB：兄弟 王鐸（200528）之父／母 王瑀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐩 与 王鐸 为同胞（CBDB 记「兄」），王鐸 之父／母即 王鐩 之父／母。
          source:
            id: s_oJhGQ-ydZ-PMHUbme6ff9M
            source_type: api_record
            title: 中国历代人物传记资料库：王鐩（CBDB 259321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259321&o=json
            external_identifier: CBDB:259321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DEv3ohYtiLoCf7yFP5svrc
        status: active
        display_name: 王鐩
        merged_into_person_id: null
    - claim:
        id: c_MiyRF_-H_MVrv9osn_JLbR
        subject_person_id: p_PFnZLXWBaZSZreaimdGwAe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rU7qB6V8dTdMQgKf4D7bPK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fmdKdgGm-urI_E6_-up9NX
          claim_id: c_MiyRF_-H_MVrv9osn_JLbR
          source_id: s_i3F5RIh0WdwN_OOh5MnQGT
          stance: supports
          locator: CBDB：兄弟 王鐸（200528）之父／母 王瑀
          quotation: null
          interpretation_note: 由兄弟关系推断：王銳 与 王鐸 为同胞（CBDB 记「兄」），王鐸 之父／母即 王銳 之父／母。
          source:
            id: s_i3F5RIh0WdwN_OOh5MnQGT
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 259319）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259319&o=json
            external_identifier: CBDB:259319
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rU7qB6V8dTdMQgKf4D7bPK
        status: active
        display_name: 王銳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑀 | accepted |
| bio.summary | 王瑀，明人物。成化二十三年進士，籍贯保安。（中国历代人物传记资料库 CBDB 259316） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LG7z9nE3SbHJEkwafJSkBi | 王鐸 | accepted |
| children | p_9eRpiDmqcQ2isxwTryiBdJ | 王鉉 | accepted |
| children | p_DEv3ohYtiLoCf7yFP5svrc | 王鐩 | accepted |
| children | p_rU7qB6V8dTdMQgKf4D7bPK | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 259319）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259319&o=json)
- [中国历代人物传记资料库：王鐩（CBDB 259321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259321&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 259320）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259320&o=json)
- [中国历代人物传记资料库：王瑀（CBDB 259316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259316&o=json)
