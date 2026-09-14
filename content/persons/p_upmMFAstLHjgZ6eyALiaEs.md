---
schema: wang-person/v1
id: p_upmMFAstLHjgZ6eyALiaEs
status: active
merged_into: null
display_name: 王顯
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LTGN8C3wK4M1cqU9C6nR1K
        subject_person_id: p_upmMFAstLHjgZ6eyALiaEs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_By2Wh3ZRpHdG2adcKxGKbv
          claim_id: c_LTGN8C3wK4M1cqU9C6nR1K
          source_id: s_qzTnBmhTBc8Yoin1wJAMnG
          stance: supports
          locator: CBDB:198552
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198552）
          source: &a1
            id: s_qzTnBmhTBc8Yoin1wJAMnG
            source_type: api_record
            title: 中国历代人物传记资料库：王顯（CBDB 198552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198552&o=json
            external_identifier: CBDB:198552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FjoH8RYpgnR1xqNLCkbFu8
        subject_person_id: p_upmMFAstLHjgZ6eyALiaEs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1429年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9QNHscupheK94ZqgnGtQi6
          claim_id: c_FjoH8RYpgnR1xqNLCkbFu8
          source_id: s_qzTnBmhTBc8Yoin1wJAMnG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5PaUE3TPBqDQKWZBVkPJDW
        subject_person_id: p_upmMFAstLHjgZ6eyALiaEs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯（生于1429年），明人物。明清進士進士，籍贯臨川，入仕進士，曾任知州。（中国历代人物传记资料库 CBDB 198552）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6KMx-IcogGdhGMoSr7ICWP
          claim_id: c_5PaUE3TPBqDQKWZBVkPJDW
          source_id: s_qzTnBmhTBc8Yoin1wJAMnG
          stance: supports
          locator: CBDB:198552
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_Kk6HtmUPLWpRJz2JGAVP8C
        status: active
        display_name: 王常
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_t_zyHQ9bLw6UxbhOeA74x6
        subject_person_id: p_MxjAUiWBNpbJEtL1inDQQE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_upmMFAstLHjgZ6eyALiaEs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aShTPZ0oRieAqGFB-d8F5H
          claim_id: c_t_zyHQ9bLw6UxbhOeA74x6
          source_id: s_v3sWcgH1WjEsWWv6QDMBGR
          stance: supports
          locator: 天順元年進士登科錄:一卷，第二甲第五十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v3sWcgH1WjEsWWv6QDMBGR
            source_type: api_record
            title: 中国历代人物传记资料库：王思敬（CBDB 261988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261988&o=json
            external_identifier: CBDB:261988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MxjAUiWBNpbJEtL1inDQQE
        status: active
        display_name: 王思敬
        merged_into_person_id: null
    - claim:
        id: c_mnwAUmhugda-I33X0cK0Pc
        subject_person_id: p_VynyhNxLVZm8KKMYzz5BcS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_upmMFAstLHjgZ6eyALiaEs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qD37A7x-s77bx6TPnkDEMm
          claim_id: c_mnwAUmhugda-I33X0cK0Pc
          source_id: s_DWyBSUshYvnSgUtozM153n
          stance: supports
          locator: 天順元年進士登科錄:一卷，第二甲第五十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DWyBSUshYvnSgUtozM153n
            source_type: api_record
            title: 中国历代人物传记资料库：王汝為（CBDB 261989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261989&o=json
            external_identifier: CBDB:261989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VynyhNxLVZm8KKMYzz5BcS
        status: active
        display_name: 王汝為
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_o3NHntKpL1uSXi9VEfGJap
        subject_person_id: p_5CL4Wu3NXG9SDC4HABb7b5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_upmMFAstLHjgZ6eyALiaEs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HdPUn5FMzkwmtuMaxqejql
          claim_id: c_o3NHntKpL1uSXi9VEfGJap
          source_id: s_AcGiE0soEZHi1ysiMxY130
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198552 王顯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_DXLKzO6sKtpUzCqCbeqZDy
        subject_person_id: p_9doFnakix3pR8ZuH19dCpz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_upmMFAstLHjgZ6eyALiaEs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_go9NmvYdMTIDYJiTlgnuaH
          claim_id: c_DXLKzO6sKtpUzCqCbeqZDy
          source_id: s_vdSKJIjGbaJr3w7Ruu7qgh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198552 王顯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_HM8SaSA5hGoKUPxwdDvfu1
        subject_person_id: p_F1dDe3PyFQrT9iTGfXubC5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_upmMFAstLHjgZ6eyALiaEs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hVY8IsDQhwW30qHA9pdyge
          claim_id: c_HM8SaSA5hGoKUPxwdDvfu1
          source_id: s_hQjTySkisn8Esyz4U1WnGt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198552 王顯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_q4N4wGY2mmY6dirAqySeME
        subject_person_id: p_KoJBbuqBnB7yzcpthMhzSh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_upmMFAstLHjgZ6eyALiaEs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2-zlREMB3JcMQybwpRMSEx
          claim_id: c_q4N4wGY2mmY6dirAqySeME
          source_id: s_KixqWyH6gy2Ve82AZSFnWj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198552 王顯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯 | accepted |
| birth.date | 1429年 | accepted |
| bio.summary | 王顯（生于1429年），明人物。明清進士進士，籍贯臨川，入仕進士，曾任知州。（中国历代人物传记资料库 CBDB 198552） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Kk6HtmUPLWpRJz2JGAVP8C | 王常 | accepted |
| ancestors | p_MxjAUiWBNpbJEtL1inDQQE | 王思敬 | accepted |
| ancestors | p_VynyhNxLVZm8KKMYzz5BcS | 王汝為 | accepted |
| other | p_5CL4Wu3NXG9SDC4HABb7b5 | 王亨 | accepted |
| other | p_9doFnakix3pR8ZuH19dCpz | 王瑞 | accepted |
| other | p_F1dDe3PyFQrT9iTGfXubC5 | 王昌 | accepted |
| other | p_KoJBbuqBnB7yzcpthMhzSh | 王盛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌（CBDB 261996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261996&o=json)
- [中国历代人物传记资料库：王常（CBDB 287119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287119&o=json)
- [中国历代人物传记资料库：王亨（CBDB 261998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261998&o=json)
- [中国历代人物传记资料库：王汝為（CBDB 261989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261989&o=json)
- [中国历代人物传记资料库：王瑞（CBDB 262000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262000&o=json)
- [中国历代人物传记资料库：王盛（CBDB 261997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261997&o=json)
- [中国历代人物传记资料库：王思敬（CBDB 261988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261988&o=json)
- [中国历代人物传记资料库：王顯（CBDB 198552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198552&o=json)
