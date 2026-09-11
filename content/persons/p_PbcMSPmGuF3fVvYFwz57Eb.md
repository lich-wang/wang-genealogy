---
schema: wang-person/v1
id: p_PbcMSPmGuF3fVvYFwz57Eb
status: active
merged_into: null
display_name: 王京
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AEYGJqnMQw1zGC4NM6KH8X
        subject_person_id: p_PbcMSPmGuF3fVvYFwz57Eb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NysNNvEAi6V8DXcVocq1Vy
          claim_id: c_AEYGJqnMQw1zGC4NM6KH8X
          source_id: s_gZTFcD9fNkmK38N3r5jBD1
          stance: supports
          locator: CBDB:269144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269144）
          source: &a1
            id: s_gZTFcD9fNkmK38N3r5jBD1
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 269144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269144&o=json
            external_identifier: CBDB:269144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.805Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3uTNYJ9p5PP8n4JBGo6kGw
        subject_person_id: p_PbcMSPmGuF3fVvYFwz57Eb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yZ6h5HBsCB9dLXpCnnL6mM
          claim_id: c_3uTNYJ9p5PP8n4JBGo6kGw
          source_id: s_gZTFcD9fNkmK38N3r5jBD1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_X_1b8Pkup6keMgPubje5XF
        subject_person_id: p_PbcMSPmGuF3fVvYFwz57Eb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w2z816UY6mM4xzeNHAgB83
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SgIJ9CMT2rvXqhTUUhZqg4
          claim_id: c_X_1b8Pkup6keMgPubje5XF
          source_id: s_gZTFcD9fNkmK38N3r5jBD1
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w2z816UY6mM4xzeNHAgB83
        status: active
        display_name: 王渙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王京 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_w2z816UY6mM4xzeNHAgB83 | 王渙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王京（CBDB 269144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269144&o=json)
