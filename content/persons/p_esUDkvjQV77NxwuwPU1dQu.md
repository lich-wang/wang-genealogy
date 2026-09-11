---
schema: wang-person/v1
id: p_esUDkvjQV77NxwuwPU1dQu
status: active
merged_into: null
display_name: 王向榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mXFLNdJWAF3DJwVy3KS9Rt
        subject_person_id: p_esUDkvjQV77NxwuwPU1dQu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王向榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AG658Wj2ByQG4SJHVsC3VV
          claim_id: c_mXFLNdJWAF3DJwVy3KS9Rt
          source_id: s_sJGixQUGVq1HY5gpK9MfCQ
          stance: supports
          locator: CBDB:636522
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636522）
          source: &a1
            id: s_sJGixQUGVq1HY5gpK9MfCQ
            source_type: api_record
            title: 中国历代人物传记资料库：王向榮（CBDB 636522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636522&o=json
            external_identifier: CBDB:636522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4PamZ3GF3aXJbUanBqW9Pn
        subject_person_id: p_esUDkvjQV77NxwuwPU1dQu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王向榮，清人物。籍贯靈石，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 636522）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_85gNSvaeRI6TDw5QUnPk6D
          claim_id: c_4PamZ3GF3aXJbUanBqW9Pn
          source_id: s_sJGixQUGVq1HY5gpK9MfCQ
          stance: supports
          locator: CBDB:636522
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

# 王向榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王向榮 | accepted |
| bio.summary | 王向榮，清人物。籍贯靈石，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 636522） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王向榮（CBDB 636522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636522&o=json)
