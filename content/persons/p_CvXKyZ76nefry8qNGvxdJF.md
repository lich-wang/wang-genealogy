---
schema: wang-person/v1
id: p_CvXKyZ76nefry8qNGvxdJF
status: active
merged_into: null
display_name: 王行儉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CSko7Q1npDQAspC4e4Fb5t
        subject_person_id: p_CvXKyZ76nefry8qNGvxdJF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ukPn1nigGXaLcK1zF4GN9h
          claim_id: c_CSko7Q1npDQAspC4e4Fb5t
          source_id: s_WEHiyDCraxcYWp6gc8Hd75
          stance: supports
          locator: CBDB:69179
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69179）
          source: &a1
            id: s_WEHiyDCraxcYWp6gc8Hd75
            source_type: api_record
            title: 中国历代人物传记资料库：王行儉（CBDB 69179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69179&o=json
            external_identifier: CBDB:69179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EWch4nEe8Pc9M53qnk9rVC
        subject_person_id: p_CvXKyZ76nefry8qNGvxdJF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1645年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5tJAYoMLj7GMHuQHCNXusu
          claim_id: c_EWch4nEe8Pc9M53qnk9rVC
          source_id: s_WEHiyDCraxcYWp6gc8Hd75
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
        id: c_gDd8eFu3cV494a11U96TRf
        subject_person_id: p_CvXKyZ76nefry8qNGvxdJF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行儉（卒于1645年），清人物。明清進士進士，籍贯宜興，入仕進士，曾任戶部主事、郎中、知府。（中国历代人物传记资料库 CBDB 69179）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ojs52Uog1N3l9pdwB3kirm
          claim_id: c_gDd8eFu3cV494a11U96TRf
          source_id: s_WEHiyDCraxcYWp6gc8Hd75
          stance: supports
          locator: CBDB:69179
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

# 王行儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行儉 | accepted |
| death.date | 1645年 | accepted |
| bio.summary | 王行儉（卒于1645年），清人物。明清進士進士，籍贯宜興，入仕進士，曾任戶部主事、郎中、知府。（中国历代人物传记资料库 CBDB 69179） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王行儉（CBDB 69179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69179&o=json)
