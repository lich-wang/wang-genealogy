---
schema: wang-person/v1
id: p_Nisq5WouHnbyBM76cztgEy
status: active
merged_into: null
display_name: 王介
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_87S6Z16YjLu37eq1cA1e3E
        subject_person_id: p_Nisq5WouHnbyBM76cztgEy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Em9tAawVMM83eKG3uShzP8
          claim_id: c_87S6Z16YjLu37eq1cA1e3E
          source_id: s_mv329Xqg74Wr3ULVCYxBLE
          stance: supports
          locator: CBDB:38544
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38544）
          source: &a1
            id: s_mv329Xqg74Wr3ULVCYxBLE
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 38544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38544&o=json
            external_identifier: CBDB:38544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qbCBE97mBsavGttrFVfD6P
        subject_person_id: p_Nisq5WouHnbyBM76cztgEy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介，宋人物。籍贯吉水，身份为收徒講學，入仕進士，曾任縣主簿。（中国历代人物传记资料库 CBDB 38544）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E9BCFleedHozTNqEf9aGVR
          claim_id: c_qbCBE97mBsavGttrFVfD6P
          source_id: s_mv329Xqg74Wr3ULVCYxBLE
          stance: supports
          locator: CBDB:38544
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

# 王介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介 | accepted |
| bio.summary | 王介，宋人物。籍贯吉水，身份为收徒講學，入仕進士，曾任縣主簿。（中国历代人物传记资料库 CBDB 38544） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王介（CBDB 38544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38544&o=json)
