---
schema: wang-person/v1
id: p_HxkU2fnETNPPrHRLTi3TtQ
status: active
merged_into: null
display_name: 王載
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vcmL6M12g1eumW6G7ZXipT
        subject_person_id: p_HxkU2fnETNPPrHRLTi3TtQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王載
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eg6KJUE4gzUi7xEMghjaec
          claim_id: c_vcmL6M12g1eumW6G7ZXipT
          source_id: s_B9C1yXQ4hWLZGnjPi1s5ui
          stance: supports
          locator: CBDB:297163
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297163）
          source: &a1
            id: s_B9C1yXQ4hWLZGnjPi1s5ui
            source_type: api_record
            title: 中国历代人物传记资料库：王載（CBDB 297163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297163&o=json
            external_identifier: CBDB:297163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ojNPTAbpJHKsj4NHhQ8Nbm
        subject_person_id: p_HxkU2fnETNPPrHRLTi3TtQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王載，明人物。嘉靖十四年進士，籍贯華州。（中国历代人物传记资料库 CBDB 297163）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NMsOHL036w8ejyT6LM5Opi
          claim_id: c_ojNPTAbpJHKsj4NHhQ8Nbm
          source_id: s_B9C1yXQ4hWLZGnjPi1s5ui
          stance: supports
          locator: CBDB:297163
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_JbmSoiG-dlmED4dat0U4J4
        subject_person_id: p_HxkU2fnETNPPrHRLTi3TtQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LrwY5tXkYCUNXA8ZrdXwSb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D55ZRia-hrrWq3ZxFZk3Lq
          claim_id: c_JbmSoiG-dlmED4dat0U4J4
          source_id: s_B9C1yXQ4hWLZGnjPi1s5ui
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百零三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LrwY5tXkYCUNXA8ZrdXwSb
        status: active
        display_name: 王維楨
        merged_into_person_id: null
    - claim:
        id: c_84DOHhxMZfMtQEUSYPKdcR
        subject_person_id: p_HxkU2fnETNPPrHRLTi3TtQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NcMNQSpxuadJhig28TaDJU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ujn_HRCTpSqLkO5k744ivl
          claim_id: c_84DOHhxMZfMtQEUSYPKdcR
          source_id: s_56zASXLzdBfH-HehtQaKMw
          stance: supports
          locator: CBDB：兄弟 王維楨（126791）之父／母 王載
          quotation: null
          interpretation_note: 由兄弟关系推断：王維厚 与 王維楨 为同胞（CBDB 记「兄」），王維楨 之父／母即 王維厚 之父／母。
          source:
            id: s_56zASXLzdBfH-HehtQaKMw
            source_type: api_record
            title: 中国历代人物传记资料库：王維厚（CBDB 297170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297170&o=json
            external_identifier: CBDB:297170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NcMNQSpxuadJhig28TaDJU
        status: active
        display_name: 王維厚
        merged_into_person_id: null
    - claim:
        id: c_aW4hcI4dCYdimch7Qv9Kyz
        subject_person_id: p_HxkU2fnETNPPrHRLTi3TtQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d5tPgvgoZzEDZU2cnvCkRp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KTd9RwsppSwr7rdf7O67TZ
          claim_id: c_aW4hcI4dCYdimch7Qv9Kyz
          source_id: s_iyJropfbwm-f_w6KY2lfaO
          stance: supports
          locator: CBDB：兄弟 王維楨（126791）之父／母 王載
          quotation: null
          interpretation_note: 由兄弟关系推断：王維藩 与 王維楨 为同胞（CBDB 记「弟」），王維楨 之父／母即 王維藩 之父／母。
          source:
            id: s_iyJropfbwm-f_w6KY2lfaO
            source_type: api_record
            title: 中国历代人物传记资料库：王維藩（CBDB 297166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297166&o=json
            external_identifier: CBDB:297166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_d5tPgvgoZzEDZU2cnvCkRp
        status: active
        display_name: 王維藩
        merged_into_person_id: null
    - claim:
        id: c_RaFeYwLpb1kosn3zBstylL
        subject_person_id: p_HxkU2fnETNPPrHRLTi3TtQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_osh81b3M7AYJBAZgV5iHeQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I6aF45sZBpgvJwsHCK7Od9
          claim_id: c_RaFeYwLpb1kosn3zBstylL
          source_id: s_WDfkoyR1L_OCrR42z1PIur
          stance: supports
          locator: CBDB：兄弟 王維楨（126791）之父／母 王載
          quotation: null
          interpretation_note: 由兄弟关系推断：王維祺 与 王維楨 为同胞（CBDB 记「弟」），王維楨 之父／母即 王維祺 之父／母。
          source:
            id: s_WDfkoyR1L_OCrR42z1PIur
            source_type: api_record
            title: 中国历代人物传记资料库：王維祺（CBDB 297167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297167&o=json
            external_identifier: CBDB:297167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_osh81b3M7AYJBAZgV5iHeQ
        status: active
        display_name: 王維祺
        merged_into_person_id: null
    - claim:
        id: c_nUJ3WhNLuHovWiLK5yquda
        subject_person_id: p_HxkU2fnETNPPrHRLTi3TtQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zbhM4HAuk243BcTzDb8FbF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bFjc9eGPF8GeVJKxFHtspl
          claim_id: c_nUJ3WhNLuHovWiLK5yquda
          source_id: s_3aBJfvvND_xrcqhBM0j8g4
          stance: supports
          locator: CBDB：兄弟 王維楨（126791）之父／母 王載
          quotation: null
          interpretation_note: 由兄弟关系推断：王維新 与 王維楨 为同胞（CBDB 记「兄」），王維楨 之父／母即 王維新 之父／母。
          source:
            id: s_3aBJfvvND_xrcqhBM0j8g4
            source_type: api_record
            title: 中国历代人物传记资料库：王維新（CBDB 297168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297168&o=json
            external_identifier: CBDB:297168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zbhM4HAuk243BcTzDb8FbF
        status: active
        display_name: 王維新
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王載

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王載 | accepted |
| bio.summary | 王載，明人物。嘉靖十四年進士，籍贯華州。（中国历代人物传记资料库 CBDB 297163） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LrwY5tXkYCUNXA8ZrdXwSb | 王維楨 | accepted |
| children | p_NcMNQSpxuadJhig28TaDJU | 王維厚 | accepted |
| children | p_d5tPgvgoZzEDZU2cnvCkRp | 王維藩 | accepted |
| children | p_osh81b3M7AYJBAZgV5iHeQ | 王維祺 | accepted |
| children | p_zbhM4HAuk243BcTzDb8FbF | 王維新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王維藩（CBDB 297166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297166&o=json)
- [中国历代人物传记资料库：王維厚（CBDB 297170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297170&o=json)
- [中国历代人物传记资料库：王維祺（CBDB 297167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297167&o=json)
- [中国历代人物传记资料库：王維新（CBDB 297168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297168&o=json)
- [中国历代人物传记资料库：王載（CBDB 297163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297163&o=json)
