---
schema: wang-person/v1
id: p_Md8FAeKJXZbeTkRiihYyam
status: active
merged_into: null
display_name: 王我庸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pZPymrjjC7iEVVNMWP76d5
        subject_person_id: p_Md8FAeKJXZbeTkRiihYyam
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王我庸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U55zp43bK9KMMVdFW2YmMh
          claim_id: c_pZPymrjjC7iEVVNMWP76d5
          source_id: s_wk8o37T2TY21hfT8UAEseH
          stance: supports
          locator: CBDB:71673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71673）
          source: &a1
            id: s_wk8o37T2TY21hfT8UAEseH
            source_type: api_record
            title: 中国历代人物传记资料库：王我庸（CBDB 71673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71673&o=json
            external_identifier: CBDB:71673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PH92cSTLe9YHcSNMkSGBuE
        subject_person_id: p_Md8FAeKJXZbeTkRiihYyam
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1624年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6MiZnED1L2cQJg1mDHaicu
          claim_id: c_PH92cSTLe9YHcSNMkSGBuE
          source_id: s_wk8o37T2TY21hfT8UAEseH
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
        id: c_ghfBYFV3FunSMKA48RNy8g
        subject_person_id: p_Md8FAeKJXZbeTkRiihYyam
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王我庸（生于1624年），清人物。籍贯淄川。（中国历代人物传记资料库 CBDB 71673）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T4Kh71wP2lRaqCFwXoRDNW
          claim_id: c_ghfBYFV3FunSMKA48RNy8g
          source_id: s_wk8o37T2TY21hfT8UAEseH
          stance: supports
          locator: CBDB:71673
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

# 王我庸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王我庸 | accepted |
| birth.date | 1624年 | accepted |
| bio.summary | 王我庸（生于1624年），清人物。籍贯淄川。（中国历代人物传记资料库 CBDB 71673） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王我庸（CBDB 71673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71673&o=json)
