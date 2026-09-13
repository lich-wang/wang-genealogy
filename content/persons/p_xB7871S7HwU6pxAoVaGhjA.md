---
schema: wang-person/v1
id: p_xB7871S7HwU6pxAoVaGhjA
status: active
merged_into: null
display_name: 王瑾文
cbdb_id: 154606
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vuQWe3WTAYywoyyAAf5e3k
        subject_person_id: p_xB7871S7HwU6pxAoVaGhjA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑾文，唐人物。籍贯江陽。（中国历代人物传记资料库 CBDB 154606）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_OdvWCeGLc5ftmh1wMhnu7z
          claim_id: c_vuQWe3WTAYywoyyAAf5e3k
          source_id: s_Li1yqJ9vxjq3CxivMxCYz2
          stance: supports
          locator: CBDB:154606
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Li1yqJ9vxjq3CxivMxCYz2
            source_type: api_record
            title: 中国历代人物传记资料库：王瑾文（CBDB 154606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154606&o=json
            external_identifier: CBDB:154606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HnX86ReZ8UyGdTYb7YR3Z7
        subject_person_id: p_xB7871S7HwU6pxAoVaGhjA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑾文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DkLnLYj5U5EK7dSqSwAH4X
          claim_id: c_HnX86ReZ8UyGdTYb7YR3Z7
          source_id: s_Li1yqJ9vxjq3CxivMxCYz2
          stance: supports
          locator: CBDB:154606
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
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

# 王瑾文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瑾文，唐人物。籍贯江陽。（中国历代人物传记资料库 CBDB 154606） | accepted |
| name.primary | 王瑾文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑾文（CBDB 154606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154606&o=json)
