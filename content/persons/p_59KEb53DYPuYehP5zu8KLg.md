---
schema: wang-person/v1
id: p_59KEb53DYPuYehP5zu8KLg
status: active
merged_into: null
display_name: 王元慧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kXTGSP7aQVJRSWBcaYf82t
        subject_person_id: p_59KEb53DYPuYehP5zu8KLg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元慧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xRQDdbasqPJNiA6FH68zv9
          claim_id: c_kXTGSP7aQVJRSWBcaYf82t
          source_id: s_QkvPNgWYBoD78RpPXg7NMT
          stance: supports
          locator: CBDB:689567
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689567）
          source: &a1
            id: s_QkvPNgWYBoD78RpPXg7NMT
            source_type: api_record
            title: 中国历代人物传记资料库：王元慧（CBDB 689567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689567&o=json
            external_identifier: CBDB:689567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.476Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GvGga3EqYDmgrAsdXGMSp2
        subject_person_id: p_59KEb53DYPuYehP5zu8KLg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元慧，清人物。籍贯崑山，身份为畫家。（中国历代人物传记资料库 CBDB 689567）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fEx3OGNMrqNAapFSFEu0yU
          claim_id: c_GvGga3EqYDmgrAsdXGMSp2
          source_id: s_QkvPNgWYBoD78RpPXg7NMT
          stance: supports
          locator: CBDB:689567
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

# 王元慧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元慧 | accepted |
| bio.summary | 王元慧，清人物。籍贯崑山，身份为畫家。（中国历代人物传记资料库 CBDB 689567） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元慧（CBDB 689567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689567&o=json)
