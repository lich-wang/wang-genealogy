---
schema: wang-person/v1
id: p_7Q7yNBLLdnHu6a72zjFjfT
status: active
merged_into: null
display_name: 王宫臻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qLiS8AHEsBFPL3sRPuPJJV
        subject_person_id: p_7Q7yNBLLdnHu6a72zjFjfT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宫臻
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ow6uNdaVNnzuCJ4tGkoXU
          claim_id: c_qLiS8AHEsBFPL3sRPuPJJV
          source_id: s_NbvnDVuTkpqg1vhH28KLAF
          stance: supports
          locator: CBDB:414334
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414334）
          source: &a1
            id: s_NbvnDVuTkpqg1vhH28KLAF
            source_type: api_record
            title: 中国历代人物传记资料库：王宫臻（CBDB 414334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414334&o=json
            external_identifier: CBDB:414334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sQ16eDBLDhSH7NJG5MT75n
        subject_person_id: p_7Q7yNBLLdnHu6a72zjFjfT
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
        - id: cs_ftR6bxQ2a3QZPVjD7xxNsk
          claim_id: c_sQ16eDBLDhSH7NJG5MT75n
          source_id: s_NbvnDVuTkpqg1vhH28KLAF
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

# 王宫臻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宫臻 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宫臻（CBDB 414334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414334&o=json)
