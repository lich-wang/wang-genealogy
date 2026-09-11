---
schema: wang-person/v1
id: p_JfmywURQR4mNQH6Be61jzr
status: active
merged_into: null
display_name: 王承元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q3TxUBR96n8BPJJPg5EvH3
        subject_person_id: p_JfmywURQR4mNQH6Be61jzr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ZgxVP5E17v7dkRz9i7d6L
          claim_id: c_q3TxUBR96n8BPJJPg5EvH3
          source_id: s_yCDSJSeNhyPgCSJZgdH26D
          stance: supports
          locator: CBDB:463233
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（463233）
          source: &a1
            id: s_yCDSJSeNhyPgCSJZgdH26D
            source_type: api_record
            title: 中国历代人物传记资料库：王承元（CBDB 463233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=463233&o=json
            external_identifier: CBDB:463233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BjJFox7hCsvfibPUU9TQAE
        subject_person_id: p_JfmywURQR4mNQH6Be61jzr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承元，唐人物。曾任節度使。（中国历代人物传记资料库 CBDB 463233）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9Ox3fQ03j4uRBRDr0coYnz
          claim_id: c_BjJFox7hCsvfibPUU9TQAE
          source_id: s_yCDSJSeNhyPgCSJZgdH26D
          stance: supports
          locator: CBDB:463233
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

# 王承元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承元 | accepted |
| bio.summary | 王承元，唐人物。曾任節度使。（中国历代人物传记资料库 CBDB 463233） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承元（CBDB 463233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=463233&o=json)
