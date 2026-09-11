---
schema: wang-person/v1
id: p_DVTk4Jzvn4Zug7xxAiicyB
status: active
merged_into: null
display_name: 王光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H5tnn3YAYUWy7CXmiu5khQ
        subject_person_id: p_DVTk4Jzvn4Zug7xxAiicyB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zFE7CGasDKNngJBPJBbDGa
          claim_id: c_H5tnn3YAYUWy7CXmiu5khQ
          source_id: s_EFVPgvPghYQpoUDe9SXrZs
          stance: supports
          locator: CBDB:636238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636238）
          source: &a1
            id: s_EFVPgvPghYQpoUDe9SXrZs
            source_type: api_record
            title: 中国历代人物传记资料库：王光（CBDB 636238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636238&o=json
            external_identifier: CBDB:636238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ogzVuBMNPZKKWrMNYk3xbH
        subject_person_id: p_DVTk4Jzvn4Zug7xxAiicyB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王光，清人物。籍贯商州直隸州直轄地方，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 636238）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_22NbwmD8QNhL6Vgco3CLtr
          claim_id: c_ogzVuBMNPZKKWrMNYk3xbH
          source_id: s_EFVPgvPghYQpoUDe9SXrZs
          stance: supports
          locator: CBDB:636238
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

# 王光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光 | accepted |
| bio.summary | 王光，清人物。籍贯商州直隸州直轄地方，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 636238） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光（CBDB 636238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636238&o=json)
