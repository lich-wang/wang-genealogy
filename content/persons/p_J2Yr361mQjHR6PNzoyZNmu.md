---
schema: wang-person/v1
id: p_J2Yr361mQjHR6PNzoyZNmu
status: active
merged_into: null
display_name: 王世治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mg7EeqCBZ6jb5DrhsDs9fh
        subject_person_id: p_J2Yr361mQjHR6PNzoyZNmu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6UL29f5MAHZd4jh9nH7u7L
          claim_id: c_mg7EeqCBZ6jb5DrhsDs9fh
          source_id: s_pE5bt8MmZ8mU7fPiL3SLPQ
          stance: supports
          locator: CBDB:635688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635688）
          source: &a1
            id: s_pE5bt8MmZ8mU7fPiL3SLPQ
            source_type: api_record
            title: 中国历代人物传记资料库：王世治（CBDB 635688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635688&o=json
            external_identifier: CBDB:635688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d7BvzU4Lhm5kzP8KePGBQa
        subject_person_id: p_J2Yr361mQjHR6PNzoyZNmu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世治，清人物。籍贯仁壽，曾任知縣。（中国历代人物传记资料库 CBDB 635688）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ppP1ScYrZesYL6Y7XRBao-
          claim_id: c_d7BvzU4Lhm5kzP8KePGBQa
          source_id: s_pE5bt8MmZ8mU7fPiL3SLPQ
          stance: supports
          locator: CBDB:635688
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

# 王世治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世治 | accepted |
| bio.summary | 王世治，清人物。籍贯仁壽，曾任知縣。（中国历代人物传记资料库 CBDB 635688） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世治（CBDB 635688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635688&o=json)
