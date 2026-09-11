---
schema: wang-person/v1
id: p_3ryptnAZmxniRcQAeBFAVY
status: active
merged_into: null
display_name: 王名杲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jyDgzunPGrgwsZ5muw7FL9
        subject_person_id: p_3ryptnAZmxniRcQAeBFAVY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王名杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pMcGL2jRjQQGN7U9E2KDA4
          claim_id: c_jyDgzunPGrgwsZ5muw7FL9
          source_id: s_9ChXyX7FG935AVxxRTtgQe
          stance: supports
          locator: CBDB:636515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636515）
          source: &a1
            id: s_9ChXyX7FG935AVxxRTtgQe
            source_type: api_record
            title: 中国历代人物传记资料库：王名杲（CBDB 636515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636515&o=json
            external_identifier: CBDB:636515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pVSeCRipo4jttQvVPGtKot
        subject_person_id: p_3ryptnAZmxniRcQAeBFAVY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王名杲，清人物。籍贯山陰，曾任經歷。（中国历代人物传记资料库 CBDB 636515）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RRMECZSn_sgzMyPqJuw0GP
          claim_id: c_pVSeCRipo4jttQvVPGtKot
          source_id: s_9ChXyX7FG935AVxxRTtgQe
          stance: supports
          locator: CBDB:636515
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

# 王名杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王名杲 | accepted |
| bio.summary | 王名杲，清人物。籍贯山陰，曾任經歷。（中国历代人物传记资料库 CBDB 636515） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王名杲（CBDB 636515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636515&o=json)
