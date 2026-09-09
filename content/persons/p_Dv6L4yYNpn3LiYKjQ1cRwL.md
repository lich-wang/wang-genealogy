---
schema: wang-person/v1
id: p_Dv6L4yYNpn3LiYKjQ1cRwL
status: active
merged_into: null
display_name: 王德祿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vn4Y7m2npejJZqxqAbaz8W
        subject_person_id: p_Dv6L4yYNpn3LiYKjQ1cRwL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZdvpPhNRZBhdrJ2Sj1LgBQ
          claim_id: c_Vn4Y7m2npejJZqxqAbaz8W
          source_id: s_EHzQMyd8ScE9U9cWQNZPoT
          stance: supports
          locator: CBDB:101426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101426）
          source: &a1
            id: s_EHzQMyd8ScE9U9cWQNZPoT
            source_type: api_record
            title: 中国历代人物传记资料库：王德祿（CBDB 101426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101426&o=json
            external_identifier: CBDB:101426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_K786517nun8SGtQGazp1M3
        subject_person_id: p_Dv6L4yYNpn3LiYKjQ1cRwL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1193年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_618Z3Rp98g3waB7FCp2TX3
          claim_id: c_K786517nun8SGtQGazp1M3
          source_id: s_EHzQMyd8ScE9U9cWQNZPoT
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
        id: c_592tstZ4q6sjF7bfKsLYLN
        subject_person_id: p_Dv6L4yYNpn3LiYKjQ1cRwL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1224年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wXEf5gacCCfkGQJXomwdzB
          claim_id: c_592tstZ4q6sjF7bfKsLYLN
          source_id: s_EHzQMyd8ScE9U9cWQNZPoT
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
        id: c_qLEDZUV7k7oYuF93rbMJmF
        subject_person_id: p_Dv6L4yYNpn3LiYKjQ1cRwL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qzeYXcDrHCkEq1ZeUyUhaQ
          claim_id: c_qLEDZUV7k7oYuF93rbMJmF
          source_id: s_EHzQMyd8ScE9U9cWQNZPoT
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

# 王德祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德祿 | accepted |
| birth.date | 1193年 | accepted |
| death.date | 1224年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德祿（CBDB 101426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101426&o=json)
