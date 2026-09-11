---
schema: wang-person/v1
id: p_7N68Wq9pdrQkgGk4D6cCqW
status: active
merged_into: null
display_name: 王得勝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PY5Eg8AyWQh7WdSyGWLbYk
        subject_person_id: p_7N68Wq9pdrQkgGk4D6cCqW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得勝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kX9BPQtCAqAUdWbYAXgYLB
          claim_id: c_PY5Eg8AyWQh7WdSyGWLbYk
          source_id: s_qQ3fGZb3JB8kz1Jvb8K86G
          stance: supports
          locator: CBDB:58612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（58612）
          source: &a1
            id: s_qQ3fGZb3JB8kz1Jvb8K86G
            source_type: api_record
            title: 中国历代人物传记资料库：王得勝（CBDB 58612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58612&o=json
            external_identifier: CBDB:58612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.825Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZBmKkFAgJ6YJi6NkFG2ViN
        subject_person_id: p_7N68Wq9pdrQkgGk4D6cCqW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1862年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WFBWUeGC4D7FaosjR5Nz7x
          claim_id: c_ZBmKkFAgJ6YJi6NkFG2ViN
          source_id: s_qQ3fGZb3JB8kz1Jvb8K86G
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
        id: c_LVGL7XutPZE6NWZw9nfydL
        subject_person_id: p_7N68Wq9pdrQkgGk4D6cCqW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得勝（卒于1862年），清人物。籍贯祁陽。（中国历代人物传记资料库 CBDB 58612）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lR8DVIPkaDmKdLt66uulVs
          claim_id: c_LVGL7XutPZE6NWZw9nfydL
          source_id: s_qQ3fGZb3JB8kz1Jvb8K86G
          stance: supports
          locator: CBDB:58612
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

# 王得勝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得勝 | accepted |
| death.date | 1862年 | accepted |
| bio.summary | 王得勝（卒于1862年），清人物。籍贯祁陽。（中国历代人物传记资料库 CBDB 58612） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得勝（CBDB 58612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58612&o=json)
