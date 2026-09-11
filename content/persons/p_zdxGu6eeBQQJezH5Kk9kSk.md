---
schema: wang-person/v1
id: p_zdxGu6eeBQQJezH5Kk9kSk
status: active
merged_into: null
display_name: 王尚賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eepdn1QdsKZEkGkubxmQ15
        subject_person_id: p_zdxGu6eeBQQJezH5Kk9kSk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZuEksZ4hkwTQiv8Mzwrpt8
          claim_id: c_Eepdn1QdsKZEkGkubxmQ15
          source_id: s_4m9jcDGBNeRcUbbMGqrbpw
          stance: supports
          locator: CBDB:490730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490730）
          source: &a1
            id: s_4m9jcDGBNeRcUbbMGqrbpw
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賢（CBDB 490730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490730&o=json
            external_identifier: CBDB:490730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.142Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_br9TYFBiNd3zqMwJffi5jP
        subject_person_id: p_zdxGu6eeBQQJezH5Kk9kSk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚賢，清人物。曾任把總。（中国历代人物传记资料库 CBDB 490730）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ox9M1Vpx96fYJkiCXCSkc_
          claim_id: c_br9TYFBiNd3zqMwJffi5jP
          source_id: s_4m9jcDGBNeRcUbbMGqrbpw
          stance: supports
          locator: CBDB:490730
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

# 王尚賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚賢 | accepted |
| bio.summary | 王尚賢，清人物。曾任把總。（中国历代人物传记资料库 CBDB 490730） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尚賢（CBDB 490730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490730&o=json)
