---
schema: wang-person/v1
id: p_eQTph1AyQLCRGPwJS5yprV
status: active
merged_into: null
display_name: 王文
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cCv9XES2Nw3ydGTHiGfjgA
        subject_person_id: p_eQTph1AyQLCRGPwJS5yprV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z3cW4vfwFgfhUWr5n4wQCE
          claim_id: c_cCv9XES2Nw3ydGTHiGfjgA
          source_id: s_qf5hsZqv3ZBiyVrRkjb7CZ
          stance: supports
          locator: CBDB:225993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225993）
          source: &a1
            id: s_qf5hsZqv3ZBiyVrRkjb7CZ
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 225993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225993&o=json
            external_identifier: CBDB:225993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.451Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qDyUJDDxtKEppxuF7in2z8
        subject_person_id: p_eQTph1AyQLCRGPwJS5yprV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文，明人物。成化二年進士，籍贯束鹿。（中国历代人物传记资料库 CBDB 225993）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gl2esvr8ItPQlk5QgUg61l
          claim_id: c_qDyUJDDxtKEppxuF7in2z8
          source_id: s_qf5hsZqv3ZBiyVrRkjb7CZ
          stance: supports
          locator: CBDB:225993
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_m_w3FdsiRAEqkwe4-WT2Dl
        subject_person_id: p_eQTph1AyQLCRGPwJS5yprV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YS93bFMg2tXSWdgNRCjryF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rdYFQU2E8Q0eRe-8emoLVi
          claim_id: c_m_w3FdsiRAEqkwe4-WT2Dl
          source_id: s_qf5hsZqv3ZBiyVrRkjb7CZ
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YS93bFMg2tXSWdgNRCjryF
        status: active
        display_name: 王宗彝
        merged_into_person_id: null
    - claim:
        id: c_YikpBLX0I1qq6lAjIJNwHR
        subject_person_id: p_eQTph1AyQLCRGPwJS5yprV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7qPx7PU53ZthQYtAvBB1th
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HAfduxF-AkIv8rQ6BbSm5k
          claim_id: c_YikpBLX0I1qq6lAjIJNwHR
          source_id: s_d6piwZLQQP0Trp9_zA84ZH
          stance: supports
          locator: CBDB：兄弟 王宗彝（126562）之父／母 王文
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗弼 与 王宗彝 为同胞（CBDB 记「兄」），王宗彝 之父／母即 王宗弼 之父／母。
          source:
            id: s_d6piwZLQQP0Trp9_zA84ZH
            source_type: api_record
            title: 中国历代人物传记资料库：王宗弼（CBDB 226071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226071&o=json
            external_identifier: CBDB:226071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7qPx7PU53ZthQYtAvBB1th
        status: active
        display_name: 王宗弼
        merged_into_person_id: null
    - claim:
        id: c_ZYG13EY6sgE_RaZE6ET2EJ
        subject_person_id: p_eQTph1AyQLCRGPwJS5yprV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jdAcgNfnQPHLzzbzCX6cg5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FWh87YlJOeVbmaSbfnqjYB
          claim_id: c_ZYG13EY6sgE_RaZE6ET2EJ
          source_id: s_5h3K5dri73nGQA1lgrsfVw
          stance: supports
          locator: CBDB：兄弟 王宗彝（126562）之父／母 王文
          quotation: null
          interpretation_note: 由兄弟关系推断：王中 与 王宗彝 为同胞（CBDB 记「弟」），王宗彝 之父／母即 王中 之父／母。
          source:
            id: s_5h3K5dri73nGQA1lgrsfVw
            source_type: api_record
            title: 中国历代人物传记资料库：王中（CBDB 226049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226049&o=json
            external_identifier: CBDB:226049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jdAcgNfnQPHLzzbzCX6cg5
        status: active
        display_name: 王中
        merged_into_person_id: null
    - claim:
        id: c_pmiLase01DFmSLKHP80FaF
        subject_person_id: p_eQTph1AyQLCRGPwJS5yprV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mBaNKAhkGBmeaH659gnUQM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_saw1l3IgtDhl0F35OVBaBG
          claim_id: c_pmiLase01DFmSLKHP80FaF
          source_id: s_oVH3NbJu7RafPxUw4w4MtC
          stance: supports
          locator: CBDB：兄弟 王宗彝（126562）之父／母 王文
          quotation: null
          interpretation_note: 由兄弟关系推断：王元 与 王宗彝 为同胞（CBDB 记「弟」），王宗彝 之父／母即 王元 之父／母。
          source:
            id: s_oVH3NbJu7RafPxUw4w4MtC
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 226038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226038&o=json
            external_identifier: CBDB:226038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mBaNKAhkGBmeaH659gnUQM
        status: active
        display_name: 王元
        merged_into_person_id: null
    - claim:
        id: c_v5dg3getiy8QO9U5CwiXKv
        subject_person_id: p_eQTph1AyQLCRGPwJS5yprV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ursTJm9AdEpR7MB7U81vxY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0F9UTuPLpl0gDODwdBbHKI
          claim_id: c_v5dg3getiy8QO9U5CwiXKv
          source_id: s_vXOoAyt6GQbNfpMsERUwKq
          stance: supports
          locator: CBDB：兄弟 王宗彝（126562）之父／母 王文
          quotation: null
          interpretation_note: 由兄弟关系推断：王宸 与 王宗彝 为同胞（CBDB 记「弟」），王宗彝 之父／母即 王宸 之父／母。
          source:
            id: s_vXOoAyt6GQbNfpMsERUwKq
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 226060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226060&o=json
            external_identifier: CBDB:226060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ursTJm9AdEpR7MB7U81vxY
        status: active
        display_name: 王宸
        merged_into_person_id: null
    - claim:
        id: c_peFmJqa3Z9KoIjxv6p93UP
        subject_person_id: p_eQTph1AyQLCRGPwJS5yprV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yK17GKCFC21J7svXAAWmxy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ArWlNGKy7zWqzj2-yJvHtj
          claim_id: c_peFmJqa3Z9KoIjxv6p93UP
          source_id: s_Rty2B7ZAupVszQXyVtYQ4v
          stance: supports
          locator: CBDB：兄弟 王宗彝（126562）之父／母 王文
          quotation: null
          interpretation_note: 由兄弟关系推断：王敬 与 王宗彝 为同胞（CBDB 记「弟」），王宗彝 之父／母即 王敬 之父／母。
          source:
            id: s_Rty2B7ZAupVszQXyVtYQ4v
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 226027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226027&o=json
            external_identifier: CBDB:226027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yK17GKCFC21J7svXAAWmxy
        status: active
        display_name: 王敬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | 王文，明人物。成化二年進士，籍贯束鹿。（中国历代人物传记资料库 CBDB 225993） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YS93bFMg2tXSWdgNRCjryF | 王宗彝 | accepted |
| children | p_7qPx7PU53ZthQYtAvBB1th | 王宗弼 | accepted |
| children | p_jdAcgNfnQPHLzzbzCX6cg5 | 王中 | accepted |
| children | p_mBaNKAhkGBmeaH659gnUQM | 王元 | accepted |
| children | p_ursTJm9AdEpR7MB7U81vxY | 王宸 | accepted |
| children | p_yK17GKCFC21J7svXAAWmxy | 王敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宸（CBDB 226060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226060&o=json)
- [中国历代人物传记资料库：王敬（CBDB 226027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226027&o=json)
- [中国历代人物传记资料库：王文（CBDB 225993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225993&o=json)
- [中国历代人物传记资料库：王元（CBDB 226038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226038&o=json)
- [中国历代人物传记资料库：王中（CBDB 226049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226049&o=json)
- [中国历代人物传记资料库：王宗弼（CBDB 226071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226071&o=json)
