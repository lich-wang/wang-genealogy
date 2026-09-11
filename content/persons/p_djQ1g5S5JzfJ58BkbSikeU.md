---
schema: wang-person/v1
id: p_djQ1g5S5JzfJ58BkbSikeU
status: active
merged_into: null
display_name: 王信臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZjZgc6XhuSMKHEGKmF4rmf
        subject_person_id: p_djQ1g5S5JzfJ58BkbSikeU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NsVSFBeEz2iiskSV6JJGvk
          claim_id: c_ZjZgc6XhuSMKHEGKmF4rmf
          source_id: s_91aLN38K5oGu53xB7gZ6BN
          stance: supports
          locator: CBDB:297187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297187）
          source: &a1
            id: s_91aLN38K5oGu53xB7gZ6BN
            source_type: api_record
            title: 中国历代人物传记资料库：王信臣（CBDB 297187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297187&o=json
            external_identifier: CBDB:297187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rh3FK2XRttubHWPN1HRdPr
        subject_person_id: p_djQ1g5S5JzfJ58BkbSikeU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信臣，明人物。嘉靖十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 297187）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_88srSlSEWgvBUtFRSMJ3n3
          claim_id: c_Rh3FK2XRttubHWPN1HRdPr
          source_id: s_91aLN38K5oGu53xB7gZ6BN
          stance: supports
          locator: CBDB:297187
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

# 王信臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信臣 | accepted |
| bio.summary | 王信臣，明人物。嘉靖十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 297187） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王信臣（CBDB 297187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297187&o=json)
