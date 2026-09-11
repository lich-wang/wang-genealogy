---
schema: wang-person/v1
id: p_AWSpD7qHWRdyfwKfdN4uSz
status: active
merged_into: null
display_name: 王站柱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kfeYqsQ3R4MPjsgCXps7i4
        subject_person_id: p_AWSpD7qHWRdyfwKfdN4uSz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王站柱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WtVKPxZcaR96qnpB9LY8d2
          claim_id: c_kfeYqsQ3R4MPjsgCXps7i4
          source_id: s_cQc6uQ33hseGv7nQ6WveUE
          stance: supports
          locator: CBDB:61559
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61559）
          source: &a1
            id: s_cQc6uQ33hseGv7nQ6WveUE
            source_type: api_record
            title: 中国历代人物传记资料库：王站柱（CBDB 61559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61559&o=json
            external_identifier: CBDB:61559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YRiRktJrYx28w5ob6U52Ts
        subject_person_id: p_AWSpD7qHWRdyfwKfdN4uSz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1728年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Kz1nUi1Uvbe398DXo6SDE
          claim_id: c_YRiRktJrYx28w5ob6U52Ts
          source_id: s_cQc6uQ33hseGv7nQ6WveUE
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
        id: c_NtyJgcBCcWkesEmGVrd7iG
        subject_person_id: p_AWSpD7qHWRdyfwKfdN4uSz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1790年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XWgBLHFuajFASeZeaFtKtH
          claim_id: c_NtyJgcBCcWkesEmGVrd7iG
          source_id: s_cQc6uQ33hseGv7nQ6WveUE
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
        id: c_cWUuKSGMDeQM4wLY1DqzyJ
        subject_person_id: p_AWSpD7qHWRdyfwKfdN4uSz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王站柱（1728年—1790年），清人物。籍贯漢軍正白旗，入仕鄉貢舉人，曾任按察使、知府。（中国历代人物传记资料库 CBDB 61559）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jK0v6jSHzUabfASz9N-LUU
          claim_id: c_cWUuKSGMDeQM4wLY1DqzyJ
          source_id: s_cQc6uQ33hseGv7nQ6WveUE
          stance: supports
          locator: CBDB:61559
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

# 王站柱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王站柱 | accepted |
| birth.date | 1728年 | accepted |
| death.date | 1790年 | accepted |
| bio.summary | 王站柱（1728年—1790年），清人物。籍贯漢軍正白旗，入仕鄉貢舉人，曾任按察使、知府。（中国历代人物传记资料库 CBDB 61559） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王站柱（CBDB 61559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61559&o=json)
