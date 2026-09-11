---
schema: wang-person/v1
id: p_P6LNk8B5uiXAQwdqQEiL1Y
status: active
merged_into: null
display_name: 王縉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ypJobvcYaFkPJX6EjchJSG
        subject_person_id: p_P6LNk8B5uiXAQwdqQEiL1Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G46tHRu6JodEL8Y8kPK7kG
          claim_id: c_ypJobvcYaFkPJX6EjchJSG
          source_id: s_Gtw7MaFPtBd3FPjWVThEea
          stance: supports
          locator: CBDB:285663
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285663）
          source: &a1
            id: s_Gtw7MaFPtBd3FPjWVThEea
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 285663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285663&o=json
            external_identifier: CBDB:285663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i72Ay5fpA7g661owUbcvYy
        subject_person_id: p_P6LNk8B5uiXAQwdqQEiL1Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉，明人物。正德十六年進士，籍贯開州，曾任知縣。（中国历代人物传记资料库 CBDB 285663）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hpnDQcYczdVYSQ8QgTRait
          claim_id: c_i72Ay5fpA7g661owUbcvYy
          source_id: s_Gtw7MaFPtBd3FPjWVThEea
          stance: supports
          locator: CBDB:285663
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

# 王縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縉 | accepted |
| bio.summary | 王縉，明人物。正德十六年進士，籍贯開州，曾任知縣。（中国历代人物传记资料库 CBDB 285663） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 285663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285663&o=json)
