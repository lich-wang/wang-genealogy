---
schema: wang-person/v1
id: p_WCPixN7nTn8Gm4ABCTz9Uf
status: active
merged_into: null
display_name: 王經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_28nrGbYB72EGEuufneDtVa
        subject_person_id: p_WCPixN7nTn8Gm4ABCTz9Uf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LpeWejYkFetKmi8AKttGHK
          claim_id: c_28nrGbYB72EGEuufneDtVa
          source_id: s_9fMwTrqcCGj7F34Avcrbwq
          stance: supports
          locator: CBDB:260407
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260407）
          source: &a1
            id: s_9fMwTrqcCGj7F34Avcrbwq
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 260407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260407&o=json
            external_identifier: CBDB:260407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.509Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MMgkBst5xZUoXPg3a1GwLA
        subject_person_id: p_WCPixN7nTn8Gm4ABCTz9Uf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260407）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__I2fbDertV5vHiB2ugu_gL
          claim_id: c_MMgkBst5xZUoXPg3a1GwLA
          source_id: s_9fMwTrqcCGj7F34Avcrbwq
          stance: supports
          locator: CBDB:260407
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

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| bio.summary | 王經，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260407） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王經（CBDB 260407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260407&o=json)
