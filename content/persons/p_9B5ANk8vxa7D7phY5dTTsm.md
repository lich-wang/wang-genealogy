---
schema: wang-person/v1
id: p_9B5ANk8vxa7D7phY5dTTsm
status: active
merged_into: null
display_name: 王恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wMqF1gAt57BdCKHW2WvP7Y
        subject_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WZD3udqLxGAQ8zRZPNELt2
          claim_id: c_wMqF1gAt57BdCKHW2WvP7Y
          source_id: s_F4AnebQmkt32k7zkvanzLD
          stance: supports
          locator: CBDB:145741
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145741）
          source: &a1
            id: s_F4AnebQmkt32k7zkvanzLD
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 145741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145741&o=json
            external_identifier: CBDB:145741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TWXdfR5Yayf6Abnzdk7HLE
        subject_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 732年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z12PkDV4QMJRgaQ78K6A9P
          claim_id: c_TWXdfR5Yayf6Abnzdk7HLE
          source_id: s_F4AnebQmkt32k7zkvanzLD
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
        id: c_cCc2X7Zv5QsKGjKxpAxSBC
        subject_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 804年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q8ShfCGswR4TJfcQz5BrhM
          claim_id: c_cCc2X7Zv5QsKGjKxpAxSBC
          source_id: s_F4AnebQmkt32k7zkvanzLD
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
        id: c_Pm6gQBx6f6QXrAGy5i19oj
        subject_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pgDj71gy7Nt6X1L1DR4xKJ
          claim_id: c_Pm6gQBx6f6QXrAGy5i19oj
          source_id: s_F4AnebQmkt32k7zkvanzLD
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

# 王恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭 | accepted |
| birth.date | 732年 | accepted |
| death.date | 804年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 145741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145741&o=json)
