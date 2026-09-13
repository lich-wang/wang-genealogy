---
schema: wang-person/v1
id: p_EPVRDWZKonkLB1kZwcARVu
status: active
merged_into: null
display_name: 王顯德
cbdb_id: 241171
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3qEKfupCGC9AD1HoSeEEoS
        subject_person_id: p_EPVRDWZKonkLB1kZwcARVu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯德，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 241171）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_H0BMd1TJ14KW729m7uTNVa
          claim_id: c_3qEKfupCGC9AD1HoSeEEoS
          source_id: s_9tqTyR7weWWfE7jWNNXqDF
          stance: supports
          locator: CBDB:241171
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9tqTyR7weWWfE7jWNNXqDF
            source_type: api_record
            title: 中国历代人物传记资料库：王顯德（CBDB 241171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241171&o=json
            external_identifier: CBDB:241171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FjJQASvjjSri3JWyEtSbkR
        subject_person_id: p_EPVRDWZKonkLB1kZwcARVu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Cf7z2z1vpR1aBbuAuiy3Du
          claim_id: c_FjJQASvjjSri3JWyEtSbkR
          source_id: s_9tqTyR7weWWfE7jWNNXqDF
          stance: supports
          locator: CBDB:241171
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
        id: c_1zHiNnAtURpDwLysWfsXc-
        subject_person_id: p_EPVRDWZKonkLB1kZwcARVu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_erzil1uLF9uNRmeo-x9JVH
          claim_id: c_1zHiNnAtURpDwLysWfsXc-
          source_id: s_WNKpdkk3yi4awpd41NnU58
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第六十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WNKpdkk3yi4awpd41NnU58
            source_type: api_record
            title: 中国历代人物传记资料库：王玭（CBDB 208155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208155&o=json
            external_identifier: CBDB:208155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GZ9FC3xVw4crRVvp7UDQTX
        status: active
        display_name: 王玭
        merged_into_person_id: null
  other: []
---

# 王顯德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王顯德，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 241171） | accepted |
| name.primary | 王顯德 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_GZ9FC3xVw4crRVvp7UDQTX | 王玭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玭（CBDB 208155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208155&o=json)
- [中国历代人物传记资料库：王顯德（CBDB 241171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241171&o=json)
