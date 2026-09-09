---
schema: wang-person/v1
id: p_pG1sPrM8H3D558mJdDJV5D
status: active
merged_into: null
display_name: 王益朋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VXgajRQGsdEa4CNRaCCWsg
        subject_person_id: p_pG1sPrM8H3D558mJdDJV5D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益朋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KjAqijUb3mEkzHYnSY5R2h
          claim_id: c_VXgajRQGsdEa4CNRaCCWsg
          source_id: s_ZgAcjrxZeCPFn8ikJFR45k
          stance: supports
          locator: CBDB:60882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60882）
          source: &a1
            id: s_ZgAcjrxZeCPFn8ikJFR45k
            source_type: api_record
            title: 中国历代人物传记资料库：王益朋（CBDB 60882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60882&o=json
            external_identifier: CBDB:60882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XpdX1qPJybvuXbmLrbGzHS
        subject_person_id: p_pG1sPrM8H3D558mJdDJV5D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1610年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PWmKbUkgWAT7otddPaG9k6
          claim_id: c_XpdX1qPJybvuXbmLrbGzHS
          source_id: s_ZgAcjrxZeCPFn8ikJFR45k
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
        id: c_RrBQL6uzDCDDs4A7oYxvK5
        subject_person_id: p_pG1sPrM8H3D558mJdDJV5D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1670年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SLgw8Lq2zA712RLM6yn74A
          claim_id: c_RrBQL6uzDCDDs4A7oYxvK5
          source_id: s_ZgAcjrxZeCPFn8ikJFR45k
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
        id: c_XCTME7yW8KeuHuYBZVdf84
        subject_person_id: p_pG1sPrM8H3D558mJdDJV5D
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
        - id: cs_yoAHw9L2B9fcNoTwPZ12np
          claim_id: c_XCTME7yW8KeuHuYBZVdf84
          source_id: s_ZgAcjrxZeCPFn8ikJFR45k
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

# 王益朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益朋 | accepted |
| birth.date | 1610年 | accepted |
| death.date | 1670年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王益朋（CBDB 60882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60882&o=json)
