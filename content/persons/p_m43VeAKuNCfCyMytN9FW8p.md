---
schema: wang-person/v1
id: p_m43VeAKuNCfCyMytN9FW8p
status: active
merged_into: null
display_name: 王桐齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xzWkmbsLjgiW8PepiMhy4F
        subject_person_id: p_m43VeAKuNCfCyMytN9FW8p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桐齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xqL8UNPDzjmZAF2FaeYfwY
          claim_id: c_xzWkmbsLjgiW8PepiMhy4F
          source_id: s_s42efCM4f7Ag3tuqnHoLbb
          stance: supports
          locator: CBDB:638719
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638719）
          source: &a1
            id: s_s42efCM4f7Ag3tuqnHoLbb
            source_type: api_record
            title: 中国历代人物传记资料库：王桐齡（CBDB 638719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638719&o=json
            external_identifier: CBDB:638719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.744Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S65eTpUymYcSnG91i5V23P
        subject_person_id: p_m43VeAKuNCfCyMytN9FW8p
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
        - id: cs_ECTVyzp6tSVT1C6GU7ScrG
          claim_id: c_S65eTpUymYcSnG91i5V23P
          source_id: s_s42efCM4f7Ag3tuqnHoLbb
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

# 王桐齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桐齡 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桐齡（CBDB 638719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638719&o=json)
