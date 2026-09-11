---
schema: wang-person/v1
id: p_8pSGsjBfx8ujvMdrUNm1ao
status: active
merged_into: null
display_name: 王世昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wk1fMR1Nn85mXynqGdgWZQ
        subject_person_id: p_8pSGsjBfx8ujvMdrUNm1ao
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CQHsWZzhaVHzEKMMhmt7aX
          claim_id: c_wk1fMR1Nn85mXynqGdgWZQ
          source_id: s_Y6HMNMJ5iCRcHew9L91yP4
          stance: supports
          locator: CBDB:38427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38427）
          source: &a1
            id: s_Y6HMNMJ5iCRcHew9L91yP4
            source_type: api_record
            title: 中国历代人物传记资料库：王世昌（CBDB 38427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38427&o=json
            external_identifier: CBDB:38427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pJF6cBtZYmLvSJBAwvcCxo
        subject_person_id: p_8pSGsjBfx8ujvMdrUNm1ao
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世昌，宋人物。曾任安撫使。（中国历代人物传记资料库 CBDB 38427）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_40XBD7GzsivzG5A5QhWUZW
          claim_id: c_pJF6cBtZYmLvSJBAwvcCxo
          source_id: s_Y6HMNMJ5iCRcHew9L91yP4
          stance: supports
          locator: CBDB:38427
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

# 王世昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世昌 | accepted |
| bio.summary | 王世昌，宋人物。曾任安撫使。（中国历代人物传记资料库 CBDB 38427） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世昌（CBDB 38427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38427&o=json)
