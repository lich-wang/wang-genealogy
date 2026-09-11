---
schema: wang-person/v1
id: p_LE9E39WbTE3nwJcSP1UTYw
status: active
merged_into: null
display_name: 王繼芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HpNfZNYZryyLSVW8PGAcpn
        subject_person_id: p_LE9E39WbTE3nwJcSP1UTYw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yLa4R9aiUmyPgeFQbAGhEZ
          claim_id: c_HpNfZNYZryyLSVW8PGAcpn
          source_id: s_MKdkWParbMnjEw77D41Lmp
          stance: supports
          locator: CBDB:639880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639880）
          source: &a1
            id: s_MKdkWParbMnjEw77D41Lmp
            source_type: api_record
            title: 中国历代人物传记资料库：王繼芳（CBDB 639880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639880&o=json
            external_identifier: CBDB:639880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hLAVfgxHFfkCGMG85CcvTc
        subject_person_id: p_LE9E39WbTE3nwJcSP1UTYw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼芳，清人物。籍贯金堂，入仕監生，曾任照磨。（中国历代人物传记资料库 CBDB 639880）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DztF5Ri7wQQ2z3pTDv_EQv
          claim_id: c_hLAVfgxHFfkCGMG85CcvTc
          source_id: s_MKdkWParbMnjEw77D41Lmp
          stance: supports
          locator: CBDB:639880
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

# 王繼芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼芳 | accepted |
| bio.summary | 王繼芳，清人物。籍贯金堂，入仕監生，曾任照磨。（中国历代人物传记资料库 CBDB 639880） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼芳（CBDB 639880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639880&o=json)
