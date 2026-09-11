---
schema: wang-person/v1
id: p_7t5WVtNjG29EpGWq1dDNv9
status: active
merged_into: null
display_name: 王貽桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sscUVCJAQ8r4EScMBMEApp
        subject_person_id: p_7t5WVtNjG29EpGWq1dDNv9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sF2Fzdw6zR6r5R1Q7n4fZY
          claim_id: c_sscUVCJAQ8r4EScMBMEApp
          source_id: s_C5ycib5bS233HimsFGgF5s
          stance: supports
          locator: CBDB:71879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71879）
          source: &a1
            id: s_C5ycib5bS233HimsFGgF5s
            source_type: api_record
            title: 中国历代人物传记资料库：王貽桂（CBDB 71879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71879&o=json
            external_identifier: CBDB:71879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Rpr4pYfwAcYZn3EpH2oiuN
        subject_person_id: p_7t5WVtNjG29EpGWq1dDNv9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1784年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PRp2rmuWecXybZZ83FjC42
          claim_id: c_Rpr4pYfwAcYZn3EpH2oiuN
          source_id: s_C5ycib5bS233HimsFGgF5s
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
        id: c_TgDsgjfwFJZ3FhvpVzMLrz
        subject_person_id: p_7t5WVtNjG29EpGWq1dDNv9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽桂（生于1784年），清人物。籍贯宛平。（中国历代人物传记资料库 CBDB 71879）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ndXgxW2kccULOlF1w0Kvdn
          claim_id: c_TgDsgjfwFJZ3FhvpVzMLrz
          source_id: s_C5ycib5bS233HimsFGgF5s
          stance: supports
          locator: CBDB:71879
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

# 王貽桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貽桂 | accepted |
| birth.date | 1784年 | accepted |
| bio.summary | 王貽桂（生于1784年），清人物。籍贯宛平。（中国历代人物传记资料库 CBDB 71879） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貽桂（CBDB 71879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71879&o=json)
