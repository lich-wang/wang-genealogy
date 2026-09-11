---
schema: wang-person/v1
id: p_xvRLM9UgGCDBJoPeGTY6YP
status: active
merged_into: null
display_name: 王錫印
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gdB6hrhSBJ3S68n2cqr1DU
        subject_person_id: p_xvRLM9UgGCDBJoPeGTY6YP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫印
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9zL45nmUzhjvXh3CoA796L
          claim_id: c_gdB6hrhSBJ3S68n2cqr1DU
          source_id: s_Tzopov5ta1YWReLGqsFFZs
          stance: supports
          locator: CBDB:640593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640593）
          source: &a1
            id: s_Tzopov5ta1YWReLGqsFFZs
            source_type: api_record
            title: 中国历代人物传记资料库：王錫印（CBDB 640593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640593&o=json
            external_identifier: CBDB:640593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9nfLXsqAReP1v76K91iUPH
        subject_person_id: p_xvRLM9UgGCDBJoPeGTY6YP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王錫印，清人物。籍贯西安，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 640593）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jQKpcnzW0oMoeBYYTu6Mrz
          claim_id: c_9nfLXsqAReP1v76K91iUPH
          source_id: s_Tzopov5ta1YWReLGqsFFZs
          stance: supports
          locator: CBDB:640593
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

# 王錫印

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫印 | accepted |
| bio.summary | 王錫印，清人物。籍贯西安，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 640593） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫印（CBDB 640593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640593&o=json)
