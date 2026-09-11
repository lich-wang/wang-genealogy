---
schema: wang-person/v1
id: p_5BEje2wX2gghiS6kLi2sEw
status: active
merged_into: null
display_name: 王舜年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BtcF16orm2oT4iH641KJN6
        subject_person_id: p_5BEje2wX2gghiS6kLi2sEw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EhMRRd6pVKkzABW88FUuQ2
          claim_id: c_BtcF16orm2oT4iH641KJN6
          source_id: s_tbWXMJeheHALk8kTykoTB5
          stance: supports
          locator: CBDB:58884
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（58884）
          source: &a1
            id: s_tbWXMJeheHALk8kTykoTB5
            source_type: api_record
            title: 中国历代人物传记资料库：王舜年（CBDB 58884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58884&o=json
            external_identifier: CBDB:58884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PjnjKJ1Ujkv5TFb7wwpWkN
        subject_person_id: p_5BEje2wX2gghiS6kLi2sEw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜年，清人物。明清進士進士，籍贯掖縣，入仕進士，曾任編修、同考官。（中国历代人物传记资料库 CBDB 58884）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BgAtOeZWY2wIb1qE8sLEC-
          claim_id: c_PjnjKJ1Ujkv5TFb7wwpWkN
          source_id: s_tbWXMJeheHALk8kTykoTB5
          stance: supports
          locator: CBDB:58884
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

# 王舜年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舜年 | accepted |
| bio.summary | 王舜年，清人物。明清進士進士，籍贯掖縣，入仕進士，曾任編修、同考官。（中国历代人物传记资料库 CBDB 58884） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舜年（CBDB 58884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58884&o=json)
