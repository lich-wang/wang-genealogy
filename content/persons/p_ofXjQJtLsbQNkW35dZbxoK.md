---
schema: wang-person/v1
id: p_ofXjQJtLsbQNkW35dZbxoK
status: active
merged_into: null
display_name: 王會
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_viWT1XJBtBpJtcYA92m8Ub
        subject_person_id: p_ofXjQJtLsbQNkW35dZbxoK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_axK4nPq2YP7p957TcuMKcB
          claim_id: c_viWT1XJBtBpJtcYA92m8Ub
          source_id: s_Vcj23febhMbVdFFcZLsjDG
          stance: supports
          locator: CBDB:488801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488801）
          source: &a1
            id: s_Vcj23febhMbVdFFcZLsjDG
            source_type: api_record
            title: 中国历代人物传记资料库：王會（CBDB 488801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488801&o=json
            external_identifier: CBDB:488801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aCcJ9aCUk16EM2ZFn3b2g5
        subject_person_id: p_ofXjQJtLsbQNkW35dZbxoK
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
        - id: cs_fbmnHRZcmwRFW2C3yVb38x
          claim_id: c_aCcJ9aCUk16EM2ZFn3b2g5
          source_id: s_Vcj23febhMbVdFFcZLsjDG
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

# 王會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王會（CBDB 488801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488801&o=json)
