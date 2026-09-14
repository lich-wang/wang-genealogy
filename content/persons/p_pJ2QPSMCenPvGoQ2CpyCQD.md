---
schema: wang-person/v1
id: p_pJ2QPSMCenPvGoQ2CpyCQD
status: active
merged_into: null
display_name: 王琦
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_34G8PJKzistc8mFMo9wtLx
        subject_person_id: p_pJ2QPSMCenPvGoQ2CpyCQD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n77VPBaQ7B8pbmHcPD5oKf
          claim_id: c_34G8PJKzistc8mFMo9wtLx
          source_id: s_jw2jLVYgWqNpLTz8t3TTLp
          stance: supports
          locator: CBDB:256030
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256030）
          source: &a1
            id: s_jw2jLVYgWqNpLTz8t3TTLp
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 256030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256030&o=json
            external_identifier: CBDB:256030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K62wC7QSgW9tn6odH1QX4o
        subject_person_id: p_pJ2QPSMCenPvGoQ2CpyCQD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦，明人物。天順四年進士，籍贯長垣，曾任義官。（中国历代人物传记资料库 CBDB 256030）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X1Clv3aT5Yg-8LP6E1FnEP
          claim_id: c_K62wC7QSgW9tn6odH1QX4o
          source_id: s_jw2jLVYgWqNpLTz8t3TTLp
          stance: supports
          locator: CBDB:256030
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Q5_lbOYIJRF6XgX7Z05hRf
        subject_person_id: p_q794sLSCL4J2grKV4vicPg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pJ2QPSMCenPvGoQ2CpyCQD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YnqSaqw9WlUySuu3bIrdYK
          claim_id: c_Q5_lbOYIJRF6XgX7Z05hRf
          source_id: s_XRoSuPi4B0AqhPcOn-3E6q
          stance: supports
          locator: CBDB：兄弟 王璽（198852）之父／母 王時佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王琦 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王琦 之父／母。
          source:
            id: s_XRoSuPi4B0AqhPcOn-3E6q
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 256030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256030&o=json
            external_identifier: CBDB:256030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q794sLSCL4J2grKV4vicPg
        status: active
        display_name: 王時佐
        merged_into_person_id: null
    - claim:
        id: c_AVni6fbWhwpwDg06pif_6h
        subject_person_id: p_A3heW27H9g2mVn1UvcsyD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pJ2QPSMCenPvGoQ2CpyCQD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DYL-dXNqzEpykEE_KbgEQx
          claim_id: c_AVni6fbWhwpwDg06pif_6h
          source_id: s_XRoSuPi4B0AqhPcOn-3E6q
          stance: supports
          locator: CBDB：兄弟 王璇（200297）之父／母 王時佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王琦 与 王璇 为同胞（CBDB 记「弟」），王璇 之父／母即 王琦 之父／母。
          source:
            id: s_XRoSuPi4B0AqhPcOn-3E6q
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 256030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256030&o=json
            external_identifier: CBDB:256030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A3heW27H9g2mVn1UvcsyD4
        status: active
        display_name: 王時佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ue49R9PAgT1NS01s_HU72M
        subject_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pJ2QPSMCenPvGoQ2CpyCQD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3auhkT5nRW7F_7bpjffDtu
          claim_id: c_ue49R9PAgT1NS01s_HU72M
          source_id: s_XRoSuPi4B0AqhPcOn-3E6q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198852 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XRoSuPi4B0AqhPcOn-3E6q
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 256030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256030&o=json
            external_identifier: CBDB:256030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HvKxCmK79R4YwoS4fwu3e3
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_H7F2ARIETMrk4v3ySVwLH3
        subject_person_id: p_Q746PBZNycHf9YN5GVT1MS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pJ2QPSMCenPvGoQ2CpyCQD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5mwn54hzNnm_PsVwxKHPyW
          claim_id: c_H7F2ARIETMrk4v3ySVwLH3
          source_id: s_XRoSuPi4B0AqhPcOn-3E6q
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200297 王璇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XRoSuPi4B0AqhPcOn-3E6q
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 256030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256030&o=json
            external_identifier: CBDB:256030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q746PBZNycHf9YN5GVT1MS
        status: active
        display_name: 王璇
        merged_into_person_id: null
---

# 王琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琦 | accepted |
| bio.summary | 王琦，明人物。天順四年進士，籍贯長垣，曾任義官。（中国历代人物传记资料库 CBDB 256030） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_q794sLSCL4J2grKV4vicPg | 王時佐 | accepted |
| parents | p_A3heW27H9g2mVn1UvcsyD4 | 王時佐 | accepted |
| other | p_HvKxCmK79R4YwoS4fwu3e3 | 王璽 | accepted |
| other | p_Q746PBZNycHf9YN5GVT1MS | 王璇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琦（CBDB 256030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256030&o=json)
