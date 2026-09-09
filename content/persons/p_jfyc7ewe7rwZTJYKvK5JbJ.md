---
schema: wang-person/v1
id: p_jfyc7ewe7rwZTJYKvK5JbJ
status: active
merged_into: null
display_name: 王啟祚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_52eNeL4RBMJRfo8nPdgwCb
        subject_person_id: p_jfyc7ewe7rwZTJYKvK5JbJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eCezoCitA1jMQCL3iwLpcA
          claim_id: c_52eNeL4RBMJRfo8nPdgwCb
          source_id: s_rQLG6Fhsn5YsfWHC2rWTdH
          stance: supports
          locator: CBDB:60910
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60910）
          source: &a1
            id: s_rQLG6Fhsn5YsfWHC2rWTdH
            source_type: api_record
            title: 中国历代人物传记资料库：王啟祚（CBDB 60910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60910&o=json
            external_identifier: CBDB:60910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.876Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_A4JDmy1gCwLss7xbCq9xkD
        subject_person_id: p_jfyc7ewe7rwZTJYKvK5JbJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1612年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tt2JV6AcaYByGbgC1KFiSz
          claim_id: c_A4JDmy1gCwLss7xbCq9xkD
          source_id: s_rQLG6Fhsn5YsfWHC2rWTdH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HJ8uWB7fthHbvLeaDJx1Vj
        subject_person_id: p_jfyc7ewe7rwZTJYKvK5JbJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9cNCuvGQwrTbJhL6AWVBAd
          claim_id: c_HJ8uWB7fthHbvLeaDJx1Vj
          source_id: s_rQLG6Fhsn5YsfWHC2rWTdH
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

# 王啟祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟祚 | accepted |
| birth.date | 1612年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟祚（CBDB 60910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60910&o=json)
