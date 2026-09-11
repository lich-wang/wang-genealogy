---
schema: wang-person/v1
id: p_8ey742r62JuvijmoUiQSSe
status: active
merged_into: null
display_name: 王崇儀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h4h2LGw167L2EixU62p6sP
        subject_person_id: p_8ey742r62JuvijmoUiQSSe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N2usSExzpTHtHC4UFvMTLy
          claim_id: c_h4h2LGw167L2EixU62p6sP
          source_id: s_CzyeLGEAuC6s7JzJHjDnbs
          stance: supports
          locator: CBDB:637344
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637344）
          source: &a1
            id: s_CzyeLGEAuC6s7JzJHjDnbs
            source_type: api_record
            title: 中国历代人物传记资料库：王崇儀（CBDB 637344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637344&o=json
            external_identifier: CBDB:637344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bKgeq4u6eBiFhLdj9Fy1Zt
        subject_person_id: p_8ey742r62JuvijmoUiQSSe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇儀，清人物。籍贯桂林府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637344）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x22m1p2DC3gH8HoosSUdHx
          claim_id: c_bKgeq4u6eBiFhLdj9Fy1Zt
          source_id: s_CzyeLGEAuC6s7JzJHjDnbs
          stance: supports
          locator: CBDB:637344
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

# 王崇儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇儀 | accepted |
| bio.summary | 王崇儀，清人物。籍贯桂林府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637344） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇儀（CBDB 637344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637344&o=json)
