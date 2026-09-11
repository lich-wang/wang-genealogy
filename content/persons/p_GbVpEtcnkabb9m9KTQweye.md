---
schema: wang-person/v1
id: p_GbVpEtcnkabb9m9KTQweye
status: active
merged_into: null
display_name: 王光翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5YBvEC8wUDSFPDCSoohs4d
        subject_person_id: p_GbVpEtcnkabb9m9KTQweye
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vXp4bHjH4HDpciv7sXrxjy
          claim_id: c_5YBvEC8wUDSFPDCSoohs4d
          source_id: s_a3XPvBZ874Qpn9CDrMQtGW
          stance: supports
          locator: CBDB:636278
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636278）
          source: &a1
            id: s_a3XPvBZ874Qpn9CDrMQtGW
            source_type: api_record
            title: 中国历代人物传记资料库：王光翰（CBDB 636278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636278&o=json
            external_identifier: CBDB:636278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.142Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H5r5aAGboJAjBFBhHeu18i
        subject_person_id: p_GbVpEtcnkabb9m9KTQweye
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王光翰，清人物。籍贯宜山，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 636278）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4ua9VvEIubtZo8LEO5gW5Q
          claim_id: c_H5r5aAGboJAjBFBhHeu18i
          source_id: s_a3XPvBZ874Qpn9CDrMQtGW
          stance: supports
          locator: CBDB:636278
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

# 王光翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光翰 | accepted |
| bio.summary | 王光翰，清人物。籍贯宜山，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 636278） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光翰（CBDB 636278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636278&o=json)
