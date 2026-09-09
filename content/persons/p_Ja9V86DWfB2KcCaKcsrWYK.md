---
schema: wang-person/v1
id: p_Ja9V86DWfB2KcCaKcsrWYK
status: active
merged_into: null
display_name: 王微
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zSpj1PhDL1nf9BLGGG85YA
        subject_person_id: p_Ja9V86DWfB2KcCaKcsrWYK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王微
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AQds25xjFq7CVrhVemFMMK
          claim_id: c_zSpj1PhDL1nf9BLGGG85YA
          source_id: s_z8x8Mh4ysw8odF1KGieQyq
          stance: supports
          locator: CBDB:190823
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190823）
          source: &a1
            id: s_z8x8Mh4ysw8odF1KGieQyq
            source_type: api_record
            title: 中国历代人物传记资料库：王微（CBDB 190823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190823&o=json
            external_identifier: CBDB:190823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_37K74bNAHEweE14VVZJQqd
        subject_person_id: p_Ja9V86DWfB2KcCaKcsrWYK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 756年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GjC6buQf2LMcv7CPkd6e5W
          claim_id: c_37K74bNAHEweE14VVZJQqd
          source_id: s_z8x8Mh4ysw8odF1KGieQyq
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
        id: c_7FiDDh3HieZ7Admt18voS7
        subject_person_id: p_Ja9V86DWfB2KcCaKcsrWYK
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
        - id: cs_EwGbvVGyyNCUCg8Cqit77k
          claim_id: c_7FiDDh3HieZ7Admt18voS7
          source_id: s_z8x8Mh4ysw8odF1KGieQyq
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

# 王微

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王微 | accepted |
| death.date | 756年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王微（CBDB 190823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190823&o=json)
