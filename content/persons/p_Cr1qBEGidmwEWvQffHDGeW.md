---
schema: wang-person/v1
id: p_Cr1qBEGidmwEWvQffHDGeW
status: active
merged_into: null
display_name: 王琢光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NRtkEcfKjJfDDtNh5wuReW
        subject_person_id: p_Cr1qBEGidmwEWvQffHDGeW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琢光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_idvykB7589tHze5165dRR3
          claim_id: c_NRtkEcfKjJfDDtNh5wuReW
          source_id: s_y4UfuJftX4zgRtVDUvz9DM
          stance: supports
          locator: CBDB:639413
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639413）
          source: &a1
            id: s_y4UfuJftX4zgRtVDUvz9DM
            source_type: api_record
            title: 中国历代人物传记资料库：王琢光（CBDB 639413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639413&o=json
            external_identifier: CBDB:639413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KrPMLtxiCuYkDqzj8kpeXi
        subject_person_id: p_Cr1qBEGidmwEWvQffHDGeW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王琢光，清人物。籍贯平南，入仕貢生: 恩貢，曾任學正。（中国历代人物传记资料库 CBDB 639413）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5x5gGLINpOqvP4nKZCkL7P
          claim_id: c_KrPMLtxiCuYkDqzj8kpeXi
          source_id: s_y4UfuJftX4zgRtVDUvz9DM
          stance: supports
          locator: CBDB:639413
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

# 王琢光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琢光 | accepted |
| bio.summary | 王琢光，清人物。籍贯平南，入仕貢生: 恩貢，曾任學正。（中国历代人物传记资料库 CBDB 639413） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琢光（CBDB 639413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639413&o=json)
