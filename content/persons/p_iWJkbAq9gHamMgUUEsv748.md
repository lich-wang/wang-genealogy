---
schema: wang-person/v1
id: p_iWJkbAq9gHamMgUUEsv748
status: active
merged_into: null
display_name: 王方
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pb7HZLE2BMh38LHLPuV74L
        subject_person_id: p_iWJkbAq9gHamMgUUEsv748
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i1bK5QyNcCSt8TuKy6QJS5
          claim_id: c_Pb7HZLE2BMh38LHLPuV74L
          source_id: s_vumUDxnbq3uYCupVBMwf4s
          stance: supports
          locator: CBDB:190701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190701）
          source: &a1
            id: s_vumUDxnbq3uYCupVBMwf4s
            source_type: api_record
            title: 中国历代人物传记资料库：王方（CBDB 190701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190701&o=json
            external_identifier: CBDB:190701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FPhQASF7csdCrYhSjUDXKh
        subject_person_id: p_iWJkbAq9gHamMgUUEsv748
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 833年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZHoXbAi82Myc51YzmDv4Vm
          claim_id: c_FPhQASF7csdCrYhSjUDXKh
          source_id: s_vumUDxnbq3uYCupVBMwf4s
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
        id: c_LF4NRLhy9eMUaLCRABoAL7
        subject_person_id: p_iWJkbAq9gHamMgUUEsv748
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方（卒于833年），唐人物。曾任錄事參軍。（中国历代人物传记资料库 CBDB 190701）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Qjx71bBHoK5U71SPvTwiN
          claim_id: c_LF4NRLhy9eMUaLCRABoAL7
          source_id: s_vumUDxnbq3uYCupVBMwf4s
          stance: supports
          locator: CBDB:190701
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

# 王方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方 | accepted |
| death.date | 833年 | accepted |
| bio.summary | 王方（卒于833年），唐人物。曾任錄事參軍。（中国历代人物传记资料库 CBDB 190701） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王方（CBDB 190701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190701&o=json)
