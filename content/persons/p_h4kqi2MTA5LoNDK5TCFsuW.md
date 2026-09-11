---
schema: wang-person/v1
id: p_h4kqi2MTA5LoNDK5TCFsuW
status: active
merged_into: null
display_name: 王晙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_28xe1FeLzo6S3MZmCLUCXG
        subject_person_id: p_h4kqi2MTA5LoNDK5TCFsuW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nTYKHyzGHfSptnm8LLSXZs
          claim_id: c_28xe1FeLzo6S3MZmCLUCXG
          source_id: s_VDEJJqKNFPvVEVXvYNLuJQ
          stance: supports
          locator: CBDB:92076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92076）
          source: &a1
            id: s_VDEJJqKNFPvVEVXvYNLuJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王晙（CBDB 92076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92076&o=json
            external_identifier: CBDB:92076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hp365BS9M8HUKwWwz6DC2z
        subject_person_id: p_h4kqi2MTA5LoNDK5TCFsuW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 662年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ABSnMyfK9XQEdCuTY9LCkX
          claim_id: c_hp365BS9M8HUKwWwz6DC2z
          source_id: s_VDEJJqKNFPvVEVXvYNLuJQ
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
        id: c_HFn1z3BDzaSsNW46uAS3qD
        subject_person_id: p_h4kqi2MTA5LoNDK5TCFsuW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 732年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TjJDG6bWmDuRYraMHrhPe9
          claim_id: c_HFn1z3BDzaSsNW46uAS3qD
          source_id: s_VDEJJqKNFPvVEVXvYNLuJQ
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
        id: c_yL4ePA83J2SffPULLbDNGw
        subject_person_id: p_h4kqi2MTA5LoNDK5TCFsuW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晙（662年—732年），唐人物。籍贯景城，身份为工於文，入仕明經，曾任兵部尚書、大都督府長史、大都護。（中国历代人物传记资料库 CBDB 92076）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_61qzBavuKF4gUCHl9T-pAf
          claim_id: c_yL4ePA83J2SffPULLbDNGw
          source_id: s_VDEJJqKNFPvVEVXvYNLuJQ
          stance: supports
          locator: CBDB:92076
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

# 王晙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晙 | accepted |
| birth.date | 662年 | accepted |
| death.date | 732年 | accepted |
| bio.summary | 王晙（662年—732年），唐人物。籍贯景城，身份为工於文，入仕明經，曾任兵部尚書、大都督府長史、大都護。（中国历代人物传记资料库 CBDB 92076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晙（CBDB 92076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92076&o=json)
