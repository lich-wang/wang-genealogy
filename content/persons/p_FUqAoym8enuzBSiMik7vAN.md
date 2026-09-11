---
schema: wang-person/v1
id: p_FUqAoym8enuzBSiMik7vAN
status: active
merged_into: null
display_name: 王德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QechPw454BbsMKts7aRSvs
        subject_person_id: p_FUqAoym8enuzBSiMik7vAN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mJeGdUKSeC7r4XGcNyC7HE
          claim_id: c_QechPw454BbsMKts7aRSvs
          source_id: s_TZb1qi7r49DUQqGh1MkQp1
          stance: supports
          locator: CBDB:459602
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459602）
          source: &a1
            id: s_TZb1qi7r49DUQqGh1MkQp1
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 459602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459602&o=json
            external_identifier: CBDB:459602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SwPpMaL9X3PLT3VwJ7SLKm
        subject_person_id: p_FUqAoym8enuzBSiMik7vAN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 459602）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mcud4i6YsCI9qAThZ-XaCK
          claim_id: c_SwPpMaL9X3PLT3VwJ7SLKm
          source_id: s_TZb1qi7r49DUQqGh1MkQp1
          stance: supports
          locator: CBDB:459602
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

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| bio.summary | 王德，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 459602） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 459602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459602&o=json)
