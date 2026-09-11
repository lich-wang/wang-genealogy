---
schema: wang-person/v1
id: p_EGFQGCm6uvZQgRKRei6eoF
status: active
merged_into: null
display_name: 王坤吉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RC7ENiLyANqPU33bjeEQg8
        subject_person_id: p_EGFQGCm6uvZQgRKRei6eoF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vh4KXwHxiHhipA166mc2NJ
          claim_id: c_RC7ENiLyANqPU33bjeEQg8
          source_id: s_ZzLfdZ5XFBwUtPY63swaY3
          stance: supports
          locator: CBDB:568724
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568724）
          source: &a1
            id: s_ZzLfdZ5XFBwUtPY63swaY3
            source_type: api_record
            title: 中国历代人物传记资料库：王坤吉（CBDB 568724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568724&o=json
            external_identifier: CBDB:568724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HZzpXAQaxn847fVMXMDXFC
        subject_person_id: p_EGFQGCm6uvZQgRKRei6eoF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤吉，清人物。籍贯四川省。（中国历代人物传记资料库 CBDB 568724）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UI361Ab0Z7YJGfJtSecnJf
          claim_id: c_HZzpXAQaxn847fVMXMDXFC
          source_id: s_ZzLfdZ5XFBwUtPY63swaY3
          stance: supports
          locator: CBDB:568724
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

# 王坤吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坤吉 | accepted |
| bio.summary | 王坤吉，清人物。籍贯四川省。（中国历代人物传记资料库 CBDB 568724） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王坤吉（CBDB 568724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568724&o=json)
