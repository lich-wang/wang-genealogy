---
schema: wang-person/v1
id: p_7SQ9xV3CVicwxUW9gYt7Kj
status: active
merged_into: null
display_name: 王思
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bUM2CD99BG9K7wXhK6mVNE
        subject_person_id: p_7SQ9xV3CVicwxUW9gYt7Kj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FTGX3Pbvbivss4MK6WXN8E
          claim_id: c_bUM2CD99BG9K7wXhK6mVNE
          source_id: s_sKUw2TBZA33YYm4riaKbNS
          stance: supports
          locator: CBDB:262695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262695）
          source: &a1
            id: s_sKUw2TBZA33YYm4riaKbNS
            source_type: api_record
            title: 中国历代人物传记资料库：王思（CBDB 262695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262695&o=json
            external_identifier: CBDB:262695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qGUPkSPB1FA7rDrmKeRTkk
        subject_person_id: p_7SQ9xV3CVicwxUW9gYt7Kj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思，明人物。弘治三年進士，籍贯東平州。（中国历代人物传记资料库 CBDB 262695）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CXWHpx8092HoA_CjFSG4E2
          claim_id: c_qGUPkSPB1FA7rDrmKeRTkk
          source_id: s_sKUw2TBZA33YYm4riaKbNS
          stance: supports
          locator: CBDB:262695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zi_x8bM59pYfINSkidPEgB
        subject_person_id: p_rR2pkPMo5WGEMnvA2UogPQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7SQ9xV3CVicwxUW9gYt7Kj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VRRI9b_SrqamC1dUFaW80T
          claim_id: c_zi_x8bM59pYfINSkidPEgB
          source_id: s_j3bLtsJS0hP5CL9C1PJcou
          stance: supports
          locator: CBDB：兄弟 王憲（68238）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王思 与 王憲 为同胞（CBDB 记「兄」），王憲 之父／母即 王思 之父／母。
          source:
            id: s_j3bLtsJS0hP5CL9C1PJcou
            source_type: api_record
            title: 中国历代人物传记资料库：王思（CBDB 262695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262695&o=json
            external_identifier: CBDB:262695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rR2pkPMo5WGEMnvA2UogPQ
        status: active
        display_name: 王智
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_D_Xp6rGMkqG3F_apECuDD2
        subject_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7SQ9xV3CVicwxUW9gYt7Kj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nZSPWjhcoyi4_GeuGYAzGO
          claim_id: c_D_Xp6rGMkqG3F_apECuDD2
          source_id: s_j3bLtsJS0hP5CL9C1PJcou
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68238 王憲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j3bLtsJS0hP5CL9C1PJcou
            source_type: api_record
            title: 中国历代人物传记资料库：王思（CBDB 262695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262695&o=json
            external_identifier: CBDB:262695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4wJCgbadTAePpZ2BNEDAoG
        status: active
        display_name: 王憲
        merged_into_person_id: null
---

# 王思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思 | accepted |
| bio.summary | 王思，明人物。弘治三年進士，籍贯東平州。（中国历代人物传记资料库 CBDB 262695） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rR2pkPMo5WGEMnvA2UogPQ | 王智 | accepted |
| other | p_4wJCgbadTAePpZ2BNEDAoG | 王憲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思（CBDB 262695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262695&o=json)
