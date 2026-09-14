---
schema: wang-person/v1
id: p_rU7qB6V8dTdMQgKf4D7bPK
status: active
merged_into: null
display_name: 王銳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KoGQQ8ohuT4jNnZGT4cP1T
        subject_person_id: p_rU7qB6V8dTdMQgKf4D7bPK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tWVMN8uAhBQhendBi2xpCQ
          claim_id: c_KoGQQ8ohuT4jNnZGT4cP1T
          source_id: s_UfdeRyaSiiGnkMETWAxzCx
          stance: supports
          locator: CBDB:259319
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259319）
          source: &a1
            id: s_UfdeRyaSiiGnkMETWAxzCx
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 259319）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259319&o=json
            external_identifier: CBDB:259319
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xk2JsgUgmjdpogkkFEhHZQ
        subject_person_id: p_rU7qB6V8dTdMQgKf4D7bPK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳，明人物。成化二十三年進士，籍贯保安。（中国历代人物传记资料库 CBDB 259319）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gsKSxBVf6yTvF23eMbCoqu
          claim_id: c_Xk2JsgUgmjdpogkkFEhHZQ
          source_id: s_UfdeRyaSiiGnkMETWAxzCx
          stance: supports
          locator: CBDB:259319
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_PFnZLXWBaZSZreaimdGwAe
        status: active
        display_name: 王瑀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5QkMxl-NeB-8TGw9Ia_ciT
        subject_person_id: p_LG7z9nE3SbHJEkwafJSkBi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rU7qB6V8dTdMQgKf4D7bPK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Df0ElH1RTgBxBtPHh_9bBo
          claim_id: c_5QkMxl-NeB-8TGw9Ia_ciT
          source_id: s_i3F5RIh0WdwN_OOh5MnQGT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200528 王鐸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_LG7z9nE3SbHJEkwafJSkBi
        status: active
        display_name: 王鐸
        merged_into_person_id: null
---

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| bio.summary | 王銳，明人物。成化二十三年進士，籍贯保安。（中国历代人物传记资料库 CBDB 259319） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PFnZLXWBaZSZreaimdGwAe | 王瑀 | accepted |
| other | p_LG7z9nE3SbHJEkwafJSkBi | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 259319）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259319&o=json)
