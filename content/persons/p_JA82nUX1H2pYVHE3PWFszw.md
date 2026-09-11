---
schema: wang-person/v1
id: p_JA82nUX1H2pYVHE3PWFszw
status: active
merged_into: null
display_name: 王堯畢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cP7a6YrFUKaX8zUDtTES7D
        subject_person_id: p_JA82nUX1H2pYVHE3PWFszw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯畢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fwqfcNHBv3kUrZPV8YesUM
          claim_id: c_cP7a6YrFUKaX8zUDtTES7D
          source_id: s_MRAnCNcBx2h5oB9ZQkDcRP
          stance: supports
          locator: CBDB:636755
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636755）
          source: &a1
            id: s_MRAnCNcBx2h5oB9ZQkDcRP
            source_type: api_record
            title: 中国历代人物传记资料库：王堯畢（CBDB 636755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636755&o=json
            external_identifier: CBDB:636755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.096Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A3KmWcuJZweLEnEEStKAxY
        subject_person_id: p_JA82nUX1H2pYVHE3PWFszw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯畢，清人物。籍贯河內，入仕副榜，曾任知縣。（中国历代人物传记资料库 CBDB 636755）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jaCGPKH7DzJlw4t7O08y9s
          claim_id: c_A3KmWcuJZweLEnEEStKAxY
          source_id: s_MRAnCNcBx2h5oB9ZQkDcRP
          stance: supports
          locator: CBDB:636755
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

# 王堯畢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯畢 | accepted |
| bio.summary | 王堯畢，清人物。籍贯河內，入仕副榜，曾任知縣。（中国历代人物传记资料库 CBDB 636755） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堯畢（CBDB 636755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636755&o=json)
