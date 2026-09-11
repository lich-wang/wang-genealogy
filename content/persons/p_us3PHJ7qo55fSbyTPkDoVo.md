---
schema: wang-person/v1
id: p_us3PHJ7qo55fSbyTPkDoVo
status: active
merged_into: null
display_name: 王宬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4hm92ArpKijJivnK4Vj53E
        subject_person_id: p_us3PHJ7qo55fSbyTPkDoVo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D1SU8fJCVUP2ZEacx1iABZ
          claim_id: c_4hm92ArpKijJivnK4Vj53E
          source_id: s_SHcBbjmqjU7XJ6NyP1SbvS
          stance: supports
          locator: CBDB:60889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60889）
          source: &a1
            id: s_SHcBbjmqjU7XJ6NyP1SbvS
            source_type: api_record
            title: 中国历代人物传记资料库：王宬（CBDB 60889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60889&o=json
            external_identifier: CBDB:60889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ThTp2KPRiWe9TE33KKBMVo
        subject_person_id: p_us3PHJ7qo55fSbyTPkDoVo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1694年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y32SscANauC7r4ZiLPdL8v
          claim_id: c_ThTp2KPRiWe9TE33KKBMVo
          source_id: s_SHcBbjmqjU7XJ6NyP1SbvS
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
        id: c_rxQdDG59LDVuff795L4DX6
        subject_person_id: p_us3PHJ7qo55fSbyTPkDoVo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1786年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LTwafxcC9e3u2PA958fEMF
          claim_id: c_rxQdDG59LDVuff795L4DX6
          source_id: s_SHcBbjmqjU7XJ6NyP1SbvS
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
        id: c_7WE8iTaUT1b9ATRNYvB4RQ
        subject_person_id: p_us3PHJ7qo55fSbyTPkDoVo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宬（1694年—1786年），清人物。明清進士進士，籍贯鎮洋，入仕進士，曾任兵部郎中、武選司郎中、武選司員外郎。（中国历代人物传记资料库 CBDB 60889）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k0f9dk3w3o01ykMD0LuKvs
          claim_id: c_7WE8iTaUT1b9ATRNYvB4RQ
          source_id: s_SHcBbjmqjU7XJ6NyP1SbvS
          stance: supports
          locator: CBDB:60889
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

# 王宬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宬 | accepted |
| birth.date | 1694年 | accepted |
| death.date | 1786年 | accepted |
| bio.summary | 王宬（1694年—1786年），清人物。明清進士進士，籍贯鎮洋，入仕進士，曾任兵部郎中、武選司郎中、武選司員外郎。（中国历代人物传记资料库 CBDB 60889） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宬（CBDB 60889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60889&o=json)
