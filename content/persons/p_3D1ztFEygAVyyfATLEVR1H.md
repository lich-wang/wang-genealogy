---
schema: wang-person/v1
id: p_3D1ztFEygAVyyfATLEVR1H
status: active
merged_into: null
display_name: 王之棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wpTNVeXmwFVQsgim67JGpe
        subject_person_id: p_3D1ztFEygAVyyfATLEVR1H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_baWLvCVYMSXF8uVB4jARzb
          claim_id: c_wpTNVeXmwFVQsgim67JGpe
          source_id: s_WyiFq24QS7Fy2DiGFUazoa
          stance: supports
          locator: CBDB:206799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206799）
          source: &a1
            id: s_WyiFq24QS7Fy2DiGFUazoa
            source_type: api_record
            title: 中国历代人物传记资料库：王之棟（CBDB 206799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206799&o=json
            external_identifier: CBDB:206799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xC9gPEc9eLwr8p5cFAv86r
        subject_person_id: p_3D1ztFEygAVyyfATLEVR1H
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1557年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vca8b55rco1sgZF6GNdfqi
          claim_id: c_xC9gPEc9eLwr8p5cFAv86r
          source_id: s_WyiFq24QS7Fy2DiGFUazoa
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
        id: c_79UeuhqDDy3NbG1nftyYr1
        subject_person_id: p_3D1ztFEygAVyyfATLEVR1H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sdZ13s9DH9xiAh7XcSPBg9
          claim_id: c_79UeuhqDDy3NbG1nftyYr1
          source_id: s_WyiFq24QS7Fy2DiGFUazoa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王之棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之棟 | accepted |
| birth.date | 1557年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之棟（CBDB 206799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206799&o=json)
