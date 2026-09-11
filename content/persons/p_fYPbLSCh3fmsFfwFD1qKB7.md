---
schema: wang-person/v1
id: p_fYPbLSCh3fmsFfwFD1qKB7
status: active
merged_into: null
display_name: 王微
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9gxuioJBRH9dxu9rD83i6D
        subject_person_id: p_fYPbLSCh3fmsFfwFD1qKB7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王微
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kAS9hDSoSPKUE7bYj9HhVA
          claim_id: c_9gxuioJBRH9dxu9rD83i6D
          source_id: s_UoGp8pT5NvMCPnHLntL5qP
          stance: supports
          locator: CBDB:237585
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237585）
          source: &a1
            id: s_UoGp8pT5NvMCPnHLntL5qP
            source_type: api_record
            title: 中国历代人物传记资料库：王微（CBDB 237585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237585&o=json
            external_identifier: CBDB:237585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.849Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RSfg69nvNAGRNqUvjFZxAZ
        subject_person_id: p_fYPbLSCh3fmsFfwFD1qKB7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王微，明人物。正统七年進士，籍贯固安。（中国历代人物传记资料库 CBDB 237585）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b_JG5Tdxw7quozSrvaoVZ7
          claim_id: c_RSfg69nvNAGRNqUvjFZxAZ
          source_id: s_UoGp8pT5NvMCPnHLntL5qP
          stance: supports
          locator: CBDB:237585
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

# 王微

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王微 | accepted |
| bio.summary | 王微，明人物。正统七年進士，籍贯固安。（中国历代人物传记资料库 CBDB 237585） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王微（CBDB 237585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237585&o=json)
