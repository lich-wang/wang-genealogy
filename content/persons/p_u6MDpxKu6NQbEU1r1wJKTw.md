---
schema: wang-person/v1
id: p_u6MDpxKu6NQbEU1r1wJKTw
status: active
merged_into: null
display_name: 王致泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pRmerToL8TWQRx2YBMdWeS
        subject_person_id: p_u6MDpxKu6NQbEU1r1wJKTw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QyxivK5TFDsgmLT2osmXhB
          claim_id: c_pRmerToL8TWQRx2YBMdWeS
          source_id: s_eUPn5icEf1rdb5FHY2ZqKq
          stance: supports
          locator: CBDB:640020
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640020）
          source: &a1
            id: s_eUPn5icEf1rdb5FHY2ZqKq
            source_type: api_record
            title: 中国历代人物传记资料库：王致泰（CBDB 640020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640020&o=json
            external_identifier: CBDB:640020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.125Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fu2wEF3rF6A7Z6QVnpKsL8
        subject_person_id: p_u6MDpxKu6NQbEU1r1wJKTw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致泰，清人物。籍贯保定，入仕鄉貢舉人，曾任訓導、復設教諭。（中国历代人物传记资料库 CBDB 640020）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UY84u3Pr8gCt-gZlYwLf1H
          claim_id: c_fu2wEF3rF6A7Z6QVnpKsL8
          source_id: s_eUPn5icEf1rdb5FHY2ZqKq
          stance: supports
          locator: CBDB:640020
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

# 王致泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致泰 | accepted |
| bio.summary | 王致泰，清人物。籍贯保定，入仕鄉貢舉人，曾任訓導、復設教諭。（中国历代人物传记资料库 CBDB 640020） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王致泰（CBDB 640020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640020&o=json)
