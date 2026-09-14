---
schema: wang-person/v1
id: p_3NjU7eZvopD3jSxgGAoTdh
status: active
merged_into: null
display_name: 王惟善
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CssVb3NvzikX79QYhg3WzY
        subject_person_id: p_3NjU7eZvopD3jSxgGAoTdh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f2381ZYdRspy2M62EqXiQL
          claim_id: c_CssVb3NvzikX79QYhg3WzY
          source_id: s_BAV4Wu8T2JXpbD7Zqsk4cY
          stance: supports
          locator: CBDB:279786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279786）
          source: &a1
            id: s_BAV4Wu8T2JXpbD7Zqsk4cY
            source_type: api_record
            title: 中国历代人物传记资料库：王惟善（CBDB 279786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279786&o=json
            external_identifier: CBDB:279786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KDj4nyjL2gr8jbD6EAHcFi
        subject_person_id: p_3NjU7eZvopD3jSxgGAoTdh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟善，明人物。景泰五年進士，籍贯三河。（中国历代人物传记资料库 CBDB 279786）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dlFufvZx-ege5Htwop8yCL
          claim_id: c_KDj4nyjL2gr8jbD6EAHcFi
          source_id: s_BAV4Wu8T2JXpbD7Zqsk4cY
          stance: supports
          locator: CBDB:279786
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_k926WZfXv2W86ocouaItMH
        subject_person_id: p_3NjU7eZvopD3jSxgGAoTdh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dQ1sDfXNogRpbAJzcsg5My
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UsNCRojINFg89OJ2bsYxm9
          claim_id: c_k926WZfXv2W86ocouaItMH
          source_id: s_BAV4Wu8T2JXpbD7Zqsk4cY
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百九十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dQ1sDfXNogRpbAJzcsg5My
        status: active
        display_name: 王聰
        merged_into_person_id: null
    - claim:
        id: c_Vv9Svx9I1NboMW8y8oRqft
        subject_person_id: p_3NjU7eZvopD3jSxgGAoTdh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QzsNwCxppT6oan4Wpvxqi2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0J9gLMVh9LukzZd6SZ4BB5
          claim_id: c_Vv9Svx9I1NboMW8y8oRqft
          source_id: s_6VvA9pxa34XwKP8MrHudKk
          stance: supports
          locator: CBDB：兄弟 王聰（198493）之父／母 王惟善
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王聰 为同胞（CBDB 记「兄」），王聰 之父／母即 王傑 之父／母。
          source:
            id: s_6VvA9pxa34XwKP8MrHudKk
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 279830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279830&o=json
            external_identifier: CBDB:279830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QzsNwCxppT6oan4Wpvxqi2
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_0JgWTV3KI_miNBDEagF7Nb
        subject_person_id: p_3NjU7eZvopD3jSxgGAoTdh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cApstQaJnLxBvKr4GS1pC9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h8QudNYLSyafGstg-7SPn9
          claim_id: c_0JgWTV3KI_miNBDEagF7Nb
          source_id: s_HFMVXRRqEsriiRsrUtQp3G
          stance: supports
          locator: CBDB：兄弟 王聰（198493）之父／母 王惟善
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑑 与 王聰 为同胞（CBDB 记「兄」），王聰 之父／母即 王鑑 之父／母。
          source:
            id: s_HFMVXRRqEsriiRsrUtQp3G
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 279819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279819&o=json
            external_identifier: CBDB:279819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cApstQaJnLxBvKr4GS1pC9
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟善 | accepted |
| bio.summary | 王惟善，明人物。景泰五年進士，籍贯三河。（中国历代人物传记资料库 CBDB 279786） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dQ1sDfXNogRpbAJzcsg5My | 王聰 | accepted |
| children | p_QzsNwCxppT6oan4Wpvxqi2 | 王傑 | accepted |
| children | p_cApstQaJnLxBvKr4GS1pC9 | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 279819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279819&o=json)
- [中国历代人物传记资料库：王傑（CBDB 279830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279830&o=json)
- [中国历代人物传记资料库：王惟善（CBDB 279786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279786&o=json)
