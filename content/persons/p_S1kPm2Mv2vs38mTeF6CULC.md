---
schema: wang-person/v1
id: p_S1kPm2Mv2vs38mTeF6CULC
status: active
merged_into: null
display_name: 王耀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qNssS4K8KKDKQ9daN7Fzah
        subject_person_id: p_S1kPm2Mv2vs38mTeF6CULC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K5FDAe41R1tJqTv8AiKcfn
          claim_id: c_qNssS4K8KKDKQ9daN7Fzah
          source_id: s_aHeTEdEzFu7sQ1PZnJCpcj
          stance: supports
          locator: CBDB:462299
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462299）
          source: &a1
            id: s_aHeTEdEzFu7sQ1PZnJCpcj
            source_type: api_record
            title: 中国历代人物传记资料库：王耀（CBDB 462299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462299&o=json
            external_identifier: CBDB:462299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w29WPLaLR1L7QdeeCW4EMX
        subject_person_id: p_S1kPm2Mv2vs38mTeF6CULC
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
        - id: cs_2ZAhM78KBuqkH6zJ8ndoLf
          claim_id: c_w29WPLaLR1L7QdeeCW4EMX
          source_id: s_aHeTEdEzFu7sQ1PZnJCpcj
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

# 王耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耀 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耀（CBDB 462299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462299&o=json)
