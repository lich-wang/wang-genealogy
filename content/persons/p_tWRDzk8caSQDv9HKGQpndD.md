---
schema: wang-person/v1
id: p_tWRDzk8caSQDv9HKGQpndD
status: active
merged_into: null
display_name: 王朗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7qDnHjwzqHgZZws1YmrEs9
        subject_person_id: p_tWRDzk8caSQDv9HKGQpndD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L8pEqByBSs2KBQ28BZB953
          claim_id: c_7qDnHjwzqHgZZws1YmrEs9
          source_id: s_eJfJ74fi83YiwN7NMmDP72
          stance: supports
          locator: CBDB:151604
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151604）
          source: &a1
            id: s_eJfJ74fi83YiwN7NMmDP72
            source_type: api_record
            title: 中国历代人物传记资料库：王朗（CBDB 151604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151604&o=json
            external_identifier: CBDB:151604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dayAeY3qV52iaZjMKb8NwG
        subject_person_id: p_tWRDzk8caSQDv9HKGQpndD
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
        - id: cs_KiAbGhFRQaM6gHSXM1t7sa
          claim_id: c_dayAeY3qV52iaZjMKb8NwG
          source_id: s_eJfJ74fi83YiwN7NMmDP72
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9RnpBoTfPG9WxtLHdP3YhW
        subject_person_id: p_tWRDzk8caSQDv9HKGQpndD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4BFbF2D5CjTVVGnKZRvPjH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eSNPUiRJlYaGU5BaH0dp0x
          claim_id: c_9RnpBoTfPG9WxtLHdP3YhW
          source_id: s_eJfJ74fi83YiwN7NMmDP72
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 131：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4BFbF2D5CjTVVGnKZRvPjH
        status: active
        display_name: 王脩福
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朗 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4BFbF2D5CjTVVGnKZRvPjH | 王脩福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朗（CBDB 151604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151604&o=json)
