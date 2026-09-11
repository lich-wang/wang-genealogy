---
schema: wang-person/v1
id: p_L3HqQzV9ePMQYJsN7hoXEv
status: active
merged_into: null
display_name: 王光策
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NXrf4p69EgNDzpiDZihdxp
        subject_person_id: p_L3HqQzV9ePMQYJsN7hoXEv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光策
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fa2MQLLZkYj9XTXJyGidi7
          claim_id: c_NXrf4p69EgNDzpiDZihdxp
          source_id: s_CAxH8r6cCAMhGYdTkFs3zU
          stance: supports
          locator: CBDB:636272
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636272）
          source: &a1
            id: s_CAxH8r6cCAMhGYdTkFs3zU
            source_type: api_record
            title: 中国历代人物传记资料库：王光策（CBDB 636272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636272&o=json
            external_identifier: CBDB:636272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eWVWMZHVYRvvGK6gsbN5wq
        subject_person_id: p_L3HqQzV9ePMQYJsN7hoXEv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王光策，清人物。籍贯九江府，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636272）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0AphHFH7kKsLwwx_RCJTL7
          claim_id: c_eWVWMZHVYRvvGK6gsbN5wq
          source_id: s_CAxH8r6cCAMhGYdTkFs3zU
          stance: supports
          locator: CBDB:636272
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

# 王光策

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光策 | accepted |
| bio.summary | 王光策，清人物。籍贯九江府，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636272） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光策（CBDB 636272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636272&o=json)
