---
schema: wang-person/v1
id: p_2L1gxpML9okoZHDxbhyjQp
status: active
merged_into: null
display_name: 王修倫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_coEMQ4SuKP2Uezf3bYKzan
        subject_person_id: p_2L1gxpML9okoZHDxbhyjQp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SJekdPTWXYgTeBsjUN84CA
          claim_id: c_coEMQ4SuKP2Uezf3bYKzan
          source_id: s_ZEXrXncKR3zeS1zpXXHLWM
          stance: supports
          locator: CBDB:636069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636069）
          source: &a1
            id: s_ZEXrXncKR3zeS1zpXXHLWM
            source_type: api_record
            title: 中国历代人物传记资料库：王修倫（CBDB 636069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636069&o=json
            external_identifier: CBDB:636069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.876Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gg2wb3eBYWoLENZbNBDdAW
        subject_person_id: p_2L1gxpML9okoZHDxbhyjQp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修倫，清人物。籍贯黎平府直轄地方，入仕廩生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636069）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jlar1_HLWaXS7GudmM8Acq
          claim_id: c_Gg2wb3eBYWoLENZbNBDdAW
          source_id: s_ZEXrXncKR3zeS1zpXXHLWM
          stance: supports
          locator: CBDB:636069
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

# 王修倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修倫 | accepted |
| bio.summary | 王修倫，清人物。籍贯黎平府直轄地方，入仕廩生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636069） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王修倫（CBDB 636069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636069&o=json)
