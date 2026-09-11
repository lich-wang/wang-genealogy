---
schema: wang-person/v1
id: p_oBg2fph2HQeUi63Z2hsgrx
status: active
merged_into: null
display_name: 王壽卿
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S4WsvnqzKns6HmHDyhDvXn
        subject_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PFHd1qnidoBZ3xpg6WvrVB
          claim_id: c_S4WsvnqzKns6HmHDyhDvXn
          source_id: s_zpCRhmUJ7QnCYHJQn4KUYM
          stance: supports
          locator: CBDB:38223
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38223）
          source: &a1
            id: s_zpCRhmUJ7QnCYHJQn4KUYM
            source_type: api_record
            title: 中国历代人物传记资料库：王壽卿（CBDB 38223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38223&o=json
            external_identifier: CBDB:38223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.396Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XrEu2HLZ1rw2R6CsUHTXXF
        subject_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1060年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NnWAReUjD1H8pUQyuWnYNH
          claim_id: c_XrEu2HLZ1rw2R6CsUHTXXF
          source_id: s_zpCRhmUJ7QnCYHJQn4KUYM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_D4gfPDUG9J42msNHz5KJts
        subject_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1122年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ASPpwqDZQRiYJHdL2cN6hE
          claim_id: c_D4gfPDUG9J42msNHz5KJts
          source_id: s_zpCRhmUJ7QnCYHJQn4KUYM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9GFKhQckLpi6qQoCXj9DoD
        subject_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7U12g5VA5dMdzNLreFDrgG
          claim_id: c_9GFKhQckLpi6qQoCXj9DoD
          source_id: s_zpCRhmUJ7QnCYHJQn4KUYM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Uh97auGmf4hvgBo_c8B8fz
        subject_person_id: p_sxszW95r84hhjReQxZJYQG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zRe5jQnrseee8NtX1E2Coz
          claim_id: c_Uh97auGmf4hvgBo_c8B8fz
          source_id: s_LALErhPFcP3uMT9LqRhpUL
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LALErhPFcP3uMT9LqRhpUL
            source_type: api_record
            title: 中国历代人物传记资料库：王師元（CBDB 573296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573296&o=json
            external_identifier: CBDB:573296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sxszW95r84hhjReQxZJYQG
        status: active
        display_name: 王師元
        merged_into_person_id: null
  children:
    - claim:
        id: c_lou68VqRFC7HcYT5Q8PN-o
        subject_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pQjpjr9KSjEKYM5W2R2irU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VtLS0m4-8KqOZyuhya08fU
          claim_id: c_lou68VqRFC7HcYT5Q8PN-o
          source_id: s_CU8UokjGXNn3zdMpFjyi1H
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CU8UokjGXNn3zdMpFjyi1H
            source_type: api_record
            title: 中国历代人物传记资料库：王劭（CBDB 573316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573316&o=json
            external_identifier: CBDB:573316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pQjpjr9KSjEKYM5W2R2irU
        status: active
        display_name: 王劭
        merged_into_person_id: null
    - claim:
        id: c_t7ml5LPUfaQSLF92n1EEgR
        subject_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qTF39NbQHAL7sMgCZfcHxN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cXR0iiVqq92k2yIXFMBxvi
          claim_id: c_t7ml5LPUfaQSLF92n1EEgR
          source_id: s_P2KvyxfK53QDJvEvjL3HEy
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P2KvyxfK53QDJvEvjL3HEy
            source_type: api_record
            title: 中国历代人物传记资料库：王增（CBDB 573317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573317&o=json
            external_identifier: CBDB:573317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qTF39NbQHAL7sMgCZfcHxN
        status: active
        display_name: 王增
        merged_into_person_id: null
    - claim:
        id: c_qtn_5yFFWWZ0PkvR9Y5mfE
        subject_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r23Mjh17v9LxSiwxUqwmHn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zE1ORa-cvPwU9vaNjRIGJL
          claim_id: c_qtn_5yFFWWZ0PkvR9Y5mfE
          source_id: s_VKy9QTDkP8u4QRDMKh5dhz
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VKy9QTDkP8u4QRDMKh5dhz
            source_type: api_record
            title: 中国历代人物传记资料库：王垍（CBDB 573318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573318&o=json
            external_identifier: CBDB:573318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_r23Mjh17v9LxSiwxUqwmHn
        status: active
        display_name: 王垍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0DXZi1pNcaSd2ARWn-GJnd
        subject_person_id: p_fhGLq1GVtXqSnULUHt98dB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9_FQdByu7UsfyXiidZaJvi
          claim_id: c_0DXZi1pNcaSd2ARWn-GJnd
          source_id: s_Gnh7jB9vKAvP2oCADQ2iM4
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Gnh7jB9vKAvP2oCADQ2iM4
            source_type: api_record
            title: 中国历代人物传记资料库：王宗立（CBDB 573294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573294&o=json
            external_identifier: CBDB:573294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fhGLq1GVtXqSnULUHt98dB
        status: active
        display_name: 王宗立
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_nmTDyKgLYf9JbB0Z6zH8Yf
        subject_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xkQQ6LhKV3VL7Q558EBymV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uil0zuG9R9_OvEgLaCHe_E
          claim_id: c_nmTDyKgLYf9JbB0Z6zH8Yf
          source_id: s_k5oLJFfnrDbYMsmmYYqo92
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_k5oLJFfnrDbYMsmmYYqo92
            source_type: api_record
            title: 中国历代人物传记资料库：王宜生（CBDB 573322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573322&o=json
            external_identifier: CBDB:573322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xkQQ6LhKV3VL7Q558EBymV
        status: active
        display_name: 王宜生
        merged_into_person_id: null
  other: []
---

# 王壽卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽卿 | accepted |
| birth.date | 1060年 | accepted |
| death.date | 1122年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sxszW95r84hhjReQxZJYQG | 王師元 | accepted |
| children | p_pQjpjr9KSjEKYM5W2R2irU | 王劭 | accepted |
| children | p_qTF39NbQHAL7sMgCZfcHxN | 王增 | accepted |
| children | p_r23Mjh17v9LxSiwxUqwmHn | 王垍 | accepted |
| ancestors | p_fhGLq1GVtXqSnULUHt98dB | 王宗立 | accepted |
| descendants | p_xkQQ6LhKV3VL7Q558EBymV | 王宜生 | accepted |

## 外部来源

- [中国历代人物传记资料库：王垍（CBDB 573318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573318&o=json)
- [中国历代人物传记资料库：王劭（CBDB 573316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573316&o=json)
- [中国历代人物传记资料库：王師元（CBDB 573296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573296&o=json)
- [中国历代人物传记资料库：王壽卿（CBDB 38223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38223&o=json)
- [中国历代人物传记资料库：王宜生（CBDB 573322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573322&o=json)
- [中国历代人物传记资料库：王增（CBDB 573317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573317&o=json)
- [中国历代人物传记资料库：王宗立（CBDB 573294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573294&o=json)
