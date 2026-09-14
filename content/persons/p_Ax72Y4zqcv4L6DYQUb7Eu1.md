---
schema: wang-person/v1
id: p_Ax72Y4zqcv4L6DYQUb7Eu1
status: active
merged_into: null
display_name: 王久壽
cbdb_id: 266956
revision: 11
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cMGhRvywDCu1uUGb8MJVCV
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王久壽，明人物。弘治九年進士，籍贯臨海，曾任宗人府儀賓。（中国历代人物传记资料库 CBDB 266956）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Gorz7lcDQSi50V-CXSigaB
          claim_id: c_cMGhRvywDCu1uUGb8MJVCV
          source_id: s_7dQp2P8fLbfxicMWn9gZ66
          stance: supports
          locator: CBDB:266956
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7dQp2P8fLbfxicMWn9gZ66
            source_type: api_record
            title: 中国历代人物传记资料库：王久壽（CBDB 266956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266956&o=json
            external_identifier: CBDB:266956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Np6kvgKecBEL43eUkCRWB
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王久壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ehPsbcnfbssb85YEGnp8LG
          claim_id: c_1Np6kvgKecBEL43eUkCRWB
          source_id: s_7dQp2P8fLbfxicMWn9gZ66
          stance: supports
          locator: CBDB:266956
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ea0Na1NdvVvMraA0ZnWa2P
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_msZo5tFpgNTaJpxtvNXTse
          claim_id: c_ea0Na1NdvVvMraA0ZnWa2P
          source_id: s_7dQp2P8fLbfxicMWn9gZ66
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7dQp2P8fLbfxicMWn9gZ66
            source_type: api_record
            title: 中国历代人物传记资料库：王久壽（CBDB 266956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266956&o=json
            external_identifier: CBDB:266956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_fG2ZSSsFcXdaZWCtjXUkRA
        status: active
        display_name: 王朝卿
        merged_into_person_id: null
    - claim:
        id: c_iuBhu7LpEW0P2Pe_K-xalZ
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1BKfTJiBz51ebHCxW5AFPm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pLqbZ44xD2d-PWm3VYAFZV
          claim_id: c_iuBhu7LpEW0P2Pe_K-xalZ
          source_id: s_xoeR75NosPWOUARULJcnKt
          stance: supports
          locator: CBDB：兄弟 王朝卿（201090）之父／母 王久壽
          quotation: null
          interpretation_note: 由兄弟关系推断：王韶 与 王朝卿 为同胞（CBDB 记「兄」），王朝卿 之父／母即 王韶 之父／母。
          source:
            id: s_xoeR75NosPWOUARULJcnKt
            source_type: api_record
            title: 中国历代人物传记资料库：王韶（CBDB 266968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266968&o=json
            external_identifier: CBDB:266968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1BKfTJiBz51ebHCxW5AFPm
        status: active
        display_name: 王韶
        merged_into_person_id: null
    - claim:
        id: c_SGD1IgC5ZWnPMBwBZbIuLM
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_42gsojvkfoeFS6qHcH6ULC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F3UR4fjaDffjLMfN9y-sSe
          claim_id: c_SGD1IgC5ZWnPMBwBZbIuLM
          source_id: s_8l1dj5lNRnTR4sQGUi44Ja
          stance: supports
          locator: CBDB：兄弟 王朝卿（201090）之父／母 王久壽
          quotation: null
          interpretation_note: 由兄弟关系推断：王普 与 王朝卿 为同胞（CBDB 记「兄」），王朝卿 之父／母即 王普 之父／母。
          source:
            id: s_8l1dj5lNRnTR4sQGUi44Ja
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 266967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266967&o=json
            external_identifier: CBDB:266967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_42gsojvkfoeFS6qHcH6ULC
        status: active
        display_name: 王普
        merged_into_person_id: null
    - claim:
        id: c_3GTdXTdKAaFGkrZCNc91Y8
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C2sTveXs6BhE19m7kUNc2c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2KPgdpfJKqxOQKPJehtJnM
          claim_id: c_3GTdXTdKAaFGkrZCNc91Y8
          source_id: s_jlmQ3GK-ePhMR_shjHHbUf
          stance: supports
          locator: CBDB：兄弟 王朝卿（201090）之父／母 王久壽
          quotation: null
          interpretation_note: 由兄弟关系推断：王音 与 王朝卿 为同胞（CBDB 记「兄」），王朝卿 之父／母即 王音 之父／母。
          source:
            id: s_jlmQ3GK-ePhMR_shjHHbUf
            source_type: api_record
            title: 中国历代人物传记资料库：王音（CBDB 266964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266964&o=json
            external_identifier: CBDB:266964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C2sTveXs6BhE19m7kUNc2c
        status: active
        display_name: 王音
        merged_into_person_id: null
    - claim:
        id: c_idiS0vxJpIa_P_nWEVQw-X
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H3A3KMiqpJBDGt27XxvqdB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WDmbL-XbPv65KurriYE-UO
          claim_id: c_idiS0vxJpIa_P_nWEVQw-X
          source_id: s_Cxv9xygH5yZuBY67kyE-1j
          stance: supports
          locator: CBDB：兄弟 王朝卿（201090）之父／母 王久壽
          quotation: null
          interpretation_note: 由兄弟关系推断：王洵 与 王朝卿 为同胞（CBDB 记「兄」），王朝卿 之父／母即 王洵 之父／母。
          source:
            id: s_Cxv9xygH5yZuBY67kyE-1j
            source_type: api_record
            title: 中国历代人物传记资料库：王洵（CBDB 266962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266962&o=json
            external_identifier: CBDB:266962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H3A3KMiqpJBDGt27XxvqdB
        status: active
        display_name: 王洵
        merged_into_person_id: null
    - claim:
        id: c_P6aRr4NRnHexqaBqAow9kS
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MP2P4k57hDGCdXLg6gG8RF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FW83fkFJV140ClTPHQAcSE
          claim_id: c_P6aRr4NRnHexqaBqAow9kS
          source_id: s_f8HhIbzuJ8V_FTzy6jt3dS
          stance: supports
          locator: CBDB：兄弟 王朝卿（201090）之父／母 王久壽
          quotation: null
          interpretation_note: 由兄弟关系推断：王諧 与 王朝卿 为同胞（CBDB 记「兄」），王朝卿 之父／母即 王諧 之父／母。
          source:
            id: s_f8HhIbzuJ8V_FTzy6jt3dS
            source_type: api_record
            title: 中国历代人物传记资料库：王諧（CBDB 266963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266963&o=json
            external_identifier: CBDB:266963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MP2P4k57hDGCdXLg6gG8RF
        status: active
        display_name: 王諧
        merged_into_person_id: null
    - claim:
        id: c_r5WwvBXl9WsfGjWxzqNSi7
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SXMFkMTXno8UGBAM79cP6F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nBoJl_RtpaZvMZixmxTUSA
          claim_id: c_r5WwvBXl9WsfGjWxzqNSi7
          source_id: s_1DfWr9NSzIlkaj7oWxCj03
          stance: supports
          locator: CBDB：兄弟 王朝卿（201090）之父／母 王久壽
          quotation: null
          interpretation_note: 由兄弟关系推断：王暐 与 王朝卿 为同胞（CBDB 记「兄」），王朝卿 之父／母即 王暐 之父／母。
          source:
            id: s_1DfWr9NSzIlkaj7oWxCj03
            source_type: api_record
            title: 中国历代人物传记资料库：王暐（CBDB 266969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266969&o=json
            external_identifier: CBDB:266969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SXMFkMTXno8UGBAM79cP6F
        status: active
        display_name: 王暐
        merged_into_person_id: null
    - claim:
        id: c_EGSUjfLmjSsurd5qgEcR7p
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XtwgMf2W7VY3M5MUgLU5Mo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EQTGbOpuX8Z4SCeYgRYENJ
          claim_id: c_EGSUjfLmjSsurd5qgEcR7p
          source_id: s_Dnl7y7URLni-OsS87n7g0w
          stance: supports
          locator: CBDB：兄弟 王朝卿（201090）之父／母 王久壽
          quotation: null
          interpretation_note: 由兄弟关系推断：王縉 与 王朝卿 为同胞（CBDB 记「兄」），王朝卿 之父／母即 王縉 之父／母。
          source:
            id: s_Dnl7y7URLni-OsS87n7g0w
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 266966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266966&o=json
            external_identifier: CBDB:266966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XtwgMf2W7VY3M5MUgLU5Mo
        status: active
        display_name: 王縉
        merged_into_person_id: null
    - claim:
        id: c_d3vTI71xCMVcK0VB1C6rW6
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hNu3dxf53AXqHMNKTHYTAW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T-GXA7yKrdVjkGf4dE5V__
          claim_id: c_d3vTI71xCMVcK0VB1C6rW6
          source_id: s_uWp0l0BDO1BH4seF20MWpT
          stance: supports
          locator: CBDB：兄弟 王朝卿（201090）之父／母 王久壽
          quotation: null
          interpretation_note: 由兄弟关系推断：王昱 与 王朝卿 为同胞（CBDB 记「兄」），王朝卿 之父／母即 王昱 之父／母。
          source:
            id: s_uWp0l0BDO1BH4seF20MWpT
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 266965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266965&o=json
            external_identifier: CBDB:266965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hNu3dxf53AXqHMNKTHYTAW
        status: active
        display_name: 王昱
        merged_into_person_id: null
    - claim:
        id: c_CY3kr0pRefdkRHIr8Nz8QV
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rMsByWGo2P9HDb14KoWb8t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pyBaMKfa7GmaJGjeyxTtYt
          claim_id: c_CY3kr0pRefdkRHIr8Nz8QV
          source_id: s__H7J3IgRBXZY2Ri4l8yCHf
          stance: supports
          locator: CBDB：兄弟 王朝卿（201090）之父／母 王久壽
          quotation: null
          interpretation_note: 由兄弟关系推断：王元卿 与 王朝卿 为同胞（CBDB 记「弟」），王朝卿 之父／母即 王元卿 之父／母。
          source:
            id: s__H7J3IgRBXZY2Ri4l8yCHf
            source_type: api_record
            title: 中国历代人物传记资料库：王元卿（CBDB 266961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266961&o=json
            external_identifier: CBDB:266961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rMsByWGo2P9HDb14KoWb8t
        status: active
        display_name: 王元卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王久壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王久壽，明人物。弘治九年進士，籍贯臨海，曾任宗人府儀賓。（中国历代人物传记资料库 CBDB 266956） | accepted |
| name.primary | 王久壽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fG2ZSSsFcXdaZWCtjXUkRA | 王朝卿 | accepted |
| children | p_1BKfTJiBz51ebHCxW5AFPm | 王韶 | accepted |
| children | p_42gsojvkfoeFS6qHcH6ULC | 王普 | accepted |
| children | p_C2sTveXs6BhE19m7kUNc2c | 王音 | accepted |
| children | p_H3A3KMiqpJBDGt27XxvqdB | 王洵 | accepted |
| children | p_MP2P4k57hDGCdXLg6gG8RF | 王諧 | accepted |
| children | p_SXMFkMTXno8UGBAM79cP6F | 王暐 | accepted |
| children | p_XtwgMf2W7VY3M5MUgLU5Mo | 王縉 | accepted |
| children | p_hNu3dxf53AXqHMNKTHYTAW | 王昱 | accepted |
| children | p_rMsByWGo2P9HDb14KoWb8t | 王元卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 266966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266966&o=json)
- [中国历代人物传记资料库：王久壽（CBDB 266956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266956&o=json)
- [中国历代人物传记资料库：王普（CBDB 266967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266967&o=json)
- [中国历代人物传记资料库：王韶（CBDB 266968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266968&o=json)
- [中国历代人物传记资料库：王暐（CBDB 266969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266969&o=json)
- [中国历代人物传记资料库：王諧（CBDB 266963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266963&o=json)
- [中国历代人物传记资料库：王洵（CBDB 266962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266962&o=json)
- [中国历代人物传记资料库：王音（CBDB 266964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266964&o=json)
- [中国历代人物传记资料库：王昱（CBDB 266965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266965&o=json)
- [中国历代人物传记资料库：王元卿（CBDB 266961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266961&o=json)
