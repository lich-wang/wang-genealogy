---
schema: wang-person/v1
id: p_dV8jR7vp2KjRJdUtDo9E6E
status: active
merged_into: null
display_name: 王洙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DYiLvcH22HVutc9enmyQtR
        subject_person_id: p_dV8jR7vp2KjRJdUtDo9E6E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HjJ8Arw82faLLbthAG6LXk
          claim_id: c_DYiLvcH22HVutc9enmyQtR
          source_id: s_tmuWSUvVLaUiDoTnWsgZw8
          stance: supports
          locator: CBDB:43072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（43072）
          source: &a1
            id: s_tmuWSUvVLaUiDoTnWsgZw8
            source_type: api_record
            title: 中国历代人物传记资料库：王洙（CBDB 43072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=43072&o=json
            external_identifier: CBDB:43072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C3AAEyjDhyfZkosWW2Q6fr
        subject_person_id: p_dV8jR7vp2KjRJdUtDo9E6E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xdVDW6e6BPZ6U9K5AQ1DgV
          claim_id: c_C3AAEyjDhyfZkosWW2Q6fr
          source_id: s_tmuWSUvVLaUiDoTnWsgZw8
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

# 王洙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洙 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洙（CBDB 43072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=43072&o=json)
