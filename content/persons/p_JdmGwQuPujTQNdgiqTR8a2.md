---
schema: wang-person/v1
id: p_JdmGwQuPujTQNdgiqTR8a2
status: active
merged_into: null
display_name: 王棻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DZprEknGEWbSC5wpp4WKBv
        subject_person_id: p_JdmGwQuPujTQNdgiqTR8a2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rucr5evuADrj5otor6JJgW
          claim_id: c_DZprEknGEWbSC5wpp4WKBv
          source_id: s_5iiWDEkPG6FjWGSBWHGbv4
          stance: supports
          locator: CBDB:71184
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71184）
          source: &a1
            id: s_5iiWDEkPG6FjWGSBWHGbv4
            source_type: api_record
            title: 中国历代人物传记资料库：王棻（CBDB 71184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71184&o=json
            external_identifier: CBDB:71184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_V84YaQBJbDVWQGW6qZpfDd
        subject_person_id: p_JdmGwQuPujTQNdgiqTR8a2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1828年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9PTxQDe5739Xoz7VmKrQHd
          claim_id: c_V84YaQBJbDVWQGW6qZpfDd
          source_id: s_5iiWDEkPG6FjWGSBWHGbv4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FEunVdJ1WCspgXL76Amgrx
        subject_person_id: p_JdmGwQuPujTQNdgiqTR8a2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1899年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FRebvsoLqGnbZy95SNCLRJ
          claim_id: c_FEunVdJ1WCspgXL76Amgrx
          source_id: s_5iiWDEkPG6FjWGSBWHGbv4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WP8y83Pixy7bZL6fbNpA4e
        subject_person_id: p_JdmGwQuPujTQNdgiqTR8a2
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
        - id: cs_CT5iGuD2LL5JTPGk3nUzzp
          claim_id: c_WP8y83Pixy7bZL6fbNpA4e
          source_id: s_5iiWDEkPG6FjWGSBWHGbv4
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

# 王棻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棻 | accepted |
| birth.date | 1828年 | accepted |
| death.date | 1899年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棻（CBDB 71184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71184&o=json)
