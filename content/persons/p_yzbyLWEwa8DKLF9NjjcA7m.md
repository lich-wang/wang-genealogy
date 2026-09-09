---
schema: wang-person/v1
id: p_yzbyLWEwa8DKLF9NjjcA7m
status: active
merged_into: null
display_name: 王庭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_55ZfanAZd15tBqhPn8hUEz
        subject_person_id: p_yzbyLWEwa8DKLF9NjjcA7m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AZa3gfc3AsTErPPW3c1TrX
          claim_id: c_55ZfanAZd15tBqhPn8hUEz
          source_id: s_f3ZM1ZW8RUJMR1p7MuFGT2
          stance: supports
          locator: CBDB:156054
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（156054）
          source: &a1
            id: s_f3ZM1ZW8RUJMR1p7MuFGT2
            source_type: api_record
            title: 中国历代人物传记资料库：王庭（CBDB 156054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156054&o=json
            external_identifier: CBDB:156054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sjNXKzhC1mmFH23vUG3Tzj
        subject_person_id: p_yzbyLWEwa8DKLF9NjjcA7m
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
        - id: cs_AX8RPsSx2LSFNqwWSmxs19
          claim_id: c_sjNXKzhC1mmFH23vUG3Tzj
          source_id: s_f3ZM1ZW8RUJMR1p7MuFGT2
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

# 王庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭（CBDB 156054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156054&o=json)
