---
schema: wang-person/v1
id: p_7niMzsHDjCqVCRFgNqK37K
status: active
merged_into: null
display_name: 王潀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GQc24sKfmTPsPzD8eGKxUz
        subject_person_id: p_7niMzsHDjCqVCRFgNqK37K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fAnALSaKbLJjED9Q8Cmiay
          claim_id: c_GQc24sKfmTPsPzD8eGKxUz
          source_id: s_edX35s5gAAPBjwLwVMsGVN
          stance: supports
          locator: CBDB:37917
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37917）
          source: &a1
            id: s_edX35s5gAAPBjwLwVMsGVN
            source_type: api_record
            title: 中国历代人物传记资料库：王潀（CBDB 37917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37917&o=json
            external_identifier: CBDB:37917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.292Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_q3AMFYMkV2VEhECoLkM53r
        subject_person_id: p_7niMzsHDjCqVCRFgNqK37K
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1025年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_86t54BRcTxvU9cMA2vAQ6K
          claim_id: c_q3AMFYMkV2VEhECoLkM53r
          source_id: s_edX35s5gAAPBjwLwVMsGVN
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
        id: c_4uhVgwk48KySktDDkZH45N
        subject_person_id: p_7niMzsHDjCqVCRFgNqK37K
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1086年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wNA7gJ9cWRK4ZvFBzFqZDx
          claim_id: c_4uhVgwk48KySktDDkZH45N
          source_id: s_edX35s5gAAPBjwLwVMsGVN
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
        id: c_5d2NLGJXbYKKK4SNaFKC4h
        subject_person_id: p_7niMzsHDjCqVCRFgNqK37K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潀（1025年—1086年），宋人物。籍贯建昌，身份为富豪。（中国历代人物传记资料库 CBDB 37917）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x4GhrrB1IXug3l1RgsE3qt
          claim_id: c_5d2NLGJXbYKKK4SNaFKC4h
          source_id: s_edX35s5gAAPBjwLwVMsGVN
          stance: supports
          locator: CBDB:37917
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

# 王潀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潀 | accepted |
| birth.date | 1025年 | accepted |
| death.date | 1086年 | accepted |
| bio.summary | 王潀（1025年—1086年），宋人物。籍贯建昌，身份为富豪。（中国历代人物传记资料库 CBDB 37917） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潀（CBDB 37917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37917&o=json)
