---
schema: wang-person/v1
id: p_2h2iTcWMQkG9VP954w7RTi
status: active
merged_into: null
display_name: 王礪
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HS6SZP2rQatFszG4oaLAyZ
        subject_person_id: p_2h2iTcWMQkG9VP954w7RTi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王礪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U7jR78ySJCZ1Yxsnur9bdw
          claim_id: c_HS6SZP2rQatFszG4oaLAyZ
          source_id: s_Q24rEAHyuRo4MFbpVkFBFd
          stance: supports
          locator: CBDB:241021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241021）
          source: &a1
            id: s_Q24rEAHyuRo4MFbpVkFBFd
            source_type: api_record
            title: 中国历代人物传记资料库：王礪（CBDB 241021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241021&o=json
            external_identifier: CBDB:241021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q7FpPqyNidqMS4vKtuTJQo
        subject_person_id: p_2h2iTcWMQkG9VP954w7RTi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王礪，明人物。正統十三年進士，籍贯夏縣，曾任長史。（中国历代人物传记资料库 CBDB 241021）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d4-k79n_Wa86tItCmljnCN
          claim_id: c_Q7FpPqyNidqMS4vKtuTJQo
          source_id: s_Q24rEAHyuRo4MFbpVkFBFd
          stance: supports
          locator: CBDB:241021
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WmtVi8hpiHdzrVIfkItVp3
        subject_person_id: p_2h2iTcWMQkG9VP954w7RTi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zbKj98JeC6KWficHAeAQvO
          claim_id: c_WmtVi8hpiHdzrVIfkItVp3
          source_id: s_Q24rEAHyuRo4MFbpVkFBFd
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第四十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bfSy8dPRhP5ZK4VbYiPWT2
        status: active
        display_name: 王正
        merged_into_person_id: null
    - claim:
        id: c_bK76ogg7oP5wiJAZfgjbdA
        subject_person_id: p_2h2iTcWMQkG9VP954w7RTi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A6iFsSXAzpYqQ7Dx2tHHzh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tGsOWCsZeJ9EETXjlHslLY
          claim_id: c_bK76ogg7oP5wiJAZfgjbdA
          source_id: s_xdcm72ol3Qmd9BrqMZMecF
          stance: supports
          locator: CBDB：兄弟 王正（208144）之父／母 王礪
          quotation: null
          interpretation_note: 由兄弟关系推断：王賢 与 王正 为同胞（CBDB 记「弟」），王正 之父／母即 王賢 之父／母。
          source:
            id: s_xdcm72ol3Qmd9BrqMZMecF
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 241026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241026&o=json
            external_identifier: CBDB:241026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A6iFsSXAzpYqQ7Dx2tHHzh
        status: active
        display_name: 王賢
        merged_into_person_id: null
    - claim:
        id: c__fUE89Hvq1N3aXZvC74bv1
        subject_person_id: p_2h2iTcWMQkG9VP954w7RTi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CMcPDAVq4dBFZKfPEAkaFE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2jpw0XAzbbMYqqafX5kITE
          claim_id: c__fUE89Hvq1N3aXZvC74bv1
          source_id: s_PtjeH2VNzcpsM5h8m3m2D2
          stance: supports
          locator: CBDB：兄弟 王正（208144）之父／母 王礪
          quotation: null
          interpretation_note: 由兄弟关系推断：王福 与 王正 为同胞（CBDB 记「弟」），王正 之父／母即 王福 之父／母。
          source:
            id: s_PtjeH2VNzcpsM5h8m3m2D2
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 241025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241025&o=json
            external_identifier: CBDB:241025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CMcPDAVq4dBFZKfPEAkaFE
        status: active
        display_name: 王福
        merged_into_person_id: null
    - claim:
        id: c_hfFEx-KdmUUg4jTUkTN3Rb
        subject_person_id: p_2h2iTcWMQkG9VP954w7RTi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j2HzE3F4gKwm8dP9vGQ9G1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SJJssLPjOHad55B_YrtuWi
          claim_id: c_hfFEx-KdmUUg4jTUkTN3Rb
          source_id: s_jk1I9EgQVUvnsxCMPUNNaq
          stance: supports
          locator: CBDB：兄弟 王正（208144）之父／母 王礪
          quotation: null
          interpretation_note: 由兄弟关系推断：王聰 与 王正 为同胞（CBDB 记「兄」），王正 之父／母即 王聰 之父／母。
          source:
            id: s_jk1I9EgQVUvnsxCMPUNNaq
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 241027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241027&o=json
            external_identifier: CBDB:241027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j2HzE3F4gKwm8dP9vGQ9G1
        status: active
        display_name: 王聰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王礪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王礪 | accepted |
| bio.summary | 王礪，明人物。正統十三年進士，籍贯夏縣，曾任長史。（中国历代人物传记资料库 CBDB 241021） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bfSy8dPRhP5ZK4VbYiPWT2 | 王正 | accepted |
| children | p_A6iFsSXAzpYqQ7Dx2tHHzh | 王賢 | accepted |
| children | p_CMcPDAVq4dBFZKfPEAkaFE | 王福 | accepted |
| children | p_j2HzE3F4gKwm8dP9vGQ9G1 | 王聰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 241027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241027&o=json)
- [中国历代人物传记资料库：王福（CBDB 241025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241025&o=json)
- [中国历代人物传记资料库：王礪（CBDB 241021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241021&o=json)
- [中国历代人物传记资料库：王賢（CBDB 241026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241026&o=json)
