---
schema: wang-person/v1
id: p_JaU6ebYAsJXn5gSf3SqDt6
status: active
merged_into: null
display_name: 王宗濂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1tiCCACDR5Wzf2FRTg5oKF
        subject_person_id: p_JaU6ebYAsJXn5gSf3SqDt6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗濂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ry8iusLwJTLndc6naQRpL3
          claim_id: c_1tiCCACDR5Wzf2FRTg5oKF
          source_id: s_vEN4F6pj7HwF24MXZLJHT6
          stance: supports
          locator: CBDB:550869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550869）
          source: &a1
            id: s_vEN4F6pj7HwF24MXZLJHT6
            source_type: api_record
            title: 中国历代人物传记资料库：王宗濂（CBDB 550869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550869&o=json
            external_identifier: CBDB:550869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p89cPjV7rcPdUm5M3pc429
        subject_person_id: p_JaU6ebYAsJXn5gSf3SqDt6
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
        - id: cs_9hwBzLn6QEyQbFp5ExuHQu
          claim_id: c_p89cPjV7rcPdUm5M3pc429
          source_id: s_vEN4F6pj7HwF24MXZLJHT6
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

# 王宗濂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗濂 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗濂（CBDB 550869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550869&o=json)
