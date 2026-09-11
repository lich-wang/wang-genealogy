---
schema: wang-person/v1
id: p_oqzv5oC7C4HFDay2id6qHh
status: active
merged_into: null
display_name: 王知道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VBR6sQp1jaiJ1nVyLU9MXZ
        subject_person_id: p_oqzv5oC7C4HFDay2id6qHh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w9sD5JPU7amw1uiy2PG4UD
          claim_id: c_VBR6sQp1jaiJ1nVyLU9MXZ
          source_id: s_rVwxXeYstxrjJCBwGfFkk9
          stance: supports
          locator: CBDB:377901
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377901）
          source: &a1
            id: s_rVwxXeYstxrjJCBwGfFkk9
            source_type: api_record
            title: 中国历代人物传记资料库：王知道（CBDB 377901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377901&o=json
            external_identifier: CBDB:377901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.640Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7kwCN1GPXxu6wbTbo8abE6
        subject_person_id: p_oqzv5oC7C4HFDay2id6qHh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知道，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377901）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1KOYAxNqP4AxNtzCxfThTJ
          claim_id: c_7kwCN1GPXxu6wbTbo8abE6
          source_id: s_rVwxXeYstxrjJCBwGfFkk9
          stance: supports
          locator: CBDB:377901
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

# 王知道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王知道 | accepted |
| bio.summary | 王知道，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377901） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王知道（CBDB 377901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377901&o=json)
