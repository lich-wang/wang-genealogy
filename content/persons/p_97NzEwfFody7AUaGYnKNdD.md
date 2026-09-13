---
schema: wang-person/v1
id: p_97NzEwfFody7AUaGYnKNdD
status: active
merged_into: null
display_name: 王應宣
cbdb_id: 414639
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ycpNkNW3AR43aVoMq6dSXF
        subject_person_id: p_97NzEwfFody7AUaGYnKNdD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應宣，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 414639）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_pDcPNx1w7d6Z_0o5bt2c0k
          claim_id: c_ycpNkNW3AR43aVoMq6dSXF
          source_id: s_J55P5R6V8dSStoDEjho8f4
          stance: supports
          locator: CBDB:414639
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_J55P5R6V8dSStoDEjho8f4
            source_type: api_record
            title: 中国历代人物传记资料库：王應宣（CBDB 414639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414639&o=json
            external_identifier: CBDB:414639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:36.869Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XKGekMPEAH1Wkn95ZTsprQ
        subject_person_id: p_97NzEwfFody7AUaGYnKNdD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3De99W7MbgaEqi9zAGAm1k
          claim_id: c_XKGekMPEAH1Wkn95ZTsprQ
          source_id: s_J55P5R6V8dSStoDEjho8f4
          stance: supports
          locator: CBDB:414639
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5601-5700）｜历史性依据：CBDB 朝代 = 清
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

# 王應宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應宣，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 414639） | accepted |
| name.primary | 王應宣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應宣（CBDB 414639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414639&o=json)
