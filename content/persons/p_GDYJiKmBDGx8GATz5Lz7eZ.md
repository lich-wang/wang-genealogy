---
schema: wang-person/v1
id: p_GDYJiKmBDGx8GATz5Lz7eZ
status: active
merged_into: null
display_name: 王楠
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QShDB5zaMJi1GruWfHuPNi
        subject_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r7awK457ScsHQVs4YWgBLM
          claim_id: c_QShDB5zaMJi1GruWfHuPNi
          source_id: s_t2rq243GEoJnhL6cAcAk2T
          stance: supports
          locator: CBDB:203063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203063）
          source: &a1
            id: s_t2rq243GEoJnhL6cAcAk2T
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 203063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203063&o=json
            external_identifier: CBDB:203063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Nn3tKyZ9hL4uP9DSFeuX8Z
        subject_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1493年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DA1ZWXc5hVAAV18fzLptzV
          claim_id: c_Nn3tKyZ9hL4uP9DSFeuX8Z
          source_id: s_t2rq243GEoJnhL6cAcAk2T
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
        id: c_yHJB3122N61A2b3hG1yTJ9
        subject_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楠（生于1493年），明人物。明清進士進士，籍贯會稽，入仕進士。（中国历代人物传记资料库 CBDB 203063）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T003fYe-q1UvJppVspZCgX
          claim_id: c_yHJB3122N61A2b3hG1yTJ9
          source_id: s_t2rq243GEoJnhL6cAcAk2T
          stance: supports
          locator: CBDB:203063
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qzG60H4eOnvWP3Z2ZVJ9P-
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CS91qL343IoMq49jAPM25V
          claim_id: c_qzG60H4eOnvWP3Z2ZVJ9P-
          source_id: s_DpzAwGANuGaaryEQnDijHj
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第五十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DpzAwGANuGaaryEQnDijHj
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 283695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283695&o=json
            external_identifier: CBDB:283695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dNbcibvajSXBYgSvME8CE6
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Y63OTr2lFfK6toKxXAiU7g
        subject_person_id: p_jPTs2aJkrLkZiHjYSYA58S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g5f6JW9xYftdFzXfLCHcUl
          claim_id: c_Y63OTr2lFfK6toKxXAiU7g
          source_id: s_3nx7D8qK1jFr1GVzDUxr2A
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第五十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3nx7D8qK1jFr1GVzDUxr2A
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 283694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283694&o=json
            external_identifier: CBDB:283694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jPTs2aJkrLkZiHjYSYA58S
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_tuswVNijmdWTyz97z4815X
        subject_person_id: p_QGqDLq88YKPedgWNSWnb4x
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v6_cyAl31NLQuv-ZTIcDDY
          claim_id: c_tuswVNijmdWTyz97z4815X
          source_id: s_WxEAYHEcui5ogeURTMBwGy
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第五十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WxEAYHEcui5ogeURTMBwGy
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 283693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283693&o=json
            external_identifier: CBDB:283693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QGqDLq88YKPedgWNSWnb4x
        status: active
        display_name: 王忠
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_orbMDw1S6_w-uknIsDdOik
        subject_person_id: p_5z7BLDBnQLUq2Bc4drf2K2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hbTmekv1789EX7poORM3QL
          claim_id: c_orbMDw1S6_w-uknIsDdOik
          source_id: s_L792pN15ISSF5XABbq0OR3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203063 王楠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_L792pN15ISSF5XABbq0OR3
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 283698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283698&o=json
            external_identifier: CBDB:283698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5z7BLDBnQLUq2Bc4drf2K2
        status: active
        display_name: 王桐
        merged_into_person_id: null
    - claim:
        id: c_PfNQNNWsHIk5S7zAXKY44J
        subject_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KyBTH9FR7ui82xq3PNJs3r
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oedLQgJgskq7OgXxLfRHlL
          claim_id: c_PfNQNNWsHIk5S7zAXKY44J
          source_id: s_QHMIui8akIXQwjEP_l6nMT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203063 王楠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QHMIui8akIXQwjEP_l6nMT
            source_type: api_record
            title: 中国历代人物传记资料库：王椆（CBDB 283702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283702&o=json
            external_identifier: CBDB:283702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KyBTH9FR7ui82xq3PNJs3r
        status: active
        display_name: 王椆
        merged_into_person_id: null
    - claim:
        id: c_ROwRKHXxPWmFtqhXkNRgNB
        subject_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aREPdXQ8PmYLsBwtyUdHja
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FoDC6vW8BICOrK9lB1M86E
          claim_id: c_ROwRKHXxPWmFtqhXkNRgNB
          source_id: s_sGKtCwS0WOZMTMcmIiu2al
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203063 王楠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sGKtCwS0WOZMTMcmIiu2al
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 283704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283704&o=json
            external_identifier: CBDB:283704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aREPdXQ8PmYLsBwtyUdHja
        status: active
        display_name: 王槐
        merged_into_person_id: null
    - claim:
        id: c_A6lZtp5NAtlJavxrtMg8f2
        subject_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bekqpXD2bbq8cdPpgMgCDC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rbtM6YA0psaHUzmeY6VGvx
          claim_id: c_A6lZtp5NAtlJavxrtMg8f2
          source_id: s_knAdtfDuXJ_DJuZVQr2jfm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203063 王楠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_knAdtfDuXJ_DJuZVQr2jfm
            source_type: api_record
            title: 中国历代人物传记资料库：王栩（CBDB 283703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283703&o=json
            external_identifier: CBDB:283703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bekqpXD2bbq8cdPpgMgCDC
        status: active
        display_name: 王栩
        merged_into_person_id: null
    - claim:
        id: c_f6oyrUfRH5G6HNe3z7QFGz
        subject_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_i1EJ1VcpHtzDWYAhxWgCGc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cBLoR5tpqY1sM1n1polM2V
          claim_id: c_f6oyrUfRH5G6HNe3z7QFGz
          source_id: s_5YlhqM15b9GHtU6kYj59-h
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203063 王楠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5YlhqM15b9GHtU6kYj59-h
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 283701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283701&o=json
            external_identifier: CBDB:283701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i1EJ1VcpHtzDWYAhxWgCGc
        status: active
        display_name: 王棟
        merged_into_person_id: null
---

# 王楠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楠 | accepted |
| birth.date | 1493年 | accepted |
| bio.summary | 王楠（生于1493年），明人物。明清進士進士，籍贯會稽，入仕進士。（中国历代人物传记资料库 CBDB 203063） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dNbcibvajSXBYgSvME8CE6 | 王玉 | accepted |
| ancestors | p_jPTs2aJkrLkZiHjYSYA58S | 王鑑 | accepted |
| ancestors | p_QGqDLq88YKPedgWNSWnb4x | 王忠 | accepted |
| other | p_5z7BLDBnQLUq2Bc4drf2K2 | 王桐 | accepted |
| other | p_KyBTH9FR7ui82xq3PNJs3r | 王椆 | accepted |
| other | p_aREPdXQ8PmYLsBwtyUdHja | 王槐 | accepted |
| other | p_bekqpXD2bbq8cdPpgMgCDC | 王栩 | accepted |
| other | p_i1EJ1VcpHtzDWYAhxWgCGc | 王棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王椆（CBDB 283702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283702&o=json)
- [中国历代人物传记资料库：王棟（CBDB 283701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283701&o=json)
- [中国历代人物传记资料库：王槐（CBDB 283704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283704&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 283694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283694&o=json)
- [中国历代人物传记资料库：王楠（CBDB 203063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203063&o=json)
- [中国历代人物传记资料库：王桐（CBDB 283698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283698&o=json)
- [中国历代人物传记资料库：王栩（CBDB 283703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283703&o=json)
- [中国历代人物传记资料库：王玉（CBDB 283695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283695&o=json)
- [中国历代人物传记资料库：王忠（CBDB 283693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283693&o=json)
