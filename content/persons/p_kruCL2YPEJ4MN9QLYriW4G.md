---
schema: wang-person/v1
id: p_kruCL2YPEJ4MN9QLYriW4G
status: active
merged_into: null
display_name: 王毓濂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LtF7M3iiSCme8gHG4Pd7ZX
        subject_person_id: p_kruCL2YPEJ4MN9QLYriW4G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓濂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7sVp5vx64rjgwWMPt6YTid
          claim_id: c_LtF7M3iiSCme8gHG4Pd7ZX
          source_id: s_ttxj3JLmWYP6nw8AJ6U1Fb
          stance: supports
          locator: CBDB:72167
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72167）
          source: &a1
            id: s_ttxj3JLmWYP6nw8AJ6U1Fb
            source_type: api_record
            title: 中国历代人物传记资料库：王毓濂（CBDB 72167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72167&o=json
            external_identifier: CBDB:72167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8q9g1VhoL948crGwQe3BGS
        subject_person_id: p_kruCL2YPEJ4MN9QLYriW4G
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1789年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4XUfP6A4EetagzRC9M6DMz
          claim_id: c_8q9g1VhoL948crGwQe3BGS
          source_id: s_ttxj3JLmWYP6nw8AJ6U1Fb
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
        id: c_99Jk6FHu6PuiWmnuPYqDk1
        subject_person_id: p_kruCL2YPEJ4MN9QLYriW4G
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
        - id: cs_F1K9HayGK4C9ubdrsS4XVG
          claim_id: c_99Jk6FHu6PuiWmnuPYqDk1
          source_id: s_ttxj3JLmWYP6nw8AJ6U1Fb
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

# 王毓濂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓濂 | accepted |
| birth.date | 1789年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王毓濂（CBDB 72167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72167&o=json)
