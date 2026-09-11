---
schema: wang-person/v1
id: p_78M1AqCPvJ2QyJ57KW6eY8
status: active
merged_into: null
display_name: 王錫穀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wVw62oC2cscmssGS6Vb9dv
        subject_person_id: p_78M1AqCPvJ2QyJ57KW6eY8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫穀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HMXsYgPXac3Z4znkPQYgcH
          claim_id: c_wVw62oC2cscmssGS6Vb9dv
          source_id: s_dsdznXUm39AkQXiE48km84
          stance: supports
          locator: CBDB:640613
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640613）
          source: &a1
            id: s_dsdznXUm39AkQXiE48km84
            source_type: api_record
            title: 中国历代人物传记资料库：王錫穀（CBDB 640613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640613&o=json
            external_identifier: CBDB:640613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7fzJe5H1LBy4j39KeSyJVW
        subject_person_id: p_78M1AqCPvJ2QyJ57KW6eY8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫穀，清人物。籍贯西安，曾任訓導。（中国历代人物传记资料库 CBDB 640613）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t6Jo-qlEPyHqkWFWnUmpCt
          claim_id: c_7fzJe5H1LBy4j39KeSyJVW
          source_id: s_dsdznXUm39AkQXiE48km84
          stance: supports
          locator: CBDB:640613
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

# 王錫穀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫穀 | accepted |
| bio.summary | 王錫穀，清人物。籍贯西安，曾任訓導。（中国历代人物传记资料库 CBDB 640613） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫穀（CBDB 640613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640613&o=json)
