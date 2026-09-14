---
schema: wang-person/v1
id: p_oJFhqGsSYkYTeGZ7iNnAnA
status: active
merged_into: null
display_name: 王芳
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XbDjMqTY7h3PoHr5Y41LbA
        subject_person_id: p_oJFhqGsSYkYTeGZ7iNnAnA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_STFt2gJU3kxHkHTNNRWq3x
          claim_id: c_XbDjMqTY7h3PoHr5Y41LbA
          source_id: s_scMdA5rQcxqY8W53jNHSqv
          stance: supports
          locator: CBDB:208133
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208133）
          source: &a1
            id: s_scMdA5rQcxqY8W53jNHSqv
            source_type: api_record
            title: 中国历代人物传记资料库：王芳（CBDB 208133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208133&o=json
            external_identifier: CBDB:208133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Hfs85bfJRHBrKASSTtU6zt
        subject_person_id: p_oJFhqGsSYkYTeGZ7iNnAnA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1406年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hhpmEP56apJK4KeHDPR9q8
          claim_id: c_Hfs85bfJRHBrKASSTtU6zt
          source_id: s_scMdA5rQcxqY8W53jNHSqv
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
        id: c_PhPgZf4Tw5iSYGySctF8gc
        subject_person_id: p_oJFhqGsSYkYTeGZ7iNnAnA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳（生于1406年），明人物。正統十三年進士，籍贯金谿，入仕進士。（中国历代人物传记资料库 CBDB 208133）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ao95Y3QP1Ulc-173FgdRV9
          claim_id: c_PhPgZf4Tw5iSYGySctF8gc
          source_id: s_scMdA5rQcxqY8W53jNHSqv
          stance: supports
          locator: CBDB:208133
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iCr6jS2--ivxem38DBBJ_l
        subject_person_id: p_rraFGLTYB58U7anuduBTPf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oJFhqGsSYkYTeGZ7iNnAnA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IkcadJ-fXF7TEYFNAJtjwe
          claim_id: c_iCr6jS2--ivxem38DBBJ_l
          source_id: s_scMdA5rQcxqY8W53jNHSqv
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第三十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rraFGLTYB58U7anuduBTPf
        status: active
        display_name: 王宗睿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vFNy8HfdbLtb731aRPrkgL
        subject_person_id: p_oJFhqGsSYkYTeGZ7iNnAnA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wA8ZNFrQ35p5oJR5sFnVA7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YU0WLw_1oO4tJw8dDXMUr4
          claim_id: c_vFNy8HfdbLtb731aRPrkgL
          source_id: s_nrQpkLcc3fgl0qIHaHRLQm
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第三十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nrQpkLcc3fgl0qIHaHRLQm
            source_type: api_record
            title: 中国历代人物传记资料库：吳氏(王芳妻)（CBDB 240894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240894&o=json
            external_identifier: CBDB:240894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wA8ZNFrQ35p5oJR5sFnVA7
        status: active
        display_name: 吳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_2elgO2OZzOTePVnJ5cvlGc
        subject_person_id: p_fDRwd8SnHCskaL1yGeEmNf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oJFhqGsSYkYTeGZ7iNnAnA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QS9Hb34SiFDsxXYEW3a2sa
          claim_id: c_2elgO2OZzOTePVnJ5cvlGc
          source_id: s_scMdA5rQcxqY8W53jNHSqv
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第三十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fDRwd8SnHCskaL1yGeEmNf
        status: active
        display_name: 王謙和
        merged_into_person_id: null
    - claim:
        id: c_QaX2DYdxZD7vuVPHy4Jtas
        subject_person_id: p_iVE9xBcbfFQ3RnRnST9GJA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oJFhqGsSYkYTeGZ7iNnAnA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vf30ZhtSljNM-6rQSX5Mk_
          claim_id: c_QaX2DYdxZD7vuVPHy4Jtas
          source_id: s_scMdA5rQcxqY8W53jNHSqv
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第三十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iVE9xBcbfFQ3RnRnST9GJA
        status: active
        display_name: 王仕允
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_439gObr1KswZD3DVLkaehV
        subject_person_id: p_JxHXaVu4pEEMwDNPDgBMZB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oJFhqGsSYkYTeGZ7iNnAnA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l99B0DtQcQK2vJs8ZecBVJ
          claim_id: c_439gObr1KswZD3DVLkaehV
          source_id: s_1Fj9hOrvmUcNt2yPKQaGKR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208133 王芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1Fj9hOrvmUcNt2yPKQaGKR
            source_type: api_record
            title: 中国历代人物传记资料库：王立（CBDB 240896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240896&o=json
            external_identifier: CBDB:240896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JxHXaVu4pEEMwDNPDgBMZB
        status: active
        display_name: 王立
        merged_into_person_id: null
    - claim:
        id: c_bNEp_60bR9H_XBj2iB75oN
        subject_person_id: p_ksG3Fz76mqPbvBKEnoXz5Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oJFhqGsSYkYTeGZ7iNnAnA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LQmYUotF5Rvn_9md4fJcNe
          claim_id: c_bNEp_60bR9H_XBj2iB75oN
          source_id: s_r0oaWHZx3oNdbP6nQvTZbz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208133 王芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r0oaWHZx3oNdbP6nQvTZbz
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 240895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240895&o=json
            external_identifier: CBDB:240895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ksG3Fz76mqPbvBKEnoXz5Z
        status: active
        display_name: 王仁
        merged_into_person_id: null
---

# 王芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芳 | accepted |
| birth.date | 1406年 | accepted |
| bio.summary | 王芳（生于1406年），明人物。正統十三年進士，籍贯金谿，入仕進士。（中国历代人物传记资料库 CBDB 208133） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rraFGLTYB58U7anuduBTPf | 王宗睿 | accepted |
| spouses | p_wA8ZNFrQ35p5oJR5sFnVA7 | 吳氏 | accepted |
| ancestors | p_fDRwd8SnHCskaL1yGeEmNf | 王謙和 | accepted |
| ancestors | p_iVE9xBcbfFQ3RnRnST9GJA | 王仕允 | accepted |
| other | p_JxHXaVu4pEEMwDNPDgBMZB | 王立 | accepted |
| other | p_ksG3Fz76mqPbvBKEnoXz5Z | 王仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芳（CBDB 208133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208133&o=json)
- [中国历代人物传记资料库：王立（CBDB 240896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240896&o=json)
- [中国历代人物传记资料库：王仁（CBDB 240895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240895&o=json)
- [中国历代人物传记资料库：吳氏(王芳妻)（CBDB 240894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240894&o=json)
