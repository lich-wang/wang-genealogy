---
schema: wang-person/v1
id: p_VGhgpxW58FKdgDsxkaVRUQ
status: active
merged_into: null
display_name: 王軾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H8NFZ2RGeAprM8sDy4ZBUW
        subject_person_id: p_VGhgpxW58FKdgDsxkaVRUQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yXpPHqpT8dt6XN79XAyVSd
          claim_id: c_H8NFZ2RGeAprM8sDy4ZBUW
          source_id: s_Mx7UT4bMQLytAR12GrvvC1
          stance: supports
          locator: CBDB:702880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702880）
          source: &a1
            id: s_Mx7UT4bMQLytAR12GrvvC1
            source_type: api_record
            title: 中国历代人物传记资料库：王軾（CBDB 702880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702880&o=json
            external_identifier: CBDB:702880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H19YdZmi9bv1K32KS1r3Eh
        subject_person_id: p_VGhgpxW58FKdgDsxkaVRUQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軾，明人物。籍贯揭陽，入仕鄉貢舉人，曾任教諭、縣令。（中国历代人物传记资料库 CBDB 702880）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4nDY92iHru5Ygh3ZFSU27f
          claim_id: c_H19YdZmi9bv1K32KS1r3Eh
          source_id: s_Mx7UT4bMQLytAR12GrvvC1
          stance: supports
          locator: CBDB:702880
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

# 王軾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軾 | accepted |
| bio.summary | 王軾，明人物。籍贯揭陽，入仕鄉貢舉人，曾任教諭、縣令。（中国历代人物传记资料库 CBDB 702880） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王軾（CBDB 702880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702880&o=json)
