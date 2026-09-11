---
schema: wang-person/v1
id: p_3AVqCByHDb1uKCGrn5Ab3G
status: active
merged_into: null
display_name: 王崇閶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J7MQRDuPtBr2gJ5Zcm7GVd
        subject_person_id: p_3AVqCByHDb1uKCGrn5Ab3G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇閶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qmQM6G4Es9KoCKQ1sZFnMT
          claim_id: c_J7MQRDuPtBr2gJ5Zcm7GVd
          source_id: s_BYZ5CAFwyLQN83E6j7XQkE
          stance: supports
          locator: CBDB:637356
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637356）
          source: &a1
            id: s_BYZ5CAFwyLQN83E6j7XQkE
            source_type: api_record
            title: 中国历代人物传记资料库：王崇閶（CBDB 637356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637356&o=json
            external_identifier: CBDB:637356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4pgbskJx41iFxdcZKS4yyW
        subject_person_id: p_3AVqCByHDb1uKCGrn5Ab3G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇閶，清人物。籍贯冠縣，入仕縣學附生，曾任同知。（中国历代人物传记资料库 CBDB 637356）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZGRQX7-79ZztovDbI8ik4R
          claim_id: c_4pgbskJx41iFxdcZKS4yyW
          source_id: s_BYZ5CAFwyLQN83E6j7XQkE
          stance: supports
          locator: CBDB:637356
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

# 王崇閶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇閶 | accepted |
| bio.summary | 王崇閶，清人物。籍贯冠縣，入仕縣學附生，曾任同知。（中国历代人物传记资料库 CBDB 637356） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇閶（CBDB 637356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637356&o=json)
