---
schema: wang-person/v1
id: p_PMfQKN7vFaENdVTwGGAhr7
status: active
merged_into: null
display_name: 王文驤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wM8amAPNJ2qswuFc2Ggeoq
        subject_person_id: p_PMfQKN7vFaENdVTwGGAhr7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文驤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JUW7Zu5Hrw818XUk26NAA6
          claim_id: c_wM8amAPNJ2qswuFc2Ggeoq
          source_id: s_Npgf1UrBMqr4A6dAFz45Mt
          stance: supports
          locator: CBDB:71433
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71433）
          source: &a1
            id: s_Npgf1UrBMqr4A6dAFz45Mt
            source_type: api_record
            title: 中国历代人物传记资料库：王文驤（CBDB 71433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71433&o=json
            external_identifier: CBDB:71433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.665Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KynJhRULqWWuhsLYu61upa
        subject_person_id: p_PMfQKN7vFaENdVTwGGAhr7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1777年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ReSRvGJ9N1BUE1TqvYkJZN
          claim_id: c_KynJhRULqWWuhsLYu61upa
          source_id: s_Npgf1UrBMqr4A6dAFz45Mt
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
        id: c_Q8joGJrF8DdzD14V8yom8x
        subject_person_id: p_PMfQKN7vFaENdVTwGGAhr7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文驤（生于1777年），清人物。籍贯諸城。（中国历代人物传记资料库 CBDB 71433）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WxZzrStKa2CmiDk5tR1x7w
          claim_id: c_Q8joGJrF8DdzD14V8yom8x
          source_id: s_Npgf1UrBMqr4A6dAFz45Mt
          stance: supports
          locator: CBDB:71433
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

# 王文驤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文驤 | accepted |
| birth.date | 1777年 | accepted |
| bio.summary | 王文驤（生于1777年），清人物。籍贯諸城。（中国历代人物传记资料库 CBDB 71433） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文驤（CBDB 71433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71433&o=json)
