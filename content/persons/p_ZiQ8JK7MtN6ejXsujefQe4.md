---
schema: wang-person/v1
id: p_ZiQ8JK7MtN6ejXsujefQe4
status: active
merged_into: null
display_name: 王德倫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_phcmmV4bgDnuw4yvCDdez4
        subject_person_id: p_ZiQ8JK7MtN6ejXsujefQe4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YFYoaRDkF54n4EkVPTi9P3
          claim_id: c_phcmmV4bgDnuw4yvCDdez4
          source_id: s_mZoPqUWR6ZTjYN2nHm7AHz
          stance: supports
          locator: CBDB:140584
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140584）
          source: &a1
            id: s_mZoPqUWR6ZTjYN2nHm7AHz
            source_type: api_record
            title: 中国历代人物传记资料库：王德倫（CBDB 140584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140584&o=json
            external_identifier: CBDB:140584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_46yDBfq7CLF5J5v1D16KTd
        subject_person_id: p_ZiQ8JK7MtN6ejXsujefQe4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 642年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1v2h6M7n4GSNdx4edWy9V6
          claim_id: c_46yDBfq7CLF5J5v1D16KTd
          source_id: s_mZoPqUWR6ZTjYN2nHm7AHz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Q5nvu4HSejdcbk2v7JFYzU
        subject_person_id: p_ZiQ8JK7MtN6ejXsujefQe4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 731年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_73UuWDEBMas8K7Vgw4HHTx
          claim_id: c_Q5nvu4HSejdcbk2v7JFYzU
          source_id: s_mZoPqUWR6ZTjYN2nHm7AHz
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
        id: c_GGVQZmahREVjXn8MEQCHpB
        subject_person_id: p_ZiQ8JK7MtN6ejXsujefQe4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德倫（642年—731年），周人物。籍贯太原。（中国历代人物传记资料库 CBDB 140584）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zucD4oMbK4Ljsls1XfeV46
          claim_id: c_GGVQZmahREVjXn8MEQCHpB
          source_id: s_mZoPqUWR6ZTjYN2nHm7AHz
          stance: supports
          locator: CBDB:140584
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

# 王德倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德倫 | accepted |
| birth.date | 642年 | accepted |
| death.date | 731年 | accepted |
| bio.summary | 王德倫（642年—731年），周人物。籍贯太原。（中国历代人物传记资料库 CBDB 140584） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德倫（CBDB 140584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140584&o=json)
