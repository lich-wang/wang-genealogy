---
schema: wang-person/v1
id: p_8sA244pPSnWZw7M7cPZQZ9
status: active
merged_into: null
display_name: 王倩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fj8YCaAm2crf7boMkNqxga
        subject_person_id: p_8sA244pPSnWZw7M7cPZQZ9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ATh5XGALmpTdWtwZbXPwP8
          claim_id: c_Fj8YCaAm2crf7boMkNqxga
          source_id: s_jKoYqUvQrM2n4AF5945Dee
          stance: supports
          locator: CBDB:338290
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338290）
          source: &a1
            id: s_jKoYqUvQrM2n4AF5945Dee
            source_type: api_record
            title: 中国历代人物传记资料库：王倩（CBDB 338290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338290&o=json
            external_identifier: CBDB:338290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.543Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KzKc4kghs6Y1baNSUF4De9
        subject_person_id: p_8sA244pPSnWZw7M7cPZQZ9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1761年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xyBtCA6gjzLnkdNN44T6fz
          claim_id: c_KzKc4kghs6Y1baNSUF4De9
          source_id: s_jKoYqUvQrM2n4AF5945Dee
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
        id: c_KXuuKQBhvnCYPqyrC8MLGa
        subject_person_id: p_8sA244pPSnWZw7M7cPZQZ9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1826年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DzED9SSN2JdxFJNSkHzYx6
          claim_id: c_KXuuKQBhvnCYPqyrC8MLGa
          source_id: s_jKoYqUvQrM2n4AF5945Dee
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
        id: c_ikrea9kzwawwoWDjChc5b6
        subject_person_id: p_8sA244pPSnWZw7M7cPZQZ9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DV6RHK49ZmY7uVEmcpAYpH
          claim_id: c_ikrea9kzwawwoWDjChc5b6
          source_id: s_jKoYqUvQrM2n4AF5945Dee
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

# 王倩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倩 | accepted |
| birth.date | 1761年 | accepted |
| death.date | 1826年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王倩（CBDB 338290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338290&o=json)
