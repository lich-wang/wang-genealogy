---
schema: wang-person/v1
id: p_3o1EyjVMJzk6J34wsh67PG
status: active
merged_into: null
display_name: 王時
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2SCqC4xBm6F1128f3Rv3cr
        subject_person_id: p_3o1EyjVMJzk6J34wsh67PG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_so9U4c3gL29eHb6Y4NjyzT
          claim_id: c_2SCqC4xBm6F1128f3Rv3cr
          source_id: s_NdC2Z4BT2whEJRdED417H8
          stance: supports
          locator: CBDB:638438
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638438）
          source: &a1
            id: s_NdC2Z4BT2whEJRdED417H8
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 638438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638438&o=json
            external_identifier: CBDB:638438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PL3QaeHsuSitymBrJJAUXo
        subject_person_id: p_3o1EyjVMJzk6J34wsh67PG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時，清人物。籍贯東光，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638438）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yF54ghYTXx9TvpcHxqqKQ_
          claim_id: c_PL3QaeHsuSitymBrJJAUXo
          source_id: s_NdC2Z4BT2whEJRdED417H8
          stance: supports
          locator: CBDB:638438
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

# 王時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時 | accepted |
| bio.summary | 王時，清人物。籍贯東光，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638438） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時（CBDB 638438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638438&o=json)
