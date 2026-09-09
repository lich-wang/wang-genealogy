---
schema: wang-person/v1
id: p_h4NVGX7A9FLEf1tYe8En23
status: active
merged_into: null
display_name: 王宗典
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_62sGZ6UtrvMGbHL5HHT75M
        subject_person_id: p_h4NVGX7A9FLEf1tYe8En23
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗典
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Evf7ir1sEFVCQsLFoL5FxX
          claim_id: c_62sGZ6UtrvMGbHL5HHT75M
          source_id: s_8HUibG4Rtf7MxraS5oxZe6
          stance: supports
          locator: CBDB:637092
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637092）
          source: &a1
            id: s_8HUibG4Rtf7MxraS5oxZe6
            source_type: api_record
            title: 中国历代人物传记资料库：王宗典（CBDB 637092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637092&o=json
            external_identifier: CBDB:637092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sX2N77JnmL4DQo3CWsLM8F
        subject_person_id: p_h4NVGX7A9FLEf1tYe8En23
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
        - id: cs_4X9BuvHqEVbHX61TFdJjrx
          claim_id: c_sX2N77JnmL4DQo3CWsLM8F
          source_id: s_8HUibG4Rtf7MxraS5oxZe6
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

# 王宗典

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗典 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗典（CBDB 637092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637092&o=json)
