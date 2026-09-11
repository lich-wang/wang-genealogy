---
schema: wang-person/v1
id: p_jPtfESqMvhrnsBKdxieuVE
status: active
merged_into: null
display_name: 王煜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jnj4GZogCCUJcQJshkHfca
        subject_person_id: p_jPtfESqMvhrnsBKdxieuVE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zAzVE26zguorF8HBQGKSNs
          claim_id: c_jnj4GZogCCUJcQJshkHfca
          source_id: s_XSWv23YhsK3UGCHP4BxjBS
          stance: supports
          locator: CBDB:575243
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（575243）
          source: &a1
            id: s_XSWv23YhsK3UGCHP4BxjBS
            source_type: api_record
            title: 中国历代人物传记资料库：王煜（CBDB 575243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575243&o=json
            external_identifier: CBDB:575243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qmj4PSbK1v2otN5wzK2z4S
        subject_person_id: p_jPtfESqMvhrnsBKdxieuVE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王煜，清人物。籍贯來鳳，入仕貢生: 拔貢。（中国历代人物传记资料库 CBDB 575243）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pZK0TFuEdt94x4nCSy0Pdc
          claim_id: c_qmj4PSbK1v2otN5wzK2z4S
          source_id: s_XSWv23YhsK3UGCHP4BxjBS
          stance: supports
          locator: CBDB:575243
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

# 王煜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煜 | accepted |
| bio.summary | 王煜，清人物。籍贯來鳳，入仕貢生: 拔貢。（中国历代人物传记资料库 CBDB 575243） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煜（CBDB 575243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575243&o=json)
