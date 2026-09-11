---
schema: wang-person/v1
id: p_TB9LpzgnQ5kzSZ4DL8HERY
status: active
merged_into: null
display_name: 王彝象
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9k5jhWaF4fT7UsKAyq3wbE
        subject_person_id: p_TB9LpzgnQ5kzSZ4DL8HERY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝象
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jkhxNuM7ibAdv2CHak9cTW
          claim_id: c_9k5jhWaF4fT7UsKAyq3wbE
          source_id: s_QH7C8ZxZZBuA1KjDTD2ap2
          stance: supports
          locator: CBDB:637616
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637616）
          source: &a1
            id: s_QH7C8ZxZZBuA1KjDTD2ap2
            source_type: api_record
            title: 中国历代人物传记资料库：王彝象（CBDB 637616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637616&o=json
            external_identifier: CBDB:637616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CUGV4wQJJTe6dM4LpRg7zU
        subject_person_id: p_TB9LpzgnQ5kzSZ4DL8HERY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝象，清人物。籍贯上元，入仕監生，曾任知府、知縣、知州。（中国历代人物传记资料库 CBDB 637616）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lj299KGWJsuqgQJPKOFuMw
          claim_id: c_CUGV4wQJJTe6dM4LpRg7zU
          source_id: s_QH7C8ZxZZBuA1KjDTD2ap2
          stance: supports
          locator: CBDB:637616
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

# 王彝象

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彝象 | accepted |
| bio.summary | 王彝象，清人物。籍贯上元，入仕監生，曾任知府、知縣、知州。（中国历代人物传记资料库 CBDB 637616） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彝象（CBDB 637616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637616&o=json)
