---
schema: wang-person/v1
id: p_QV7jVCSRPUHXTyJLtG8Nt3
status: active
merged_into: null
display_name: 王悌
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z186zypf4X1k7dNstAiaKu
        subject_person_id: p_QV7jVCSRPUHXTyJLtG8Nt3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ofvT6MBx2WPc9H7QPiWnFR
          claim_id: c_z186zypf4X1k7dNstAiaKu
          source_id: s_fdfJLzpWhgDS3tCRaqTPed
          stance: supports
          locator: CBDB:264635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264635）
          source: &a1
            id: s_fdfJLzpWhgDS3tCRaqTPed
            source_type: api_record
            title: 中国历代人物传记资料库：王悌（CBDB 264635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264635&o=json
            external_identifier: CBDB:264635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pMCd6CwmMvqn7qyBrVMjTL
        subject_person_id: p_QV7jVCSRPUHXTyJLtG8Nt3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悌，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 264635）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r4ilVx4NJE-G3T7ZszYpZG
          claim_id: c_pMCd6CwmMvqn7qyBrVMjTL
          source_id: s_fdfJLzpWhgDS3tCRaqTPed
          stance: supports
          locator: CBDB:264635
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pUDgZtlrzKfquKXiqw4Cai
        subject_person_id: p_UM99Zm3Rh6Z6EusvSaftqm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QV7jVCSRPUHXTyJLtG8Nt3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1N-2ebcIS9_VAdNG07NwUQ
          claim_id: c_pUDgZtlrzKfquKXiqw4Cai
          source_id: s_FHCL2UDbVEPe8wCcbaCXq5
          stance: supports
          locator: CBDB：兄弟 王恂（200921）之父／母 王晟
          quotation: null
          interpretation_note: 由兄弟关系推断：王悌 与 王恂 为同胞（CBDB 记「弟」），王恂 之父／母即 王悌 之父／母。
          source:
            id: s_FHCL2UDbVEPe8wCcbaCXq5
            source_type: api_record
            title: 中国历代人物传记资料库：王悌（CBDB 264635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264635&o=json
            external_identifier: CBDB:264635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UM99Zm3Rh6Z6EusvSaftqm
        status: active
        display_name: 王晟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YzM4VFCYUudHzLWhAn87h5
        subject_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QV7jVCSRPUHXTyJLtG8Nt3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xWvJtyOnmZMVdycYJX2ij8
          claim_id: c_YzM4VFCYUudHzLWhAn87h5
          source_id: s_FHCL2UDbVEPe8wCcbaCXq5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200921 王恂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FHCL2UDbVEPe8wCcbaCXq5
            source_type: api_record
            title: 中国历代人物传记资料库：王悌（CBDB 264635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264635&o=json
            external_identifier: CBDB:264635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2hJwbcefrPyv1Q4ce3xoc6
        status: active
        display_name: 王恂
        merged_into_person_id: null
---

# 王悌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王悌 | accepted |
| bio.summary | 王悌，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 264635） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UM99Zm3Rh6Z6EusvSaftqm | 王晟 | accepted |
| other | p_2hJwbcefrPyv1Q4ce3xoc6 | 王恂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王悌（CBDB 264635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264635&o=json)
