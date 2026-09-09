---
schema: wang-person/v1
id: p_k4Pp2agQ2Hqmy89iU57wPK
status: active
merged_into: null
display_name: 王森
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XYHFrgoML5BVcs3un16LEo
        subject_person_id: p_k4Pp2agQ2Hqmy89iU57wPK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7RQsi1bhk1jkBGH2cWJT82
          claim_id: c_XYHFrgoML5BVcs3un16LEo
          source_id: s_qoZv9qJaSk2KQFTqNsvVaT
          stance: supports
          locator: CBDB:488395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488395）
          source: &a1
            id: s_qoZv9qJaSk2KQFTqNsvVaT
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 488395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488395&o=json
            external_identifier: CBDB:488395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CD5rkvW7Dn68KMt4zhH4h9
        subject_person_id: p_k4Pp2agQ2Hqmy89iU57wPK
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
        - id: cs_Gb7tMbsSo2WKJkPEWAFL3A
          claim_id: c_CD5rkvW7Dn68KMt4zhH4h9
          source_id: s_qoZv9qJaSk2KQFTqNsvVaT
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

# 王森

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王森 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王森（CBDB 488395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488395&o=json)
