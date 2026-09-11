---
schema: wang-person/v1
id: p_RoQBdNHgMSV5JMkxThrHpk
status: active
merged_into: null
display_name: 王敞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k3P4nXY235YWpm732JUUM3
        subject_person_id: p_RoQBdNHgMSV5JMkxThrHpk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PJjXr3rZxt5rcShziue12r
          claim_id: c_k3P4nXY235YWpm732JUUM3
          source_id: s_eu5cmMroTV25dWcAr8bvEx
          stance: supports
          locator: CBDB:71211
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71211）
          source: &a1
            id: s_eu5cmMroTV25dWcAr8bvEx
            source_type: api_record
            title: 中国历代人物传记资料库：王敞（CBDB 71211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71211&o=json
            external_identifier: CBDB:71211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9qfM1HVtPg9YdL1u8D4Ee5
        subject_person_id: p_RoQBdNHgMSV5JMkxThrHpk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1841年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NdgQJhsGpyrFmph4VZQQGt
          claim_id: c_9qfM1HVtPg9YdL1u8D4Ee5
          source_id: s_eu5cmMroTV25dWcAr8bvEx
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
        id: c_yKiMfGG7P5CD9UFPoPjotA
        subject_person_id: p_RoQBdNHgMSV5JMkxThrHpk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敞（生于1841年），清人物。籍贯安邱。（中国历代人物传记资料库 CBDB 71211）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zxsy-0CLYJ_Qs4Yo_z-2gh
          claim_id: c_yKiMfGG7P5CD9UFPoPjotA
          source_id: s_eu5cmMroTV25dWcAr8bvEx
          stance: supports
          locator: CBDB:71211
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王敞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敞 | accepted |
| birth.date | 1841年 | accepted |
| bio.summary | 王敞（生于1841年），清人物。籍贯安邱。（中国历代人物传记资料库 CBDB 71211） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敞（CBDB 71211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71211&o=json)
