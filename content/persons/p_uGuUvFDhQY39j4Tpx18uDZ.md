---
schema: wang-person/v1
id: p_uGuUvFDhQY39j4Tpx18uDZ
status: active
merged_into: null
display_name: 王勳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KWGCDAVEP9Z7fa14B86HPA
        subject_person_id: p_uGuUvFDhQY39j4Tpx18uDZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_35cGgPqYYrHrYNGZ92v3GQ
          claim_id: c_KWGCDAVEP9Z7fa14B86HPA
          source_id: s_qALFzVZ1YHbCwJSiPNwQ7r
          stance: supports
          locator: CBDB:175721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175721）
          source: &a1
            id: s_qALFzVZ1YHbCwJSiPNwQ7r
            source_type: api_record
            title: 中国历代人物传记资料库：王勳（CBDB 175721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175721&o=json
            external_identifier: CBDB:175721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.082Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iHxuonawC5yY4JaHJgDx8y
        subject_person_id: p_uGuUvFDhQY39j4Tpx18uDZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 806年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ncbJ2fkozypBr6p3X3r9FD
          claim_id: c_iHxuonawC5yY4JaHJgDx8y
          source_id: s_qALFzVZ1YHbCwJSiPNwQ7r
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
        id: c_p2a9cGtg8786RaL6D1ngio
        subject_person_id: p_uGuUvFDhQY39j4Tpx18uDZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uPtZyW1xBc34gdkQBeMQFv
          claim_id: c_p2a9cGtg8786RaL6D1ngio
          source_id: s_qALFzVZ1YHbCwJSiPNwQ7r
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

# 王勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勳 | accepted |
| death.date | 806年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勳（CBDB 175721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175721&o=json)
