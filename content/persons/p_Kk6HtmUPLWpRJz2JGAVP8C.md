---
schema: wang-person/v1
id: p_Kk6HtmUPLWpRJz2JGAVP8C
status: active
merged_into: null
display_name: 王常
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_suFE73sNN2SxStJHvALmDX
        subject_person_id: p_Kk6HtmUPLWpRJz2JGAVP8C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6BVBao26VtFdGmnH94HUtb
          claim_id: c_suFE73sNN2SxStJHvALmDX
          source_id: s_NaPKYLGTLL6DQuEBG2pr43
          stance: supports
          locator: CBDB:287119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287119）
          source: &a1
            id: s_NaPKYLGTLL6DQuEBG2pr43
            source_type: api_record
            title: 中国历代人物传记资料库：王常（CBDB 287119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287119&o=json
            external_identifier: CBDB:287119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZVmQQ7nvRzMQwh3LcphnnH
        subject_person_id: p_Kk6HtmUPLWpRJz2JGAVP8C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王常，明人物。天順元年進士，籍贯臨川，曾任監察御史。（中国历代人物传记资料库 CBDB 287119）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gNCQbVSENhRtitt2Gjsqtf
          claim_id: c_ZVmQQ7nvRzMQwh3LcphnnH
          source_id: s_NaPKYLGTLL6DQuEBG2pr43
          stance: supports
          locator: CBDB:287119
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8ZzWhD7fD1bBZ31sc2mwZ7
        subject_person_id: p_Kk6HtmUPLWpRJz2JGAVP8C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_upmMFAstLHjgZ6eyALiaEs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pzn5sH3sfe39ZUuSLr14JU
          claim_id: c_8ZzWhD7fD1bBZ31sc2mwZ7
          source_id: s_NaPKYLGTLL6DQuEBG2pr43
          stance: supports
          locator: 天順元年進士登科錄:一卷，第二甲第五十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_upmMFAstLHjgZ6eyALiaEs
        status: active
        display_name: 王顯
        merged_into_person_id: null
    - claim:
        id: c_urSSmRKdDgkObxCZBGuqgZ
        subject_person_id: p_Kk6HtmUPLWpRJz2JGAVP8C
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
        - id: cs_ebX12VQhxcMbck3slNUYiN
          claim_id: c_urSSmRKdDgkObxCZBGuqgZ
          source_id: s_AcGiE0soEZHi1ysiMxY130
          stance: supports
          locator: CBDB：兄弟 王顯（198552）之父／母 王常
          quotation: null
          interpretation_note: 由兄弟关系推断：王亨 与 王顯 为同胞（CBDB 记「兄」），王顯 之父／母即 王亨 之父／母。
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
        id: c_K_xzUQM2Dm4spMT8m7LkQ4
        subject_person_id: p_Kk6HtmUPLWpRJz2JGAVP8C
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
        - id: cs_uZwpdIwD6vv2SEcGO1X3Nh
          claim_id: c_K_xzUQM2Dm4spMT8m7LkQ4
          source_id: s_vdSKJIjGbaJr3w7Ruu7qgh
          stance: supports
          locator: CBDB：兄弟 王顯（198552）之父／母 王常
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑞 与 王顯 为同胞（CBDB 记「兄」），王顯 之父／母即 王瑞 之父／母。
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
        id: c_l-x0y04afmiAA2Je7qXxQQ
        subject_person_id: p_Kk6HtmUPLWpRJz2JGAVP8C
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
        - id: cs_nF8F-rOLXVdeBhVdkH6PtR
          claim_id: c_l-x0y04afmiAA2Je7qXxQQ
          source_id: s_hQjTySkisn8Esyz4U1WnGt
          stance: supports
          locator: CBDB：兄弟 王顯（198552）之父／母 王常
          quotation: null
          interpretation_note: 由兄弟关系推断：王昌 与 王顯 为同胞（CBDB 记「兄」），王顯 之父／母即 王昌 之父／母。
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
        id: c_BQflxzBf_krozejupkyRIJ
        subject_person_id: p_Kk6HtmUPLWpRJz2JGAVP8C
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
        - id: cs_qBQp9BxUqw49XzpuPbYaKL
          claim_id: c_BQflxzBf_krozejupkyRIJ
          source_id: s_KixqWyH6gy2Ve82AZSFnWj
          stance: supports
          locator: CBDB：兄弟 王顯（198552）之父／母 王常
          quotation: null
          interpretation_note: 由兄弟关系推断：王盛 与 王顯 为同胞（CBDB 记「兄」），王顯 之父／母即 王盛 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王常 | accepted |
| bio.summary | 王常，明人物。天順元年進士，籍贯臨川，曾任監察御史。（中国历代人物传记资料库 CBDB 287119） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_upmMFAstLHjgZ6eyALiaEs | 王顯 | accepted |
| children | p_5CL4Wu3NXG9SDC4HABb7b5 | 王亨 | accepted |
| children | p_9doFnakix3pR8ZuH19dCpz | 王瑞 | accepted |
| children | p_F1dDe3PyFQrT9iTGfXubC5 | 王昌 | accepted |
| children | p_KoJBbuqBnB7yzcpthMhzSh | 王盛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌（CBDB 261996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261996&o=json)
- [中国历代人物传记资料库：王常（CBDB 287119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287119&o=json)
- [中国历代人物传记资料库：王亨（CBDB 261998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261998&o=json)
- [中国历代人物传记资料库：王瑞（CBDB 262000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262000&o=json)
- [中国历代人物传记资料库：王盛（CBDB 261997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261997&o=json)
