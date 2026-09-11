---
schema: wang-person/v1
id: p_7n57F3XJEGjpNwsprDDMGu
status: active
merged_into: null
display_name: 王天鑒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PXvFnigMmWffPGZkUEznE9
        subject_person_id: p_7n57F3XJEGjpNwsprDDMGu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天鑒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KX9VNoeFFRHuaYQ3td8xVu
          claim_id: c_PXvFnigMmWffPGZkUEznE9
          source_id: s_9LqDcN7LjULFZ4NFjneeg9
          stance: supports
          locator: CBDB:71370
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71370）
          source: &a1
            id: s_9LqDcN7LjULFZ4NFjneeg9
            source_type: api_record
            title: 中国历代人物传记资料库：王天鑒（CBDB 71370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71370&o=json
            external_identifier: CBDB:71370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Pew65qdfv4z9tkZ6TJAtk4
        subject_person_id: p_7n57F3XJEGjpNwsprDDMGu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1622年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QCBcj82CzTkcmd4yXgDXTQ
          claim_id: c_Pew65qdfv4z9tkZ6TJAtk4
          source_id: s_9LqDcN7LjULFZ4NFjneeg9
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
        id: c_cE9GubtfEh5AZiFRiGs9aw
        subject_person_id: p_7n57F3XJEGjpNwsprDDMGu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1681年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YP7q1Ma8Lio8PDznJcEHsE
          claim_id: c_cE9GubtfEh5AZiFRiGs9aw
          source_id: s_9LqDcN7LjULFZ4NFjneeg9
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
        id: c_hgHhyc1UC4duSQbEUSxSJo
        subject_person_id: p_7n57F3XJEGjpNwsprDDMGu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天鑒（1622年—1681年），清人物。籍贯宣化。（中国历代人物传记资料库 CBDB 71370）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pdDGV3b0i34ktvSU4PuqUp
          claim_id: c_hgHhyc1UC4duSQbEUSxSJo
          source_id: s_9LqDcN7LjULFZ4NFjneeg9
          stance: supports
          locator: CBDB:71370
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

# 王天鑒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天鑒 | accepted |
| birth.date | 1622年 | accepted |
| death.date | 1681年 | accepted |
| bio.summary | 王天鑒（1622年—1681年），清人物。籍贯宣化。（中国历代人物传记资料库 CBDB 71370） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天鑒（CBDB 71370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71370&o=json)
