---
schema: wang-person/v1
id: p_AQWEzXSy5CuvkrX8fmxgup
status: active
merged_into: null
display_name: 王保泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CV2JcCAAYihC1kHaNT7AGB
        subject_person_id: p_AQWEzXSy5CuvkrX8fmxgup
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6rCQNRbyC4GyQR1DJKa8Ns
          claim_id: c_CV2JcCAAYihC1kHaNT7AGB
          source_id: s_3wLKXen4e6dHWinPkScLf2
          stance: supports
          locator: CBDB:636052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636052）
          source: &a1
            id: s_3wLKXen4e6dHWinPkScLf2
            source_type: api_record
            title: 中国历代人物传记资料库：王保泰（CBDB 636052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636052&o=json
            external_identifier: CBDB:636052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.082Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HdMHE6xhWPmTTHsr2Nxz4h
        subject_person_id: p_AQWEzXSy5CuvkrX8fmxgup
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保泰，清人物。籍贯沂州，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 636052）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RfNvLu2ZI_3WrsI0pm5ma0
          claim_id: c_HdMHE6xhWPmTTHsr2Nxz4h
          source_id: s_3wLKXen4e6dHWinPkScLf2
          stance: supports
          locator: CBDB:636052
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

# 王保泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王保泰 | accepted |
| bio.summary | 王保泰，清人物。籍贯沂州，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 636052） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王保泰（CBDB 636052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636052&o=json)
