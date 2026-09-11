---
schema: wang-person/v1
id: p_goxQUY9X7pHEVZ7L3e4LiB
status: active
merged_into: null
display_name: 王國佐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hq4QgvtinFTsLJXVwPgS9K
        subject_person_id: p_goxQUY9X7pHEVZ7L3e4LiB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_czKVCN4tzMuMZMV6Gj9JB6
          claim_id: c_hq4QgvtinFTsLJXVwPgS9K
          source_id: s_TSLdfikctcfWaaMgy64uvL
          stance: supports
          locator: CBDB:556394
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556394）
          source: &a1
            id: s_TSLdfikctcfWaaMgy64uvL
            source_type: api_record
            title: 中国历代人物传记资料库：王國佐（CBDB 556394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556394&o=json
            external_identifier: CBDB:556394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KjKPeYPg8LcjKWhAW9Q9y7
        subject_person_id: p_goxQUY9X7pHEVZ7L3e4LiB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國佐，清人物。籍贯唐縣。（中国历代人物传记资料库 CBDB 556394）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QJTSmsJ1uC8MTFLo187-Vt
          claim_id: c_KjKPeYPg8LcjKWhAW9Q9y7
          source_id: s_TSLdfikctcfWaaMgy64uvL
          stance: supports
          locator: CBDB:556394
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
  spouses:
    - claim:
        id: c_vzNtR9ATBEduNAmIfutdhU
        subject_person_id: p_goxQUY9X7pHEVZ7L3e4LiB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yfoEBa3DYJcqYMHtEVXMu4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u3_QTX3m3WBTfGqpgIG4Cc
          claim_id: c_vzNtR9ATBEduNAmIfutdhU
          source_id: s_08QWrtS0LGhHimJFxq1kvV
          stance: supports
          locator: 南陽府志，lgid=878725：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_08QWrtS0LGhHimJFxq1kvV
            source_type: api_record
            title: 中国历代人物传记资料库：曹氏(王國佐妻)（CBDB 556395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556395&o=json
            external_identifier: CBDB:556395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yfoEBa3DYJcqYMHtEVXMu4
        status: active
        display_name: 曹氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王國佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國佐 | accepted |
| bio.summary | 王國佐，清人物。籍贯唐縣。（中国历代人物传记资料库 CBDB 556394） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_yfoEBa3DYJcqYMHtEVXMu4 | 曹氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹氏(王國佐妻)（CBDB 556395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556395&o=json)
- [中国历代人物传记资料库：王國佐（CBDB 556394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556394&o=json)
