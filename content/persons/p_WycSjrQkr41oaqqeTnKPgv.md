---
schema: wang-person/v1
id: p_WycSjrQkr41oaqqeTnKPgv
status: active
merged_into: null
display_name: 王庭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ANHapdAx26p7m9oHXSPvEj
        subject_person_id: p_WycSjrQkr41oaqqeTnKPgv
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
        - id: cs_LzmoFsf5gT9M7MtbxWknVH
          claim_id: c_ANHapdAx26p7m9oHXSPvEj
          source_id: s_W2ZnUZwZZw3baLkvHhLRcx
          stance: supports
          locator: CBDB:688871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688871）
          source: &a1
            id: s_W2ZnUZwZZw3baLkvHhLRcx
            source_type: api_record
            title: 中国历代人物传记资料库：王庭（CBDB 688871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688871&o=json
            external_identifier: CBDB:688871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vc9HK7Mh2BknhEva972Eh1
        subject_person_id: p_WycSjrQkr41oaqqeTnKPgv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭，宋人物。籍贯上饒，入仕進士。（中国历代人物传记资料库 CBDB 688871）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6t0kTpjI-FlL0HHGblhIxA
          claim_id: c_Vc9HK7Mh2BknhEva972Eh1
          source_id: s_W2ZnUZwZZw3baLkvHhLRcx
          stance: supports
          locator: CBDB:688871
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

# 王庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭 | accepted |
| bio.summary | 王庭，宋人物。籍贯上饒，入仕進士。（中国历代人物传记资料库 CBDB 688871） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭（CBDB 688871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688871&o=json)
