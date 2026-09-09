---
schema: wang-person/v1
id: p_3NG9F9nh2SGhsa4R9fgKbe
status: active
merged_into: null
display_name: 王世安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aEB7H58pPDC1W42MP9MeV3
        subject_person_id: p_3NG9F9nh2SGhsa4R9fgKbe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QmKFmbCLLHhyKjnktTsvCP
          claim_id: c_aEB7H58pPDC1W42MP9MeV3
          source_id: s_UjNQVa61RfMqrKveRMFeM7
          stance: supports
          locator: CBDB:281863
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281863）
          source: &a1
            id: s_UjNQVa61RfMqrKveRMFeM7
            source_type: api_record
            title: 中国历代人物传记资料库：王世安（CBDB 281863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281863&o=json
            external_identifier: CBDB:281863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.054Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MqbMzjNtWDFE64SwP3pVZe
        subject_person_id: p_3NG9F9nh2SGhsa4R9fgKbe
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
        - id: cs_GCyZu7b9h6UHKa2KyUJhCF
          claim_id: c_MqbMzjNtWDFE64SwP3pVZe
          source_id: s_UjNQVa61RfMqrKveRMFeM7
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

# 王世安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世安 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世安（CBDB 281863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281863&o=json)
