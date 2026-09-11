---
schema: wang-person/v1
id: p_HCEeBtXC3koCQyugzahXzT
status: active
merged_into: null
display_name: 王煥之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_frv8mpCrakiSSAyeoNQGD2
        subject_person_id: p_HCEeBtXC3koCQyugzahXzT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q5b4HrpDQzWFL8drWuiuDn
          claim_id: c_frv8mpCrakiSSAyeoNQGD2
          source_id: s_skEeaYN8GdcP9CDYJE7Qg2
          stance: supports
          locator: CBDB:38260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38260）
          source: &a1
            id: s_skEeaYN8GdcP9CDYJE7Qg2
            source_type: api_record
            title: 中国历代人物传记资料库：王煥之（CBDB 38260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38260&o=json
            external_identifier: CBDB:38260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LYzVULXgrPiZ6dUPHFDJtN
        subject_person_id: p_HCEeBtXC3koCQyugzahXzT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥之，宋人物。曾任安撫使、提舉宮觀、寶文閣直學士。（中国历代人物传记资料库 CBDB 38260）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wRMhT1IqJJWdNK33sAy_2G
          claim_id: c_LYzVULXgrPiZ6dUPHFDJtN
          source_id: s_skEeaYN8GdcP9CDYJE7Qg2
          stance: supports
          locator: CBDB:38260
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

# 王煥之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煥之 | accepted |
| bio.summary | 王煥之，宋人物。曾任安撫使、提舉宮觀、寶文閣直學士。（中国历代人物传记资料库 CBDB 38260） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煥之（CBDB 38260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38260&o=json)
