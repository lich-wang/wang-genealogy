---
schema: wang-person/v1
id: p_SPRhYLY61DvfwZC5ZKquLH
status: active
merged_into: null
display_name: 王驥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NHrVZPLPPEFGGdPKDa45Sk
        subject_person_id: p_SPRhYLY61DvfwZC5ZKquLH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王驥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kaiBBxix5JBYZ2eGqESPDo
          claim_id: c_NHrVZPLPPEFGGdPKDa45Sk
          source_id: s_AJcKP2BCpa1Q1JcdGyzcGg
          stance: supports
          locator: CBDB:640903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640903）
          source: &a1
            id: s_AJcKP2BCpa1Q1JcdGyzcGg
            source_type: api_record
            title: 中国历代人物传记资料库：王驥（CBDB 640903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640903&o=json
            external_identifier: CBDB:640903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rEsgNymXWJ2SstuW5UV7rg
        subject_person_id: p_SPRhYLY61DvfwZC5ZKquLH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王驥，清人物。籍贯同州府，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640903）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wh6OUAlMp2AsIZie_VCDv6
          claim_id: c_rEsgNymXWJ2SstuW5UV7rg
          source_id: s_AJcKP2BCpa1Q1JcdGyzcGg
          stance: supports
          locator: CBDB:640903
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

# 王驥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王驥 | accepted |
| bio.summary | 王驥，清人物。籍贯同州府，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640903） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王驥（CBDB 640903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640903&o=json)
