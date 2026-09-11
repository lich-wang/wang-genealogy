---
schema: wang-person/v1
id: p_fcgZkPcPhSngyoMETKLXqk
status: active
merged_into: null
display_name: 王康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dGFAgqSuYF2PSsv6q788Tq
        subject_person_id: p_fcgZkPcPhSngyoMETKLXqk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ceJzK1q8g8pAp4Nr5CiGAu
          claim_id: c_dGFAgqSuYF2PSsv6q788Tq
          source_id: s_72zpBKPEqD7QH9xeTrwPHK
          stance: supports
          locator: CBDB:71197
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71197）
          source: &a1
            id: s_72zpBKPEqD7QH9xeTrwPHK
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 71197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71197&o=json
            external_identifier: CBDB:71197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_p71PxzWTWFJ5aHDhhqX2Mh
        subject_person_id: p_fcgZkPcPhSngyoMETKLXqk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1691年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fYHfs3Yf6GSJjRuYRURKuh
          claim_id: c_p71PxzWTWFJ5aHDhhqX2Mh
          source_id: s_72zpBKPEqD7QH9xeTrwPHK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7pBcDVh1Xnz7GpLa6DMHiN
        subject_person_id: p_fcgZkPcPhSngyoMETKLXqk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康（生于1691年），清人物。籍贯大興。（中国历代人物传记资料库 CBDB 71197）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pC1qySKNLU47uBI5iRgBho
          claim_id: c_7pBcDVh1Xnz7GpLa6DMHiN
          source_id: s_72zpBKPEqD7QH9xeTrwPHK
          stance: supports
          locator: CBDB:71197
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

# 王康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康 | accepted |
| birth.date | 1691年 | accepted |
| bio.summary | 王康（生于1691年），清人物。籍贯大興。（中国历代人物传记资料库 CBDB 71197） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王康（CBDB 71197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71197&o=json)
