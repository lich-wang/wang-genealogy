---
schema: wang-person/v1
id: p_QuRKgQ7yCNQtwDzkmHCzuU
status: active
merged_into: null
display_name: 王思明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MvGeG6dn9GvKah2jj7TZfS
        subject_person_id: p_QuRKgQ7yCNQtwDzkmHCzuU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eWwrzBAK1AYJJbZKTx4c1u
          claim_id: c_MvGeG6dn9GvKah2jj7TZfS
          source_id: s_mT7qtFcQfgFdxHj933ooKm
          stance: supports
          locator: CBDB:237445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237445）
          source: &a1
            id: s_mT7qtFcQfgFdxHj933ooKm
            source_type: api_record
            title: 中国历代人物传记资料库：王思明（CBDB 237445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237445&o=json
            external_identifier: CBDB:237445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PZjj49sjJt8H7BhhmpV9Ly
        subject_person_id: p_QuRKgQ7yCNQtwDzkmHCzuU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kUScSbh8C8wAoZgQKBb18n
          claim_id: c_PZjj49sjJt8H7BhhmpV9Ly
          source_id: s_mT7qtFcQfgFdxHj933ooKm
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

# 王思明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思明 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思明（CBDB 237445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237445&o=json)
