---
schema: wang-person/v1
id: p_i2Kv3zAn9P5MqZkpHLL3e9
status: active
merged_into: null
display_name: 王貽清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HXu45PUH3JFfgym39FM7Zd
        subject_person_id: p_i2Kv3zAn9P5MqZkpHLL3e9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Er3cqK1v8LQvQmbbEEabLN
          claim_id: c_HXu45PUH3JFfgym39FM7Zd
          source_id: s_LG27zxh1ApNKsL66GPnjXo
          stance: supports
          locator: CBDB:71880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71880）
          source: &a1
            id: s_LG27zxh1ApNKsL66GPnjXo
            source_type: api_record
            title: 中国历代人物传记资料库：王貽清（CBDB 71880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71880&o=json
            external_identifier: CBDB:71880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sQU6K62zM9JenD7yoTt3fc
        subject_person_id: p_i2Kv3zAn9P5MqZkpHLL3e9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1835年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VQhGEu2cVg657ucPHVcxCP
          claim_id: c_sQU6K62zM9JenD7yoTt3fc
          source_id: s_LG27zxh1ApNKsL66GPnjXo
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
        id: c_JJbhkdPJbDnQAnt13xqxhy
        subject_person_id: p_i2Kv3zAn9P5MqZkpHLL3e9
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
        - id: cs_FG67gCLP2B7hNzwuV6YRQQ
          claim_id: c_JJbhkdPJbDnQAnt13xqxhy
          source_id: s_LG27zxh1ApNKsL66GPnjXo
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

# 王貽清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貽清 | accepted |
| birth.date | 1835年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貽清（CBDB 71880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71880&o=json)
