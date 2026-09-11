---
schema: wang-person/v1
id: p_qSVWkoCnPNumGhxBszStBH
status: active
merged_into: null
display_name: 王廷鏄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XZ9PQn5Xu3K8cRH8EfbUv3
        subject_person_id: p_qSVWkoCnPNumGhxBszStBH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷鏄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BdgaqYF4FG94g1o5JPf1pD
          claim_id: c_XZ9PQn5Xu3K8cRH8EfbUv3
          source_id: s_45PKUu6JKnR8viun26U4Bv
          stance: supports
          locator: CBDB:637572
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637572）
          source: &a1
            id: s_45PKUu6JKnR8viun26U4Bv
            source_type: api_record
            title: 中国历代人物传记资料库：王廷鏄（CBDB 637572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637572&o=json
            external_identifier: CBDB:637572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PJytXuLYBAfKANAGP3ushJ
        subject_person_id: p_qSVWkoCnPNumGhxBszStBH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷鏄，清人物。籍贯同州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637572）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iwVobZ26-yshxYC2dTw0gk
          claim_id: c_PJytXuLYBAfKANAGP3ushJ
          source_id: s_45PKUu6JKnR8viun26U4Bv
          stance: supports
          locator: CBDB:637572
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

# 王廷鏄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷鏄 | accepted |
| bio.summary | 王廷鏄，清人物。籍贯同州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637572） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷鏄（CBDB 637572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637572&o=json)
