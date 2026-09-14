---
schema: wang-person/v1
id: p_HivKtGCAjmdTAMqiQy41Yd
status: active
merged_into: null
display_name: 王和
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q5wqFpVqm3CwSjvMC3iXPB
        subject_person_id: p_HivKtGCAjmdTAMqiQy41Yd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fQtK9iFQMMA36AbnEL2jR1
          claim_id: c_q5wqFpVqm3CwSjvMC3iXPB
          source_id: s_t8RyUjx3X23JJtCZLENKsH
          stance: supports
          locator: CBDB:265026
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265026）
          source: &a1
            id: s_t8RyUjx3X23JJtCZLENKsH
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 265026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265026&o=json
            external_identifier: CBDB:265026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.673Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gD6ii7MaMgzUy8qeoML569
        subject_person_id: p_HivKtGCAjmdTAMqiQy41Yd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和，明人物。景泰五年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 265026）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8AdDPBE5pjKBVXqt3jeXRH
          claim_id: c_gD6ii7MaMgzUy8qeoML569
          source_id: s_t8RyUjx3X23JJtCZLENKsH
          stance: supports
          locator: CBDB:265026
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_72UAsHyvwgikd_dDJoLS7J
        subject_person_id: p_HivKtGCAjmdTAMqiQy41Yd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UrJznQmZF7mY3ST75yuPGB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_68Wv--3rIlRArDRLkwKWaF
          claim_id: c_72UAsHyvwgikd_dDJoLS7J
          source_id: s_t8RyUjx3X23JJtCZLENKsH
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UrJznQmZF7mY3ST75yuPGB
        status: active
        display_name: 王豫
        merged_into_person_id: null
    - claim:
        id: c_cP4F26mY-t3hmNMdP3P80Z
        subject_person_id: p_HivKtGCAjmdTAMqiQy41Yd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5MhG3cgiQ2onDHQzWyeYMH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-cE77pVLIvdOS0Kz6iVAup
          claim_id: c_cP4F26mY-t3hmNMdP3P80Z
          source_id: s_PXur5jCU36Is24o0-UVYun
          stance: supports
          locator: CBDB：兄弟 王豫（126827）之父／母 王和
          quotation: null
          interpretation_note: 由兄弟关系推断：王讓 与 王豫 为同胞（CBDB 记「弟」），王豫 之父／母即 王讓 之父／母。
          source:
            id: s_PXur5jCU36Is24o0-UVYun
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 265070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265070&o=json
            external_identifier: CBDB:265070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5MhG3cgiQ2onDHQzWyeYMH
        status: active
        display_name: 王讓
        merged_into_person_id: null
    - claim:
        id: c_hdgZoYG3YRUfzX5zpXfznk
        subject_person_id: p_HivKtGCAjmdTAMqiQy41Yd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HGx9jy5KVU1o3ShKgNEJ2j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F39Z2dIcVcfwIn3EBX_Z28
          claim_id: c_hdgZoYG3YRUfzX5zpXfznk
          source_id: s_CJzSK-1tSxKMwL6pff31L7
          stance: supports
          locator: CBDB：兄弟 王豫（126827）之父／母 王和
          quotation: null
          interpretation_note: 由兄弟关系推断：王觀 与 王豫 为同胞（CBDB 记「弟」），王豫 之父／母即 王觀 之父／母。
          source:
            id: s_CJzSK-1tSxKMwL6pff31L7
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 265059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265059&o=json
            external_identifier: CBDB:265059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HGx9jy5KVU1o3ShKgNEJ2j
        status: active
        display_name: 王觀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王和 | accepted |
| bio.summary | 王和，明人物。景泰五年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 265026） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UrJznQmZF7mY3ST75yuPGB | 王豫 | accepted |
| children | p_5MhG3cgiQ2onDHQzWyeYMH | 王讓 | accepted |
| children | p_HGx9jy5KVU1o3ShKgNEJ2j | 王觀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 265059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265059&o=json)
- [中国历代人物传记资料库：王和（CBDB 265026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265026&o=json)
- [中国历代人物传记资料库：王讓（CBDB 265070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265070&o=json)
