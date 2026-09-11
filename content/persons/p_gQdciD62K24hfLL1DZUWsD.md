---
schema: wang-person/v1
id: p_gQdciD62K24hfLL1DZUWsD
status: active
merged_into: null
display_name: 王英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MyPfH3kAA9Ntf4QhQMzzPD
        subject_person_id: p_gQdciD62K24hfLL1DZUWsD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qXjTu5ebuxJampMbBN7HXZ
          claim_id: c_MyPfH3kAA9Ntf4QhQMzzPD
          source_id: s_7kqmhdKStKwWfQioVjqCBJ
          stance: supports
          locator: CBDB:92029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92029）
          source: &a1
            id: s_7kqmhdKStKwWfQioVjqCBJ
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 92029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92029&o=json
            external_identifier: CBDB:92029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.095Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_98KE9HJ5Z2rPKoogTkqFeF
        subject_person_id: p_gQdciD62K24hfLL1DZUWsD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英，唐人物。籍贯太原，身份为工於文。（中国历代人物传记资料库 CBDB 92029）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S7J6dlP2q4hKv1zN_d0zcO
          claim_id: c_98KE9HJ5Z2rPKoogTkqFeF
          source_id: s_7kqmhdKStKwWfQioVjqCBJ
          stance: supports
          locator: CBDB:92029
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

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | 王英，唐人物。籍贯太原，身份为工於文。（中国历代人物传记资料库 CBDB 92029） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 92029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92029&o=json)
