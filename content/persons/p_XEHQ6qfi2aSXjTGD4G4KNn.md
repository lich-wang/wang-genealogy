---
schema: wang-person/v1
id: p_XEHQ6qfi2aSXjTGD4G4KNn
status: active
merged_into: null
display_name: 王敬禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wtUvCcZdSTNJFBHn9av9f3
        subject_person_id: p_XEHQ6qfi2aSXjTGD4G4KNn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hTLgeAB7JxQZDz6c1Rx7jo
          claim_id: c_wtUvCcZdSTNJFBHn9av9f3
          source_id: s_Ch5LePLmsmCFYDCWtTscJC
          stance: supports
          locator: CBDB:101380
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101380）
          source: &a1
            id: s_Ch5LePLmsmCFYDCWtTscJC
            source_type: api_record
            title: 中国历代人物传记资料库：王敬禮（CBDB 101380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101380&o=json
            external_identifier: CBDB:101380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VBMPE8mZHKoqtUFdsXkoiq
        subject_person_id: p_XEHQ6qfi2aSXjTGD4G4KNn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬禮，元人物。籍贯洛陽，曾任祕書郎、縣主簿、太常奉禮。（中国历代人物传记资料库 CBDB 101380）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EJt3rhjigxFjMDOf1wneml
          claim_id: c_VBMPE8mZHKoqtUFdsXkoiq
          source_id: s_Ch5LePLmsmCFYDCWtTscJC
          stance: supports
          locator: CBDB:101380
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

# 王敬禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬禮 | accepted |
| bio.summary | 王敬禮，元人物。籍贯洛陽，曾任祕書郎、縣主簿、太常奉禮。（中国历代人物传记资料库 CBDB 101380） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬禮（CBDB 101380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101380&o=json)
