---
schema: wang-person/v1
id: p_m4LMsDs1QJMNb7B4hFNvPT
status: active
merged_into: null
display_name: 王壡
cbdb_id: 136211
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mLBXHu1uoHwWTXVEUar8rB
        subject_person_id: p_m4LMsDs1QJMNb7B4hFNvPT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壡（生于1216年），史料所见人物。本项目依据《中国历代人物传记资料库：王壡（CBDB 136211）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_1UXcECqbUhQ8JV9rjXC1q1
          claim_id: c_mLBXHu1uoHwWTXVEUar8rB
          source_id: s_KCWVPJP1M6V4BNiYsMBEik
          stance: supports
          locator: CBDB:136211
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KCWVPJP1M6V4BNiYsMBEik
            source_type: api_record
            title: 中国历代人物传记资料库：王壡（CBDB 136211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136211&o=json
            external_identifier: CBDB:136211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nLV4P6kKY8L7JrX4Q4PC7B
        subject_person_id: p_m4LMsDs1QJMNb7B4hFNvPT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1216年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1216-01-01
            latest: 1216-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YwxgaS4cg3JLAQQmnYY1Ej
          claim_id: c_nLV4P6kKY8L7JrX4Q4PC7B
          source_id: s_KCWVPJP1M6V4BNiYsMBEik
          stance: supports
          locator: CBDB:136211
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1216
          source:
            id: s_KCWVPJP1M6V4BNiYsMBEik
            source_type: api_record
            title: 中国历代人物传记资料库：王壡（CBDB 136211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136211&o=json
            external_identifier: CBDB:136211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PFsP2foRgxf4N7gNRC5NQ9
        subject_person_id: p_m4LMsDs1QJMNb7B4hFNvPT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_z1EXNxkDma4vXPLREZCZMb
          claim_id: c_PFsP2foRgxf4N7gNRC5NQ9
          source_id: s_KCWVPJP1M6V4BNiYsMBEik
          stance: supports
          locator: CBDB:136211
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1216
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tnKIHKu_cT6_Bci30SxcaP
        subject_person_id: p_1BfrVwNo6KMxGngrdtMrQC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m4LMsDs1QJMNb7B4hFNvPT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZRZM6NAflNxtx4Yn6Xu6X
          claim_id: c_tnKIHKu_cT6_Bci30SxcaP
          source_id: s_gqmwEU56k6tFMccUQF4t4V
          stance: supports
          locator: 寶祐登科錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；端点按 CBDB ID 唯一映射。
          source:
            id: s_gqmwEU56k6tFMccUQF4t4V
            source_type: api_record
            title: 中国历代人物传记资料库：王煇（CBDB 136338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136338&o=json
            external_identifier: CBDB:136338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1BfrVwNo6KMxGngrdtMrQC
        status: active
        display_name: 王煇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_69BxYx5T4CsIin9ZlSnWhD
        subject_person_id: p_iu7y5uzAHNAHpBHrqhDhMe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_m4LMsDs1QJMNb7B4hFNvPT
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qCV5y9oW8E_BMpgcmxwjaR
          claim_id: c_69BxYx5T4CsIin9ZlSnWhD
          source_id: s_t21aghDgnr42r85ZMoMVhx
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_t21aghDgnr42r85ZMoMVhx
            source_type: api_record
            title: 中国历代人物传记资料库：王驥（CBDB 137792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137792&o=json
            external_identifier: CBDB:137792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iu7y5uzAHNAHpBHrqhDhMe
        status: active
        display_name: 王驥
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王壡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王壡（生于1216年），史料所见人物。本项目依据《中国历代人物传记资料库：王壡（CBDB 136211）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1216年 | accepted |
| name.primary | 王壡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1BfrVwNo6KMxGngrdtMrQC | 王煇 | accepted |
| ancestors | p_iu7y5uzAHNAHpBHrqhDhMe | 王驥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煇（CBDB 136338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136338&o=json)
- [中国历代人物传记资料库：王驥（CBDB 137792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137792&o=json)
- [中国历代人物传记资料库：王壡（CBDB 136211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136211&o=json)
