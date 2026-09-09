---
schema: wang-person/v1
id: p_wzpgCTfy9H3iqMXKhqaPfp
status: active
merged_into: null
display_name: 王俁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wc1BQ81D1TdDJJNpHiJXBZ
        subject_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bCS5T7BRJCR2N5pSr2JDt1
          claim_id: c_wc1BQ81D1TdDJJNpHiJXBZ
          source_id: s_B9L5fN3DkcARu6bLC2ETfy
          stance: supports
          locator: CBDB:199224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199224）
          source: &a1
            id: s_B9L5fN3DkcARu6bLC2ETfy
            source_type: api_record
            title: 中国历代人物传记资料库：王俁（CBDB 199224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199224&o=json
            external_identifier: CBDB:199224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.533Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GZDYMf7DqEq7WhNsGxr74k
        subject_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1434年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ERkx9rBPeqw1rzt7sJHKo4
          claim_id: c_GZDYMf7DqEq7WhNsGxr74k
          source_id: s_B9L5fN3DkcARu6bLC2ETfy
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
        id: c_LYU2FNKE22FHAw4Vo6Vt4j
        subject_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WJh1TEeXGiBqEp5vT5MuCC
          claim_id: c_LYU2FNKE22FHAw4Vo6Vt4j
          source_id: s_B9L5fN3DkcARu6bLC2ETfy
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

# 王俁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俁 | accepted |
| birth.date | 1434年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俁（CBDB 199224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199224&o=json)
