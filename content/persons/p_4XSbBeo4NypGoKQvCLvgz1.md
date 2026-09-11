---
schema: wang-person/v1
id: p_4XSbBeo4NypGoKQvCLvgz1
status: active
merged_into: null
display_name: 王壽增
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W5sDqw3wAnmXah34aMJ4qu
        subject_person_id: p_4XSbBeo4NypGoKQvCLvgz1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽增
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jmi5hY62k4UfxiFKgEaEDr
          claim_id: c_W5sDqw3wAnmXah34aMJ4qu
          source_id: s_G5xoHuByYgNMxoEfjZzjcT
          stance: supports
          locator: CBDB:636835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636835）
          source: &a1
            id: s_G5xoHuByYgNMxoEfjZzjcT
            source_type: api_record
            title: 中国历代人物传记资料库：王壽增（CBDB 636835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636835&o=json
            external_identifier: CBDB:636835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JkDX2tvCeezxGpL4sDPX86
        subject_person_id: p_4XSbBeo4NypGoKQvCLvgz1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽增，清人物。籍贯臨桂，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 636835）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7CMd33HtiXr6IVh9-tA3xT
          claim_id: c_JkDX2tvCeezxGpL4sDPX86
          source_id: s_G5xoHuByYgNMxoEfjZzjcT
          stance: supports
          locator: CBDB:636835
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

# 王壽增

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽增 | accepted |
| bio.summary | 王壽增，清人物。籍贯臨桂，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 636835） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽增（CBDB 636835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636835&o=json)
