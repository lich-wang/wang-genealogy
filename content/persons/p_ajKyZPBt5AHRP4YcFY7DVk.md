---
schema: wang-person/v1
id: p_ajKyZPBt5AHRP4YcFY7DVk
status: active
merged_into: null
display_name: 王渥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bXV65zVRT17FfFgG7xk7dU
        subject_person_id: p_ajKyZPBt5AHRP4YcFY7DVk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i8a1DWEsdRRD1kn5r2mcon
          claim_id: c_bXV65zVRT17FfFgG7xk7dU
          source_id: s_B1pkAKKHCFHu9G6b5G6iBP
          stance: supports
          locator: CBDB:38264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38264）
          source: &a1
            id: s_B1pkAKKHCFHu9G6b5G6iBP
            source_type: api_record
            title: 中国历代人物传记资料库：王渥（CBDB 38264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38264&o=json
            external_identifier: CBDB:38264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cWLggKTC2TT9rHtvKTx39z
        subject_person_id: p_ajKyZPBt5AHRP4YcFY7DVk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渥，宋人物。曾任推官、軍事推官。（中国历代人物传记资料库 CBDB 38264）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LJtEReKu_sRHl8lVl3rz1L
          claim_id: c_cWLggKTC2TT9rHtvKTx39z
          source_id: s_B1pkAKKHCFHu9G6b5G6iBP
          stance: supports
          locator: CBDB:38264
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

# 王渥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渥 | accepted |
| bio.summary | 王渥，宋人物。曾任推官、軍事推官。（中国历代人物传记资料库 CBDB 38264） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王渥（CBDB 38264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38264&o=json)
