---
schema: wang-person/v1
id: p_BzRS9JFfmbPcLsHDaoLQcY
status: active
merged_into: null
display_name: 王玶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sHFzydFGoTKgC1MopRGyJa
        subject_person_id: p_BzRS9JFfmbPcLsHDaoLQcY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SumT9gQvwGJRKj1hf7c8D2
          claim_id: c_sHFzydFGoTKgC1MopRGyJa
          source_id: s_A3WsLP9uN76BDjX2s7xc3W
          stance: supports
          locator: CBDB:309422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309422）
          source: &a1
            id: s_A3WsLP9uN76BDjX2s7xc3W
            source_type: api_record
            title: 中国历代人物传记资料库：王玶（CBDB 309422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309422&o=json
            external_identifier: CBDB:309422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aK8NmNUtPZgN51nLqQwP2t
        subject_person_id: p_BzRS9JFfmbPcLsHDaoLQcY
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
        - id: cs_tW3bpWfg645EpQ4GA7vkhv
          claim_id: c_aK8NmNUtPZgN51nLqQwP2t
          source_id: s_A3WsLP9uN76BDjX2s7xc3W
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
  descendants: []
  other: []
---

# 王玶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玶 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玶（CBDB 309422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309422&o=json)
