---
schema: wang-person/v1
id: p_jgn8VYTBiMsG4c6hVqFPc3
status: active
merged_into: null
display_name: 王修本
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jeKWxz4tuQng7PZrKPk5Kx
        subject_person_id: p_jgn8VYTBiMsG4c6hVqFPc3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nVJ7go5vySpezhKxzibtrp
          claim_id: c_jeKWxz4tuQng7PZrKPk5Kx
          source_id: s_pUiZuabN4TkQqpY5pheL3o
          stance: supports
          locator: CBDB:141692
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141692）
          source: &a1
            id: s_pUiZuabN4TkQqpY5pheL3o
            source_type: api_record
            title: 中国历代人物传记资料库：王修本（CBDB 141692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141692&o=json
            external_identifier: CBDB:141692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_N528vnF7BN7dh3i3Wx8smT
        subject_person_id: p_jgn8VYTBiMsG4c6hVqFPc3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 837年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DQUK8GkY7FQ7RzAHCS7oP5
          claim_id: c_N528vnF7BN7dh3i3Wx8smT
          source_id: s_pUiZuabN4TkQqpY5pheL3o
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
        id: c_AB8ELj46iPPwS87c4VKruE
        subject_person_id: p_jgn8VYTBiMsG4c6hVqFPc3
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
        - id: cs_92GuygG1qMfKMAU2X1wBRg
          claim_id: c_AB8ELj46iPPwS87c4VKruE
          source_id: s_pUiZuabN4TkQqpY5pheL3o
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

# 王修本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修本 | accepted |
| death.date | 837年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王修本（CBDB 141692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141692&o=json)
