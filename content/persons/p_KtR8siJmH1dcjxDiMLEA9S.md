---
schema: wang-person/v1
id: p_KtR8siJmH1dcjxDiMLEA9S
status: active
merged_into: null
display_name: 王日新
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q2BKgdGGT3T4gkX8W9VjK3
        subject_person_id: p_KtR8siJmH1dcjxDiMLEA9S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_it7E4Lc8dAbPheYk1pkgw7
          claim_id: c_Q2BKgdGGT3T4gkX8W9VjK3
          source_id: s_JLeLhzLmFF36M5YtLkAKQa
          stance: supports
          locator: CBDB:247168
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247168）
          source: &a1
            id: s_JLeLhzLmFF36M5YtLkAKQa
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 247168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247168&o=json
            external_identifier: CBDB:247168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.092Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5B83TbtVQoe9Qz9ZiA28RS
        subject_person_id: p_KtR8siJmH1dcjxDiMLEA9S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日新，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 247168）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4KfrxZK4dtJm57bd4haVNw
          claim_id: c_5B83TbtVQoe9Qz9ZiA28RS
          source_id: s_JLeLhzLmFF36M5YtLkAKQa
          stance: supports
          locator: CBDB:247168
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
  descendants:
    - claim:
        id: c_DGkaOj2Hdq2GOkQqEoJsWf
        subject_person_id: p_KtR8siJmH1dcjxDiMLEA9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eonrrfCkN2hA5o48Aafwfz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2sabvDfvXOLdBTtsWF5MCT
          claim_id: c_DGkaOj2Hdq2GOkQqEoJsWf
          source_id: s_JLeLhzLmFF36M5YtLkAKQa
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百二十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eonrrfCkN2hA5o48Aafwfz
        status: active
        display_name: 王勉
        merged_into_person_id: null
  other: []
---

# 王日新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日新 | accepted |
| bio.summary | 王日新，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 247168） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_eonrrfCkN2hA5o48Aafwfz | 王勉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王日新（CBDB 247168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247168&o=json)
