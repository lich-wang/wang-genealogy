---
schema: wang-person/v1
id: p_UM99Zm3Rh6Z6EusvSaftqm
status: active
merged_into: null
display_name: 王晟
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_auVjZxr9GAQhSagWhDmEUe
        subject_person_id: p_UM99Zm3Rh6Z6EusvSaftqm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GMYPVDF9MJ2JcBEHT1k53B
          claim_id: c_auVjZxr9GAQhSagWhDmEUe
          source_id: s_9kHJjVHDUgWPFXxqUXzSDX
          stance: supports
          locator: CBDB:264629
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264629）
          source: &a1
            id: s_9kHJjVHDUgWPFXxqUXzSDX
            source_type: api_record
            title: 中国历代人物传记资料库：王晟（CBDB 264629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264629&o=json
            external_identifier: CBDB:264629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3oYSZvLCtX7tcs6bvjSXLF
        subject_person_id: p_UM99Zm3Rh6Z6EusvSaftqm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晟，明人物。弘治六年進士，籍贯無錫，曾任遞運所大使。（中国历代人物传记资料库 CBDB 264629）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4CuHo5gmXbU2cUSeUn6TPd
          claim_id: c_3oYSZvLCtX7tcs6bvjSXLF
          source_id: s_9kHJjVHDUgWPFXxqUXzSDX
          stance: supports
          locator: CBDB:264629
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3e2V5N3-jz-0gwNzeMQmaR
        subject_person_id: p_UM99Zm3Rh6Z6EusvSaftqm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aTZkNfzwFVzWVUFyA-1Tao
          claim_id: c_3e2V5N3-jz-0gwNzeMQmaR
          source_id: s_mVwkG4e4H3d4chjvn3BAU2
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第八十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mVwkG4e4H3d4chjvn3BAU2
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 200921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200921&o=json
            external_identifier: CBDB:200921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2hJwbcefrPyv1Q4ce3xoc6
        status: active
        display_name: 王恂
        merged_into_person_id: null
    - claim:
        id: c_Hxu6bM8ORXsLmCr6fPNb-G
        subject_person_id: p_UM99Zm3Rh6Z6EusvSaftqm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ErcVZDeQmCkd4KVAXNE9Mp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gnBY3eZKSEjHgKC4pygIbU
          claim_id: c_Hxu6bM8ORXsLmCr6fPNb-G
          source_id: s_KPa2r36U3tZZXQu4xQNtO0
          stance: supports
          locator: CBDB：兄弟 王恂（200921）之父／母 王晟
          quotation: null
          interpretation_note: 由兄弟关系推断：王愉 与 王恂 为同胞（CBDB 记「弟」），王恂 之父／母即 王愉 之父／母。
          source:
            id: s_KPa2r36U3tZZXQu4xQNtO0
            source_type: api_record
            title: 中国历代人物传记资料库：王愉（CBDB 264633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264633&o=json
            external_identifier: CBDB:264633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ErcVZDeQmCkd4KVAXNE9Mp
        status: active
        display_name: 王愉
        merged_into_person_id: null
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
        id: p_QV7jVCSRPUHXTyJLtG8Nt3
        status: active
        display_name: 王悌
        merged_into_person_id: null
    - claim:
        id: c_dhv6S47qFhZYr5hEG89ugi
        subject_person_id: p_UM99Zm3Rh6Z6EusvSaftqm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cGCWifwUvYu628MPq75vC4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MAwv2dItC8cEhKFndbfgR3
          claim_id: c_dhv6S47qFhZYr5hEG89ugi
          source_id: s_FLRA5vTHUb07mTEmuPpcXd
          stance: supports
          locator: CBDB：兄弟 王恂（200921）之父／母 王晟
          quotation: null
          interpretation_note: 由兄弟关系推断：王怡 与 王恂 为同胞（CBDB 记「兄」），王恂 之父／母即 王怡 之父／母。
          source:
            id: s_FLRA5vTHUb07mTEmuPpcXd
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 264638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264638&o=json
            external_identifier: CBDB:264638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cGCWifwUvYu628MPq75vC4
        status: active
        display_name: 王怡
        merged_into_person_id: null
    - claim:
        id: c_w0qsNeUOhL65YIglNSuYqD
        subject_person_id: p_UM99Zm3Rh6Z6EusvSaftqm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qL5vdYVVtWA2vrFPPcuKVr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Na8OGtQZLLamxwyX_dpbh4
          claim_id: c_w0qsNeUOhL65YIglNSuYqD
          source_id: s_S55sqvAOImYyAAyT7JUiqj
          stance: supports
          locator: CBDB：兄弟 王恂（200921）之父／母 王晟
          quotation: null
          interpretation_note: 由兄弟关系推断：王愷 与 王恂 为同胞（CBDB 记「弟」），王恂 之父／母即 王愷 之父／母。
          source:
            id: s_S55sqvAOImYyAAyT7JUiqj
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 264634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264634&o=json
            external_identifier: CBDB:264634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qL5vdYVVtWA2vrFPPcuKVr
        status: active
        display_name: 王愷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晟 | accepted |
| bio.summary | 王晟，明人物。弘治六年進士，籍贯無錫，曾任遞運所大使。（中国历代人物传记资料库 CBDB 264629） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2hJwbcefrPyv1Q4ce3xoc6 | 王恂 | accepted |
| children | p_ErcVZDeQmCkd4KVAXNE9Mp | 王愉 | accepted |
| children | p_QV7jVCSRPUHXTyJLtG8Nt3 | 王悌 | accepted |
| children | p_cGCWifwUvYu628MPq75vC4 | 王怡 | accepted |
| children | p_qL5vdYVVtWA2vrFPPcuKVr | 王愷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晟（CBDB 264629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264629&o=json)
- [中国历代人物传记资料库：王愷（CBDB 264634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264634&o=json)
- [中国历代人物传记资料库：王悌（CBDB 264635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264635&o=json)
- [中国历代人物传记资料库：王恂（CBDB 200921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200921&o=json)
- [中国历代人物传记资料库：王怡（CBDB 264638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264638&o=json)
- [中国历代人物传记资料库：王愉（CBDB 264633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264633&o=json)
