---
schema: wang-person/v1
id: p_rR2pkPMo5WGEMnvA2UogPQ
status: active
merged_into: null
display_name: 王智
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZdHcD2KVfiD3t5c1SvPy7i
        subject_person_id: p_rR2pkPMo5WGEMnvA2UogPQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7xNv7v8oj216FE47hUcZ9n
          claim_id: c_ZdHcD2KVfiD3t5c1SvPy7i
          source_id: s_mQ3jDn746da14ESKoWc7eM
          stance: supports
          locator: CBDB:262689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262689）
          source: &a1
            id: s_mQ3jDn746da14ESKoWc7eM
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 262689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262689&o=json
            external_identifier: CBDB:262689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rY7pw96Eb82iAJAFDQezPQ
        subject_person_id: p_rR2pkPMo5WGEMnvA2UogPQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智，明人物。弘治三年進士，籍贯東平州。（中国历代人物传记资料库 CBDB 262689）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cMQegh9a8dIHijaO2g-U6a
          claim_id: c_rY7pw96Eb82iAJAFDQezPQ
          source_id: s_mQ3jDn746da14ESKoWc7eM
          stance: supports
          locator: CBDB:262689
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_60qAvW-spV_zzdNT1pZkXk
        subject_person_id: p_rR2pkPMo5WGEMnvA2UogPQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tKSX25XywiK2A4nP_A25LU
          claim_id: c_60qAvW-spV_zzdNT1pZkXk
          source_id: s_j9QtHgAMFKQAVkqGX1LKYM
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第九十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_j9QtHgAMFKQAVkqGX1LKYM
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 68238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68238&o=json
            external_identifier: CBDB:68238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4wJCgbadTAePpZ2BNEDAoG
        status: active
        display_name: 王憲
        merged_into_person_id: null
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
        id: p_7SQ9xV3CVicwxUW9gYt7Kj
        status: active
        display_name: 王思
        merged_into_person_id: null
    - claim:
        id: c_ehRyn3JkGab45JAUc1qNTd
        subject_person_id: p_rR2pkPMo5WGEMnvA2UogPQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S7j6mAqwQWbFrBFdzyP9JA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FxTn2OxW3B6JSdKFZ91asn
          claim_id: c_ehRyn3JkGab45JAUc1qNTd
          source_id: s_-uWAgf0CoJN6wAnDRfYqVS
          stance: supports
          locator: CBDB：兄弟 王憲（68238）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王忞 与 王憲 为同胞（CBDB 记「兄」），王憲 之父／母即 王忞 之父／母。
          source:
            id: s_-uWAgf0CoJN6wAnDRfYqVS
            source_type: api_record
            title: 中国历代人物传记资料库：王忞（CBDB 262694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262694&o=json
            external_identifier: CBDB:262694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S7j6mAqwQWbFrBFdzyP9JA
        status: active
        display_name: 王忞
        merged_into_person_id: null
    - claim:
        id: c_wy2qzB_ZvtxTXzIWF4u5Xg
        subject_person_id: p_rR2pkPMo5WGEMnvA2UogPQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xykbTcJ8iM1jL4AntEfovQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1mkjkJGC8zIF6fJAx8Qj7C
          claim_id: c_wy2qzB_ZvtxTXzIWF4u5Xg
          source_id: s_gaRnKBOtHdoDCKdy6H7DT7
          stance: supports
          locator: CBDB：兄弟 王憲（68238）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王志 与 王憲 为同胞（CBDB 记「兄」），王憲 之父／母即 王志 之父／母。
          source:
            id: s_gaRnKBOtHdoDCKdy6H7DT7
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 262693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262693&o=json
            external_identifier: CBDB:262693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xykbTcJ8iM1jL4AntEfovQ
        status: active
        display_name: 王志
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智 | accepted |
| bio.summary | 王智，明人物。弘治三年進士，籍贯東平州。（中国历代人物传记资料库 CBDB 262689） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4wJCgbadTAePpZ2BNEDAoG | 王憲 | accepted |
| children | p_7SQ9xV3CVicwxUW9gYt7Kj | 王思 | accepted |
| children | p_S7j6mAqwQWbFrBFdzyP9JA | 王忞 | accepted |
| children | p_xykbTcJ8iM1jL4AntEfovQ | 王志 | accepted |

## 外部来源

- [中国历代人物传记资料库：王忞（CBDB 262694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262694&o=json)
- [中国历代人物传记资料库：王思（CBDB 262695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262695&o=json)
- [中国历代人物传记资料库：王憲（CBDB 68238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68238&o=json)
- [中国历代人物传记资料库：王志（CBDB 262693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262693&o=json)
- [中国历代人物传记资料库：王智（CBDB 262689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262689&o=json)
