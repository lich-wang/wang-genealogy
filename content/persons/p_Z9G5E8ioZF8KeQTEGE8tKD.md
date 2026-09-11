---
schema: wang-person/v1
id: p_Z9G5E8ioZF8KeQTEGE8tKD
status: active
merged_into: null
display_name: 王士毅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EsDWYYqbLCTMokaMT96nwg
        subject_person_id: p_Z9G5E8ioZF8KeQTEGE8tKD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士毅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wHYEERr8K1A7wyvqhU2UFx
          claim_id: c_EsDWYYqbLCTMokaMT96nwg
          source_id: s_HKDq6HM5AKTLq5cLv4GUD2
          stance: supports
          locator: CBDB:101035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101035）
          source: &a1
            id: s_HKDq6HM5AKTLq5cLv4GUD2
            source_type: api_record
            title: 中国历代人物传记资料库：王士毅（CBDB 101035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101035&o=json
            external_identifier: CBDB:101035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E58nSmjZ6cq1dUEH8hcQ7V
        subject_person_id: p_Z9G5E8ioZF8KeQTEGE8tKD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1285年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3JmnGMEpvdjHYLHjv7SUeF
          claim_id: c_E58nSmjZ6cq1dUEH8hcQ7V
          source_id: s_HKDq6HM5AKTLq5cLv4GUD2
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
        id: c_khTPua7nRSPqJKPrLhd6U3
        subject_person_id: p_Z9G5E8ioZF8KeQTEGE8tKD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1356年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t3QLwXfKES1dPrw6BnC3os
          claim_id: c_khTPua7nRSPqJKPrLhd6U3
          source_id: s_HKDq6HM5AKTLq5cLv4GUD2
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
        id: c_1XDtsF2wBJg2dgfu1yLncc
        subject_person_id: p_Z9G5E8ioZF8KeQTEGE8tKD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士毅（1285年—1356年），元人物。籍贯餘姚州，身份为隱居不仕，曾任縣尹。（中国历代人物传记资料库 CBDB 101035）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LNgy7U6pqOd-Bliiu2v9Dr
          claim_id: c_1XDtsF2wBJg2dgfu1yLncc
          source_id: s_HKDq6HM5AKTLq5cLv4GUD2
          stance: supports
          locator: CBDB:101035
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

# 王士毅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士毅 | accepted |
| birth.date | 1285年 | accepted |
| death.date | 1356年 | accepted |
| bio.summary | 王士毅（1285年—1356年），元人物。籍贯餘姚州，身份为隱居不仕，曾任縣尹。（中国历代人物传记资料库 CBDB 101035） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士毅（CBDB 101035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101035&o=json)
