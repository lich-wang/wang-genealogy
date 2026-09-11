---
schema: wang-person/v1
id: p_PtwwWRy4TiKNwgU9M5L2AF
status: active
merged_into: null
display_name: 王德懷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tPYhB6iJ58jBdrsgQx5QQd
        subject_person_id: p_PtwwWRy4TiKNwgU9M5L2AF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德懷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vsSWje14ov9CdPj9PRhwiZ
          claim_id: c_tPYhB6iJ58jBdrsgQx5QQd
          source_id: s_NomtdcX8rrw8dLDwCA9dYw
          stance: supports
          locator: CBDB:69448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69448）
          source: &a1
            id: s_NomtdcX8rrw8dLDwCA9dYw
            source_type: api_record
            title: 中国历代人物传记资料库：王德懷（CBDB 69448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69448&o=json
            external_identifier: CBDB:69448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NDmF6G4NPxP18a74MkWKYG
        subject_person_id: p_PtwwWRy4TiKNwgU9M5L2AF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1862年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JXwBF2Gs522VJUHYG1L7jt
          claim_id: c_NDmF6G4NPxP18a74MkWKYG
          source_id: s_NomtdcX8rrw8dLDwCA9dYw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H6CLweDzF1NJzBEgmBsWkX
        subject_person_id: p_PtwwWRy4TiKNwgU9M5L2AF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德懷（卒于1862年），清人物。籍贯長沙。（中国历代人物传记资料库 CBDB 69448）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_27F0GTcLjfj4_ahYWTxKrl
          claim_id: c_H6CLweDzF1NJzBEgmBsWkX
          source_id: s_NomtdcX8rrw8dLDwCA9dYw
          stance: supports
          locator: CBDB:69448
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

# 王德懷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德懷 | accepted |
| death.date | 1862年 | accepted |
| bio.summary | 王德懷（卒于1862年），清人物。籍贯長沙。（中国历代人物传记资料库 CBDB 69448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德懷（CBDB 69448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69448&o=json)
