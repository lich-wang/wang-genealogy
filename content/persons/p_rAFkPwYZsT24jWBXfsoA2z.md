---
schema: wang-person/v1
id: p_rAFkPwYZsT24jWBXfsoA2z
status: active
merged_into: null
display_name: 王仁浹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UcM3oCG4u5hzzRoSxki9MA
        subject_person_id: p_rAFkPwYZsT24jWBXfsoA2z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁浹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b9hNzF2HKqB9vGGuvSdP6u
          claim_id: c_UcM3oCG4u5hzzRoSxki9MA
          source_id: s_ACEon97QCH9w7GJPcvMu9s
          stance: supports
          locator: CBDB:529467
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（529467）
          source: &a1
            id: s_ACEon97QCH9w7GJPcvMu9s
            source_type: api_record
            title: 中国历代人物传记资料库：王仁浹（CBDB 529467）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529467&o=json
            external_identifier: CBDB:529467
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XiEjp7HTSaTQ9cE8AYfJsZ
        subject_person_id: p_rAFkPwYZsT24jWBXfsoA2z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁浹，史料所见人物。本项目依据《中国历代人物传记资料库：王仁浹（CBDB 529467）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1TmdnbANFglApqOA_o2Y5p
          claim_id: c_XiEjp7HTSaTQ9cE8AYfJsZ
          source_id: s_ACEon97QCH9w7GJPcvMu9s
          stance: supports
          locator: CBDB:529467
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XjvuEXGuOxcZGdd182GnML
        subject_person_id: p_AWvPAN6ipxtLJGDv5eQKYe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rAFkPwYZsT24jWBXfsoA2z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vUEshxh43Mp-8zOohX8c9n
          claim_id: c_XjvuEXGuOxcZGdd182GnML
          source_id: s_ACEon97QCH9w7GJPcvMu9s
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），15110：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AWvPAN6ipxtLJGDv5eQKYe
        status: active
        display_name: 王孫蘭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁浹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁浹 | accepted |
| bio.summary | 王仁浹，史料所见人物。本项目依据《中国历代人物传记资料库：王仁浹（CBDB 529467）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AWvPAN6ipxtLJGDv5eQKYe | 王孫蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁浹（CBDB 529467）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529467&o=json)
