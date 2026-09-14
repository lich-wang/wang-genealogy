---
schema: wang-person/v1
id: p_D2qyaLmGT5TG6XRt6rLH8w
status: active
merged_into: null
display_name: 王期道
cbdb_id: 324020
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MFG2JoAP7DUKDUeQ2j4mpN
        subject_person_id: p_D2qyaLmGT5TG6XRt6rLH8w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王期道，明人物。嘉靖三十八年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 324020）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Qghyi5yIRnarvbEvPp_OJG
          claim_id: c_MFG2JoAP7DUKDUeQ2j4mpN
          source_id: s_jSpVmZqnKpyi4CPHJdEzA1
          stance: supports
          locator: CBDB:324020
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jSpVmZqnKpyi4CPHJdEzA1
            source_type: api_record
            title: 中国历代人物传记资料库：王期道（CBDB 324020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324020&o=json
            external_identifier: CBDB:324020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A8pLh1j15fV6ujDTWiMaZK
        subject_person_id: p_D2qyaLmGT5TG6XRt6rLH8w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王期道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WZE6juwdfPvmEAzg7pzfxA
          claim_id: c_A8pLh1j15fV6ujDTWiMaZK
          source_id: s_jSpVmZqnKpyi4CPHJdEzA1
          stance: supports
          locator: CBDB:324020
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jZcAbMJdiR4CmSyq5JXjFO
        subject_person_id: p_CEMGnZJGkUBUQcSpdxgPnV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D2qyaLmGT5TG6XRt6rLH8w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3g_jWmZqKK72b6WowVIKMD
          claim_id: c_jZcAbMJdiR4CmSyq5JXjFO
          source_id: s_hnS8P_RSUY_a64QuKT6eqO
          stance: supports
          locator: CBDB：兄弟 王期古（204782）之父／母 王龍
          quotation: null
          interpretation_note: 由兄弟关系推断：王期道 与 王期古 为同胞（CBDB 记「兄」），王期古 之父／母即 王期道 之父／母。
          source:
            id: s_hnS8P_RSUY_a64QuKT6eqO
            source_type: api_record
            title: 中国历代人物传记资料库：王期道（CBDB 324020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324020&o=json
            external_identifier: CBDB:324020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CEMGnZJGkUBUQcSpdxgPnV
        status: active
        display_name: 王龍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Bx2YDnlYoybSR8TjLDq8nV
        subject_person_id: p_D2qyaLmGT5TG6XRt6rLH8w
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5dpI1KPsDSANtryUxBJe1s
          claim_id: c_Bx2YDnlYoybSR8TjLDq8nV
          source_id: s_hnS8P_RSUY_a64QuKT6eqO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204782 王期古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hnS8P_RSUY_a64QuKT6eqO
            source_type: api_record
            title: 中国历代人物传记资料库：王期道（CBDB 324020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324020&o=json
            external_identifier: CBDB:324020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RQNnvu8c2y9N9EYgnmFtCC
        status: active
        display_name: 王期古
        merged_into_person_id: null
---

# 王期道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王期道，明人物。嘉靖三十八年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 324020） | accepted |
| name.primary | 王期道 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CEMGnZJGkUBUQcSpdxgPnV | 王龍 | accepted |
| other | p_RQNnvu8c2y9N9EYgnmFtCC | 王期古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王期道（CBDB 324020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324020&o=json)
