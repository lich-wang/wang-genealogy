---
schema: wang-person/v1
id: p_bW9YtKik9EJNEsKLg9w8ZB
status: active
merged_into: null
display_name: 王恂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NjRkJ7by1GYSCYKC2ve1ir
        subject_person_id: p_bW9YtKik9EJNEsKLg9w8ZB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jf6KK8XLXvLtTKyht7VEys
          claim_id: c_NjRkJ7by1GYSCYKC2ve1ir
          source_id: s_CWjK2YviMPGdFC7b1PY8sQ
          stance: supports
          locator: CBDB:510779
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510779）
          source: &a1
            id: s_CWjK2YviMPGdFC7b1PY8sQ
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 510779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510779&o=json
            external_identifier: CBDB:510779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wyVpuZ6nkgjeTEC5a784i3
        subject_person_id: p_bW9YtKik9EJNEsKLg9w8ZB
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
        - id: cs_2KmzLoG7Hk16Y48Zi9PuMV
          claim_id: c_wyVpuZ6nkgjeTEC5a784i3
          source_id: s_CWjK2YviMPGdFC7b1PY8sQ
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

# 王恂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恂 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恂（CBDB 510779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510779&o=json)
