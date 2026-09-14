---
schema: wang-person/v1
id: p_HxJiGj8JHn8DhGEqa1wJaa
status: active
merged_into: null
display_name: 王大綸
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i9hcec8fhkkiHBmDfeJfHi
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zyMtAYh59TogacrpudsJrC
          claim_id: c_i9hcec8fhkkiHBmDfeJfHi
          source_id: s_V5Ke1etYNVtKAZcpUpFNNr
          stance: supports
          locator: CBDB:261990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261990）
          source: &a1
            id: s_V5Ke1etYNVtKAZcpUpFNNr
            source_type: api_record
            title: 中国历代人物传记资料库：王大綸（CBDB 261990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261990&o=json
            external_identifier: CBDB:261990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DJhy1WgyA47HWZb8eDQi6f
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大綸，明人物。弘治三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 261990）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xwyoPiKT6vd239zHMbZmm0
          claim_id: c_DJhy1WgyA47HWZb8eDQi6f
          source_id: s_V5Ke1etYNVtKAZcpUpFNNr
          stance: supports
          locator: CBDB:261990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DDExLOZw-CBhbG2XosvsZ7
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2LSGWLrXs7XnndXnW76V8U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ulBp3xNfivQxawPqX1Vra2
          claim_id: c_DDExLOZw-CBhbG2XosvsZ7
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FzHANRPNeNFZ34nEd8FtEx
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 200725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200725&o=json
            external_identifier: CBDB:200725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2LSGWLrXs7XnndXnW76V8U
        status: active
        display_name: 王統
        merged_into_person_id: null
    - claim:
        id: c_bmJO-yi3erDW43h1Hx3Frc
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5CL4Wu3NXG9SDC4HABb7b5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jbz5zjmpIBXuURaIqqRp14
          claim_id: c_bmJO-yi3erDW43h1Hx3Frc
          source_id: s_AcGiE0soEZHi1ysiMxY130
          stance: supports
          locator: CBDB：兄弟 王統（200725）之父／母 王大綸
          quotation: null
          interpretation_note: 由兄弟关系推断：王亨 与 王統 为同胞（CBDB 记「弟」），王統 之父／母即 王亨 之父／母。
          source:
            id: s_AcGiE0soEZHi1ysiMxY130
            source_type: api_record
            title: 中国历代人物传记资料库：王亨（CBDB 261998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261998&o=json
            external_identifier: CBDB:261998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5CL4Wu3NXG9SDC4HABb7b5
        status: active
        display_name: 王亨
        merged_into_person_id: null
    - claim:
        id: c_F9e09dX8-lR21kT7YDKoVO
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9doFnakix3pR8ZuH19dCpz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JJ7qJPp5t12pLPNlbRUhpx
          claim_id: c_F9e09dX8-lR21kT7YDKoVO
          source_id: s_vdSKJIjGbaJr3w7Ruu7qgh
          stance: supports
          locator: CBDB：兄弟 王統（200725）之父／母 王大綸
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑞 与 王統 为同胞（CBDB 记「兄」），王統 之父／母即 王瑞 之父／母。
          source:
            id: s_vdSKJIjGbaJr3w7Ruu7qgh
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 262000）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262000&o=json
            external_identifier: CBDB:262000
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9doFnakix3pR8ZuH19dCpz
        status: active
        display_name: 王瑞
        merged_into_person_id: null
    - claim:
        id: c_n8J0l8TL_Q9bLy23rCL1xl
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F1dDe3PyFQrT9iTGfXubC5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qCDJJZRJAVsUEBhtT5AOrc
          claim_id: c_n8J0l8TL_Q9bLy23rCL1xl
          source_id: s_hQjTySkisn8Esyz4U1WnGt
          stance: supports
          locator: CBDB：兄弟 王統（200725）之父／母 王大綸
          quotation: null
          interpretation_note: 由兄弟关系推断：王昌 与 王統 为同胞（CBDB 记「弟」），王統 之父／母即 王昌 之父／母。
          source:
            id: s_hQjTySkisn8Esyz4U1WnGt
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 261996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261996&o=json
            external_identifier: CBDB:261996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F1dDe3PyFQrT9iTGfXubC5
        status: active
        display_name: 王昌
        merged_into_person_id: null
    - claim:
        id: c_9p9hcGLTbekeIRtkfKF-9g
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KoJBbuqBnB7yzcpthMhzSh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RCtdgHT6Y916Q6CPsDTR_v
          claim_id: c_9p9hcGLTbekeIRtkfKF-9g
          source_id: s_KixqWyH6gy2Ve82AZSFnWj
          stance: supports
          locator: CBDB：兄弟 王統（200725）之父／母 王大綸
          quotation: null
          interpretation_note: 由兄弟关系推断：王盛 与 王統 为同胞（CBDB 记「弟」），王統 之父／母即 王盛 之父／母。
          source:
            id: s_KixqWyH6gy2Ve82AZSFnWj
            source_type: api_record
            title: 中国历代人物传记资料库：王盛（CBDB 261997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261997&o=json
            external_identifier: CBDB:261997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KoJBbuqBnB7yzcpthMhzSh
        status: active
        display_name: 王盛
        merged_into_person_id: null
    - claim:
        id: c_Qw2FVbXmL1WT3OoLJuPFgx
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eYhELx3YtLzHwjVVCXnH54
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NSTe-l5Zo9RyD6Nqz7FngG
          claim_id: c_Qw2FVbXmL1WT3OoLJuPFgx
          source_id: s_tlZmBCJGXPAO3qLU7fKCr5
          stance: supports
          locator: CBDB：兄弟 王統（200725）之父／母 王大綸
          quotation: null
          interpretation_note: 由兄弟关系推断：王節 与 王統 为同胞（CBDB 记「兄」），王統 之父／母即 王節 之父／母。
          source:
            id: s_tlZmBCJGXPAO3qLU7fKCr5
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 262005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262005&o=json
            external_identifier: CBDB:262005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eYhELx3YtLzHwjVVCXnH54
        status: active
        display_name: 王節
        merged_into_person_id: null
    - claim:
        id: c_su7G_K89cIAMacjXcXKg0S
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k7nhfJAUjNcE3wixC7oDAa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UTOPIeidRDyRlL-0uE7JDN
          claim_id: c_su7G_K89cIAMacjXcXKg0S
          source_id: s_n_CkjBfSKpHo-W5EVR51tR
          stance: supports
          locator: CBDB：兄弟 王統（200725）之父／母 王大綸
          quotation: null
          interpretation_note: 由兄弟关系推断：王相 与 王統 为同胞（CBDB 记「兄」），王統 之父／母即 王相 之父／母。
          source:
            id: s_n_CkjBfSKpHo-W5EVR51tR
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 262002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262002&o=json
            external_identifier: CBDB:262002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k7nhfJAUjNcE3wixC7oDAa
        status: active
        display_name: 王相
        merged_into_person_id: null
    - claim:
        id: c_BeOseyZL_7p5mlmP3V5RYa
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o3Xigs9eMCnEv65q1jNX6G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ow6hM3seHc7LWPmQ_oSWY-
          claim_id: c_BeOseyZL_7p5mlmP3V5RYa
          source_id: s_bDw2O5bpLcEqkwXaUrAM9s
          stance: supports
          locator: CBDB：兄弟 王統（200725）之父／母 王大綸
          quotation: null
          interpretation_note: 由兄弟关系推断：王賓 与 王統 为同胞（CBDB 记「兄」），王統 之父／母即 王賓 之父／母。
          source:
            id: s_bDw2O5bpLcEqkwXaUrAM9s
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 262004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262004&o=json
            external_identifier: CBDB:262004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o3Xigs9eMCnEv65q1jNX6G
        status: active
        display_name: 王賓
        merged_into_person_id: null
    - claim:
        id: c_dhth90-WluS1tN1qHXtqsE
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oj3b181MxpZPn44WggJ1nz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ATx5FiBvWSeIDdwj4kTP70
          claim_id: c_dhth90-WluS1tN1qHXtqsE
          source_id: s_TN3akkbC4M9DAaXwFVhiRb
          stance: supports
          locator: CBDB：兄弟 王統（200725）之父／母 王大綸
          quotation: null
          interpretation_note: 由兄弟关系推断：王謹 与 王統 为同胞（CBDB 记「兄」），王統 之父／母即 王謹 之父／母。
          source:
            id: s_TN3akkbC4M9DAaXwFVhiRb
            source_type: api_record
            title: 中国历代人物传记资料库：王謹（CBDB 262001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262001&o=json
            external_identifier: CBDB:262001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oj3b181MxpZPn44WggJ1nz
        status: active
        display_name: 王謹
        merged_into_person_id: null
    - claim:
        id: c_XirOEfXsqONxGSbOTqTujW
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yKrfRkYB4UUwsccCzfGpkv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YcBxaab0KOzZNH7vX_WZm4
          claim_id: c_XirOEfXsqONxGSbOTqTujW
          source_id: s_F4Vm5gA8sYXrEf4TT0pFgW
          stance: supports
          locator: CBDB：兄弟 王統（200725）之父／母 王大綸
          quotation: null
          interpretation_note: 由兄弟关系推断：王泰 与 王統 为同胞（CBDB 记「弟」），王統 之父／母即 王泰 之父／母。
          source:
            id: s_F4Vm5gA8sYXrEf4TT0pFgW
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 261999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261999&o=json
            external_identifier: CBDB:261999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yKrfRkYB4UUwsccCzfGpkv
        status: active
        display_name: 王泰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大綸 | accepted |
| bio.summary | 王大綸，明人物。弘治三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 261990） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2LSGWLrXs7XnndXnW76V8U | 王統 | accepted |
| children | p_5CL4Wu3NXG9SDC4HABb7b5 | 王亨 | accepted |
| children | p_9doFnakix3pR8ZuH19dCpz | 王瑞 | accepted |
| children | p_F1dDe3PyFQrT9iTGfXubC5 | 王昌 | accepted |
| children | p_KoJBbuqBnB7yzcpthMhzSh | 王盛 | accepted |
| children | p_eYhELx3YtLzHwjVVCXnH54 | 王節 | accepted |
| children | p_k7nhfJAUjNcE3wixC7oDAa | 王相 | accepted |
| children | p_o3Xigs9eMCnEv65q1jNX6G | 王賓 | accepted |
| children | p_oj3b181MxpZPn44WggJ1nz | 王謹 | accepted |
| children | p_yKrfRkYB4UUwsccCzfGpkv | 王泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 262004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262004&o=json)
- [中国历代人物传记资料库：王昌（CBDB 261996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261996&o=json)
- [中国历代人物传记资料库：王大綸（CBDB 261990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261990&o=json)
- [中国历代人物传记资料库：王亨（CBDB 261998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261998&o=json)
- [中国历代人物传记资料库：王節（CBDB 262005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262005&o=json)
- [中国历代人物传记资料库：王謹（CBDB 262001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262001&o=json)
- [中国历代人物传记资料库：王瑞（CBDB 262000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262000&o=json)
- [中国历代人物传记资料库：王盛（CBDB 261997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261997&o=json)
- [中国历代人物传记资料库：王泰（CBDB 261999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261999&o=json)
- [中国历代人物传记资料库：王統（CBDB 200725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200725&o=json)
- [中国历代人物传记资料库：王相（CBDB 262002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262002&o=json)
