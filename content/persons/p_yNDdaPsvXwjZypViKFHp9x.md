---
schema: wang-person/v1
id: p_yNDdaPsvXwjZypViKFHp9x
status: active
merged_into: null
display_name: 王簡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wL1GtVTppZ96zbF2bdxF6d
        subject_person_id: p_yNDdaPsvXwjZypViKFHp9x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_REEpS5V2u8cQtENoPE9Q7B
          claim_id: c_wL1GtVTppZ96zbF2bdxF6d
          source_id: s_u1Y3m4gsHcbNhDmG5snMB1
          stance: supports
          locator: CBDB:471069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471069）
          source: &a1
            id: s_u1Y3m4gsHcbNhDmG5snMB1
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 471069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471069&o=json
            external_identifier: CBDB:471069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.168Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_epoRHvEeCt6YK4GvDRPpPD
        subject_person_id: p_yNDdaPsvXwjZypViKFHp9x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BFEKGR8fCuBnVycWm7kz8F
          claim_id: c_epoRHvEeCt6YK4GvDRPpPD
          source_id: s_u1Y3m4gsHcbNhDmG5snMB1
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

# 王簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王簡 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王簡（CBDB 471069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471069&o=json)
