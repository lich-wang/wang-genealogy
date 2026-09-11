---
schema: wang-person/v1
id: p_gpMSreZ1XGTxNvYMPuuB9t
status: active
merged_into: null
display_name: 王兆辰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wTZ6FwFKqJzvc5R3896cGX
        subject_person_id: p_gpMSreZ1XGTxNvYMPuuB9t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pdHPa5gr5FUqryhBKZ5JxX
          claim_id: c_wTZ6FwFKqJzvc5R3896cGX
          source_id: s_Wyjh1uLqLjFvX1eqCKGJ7o
          stance: supports
          locator: CBDB:342665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342665）
          source: &a1
            id: s_Wyjh1uLqLjFvX1eqCKGJ7o
            source_type: api_record
            title: 中国历代人物传记资料库：王兆辰（CBDB 342665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342665&o=json
            external_identifier: CBDB:342665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.007Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Zt6F73ZTczFK4vZPvMLME
        subject_person_id: p_gpMSreZ1XGTxNvYMPuuB9t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆辰，清人物。明清進士進士，籍贯元和，身份为書法家，入仕進士。（中国历代人物传记资料库 CBDB 342665）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z5Y-8cr2oHseYAulHN2su8
          claim_id: c_8Zt6F73ZTczFK4vZPvMLME
          source_id: s_Wyjh1uLqLjFvX1eqCKGJ7o
          stance: supports
          locator: CBDB:342665
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_baTDGOT4z1ewBnXsxZGHzb
        subject_person_id: p_ifLcxLtXFbYaNng7T3wHdE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gpMSreZ1XGTxNvYMPuuB9t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6vt9DQ-2EqGcQYl12H4pz8
          claim_id: c_baTDGOT4z1ewBnXsxZGHzb
          source_id: s_Wyjh1uLqLjFvX1eqCKGJ7o
          stance: supports
          locator: 蘇州府志，lgid=169689：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ifLcxLtXFbYaNng7T3wHdE
        status: active
        display_name: 王煦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王兆辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆辰 | accepted |
| bio.summary | 王兆辰，清人物。明清進士進士，籍贯元和，身份为書法家，入仕進士。（中国历代人物传记资料库 CBDB 342665） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ifLcxLtXFbYaNng7T3wHdE | 王煦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王兆辰（CBDB 342665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342665&o=json)
