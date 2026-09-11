---
schema: wang-person/v1
id: p_8GcJPK1D52ovy2ACvoynqM
status: active
merged_into: null
display_name: 王應祿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mNBZ1xcv9gzENAmqb5r66J
        subject_person_id: p_8GcJPK1D52ovy2ACvoynqM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MtBmRnQtidAVyCH73GKJP2
          claim_id: c_mNBZ1xcv9gzENAmqb5r66J
          source_id: s_3QyJNZXW9DygAp7oH8qzaD
          stance: supports
          locator: CBDB:637997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637997）
          source: &a1
            id: s_3QyJNZXW9DygAp7oH8qzaD
            source_type: api_record
            title: 中国历代人物传记资料库：王應祿（CBDB 637997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637997&o=json
            external_identifier: CBDB:637997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nAypsdWPsexEP5V5N7fNkz
        subject_person_id: p_8GcJPK1D52ovy2ACvoynqM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應祿，清人物。籍贯景東直隸廳，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637997）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JIAVXQ8ul3vZfKgmKyL5v4
          claim_id: c_nAypsdWPsexEP5V5N7fNkz
          source_id: s_3QyJNZXW9DygAp7oH8qzaD
          stance: supports
          locator: CBDB:637997
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

# 王應祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應祿 | accepted |
| bio.summary | 王應祿，清人物。籍贯景東直隸廳，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637997） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應祿（CBDB 637997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637997&o=json)
