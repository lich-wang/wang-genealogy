---
schema: wang-person/v1
id: p_42oZZVQrGCHY3Zi7kHM1SN
status: active
merged_into: null
display_name: 王章永
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XW5x269LJyKg8a8iTMmxWF
        subject_person_id: p_42oZZVQrGCHY3Zi7kHM1SN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WLrcKBvN8N741NQzycmdvy
          claim_id: c_XW5x269LJyKg8a8iTMmxWF
          source_id: s_WQqK7iJbkNKFkhEAK65TWi
          stance: supports
          locator: CBDB:639704
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639704）
          source: &a1
            id: s_WQqK7iJbkNKFkhEAK65TWi
            source_type: api_record
            title: 中国历代人物传记资料库：王章永（CBDB 639704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639704&o=json
            external_identifier: CBDB:639704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gYC14WKt987oRn1NL8V6S9
        subject_person_id: p_42oZZVQrGCHY3Zi7kHM1SN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章永，清人物。籍贯長沙，入仕鄉貢舉人，曾任教諭、復設教諭。（中国历代人物传记资料库 CBDB 639704）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zRCVj-5eJAO3GRu5cWFHxv
          claim_id: c_gYC14WKt987oRn1NL8V6S9
          source_id: s_WQqK7iJbkNKFkhEAK65TWi
          stance: supports
          locator: CBDB:639704
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

# 王章永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章永 | accepted |
| bio.summary | 王章永，清人物。籍贯長沙，入仕鄉貢舉人，曾任教諭、復設教諭。（中国历代人物传记资料库 CBDB 639704） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王章永（CBDB 639704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639704&o=json)
