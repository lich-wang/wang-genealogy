---
schema: wang-person/v1
id: p_w3a1GFMuNLGG9tjSSVXjC4
status: active
merged_into: null
display_name: 王安性
cbdb_id: 239752
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D47FgutN32ZynH685P2Dqb
        subject_person_id: p_w3a1GFMuNLGG9tjSSVXjC4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安性，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239752）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_plsXGgh-cNpVUa3gSdzDGh
          claim_id: c_D47FgutN32ZynH685P2Dqb
          source_id: s_5CGDpS3bX8mvLPxMi9HBv4
          stance: supports
          locator: CBDB:239752
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5CGDpS3bX8mvLPxMi9HBv4
            source_type: api_record
            title: 中国历代人物传记资料库：王安性（CBDB 239752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239752&o=json
            external_identifier: CBDB:239752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EDxctsdrGnRHKeGnwtBLiZ
        subject_person_id: p_w3a1GFMuNLGG9tjSSVXjC4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安性
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zXXT4F9zh9NB6fHoGwEXv3
          claim_id: c_EDxctsdrGnRHKeGnwtBLiZ
          source_id: s_5CGDpS3bX8mvLPxMi9HBv4
          stance: supports
          locator: CBDB:239752
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_PoB_d20Lte0zCwx5_Ag9AJ
        subject_person_id: p_w3a1GFMuNLGG9tjSSVXjC4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ye9VLgV3pJbXBYdJ82vvQv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CkHthUY5hEAJWvglAfiK4Q
          claim_id: c_PoB_d20Lte0zCwx5_Ag9AJ
          source_id: s_3xLAig97UWbpTTVBBVEMck
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第五十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3xLAig97UWbpTTVBBVEMck
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 208053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208053&o=json
            external_identifier: CBDB:208053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ye9VLgV3pJbXBYdJ82vvQv
        status: active
        display_name: 王宣
        merged_into_person_id: null
  other: []
---

# 王安性

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王安性，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239752） | accepted |
| name.primary | 王安性 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ye9VLgV3pJbXBYdJ82vvQv | 王宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安性（CBDB 239752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239752&o=json)
- [中国历代人物传记资料库：王宣（CBDB 208053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208053&o=json)
