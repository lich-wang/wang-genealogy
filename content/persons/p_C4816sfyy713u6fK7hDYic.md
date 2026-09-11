---
schema: wang-person/v1
id: p_C4816sfyy713u6fK7hDYic
status: active
merged_into: null
display_name: 王當
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8r4Q7eNwBCkcnariQDE9mB
        subject_person_id: p_C4816sfyy713u6fK7hDYic
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王當
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F1Fcc4s57LH22Zw5kFhQdw
          claim_id: c_8r4Q7eNwBCkcnariQDE9mB
          source_id: s_oeFsb4CNCVBRR5UJFCSRwF
          stance: supports
          locator: CBDB:10211
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10211）
          source: &a1
            id: s_oeFsb4CNCVBRR5UJFCSRwF
            source_type: api_record
            title: 中国历代人物传记资料库：王當（CBDB 10211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10211&o=json
            external_identifier: CBDB:10211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dwdezgo82tfZFxdUQ1X64K
        subject_person_id: p_C4816sfyy713u6fK7hDYic
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王當，宋人物。籍贯眉山，身份为好學，入仕舉進士、諸科不第，曾任賢良方正、縣尉。（中国历代人物传记资料库 CBDB 10211）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DFoCskc3L-yNkAWCHzxIch
          claim_id: c_dwdezgo82tfZFxdUQ1X64K
          source_id: s_oeFsb4CNCVBRR5UJFCSRwF
          stance: supports
          locator: CBDB:10211
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GegUijso5m97D-ihLs4Woj
        subject_person_id: p_m4omCECgB9Kup9Me7EUCYL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C4816sfyy713u6fK7hDYic
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sx9ZZ1B7lzRuND-4q1lSxN
          claim_id: c_GegUijso5m97D-ihLs4Woj
          source_id: s_oeFsb4CNCVBRR5UJFCSRwF
          stance: supports
          locator: CBDB 双向互证（父 王淮 ⇄ 子 王當）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_m4omCECgB9Kup9Me7EUCYL
        status: active
        display_name: 王淮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王當

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王當 | accepted |
| bio.summary | 王當，宋人物。籍贯眉山，身份为好學，入仕舉進士、諸科不第，曾任賢良方正、縣尉。（中国历代人物传记资料库 CBDB 10211） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_m4omCECgB9Kup9Me7EUCYL | 王淮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王當（CBDB 10211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10211&o=json)
