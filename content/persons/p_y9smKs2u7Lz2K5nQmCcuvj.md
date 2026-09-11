---
schema: wang-person/v1
id: p_y9smKs2u7Lz2K5nQmCcuvj
status: active
merged_into: null
display_name: 王秩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MADtZNFEqgjfPDD9xKJTZK
        subject_person_id: p_y9smKs2u7Lz2K5nQmCcuvj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4n5bMAAg4TkvtYnZwCZ7CW
          claim_id: c_MADtZNFEqgjfPDD9xKJTZK
          source_id: s_XVmXwXd7aYNGJi8Txe4ACT
          stance: supports
          locator: CBDB:283106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283106）
          source: &a1
            id: s_XVmXwXd7aYNGJi8Txe4ACT
            source_type: api_record
            title: 中国历代人物传记资料库：王秩（CBDB 283106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283106&o=json
            external_identifier: CBDB:283106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.127Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jNipHaM7brr6KdBxXFvoVv
        subject_person_id: p_y9smKs2u7Lz2K5nQmCcuvj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秩，明人物。正德十六年進士，籍贯儀真。（中国历代人物传记资料库 CBDB 283106）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XBzhVIWejIRZnm8GzutI63
          claim_id: c_jNipHaM7brr6KdBxXFvoVv
          source_id: s_XVmXwXd7aYNGJi8Txe4ACT
          stance: supports
          locator: CBDB:283106
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

# 王秩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秩 | accepted |
| bio.summary | 王秩，明人物。正德十六年進士，籍贯儀真。（中国历代人物传记资料库 CBDB 283106） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秩（CBDB 283106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283106&o=json)
