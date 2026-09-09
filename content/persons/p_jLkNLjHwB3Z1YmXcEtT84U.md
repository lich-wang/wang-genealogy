---
schema: wang-person/v1
id: p_jLkNLjHwB3Z1YmXcEtT84U
status: active
merged_into: null
display_name: 王文煥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v8bizNsnrK22SrYpvPzakm
        subject_person_id: p_jLkNLjHwB3Z1YmXcEtT84U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文煥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L5oLqh3wVFvhNJH3AN7tpu
          claim_id: c_v8bizNsnrK22SrYpvPzakm
          source_id: s_QNpgqLMqq9mQgHwR9P4uxn
          stance: supports
          locator: CBDB:71427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71427）
          source: &a1
            id: s_QNpgqLMqq9mQgHwR9P4uxn
            source_type: api_record
            title: 中国历代人物传记资料库：王文煥（CBDB 71427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71427&o=json
            external_identifier: CBDB:71427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.661Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MjErwbTiyDE4Pm2RtjjbL9
        subject_person_id: p_jLkNLjHwB3Z1YmXcEtT84U
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1810年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e214LZcZgrLnNDZ6g3usyW
          claim_id: c_MjErwbTiyDE4Pm2RtjjbL9
          source_id: s_QNpgqLMqq9mQgHwR9P4uxn
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
        id: c_BrNhWoAXA99j3o65zLWHSj
        subject_person_id: p_jLkNLjHwB3Z1YmXcEtT84U
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1873年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YicKCTdrjT5HMTeA6gdsxn
          claim_id: c_BrNhWoAXA99j3o65zLWHSj
          source_id: s_QNpgqLMqq9mQgHwR9P4uxn
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
        id: c_6vsyM2jCWQEejbJ9cHsCwd
        subject_person_id: p_jLkNLjHwB3Z1YmXcEtT84U
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
        - id: cs_BBfGe2y3tJUZZG6zif3zbT
          claim_id: c_6vsyM2jCWQEejbJ9cHsCwd
          source_id: s_QNpgqLMqq9mQgHwR9P4uxn
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

# 王文煥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文煥 | accepted |
| birth.date | 1810年 | accepted |
| death.date | 1873年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文煥（CBDB 71427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71427&o=json)
