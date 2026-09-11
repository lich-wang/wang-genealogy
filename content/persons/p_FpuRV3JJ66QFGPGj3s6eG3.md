---
schema: wang-person/v1
id: p_FpuRV3JJ66QFGPGj3s6eG3
status: active
merged_into: null
display_name: 王藹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nu5jLWnG9Ex2v8YBnSe8Ho
        subject_person_id: p_FpuRV3JJ66QFGPGj3s6eG3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b1gkkmCYLSQt7qXpo8WMJ8
          claim_id: c_Nu5jLWnG9Ex2v8YBnSe8Ho
          source_id: s_16NozWZi4HMPDBUhcTjGBU
          stance: supports
          locator: CBDB:703029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703029）
          source: &a1
            id: s_16NozWZi4HMPDBUhcTjGBU
            source_type: api_record
            title: 中国历代人物传记资料库：王藹（CBDB 703029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703029&o=json
            external_identifier: CBDB:703029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AXh1tJ5UcrqzsNZhq82UkW
        subject_person_id: p_FpuRV3JJ66QFGPGj3s6eG3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藹，明人物。籍贯寧波府，入仕明經，曾任知縣。（中国历代人物传记资料库 CBDB 703029）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T5HeUosyDKHhzFZ7O3PNXf
          claim_id: c_AXh1tJ5UcrqzsNZhq82UkW
          source_id: s_16NozWZi4HMPDBUhcTjGBU
          stance: supports
          locator: CBDB:703029
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

# 王藹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藹 | accepted |
| bio.summary | 王藹，明人物。籍贯寧波府，入仕明經，曾任知縣。（中国历代人物传记资料库 CBDB 703029） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藹（CBDB 703029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703029&o=json)
