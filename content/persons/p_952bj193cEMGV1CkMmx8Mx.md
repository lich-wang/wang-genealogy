---
schema: wang-person/v1
id: p_952bj193cEMGV1CkMmx8Mx
status: active
merged_into: null
display_name: 王應秋
cbdb_id: 212301
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rcpo92hesLsnyUJRgwQ58N
        subject_person_id: p_952bj193cEMGV1CkMmx8Mx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應秋，明人物。萬曆二年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 212301）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_CsO2LAmezcx_jU_CDwRg05
          claim_id: c_rcpo92hesLsnyUJRgwQ58N
          source_id: s_py7WqDJAmUgCk7Ta8PDVWL
          stance: supports
          locator: CBDB:212301
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_py7WqDJAmUgCk7Ta8PDVWL
            source_type: api_record
            title: 中国历代人物传记资料库：王應秋（CBDB 212301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212301&o=json
            external_identifier: CBDB:212301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1iSGGpQ6sUDWfRQPj4ysmH
        subject_person_id: p_952bj193cEMGV1CkMmx8Mx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應秋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SddWKVXZsZTj6foDGb8gXq
          claim_id: c_1iSGGpQ6sUDWfRQPj4ysmH
          source_id: s_py7WqDJAmUgCk7Ta8PDVWL
          stance: supports
          locator: CBDB:212301
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7C9hPGN_6IPXrbaGSprsNG
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_952bj193cEMGV1CkMmx8Mx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iLoYIqzlEut3LProBaROkj
          claim_id: c_7C9hPGN_6IPXrbaGSprsNG
          source_id: s_RvcKLZ_G0D2df20ohfoz58
          stance: supports
          locator: CBDB：兄弟 王應選（206025）之父／母 王亮采
          quotation: null
          interpretation_note: 由兄弟关系推断：王應秋 与 王應選 为同胞（CBDB 记「弟」），王應選 之父／母即 王應秋 之父／母。
          source:
            id: s_RvcKLZ_G0D2df20ohfoz58
            source_type: api_record
            title: 中国历代人物传记资料库：王應秋（CBDB 212301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212301&o=json
            external_identifier: CBDB:212301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ihrtmmYxDE76Umzs4UE6Cs
        status: active
        display_name: 王亮采
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_G3xgZg4q9VnmzGMTv5ngfD
        subject_person_id: p_952bj193cEMGV1CkMmx8Mx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Lmqxa64AJLI244PlrPUVR
          claim_id: c_G3xgZg4q9VnmzGMTv5ngfD
          source_id: s_RvcKLZ_G0D2df20ohfoz58
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206025 王應選）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RvcKLZ_G0D2df20ohfoz58
            source_type: api_record
            title: 中国历代人物传记资料库：王應秋（CBDB 212301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212301&o=json
            external_identifier: CBDB:212301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DVj3x7bTLNfdzZiuwDwTNz
        status: active
        display_name: 王應選
        merged_into_person_id: null
---

# 王應秋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應秋，明人物。萬曆二年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 212301） | accepted |
| name.primary | 王應秋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ihrtmmYxDE76Umzs4UE6Cs | 王亮采 | accepted |
| other | p_DVj3x7bTLNfdzZiuwDwTNz | 王應選 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應秋（CBDB 212301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212301&o=json)
