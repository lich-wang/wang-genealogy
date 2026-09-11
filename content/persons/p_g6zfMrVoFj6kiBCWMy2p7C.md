---
schema: wang-person/v1
id: p_g6zfMrVoFj6kiBCWMy2p7C
status: active
merged_into: null
display_name: 王堂孫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6CjT5B7Yz4W74H9UYfTt4r
        subject_person_id: p_g6zfMrVoFj6kiBCWMy2p7C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s4QrjG1AuNoPB6DRwd4PDv
          claim_id: c_6CjT5B7Yz4W74H9UYfTt4r
          source_id: s_FtZSvgwzdkzmVTBF4G1P29
          stance: supports
          locator: CBDB:636741
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636741）
          source: &a1
            id: s_FtZSvgwzdkzmVTBF4G1P29
            source_type: api_record
            title: 中国历代人物传记资料库：王堂孫（CBDB 636741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636741&o=json
            external_identifier: CBDB:636741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JVR1NQgLDTk1XtRHNZQodB
        subject_person_id: p_g6zfMrVoFj6kiBCWMy2p7C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂孫，清人物。籍贯天津，曾任知縣。（中国历代人物传记资料库 CBDB 636741）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UxgTMHfb90Q1PYTQfHQ2Df
          claim_id: c_JVR1NQgLDTk1XtRHNZQodB
          source_id: s_FtZSvgwzdkzmVTBF4G1P29
          stance: supports
          locator: CBDB:636741
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

# 王堂孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堂孫 | accepted |
| bio.summary | 王堂孫，清人物。籍贯天津，曾任知縣。（中国历代人物传记资料库 CBDB 636741） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堂孫（CBDB 636741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636741&o=json)
