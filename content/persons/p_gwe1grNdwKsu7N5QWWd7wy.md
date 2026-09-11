---
schema: wang-person/v1
id: p_gwe1grNdwKsu7N5QWWd7wy
status: active
merged_into: null
display_name: 王信瀛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z7t6XmR46xyKa4cQsx43R4
        subject_person_id: p_gwe1grNdwKsu7N5QWWd7wy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信瀛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J7tsmJbP4o3uDyodA9ToJi
          claim_id: c_Z7t6XmR46xyKa4cQsx43R4
          source_id: s_viNQfcTApQBsHFjwewP3jc
          stance: supports
          locator: CBDB:636065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636065）
          source: &a1
            id: s_viNQfcTApQBsHFjwewP3jc
            source_type: api_record
            title: 中国历代人物传记资料库：王信瀛（CBDB 636065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636065&o=json
            external_identifier: CBDB:636065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hs2h6Ft9uvCePsmL5r34Ww
        subject_person_id: p_gwe1grNdwKsu7N5QWWd7wy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信瀛，清人物。籍贯廬陵，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636065）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J_pxnRjO-GBb13sPO_iD05
          claim_id: c_Hs2h6Ft9uvCePsmL5r34Ww
          source_id: s_viNQfcTApQBsHFjwewP3jc
          stance: supports
          locator: CBDB:636065
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

# 王信瀛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信瀛 | accepted |
| bio.summary | 王信瀛，清人物。籍贯廬陵，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636065） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王信瀛（CBDB 636065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636065&o=json)
