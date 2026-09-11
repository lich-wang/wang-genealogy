---
schema: wang-person/v1
id: p_5v6Xq1AA1UE4c7bcH4r8Te
status: active
merged_into: null
display_name: 王卿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GJ4B5Y7G5W92qs7CKfyP8u
        subject_person_id: p_5v6Xq1AA1UE4c7bcH4r8Te
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eyuDSAu1Ur7eVzryFVG9WN
          claim_id: c_GJ4B5Y7G5W92qs7CKfyP8u
          source_id: s_Er9XcTRxBwP6AxNGovEHMA
          stance: supports
          locator: CBDB:214224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214224）
          source: &a1
            id: s_Er9XcTRxBwP6AxNGovEHMA
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 214224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214224&o=json
            external_identifier: CBDB:214224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TuHQJAH1t3jKqw6yHj4NQA
        subject_person_id: p_5v6Xq1AA1UE4c7bcH4r8Te
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
        - id: cs_7P2Bz1LwrRwdyZkEuRSE89
          claim_id: c_TuHQJAH1t3jKqw6yHj4NQA
          source_id: s_Er9XcTRxBwP6AxNGovEHMA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_5GQUp6JPhDuckMqCGRrQ-w
        subject_person_id: p_5v6Xq1AA1UE4c7bcH4r8Te
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gQ7de4k3fPsZaTDKaE81D5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fVgmazkbg7Y2UaLaLrmf-B
          claim_id: c_5GQUp6JPhDuckMqCGRrQ-w
          source_id: s_Er9XcTRxBwP6AxNGovEHMA
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百零五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gQ7de4k3fPsZaTDKaE81D5
        status: active
        display_name: 王三宅
        merged_into_person_id: null
  other: []
---

# 王卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卿 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_gQ7de4k3fPsZaTDKaE81D5 | 王三宅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王卿（CBDB 214224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214224&o=json)
