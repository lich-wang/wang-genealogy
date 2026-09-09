---
schema: wang-person/v1
id: p_wGeqMr94XHkQUokME5FCJ3
status: active
merged_into: null
display_name: 王舟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KyQM9DrFkLZrpDudX4LTjj
        subject_person_id: p_wGeqMr94XHkQUokME5FCJ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RfVQ7HPSyNDsodbgHnePLd
          claim_id: c_KyQM9DrFkLZrpDudX4LTjj
          source_id: s_EZttuVPWEZxiDt9PpB3k5L
          stance: supports
          locator: CBDB:199369
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199369）
          source: &a1
            id: s_EZttuVPWEZxiDt9PpB3k5L
            source_type: api_record
            title: 中国历代人物传记资料库：王舟（CBDB 199369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199369&o=json
            external_identifier: CBDB:199369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.542Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_r3NjXm25bRQ1R1JtxdzA2G
        subject_person_id: p_wGeqMr94XHkQUokME5FCJ3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1437年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5HBVK9fiJMwQeK6jg1Yw3M
          claim_id: c_r3NjXm25bRQ1R1JtxdzA2G
          source_id: s_EZttuVPWEZxiDt9PpB3k5L
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
        id: c_v549W4BgL9g9qDtc26PZ4o
        subject_person_id: p_wGeqMr94XHkQUokME5FCJ3
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
        - id: cs_GLvKtbotvUa5f4abiX92sF
          claim_id: c_v549W4BgL9g9qDtc26PZ4o
          source_id: s_EZttuVPWEZxiDt9PpB3k5L
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

# 王舟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舟 | accepted |
| birth.date | 1437年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舟（CBDB 199369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199369&o=json)
