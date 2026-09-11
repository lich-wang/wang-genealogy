---
schema: wang-person/v1
id: p_Za7ZA4KQDCh22tBJVtP75R
status: active
merged_into: null
display_name: 王德成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C9ZToXqQZKvb9UG6Qg3cPs
        subject_person_id: p_Za7ZA4KQDCh22tBJVtP75R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_38p8hRdk3x6tjqiDRhEL2p
          claim_id: c_C9ZToXqQZKvb9UG6Qg3cPs
          source_id: s_xocQcVNJLE4wU3t5Hk57ZG
          stance: supports
          locator: CBDB:230044
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230044）
          source: &a1
            id: s_xocQcVNJLE4wU3t5Hk57ZG
            source_type: api_record
            title: 中国历代人物传记资料库：王德成（CBDB 230044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230044&o=json
            external_identifier: CBDB:230044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tm5LPt5Aj51yBK923JozG7
        subject_person_id: p_Za7ZA4KQDCh22tBJVtP75R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德成，明人物。萬曆丙戌科進士進士，籍贯安州，入仕庠生。（中国历代人物传记资料库 CBDB 230044）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1jIUi0ZEGsYzT3xyBiBGPM
          claim_id: c_Tm5LPt5Aj51yBK923JozG7
          source_id: s_xocQcVNJLE4wU3t5Hk57ZG
          stance: supports
          locator: CBDB:230044
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

# 王德成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德成 | accepted |
| bio.summary | 王德成，明人物。萬曆丙戌科進士進士，籍贯安州，入仕庠生。（中国历代人物传记资料库 CBDB 230044） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德成（CBDB 230044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230044&o=json)
