---
schema: wang-person/v1
id: p_1QQuZ9ains73VxVKAKLCiq
status: active
merged_into: null
display_name: 王京韶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ooTBGhUSAjZ2SVBwPiHJRz
        subject_person_id: p_1QQuZ9ains73VxVKAKLCiq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jVNLynT8G6T8LD1N7euRGF
          claim_id: c_ooTBGhUSAjZ2SVBwPiHJRz
          source_id: s_r9qYRYH6DLb11WPTxLbETc
          stance: supports
          locator: CBDB:635862
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635862）
          source: &a1
            id: s_r9qYRYH6DLb11WPTxLbETc
            source_type: api_record
            title: 中国历代人物传记资料库：王京韶（CBDB 635862）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635862&o=json
            external_identifier: CBDB:635862
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cJSANoFwAR3xHsqM3g9Ezd
        subject_person_id: p_1QQuZ9ains73VxVKAKLCiq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京韶，清人物。籍贯雲南，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 635862）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DXMrJu65XyGLNFaiVToXeb
          claim_id: c_cJSANoFwAR3xHsqM3g9Ezd
          source_id: s_r9qYRYH6DLb11WPTxLbETc
          stance: supports
          locator: CBDB:635862
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

# 王京韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王京韶 | accepted |
| bio.summary | 王京韶，清人物。籍贯雲南，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 635862） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王京韶（CBDB 635862）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635862&o=json)
