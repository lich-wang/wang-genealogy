---
schema: wang-person/v1
id: p_oeTp2TB7KMDGLG8u98gMef
status: active
merged_into: null
display_name: 王怡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hGfKkFqPWvK4ibyq4S2LaC
        subject_person_id: p_oeTp2TB7KMDGLG8u98gMef
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5oj7tEXcMJKCEToUt3Jjss
          claim_id: c_hGfKkFqPWvK4ibyq4S2LaC
          source_id: s_pF4Jr9p2Wt5N4wDG7RB5jP
          stance: supports
          locator: CBDB:380183
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380183）
          source: &a1
            id: s_pF4Jr9p2Wt5N4wDG7RB5jP
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 380183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380183&o=json
            external_identifier: CBDB:380183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.715Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U49FSKK2pfcP5NLwNPmMZd
        subject_person_id: p_oeTp2TB7KMDGLG8u98gMef
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SB2iJKQVxjgiWT2TgQQYrf
          claim_id: c_U49FSKK2pfcP5NLwNPmMZd
          source_id: s_pF4Jr9p2Wt5N4wDG7RB5jP
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

# 王怡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王怡 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王怡（CBDB 380183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380183&o=json)
