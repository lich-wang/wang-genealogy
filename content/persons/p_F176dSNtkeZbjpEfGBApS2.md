---
schema: wang-person/v1
id: p_F176dSNtkeZbjpEfGBApS2
status: active
merged_into: null
display_name: 王爾烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_51UeAiZkLauRBuSRZ421ek
        subject_person_id: p_F176dSNtkeZbjpEfGBApS2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爾烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9hzn41PyKqvMLxQ4qoQQ2x
          claim_id: c_51UeAiZkLauRBuSRZ421ek
          source_id: s_4kc6weaPYbxt5Ctte3HBnb
          stance: supports
          locator: CBDB:71495
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71495）
          source: &a1
            id: s_4kc6weaPYbxt5Ctte3HBnb
            source_type: api_record
            title: 中国历代人物传记资料库：王爾烈（CBDB 71495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71495&o=json
            external_identifier: CBDB:71495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.711Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Voefkq3L2NBWwQJ5Qo28f9
        subject_person_id: p_F176dSNtkeZbjpEfGBApS2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1801年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h9zm1ZyTGfD7GtdcK1Pt6D
          claim_id: c_Voefkq3L2NBWwQJ5Qo28f9
          source_id: s_4kc6weaPYbxt5Ctte3HBnb
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
        id: c_cJrsRfMCFUV5tk9rLTP5Vc
        subject_person_id: p_F176dSNtkeZbjpEfGBApS2
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
        - id: cs_8K8vkFq5sk1fRx1dj4pQqr
          claim_id: c_cJrsRfMCFUV5tk9rLTP5Vc
          source_id: s_4kc6weaPYbxt5Ctte3HBnb
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

# 王爾烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爾烈 | accepted |
| death.date | 1801年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爾烈（CBDB 71495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71495&o=json)
