---
schema: wang-person/v1
id: p_B9Pdw9C9qeF6k6crMywRYK
status: active
merged_into: null
display_name: 王汝端
cbdb_id: 265943
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_miwMW6z3eDfMG6SUuAH9tp
        subject_person_id: p_B9Pdw9C9qeF6k6crMywRYK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝端，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 265943）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_JTbr5R9fxqee_p3DqL5mwE
          claim_id: c_miwMW6z3eDfMG6SUuAH9tp
          source_id: s_zFqfh8eAYCjrWSHWEGLrMv
          stance: supports
          locator: CBDB:265943
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zFqfh8eAYCjrWSHWEGLrMv
            source_type: api_record
            title: 中国历代人物传记资料库：王汝端（CBDB 265943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265943&o=json
            external_identifier: CBDB:265943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_toUZfN39SCaf9NdUEQrwVT
        subject_person_id: p_B9Pdw9C9qeF6k6crMywRYK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DjfTKdcyUFzW2oxv77Hv3z
          claim_id: c_toUZfN39SCaf9NdUEQrwVT
          source_id: s_zFqfh8eAYCjrWSHWEGLrMv
          stance: supports
          locator: CBDB:265943
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_L992BD65fY7A_0JgMGAo1G
        subject_person_id: p_czhtiwqBMu1RGkzhciwNgo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B9Pdw9C9qeF6k6crMywRYK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f8X5-01e4427XNoX8FUbTg
          claim_id: c_L992BD65fY7A_0JgMGAo1G
          source_id: s_ZF9Shz3yIaVnFFAVYR3UbG
          stance: supports
          locator: CBDB：兄弟 王德（201011）之父／母 王昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝端 与 王德 为同胞（CBDB 记「兄」），王德 之父／母即 王汝端 之父／母。
          source:
            id: s_ZF9Shz3yIaVnFFAVYR3UbG
            source_type: api_record
            title: 中国历代人物传记资料库：王汝端（CBDB 265943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265943&o=json
            external_identifier: CBDB:265943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_czhtiwqBMu1RGkzhciwNgo
        status: active
        display_name: 王昌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_D-bUcPuluyt1qO-JzNkm6G
        subject_person_id: p_B9Pdw9C9qeF6k6crMywRYK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bVh1otR2HH59HH7rfKSMH9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8llvanAuLGF_xXtrRNTXRm
          claim_id: c_D-bUcPuluyt1qO-JzNkm6G
          source_id: s_ZF9Shz3yIaVnFFAVYR3UbG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201011 王德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZF9Shz3yIaVnFFAVYR3UbG
            source_type: api_record
            title: 中国历代人物传记资料库：王汝端（CBDB 265943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265943&o=json
            external_identifier: CBDB:265943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bVh1otR2HH59HH7rfKSMH9
        status: active
        display_name: 王德
        merged_into_person_id: null
---

# 王汝端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝端，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 265943） | accepted |
| name.primary | 王汝端 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_czhtiwqBMu1RGkzhciwNgo | 王昌 | accepted |
| other | p_bVh1otR2HH59HH7rfKSMH9 | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝端（CBDB 265943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265943&o=json)
