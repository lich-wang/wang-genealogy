---
schema: wang-person/v1
id: p_2wg4ZyAiCBX1cTw8Sw1ETa
status: active
merged_into: null
display_name: 王世恩
cbdb_id: 71468
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PoQPUWY5HpXLZVzCAY5LPz
        subject_person_id: p_2wg4ZyAiCBX1cTw8Sw1ETa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世恩（生于1831年），清人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71468）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UNBFrKXbGBf5QE7wdg2IQf
          claim_id: c_PoQPUWY5HpXLZVzCAY5LPz
          source_id: s_iuUD1Sy3Vx1oQGA37CjbyW
          stance: supports
          locator: CBDB:71468
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iuUD1Sy3Vx1oQGA37CjbyW
            source_type: api_record
            title: 中国历代人物传记资料库：王世恩（CBDB 71468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71468&o=json
            external_identifier: CBDB:71468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6AaVJ2jmwRnAHmNUp7K4nx
        subject_person_id: p_2wg4ZyAiCBX1cTw8Sw1ETa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1831年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1831-01-01
            latest: 1831-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yHJKNHiDUDy8BXmofdpVRo
          claim_id: c_6AaVJ2jmwRnAHmNUp7K4nx
          source_id: s_iuUD1Sy3Vx1oQGA37CjbyW
          stance: supports
          locator: CBDB:71468
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1831
          source:
            id: s_iuUD1Sy3Vx1oQGA37CjbyW
            source_type: api_record
            title: 中国历代人物传记资料库：王世恩（CBDB 71468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71468&o=json
            external_identifier: CBDB:71468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XmNGLLJudGC6xAv9M4d2MT
        subject_person_id: p_2wg4ZyAiCBX1cTw8Sw1ETa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CaRkf7dP7e32E5pJs6dBvu
          claim_id: c_XmNGLLJudGC6xAv9M4d2MT
          source_id: s_iuUD1Sy3Vx1oQGA37CjbyW
          stance: supports
          locator: CBDB:71468
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1831
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

# 王世恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世恩（生于1831年），清人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71468） | accepted |
| birth.date | 1831年 | accepted |
| name.primary | 王世恩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世恩（CBDB 71468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71468&o=json)
