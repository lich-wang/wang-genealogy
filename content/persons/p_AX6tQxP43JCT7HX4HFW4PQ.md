---
schema: wang-person/v1
id: p_AX6tQxP43JCT7HX4HFW4PQ
status: active
merged_into: null
display_name: 王祐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E3qzAsELdFd7AfVjYRxHcC
        subject_person_id: p_AX6tQxP43JCT7HX4HFW4PQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f8zgd4GKFd4XgtmXzE8GLk
          claim_id: c_E3qzAsELdFd7AfVjYRxHcC
          source_id: s_HNYqKQe8bXY8CJdD7GAikL
          stance: supports
          locator: CBDB:466865
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466865）
          source: &a1
            id: s_HNYqKQe8bXY8CJdD7GAikL
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 466865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466865&o=json
            external_identifier: CBDB:466865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lyg3Gx2wZVCgDNkU9j1gXh
        subject_person_id: p_AX6tQxP43JCT7HX4HFW4PQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祐，明人物。籍贯奉化，入仕監生，曾任知縣、州判官。（中国历代人物传记资料库 CBDB 466865）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sQo9mC_wqg10udhA8EAo4b
          claim_id: c_Lyg3Gx2wZVCgDNkU9j1gXh
          source_id: s_HNYqKQe8bXY8CJdD7GAikL
          stance: supports
          locator: CBDB:466865
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

# 王祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祐 | accepted |
| bio.summary | 王祐，明人物。籍贯奉化，入仕監生，曾任知縣、州判官。（中国历代人物传记资料库 CBDB 466865） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祐（CBDB 466865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466865&o=json)
