---
schema: wang-person/v1
id: p_fuXbGtCGM6cyRKiBSb2QSB
status: active
merged_into: null
display_name: 王璡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yYiNSPFSQ7bsQE4PPizUQ9
        subject_person_id: p_fuXbGtCGM6cyRKiBSb2QSB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r7FPMgh1FXdWpDHZ13FbUW
          claim_id: c_yYiNSPFSQ7bsQE4PPizUQ9
          source_id: s_uWGAiHLEW7xRJq619cxqCP
          stance: supports
          locator: CBDB:639451
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639451）
          source: &a1
            id: s_uWGAiHLEW7xRJq619cxqCP
            source_type: api_record
            title: 中国历代人物传记资料库：王璡（CBDB 639451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639451&o=json
            external_identifier: CBDB:639451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nABJ4sqKeumV2TKKis4ec3
        subject_person_id: p_fuXbGtCGM6cyRKiBSb2QSB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璡，清人物。籍贯膠州，入仕監生，曾任同知。（中国历代人物传记资料库 CBDB 639451）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PnEAirPIA-aSK8g3AnqKxY
          claim_id: c_nABJ4sqKeumV2TKKis4ec3
          source_id: s_uWGAiHLEW7xRJq619cxqCP
          stance: supports
          locator: CBDB:639451
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

# 王璡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璡 | accepted |
| bio.summary | 王璡，清人物。籍贯膠州，入仕監生，曾任同知。（中国历代人物传记资料库 CBDB 639451） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璡（CBDB 639451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639451&o=json)
