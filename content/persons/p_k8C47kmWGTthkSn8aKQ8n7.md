---
schema: wang-person/v1
id: p_k8C47kmWGTthkSn8aKQ8n7
status: active
merged_into: null
display_name: 王塾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oYyp4yM61EPtJSU6SD2Bba
        subject_person_id: p_k8C47kmWGTthkSn8aKQ8n7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LuJ2muc9XPAuLcWDjCjFPi
          claim_id: c_oYyp4yM61EPtJSU6SD2Bba
          source_id: s_MS7GA5J76eG9KuvQD5KsEx
          stance: supports
          locator: CBDB:71263
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71263）
          source: &a1
            id: s_MS7GA5J76eG9KuvQD5KsEx
            source_type: api_record
            title: 中国历代人物传记资料库：王塾（CBDB 71263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71263&o=json
            external_identifier: CBDB:71263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_r656JPn7D8vP24eJ9dnE1F
        subject_person_id: p_k8C47kmWGTthkSn8aKQ8n7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bkZ1qotD9XNP5gFPwdPxap
          claim_id: c_r656JPn7D8vP24eJ9dnE1F
          source_id: s_MS7GA5J76eG9KuvQD5KsEx
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
        id: c_jLXfLzWNJrMGtfrThYEzjA
        subject_person_id: p_k8C47kmWGTthkSn8aKQ8n7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1902年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Keuo3vTnxHxiKRRWdCw2Lq
          claim_id: c_jLXfLzWNJrMGtfrThYEzjA
          source_id: s_MS7GA5J76eG9KuvQD5KsEx
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
        id: c_fTQENro2oMXbAM4v81wMvD
        subject_person_id: p_k8C47kmWGTthkSn8aKQ8n7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塾（1852年—1902年），清人物。籍贯萊陽。（中国历代人物传记资料库 CBDB 71263）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RTEzX24MmdNRnqv7kY4W37
          claim_id: c_fTQENro2oMXbAM4v81wMvD
          source_id: s_MS7GA5J76eG9KuvQD5KsEx
          stance: supports
          locator: CBDB:71263
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

# 王塾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王塾 | accepted |
| birth.date | 1852年 | accepted |
| death.date | 1902年 | accepted |
| bio.summary | 王塾（1852年—1902年），清人物。籍贯萊陽。（中国历代人物传记资料库 CBDB 71263） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王塾（CBDB 71263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71263&o=json)
