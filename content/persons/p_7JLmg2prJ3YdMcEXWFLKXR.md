---
schema: wang-person/v1
id: p_7JLmg2prJ3YdMcEXWFLKXR
status: active
merged_into: null
display_name: 王學古
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T5iT8MH7NmvdzvgepWn6XL
        subject_person_id: p_7JLmg2prJ3YdMcEXWFLKXR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_id4bVMut289Q2uuWSnDFen
          claim_id: c_T5iT8MH7NmvdzvgepWn6XL
          source_id: s_B6dLHtmv2bcXri1aDmor2m
          stance: supports
          locator: CBDB:244147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244147）
          source: &a1
            id: s_B6dLHtmv2bcXri1aDmor2m
            source_type: api_record
            title: 中国历代人物传记资料库：王學古（CBDB 244147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244147&o=json
            external_identifier: CBDB:244147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w6nbDCrRkLUncit5krNKeD
        subject_person_id: p_7JLmg2prJ3YdMcEXWFLKXR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學古，明人物。成化五年進士，籍贯交趾，曾任知縣。（中国历代人物传记资料库 CBDB 244147）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bai87cIcTOO_pweugOjSuD
          claim_id: c_w6nbDCrRkLUncit5krNKeD
          source_id: s_B6dLHtmv2bcXri1aDmor2m
          stance: supports
          locator: CBDB:244147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Xq08cFhoQkVg3b57GbX7x6
        subject_person_id: p_7JLmg2prJ3YdMcEXWFLKXR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BENHjYLLrgUUA56P1EQsxJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_87QZIJS8MzfjT5qOqs8lgh
          claim_id: c_Xq08cFhoQkVg3b57GbX7x6
          source_id: s_B6dLHtmv2bcXri1aDmor2m
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BENHjYLLrgUUA56P1EQsxJ
        status: active
        display_name: 王京
        merged_into_person_id: null
    - claim:
        id: c_Togk_c_H-R6Q6BreaPj2zO
        subject_person_id: p_7JLmg2prJ3YdMcEXWFLKXR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1VbbmRwcNCPCG8dgcW8wE1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gevU0WBriGMavzubO0J3y
          claim_id: c_Togk_c_H-R6Q6BreaPj2zO
          source_id: s_Oapa6xeUieXe9-rvLA450q
          stance: supports
          locator: CBDB：兄弟 王京（199375）之父／母 王學古
          quotation: null
          interpretation_note: 由兄弟关系推断：王珙 与 王京 为同胞（CBDB 记「兄」），王京 之父／母即 王珙 之父／母。
          source:
            id: s_Oapa6xeUieXe9-rvLA450q
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 244150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244150&o=json
            external_identifier: CBDB:244150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1VbbmRwcNCPCG8dgcW8wE1
        status: active
        display_name: 王珙
        merged_into_person_id: null
    - claim:
        id: c_X86q0zqWp22v_QCIr77z_H
        subject_person_id: p_7JLmg2prJ3YdMcEXWFLKXR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LTwY3o8bwPmCU2iMQTZCxg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dSuDLwBxlTVj9sO_ivUINt
          claim_id: c_X86q0zqWp22v_QCIr77z_H
          source_id: s_eDd-t4L6sncLeDQvwkXeqf
          stance: supports
          locator: CBDB：兄弟 王京（199375）之父／母 王學古
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗 与 王京 为同胞（CBDB 记「兄」），王京 之父／母即 王宗 之父／母。
          source:
            id: s_eDd-t4L6sncLeDQvwkXeqf
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 244151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244151&o=json
            external_identifier: CBDB:244151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LTwY3o8bwPmCU2iMQTZCxg
        status: active
        display_name: 王宗
        merged_into_person_id: null
    - claim:
        id: c_Ps0kauePMz2fI2hIhLKrzl
        subject_person_id: p_7JLmg2prJ3YdMcEXWFLKXR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XRXNgQHKYqE7FrZHR7QNjk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ki72gEWK0NIxV8LPbJSJ-V
          claim_id: c_Ps0kauePMz2fI2hIhLKrzl
          source_id: s_9tPZ9qh8atQo_Y8VxK8EAa
          stance: supports
          locator: CBDB：兄弟 王京（199375）之父／母 王學古
          quotation: null
          interpretation_note: 由兄弟关系推断：王素 与 王京 为同胞（CBDB 记「兄」），王京 之父／母即 王素 之父／母。
          source:
            id: s_9tPZ9qh8atQo_Y8VxK8EAa
            source_type: api_record
            title: 中国历代人物传记资料库：王素（CBDB 244153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244153&o=json
            external_identifier: CBDB:244153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XRXNgQHKYqE7FrZHR7QNjk
        status: active
        display_name: 王素
        merged_into_person_id: null
    - claim:
        id: c_7ZJMJdKRtWnVxVFMubggOI
        subject_person_id: p_7JLmg2prJ3YdMcEXWFLKXR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aeTzQ1EsoWNv32iKKPKc45
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NXtw1NpLvvAKjt7_D7nDKq
          claim_id: c_7ZJMJdKRtWnVxVFMubggOI
          source_id: s_UZRaw_zVQvgvHS_qJpynP6
          stance: supports
          locator: CBDB：兄弟 王京（199375）之父／母 王學古
          quotation: null
          interpretation_note: 由兄弟关系推断：王柰 与 王京 为同胞（CBDB 记「兄」），王京 之父／母即 王柰 之父／母。
          source:
            id: s_UZRaw_zVQvgvHS_qJpynP6
            source_type: api_record
            title: 中国历代人物传记资料库：王柰（CBDB 244155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244155&o=json
            external_identifier: CBDB:244155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aeTzQ1EsoWNv32iKKPKc45
        status: active
        display_name: 王柰
        merged_into_person_id: null
    - claim:
        id: c_dypBT4DWUtlwLpqFtlaeIG
        subject_person_id: p_7JLmg2prJ3YdMcEXWFLKXR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h7iu34M2oAjpr1fE8xtAmh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UJBLotEGZ-17L_kLc0tjA8
          claim_id: c_dypBT4DWUtlwLpqFtlaeIG
          source_id: s_oUYSyeWXrwffyHE7wH8I29
          stance: supports
          locator: CBDB：兄弟 王京（199375）之父／母 王學古
          quotation: null
          interpretation_note: 由兄弟关系推断：王棐 与 王京 为同胞（CBDB 记「兄」），王京 之父／母即 王棐 之父／母。
          source:
            id: s_oUYSyeWXrwffyHE7wH8I29
            source_type: api_record
            title: 中国历代人物传记资料库：王棐（CBDB 244154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244154&o=json
            external_identifier: CBDB:244154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h7iu34M2oAjpr1fE8xtAmh
        status: active
        display_name: 王棐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王學古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學古 | accepted |
| bio.summary | 王學古，明人物。成化五年進士，籍贯交趾，曾任知縣。（中国历代人物传记资料库 CBDB 244147） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BENHjYLLrgUUA56P1EQsxJ | 王京 | accepted |
| children | p_1VbbmRwcNCPCG8dgcW8wE1 | 王珙 | accepted |
| children | p_LTwY3o8bwPmCU2iMQTZCxg | 王宗 | accepted |
| children | p_XRXNgQHKYqE7FrZHR7QNjk | 王素 | accepted |
| children | p_aeTzQ1EsoWNv32iKKPKc45 | 王柰 | accepted |
| children | p_h7iu34M2oAjpr1fE8xtAmh | 王棐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棐（CBDB 244154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244154&o=json)
- [中国历代人物传记资料库：王珙（CBDB 244150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244150&o=json)
- [中国历代人物传记资料库：王柰（CBDB 244155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244155&o=json)
- [中国历代人物传记资料库：王素（CBDB 244153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244153&o=json)
- [中国历代人物传记资料库：王學古（CBDB 244147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244147&o=json)
- [中国历代人物传记资料库：王宗（CBDB 244151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244151&o=json)
