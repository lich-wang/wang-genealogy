---
schema: wang-person/v1
id: p_hLo5BgHDUcgnqFdqjqHxh1
status: active
merged_into: null
display_name: 王鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ArS42K7BXBdBTpj1g75XLa
        subject_person_id: p_hLo5BgHDUcgnqFdqjqHxh1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yGx3LCrqASRMnnLpxUvd7T
          claim_id: c_ArS42K7BXBdBTpj1g75XLa
          source_id: s_DTNbyBrQpuvVe2X5HYLAFo
          stance: supports
          locator: CBDB:67750
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67750）
          source: &a1
            id: s_DTNbyBrQpuvVe2X5HYLAFo
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 67750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67750&o=json
            external_identifier: CBDB:67750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.007Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uMbH9KfCKYu5DgGUuPhV24
        subject_person_id: p_hLo5BgHDUcgnqFdqjqHxh1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1360年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zJ98e2KcHztbxMiHogmp2m
          claim_id: c_uMbH9KfCKYu5DgGUuPhV24
          source_id: s_DTNbyBrQpuvVe2X5HYLAFo
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
        id: c_L6ZnMfkZ3P3MSwFxqDhUag
        subject_person_id: p_hLo5BgHDUcgnqFdqjqHxh1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎（卒于1360年），元人物。籍贯真州，身份为死國難。（中国历代人物传记资料库 CBDB 67750）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aU6_SxMInhfYcfWMbDHLCE
          claim_id: c_L6ZnMfkZ3P3MSwFxqDhUag
          source_id: s_DTNbyBrQpuvVe2X5HYLAFo
          stance: supports
          locator: CBDB:67750
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

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| death.date | 1360年 | accepted |
| bio.summary | 王鼎（卒于1360年），元人物。籍贯真州，身份为死國難。（中国历代人物传记资料库 CBDB 67750） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 67750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67750&o=json)
