---
schema: wang-person/v1
id: p_xMDt8nz8xvd8tPzu8QCwMW
status: active
merged_into: null
display_name: 王育
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ao7bce4Ugf84kyP9WBJUax
        subject_person_id: p_xMDt8nz8xvd8tPzu8QCwMW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6KPoBdjkn2cEpDaWTNjNB3
          claim_id: c_Ao7bce4Ugf84kyP9WBJUax
          source_id: s_ceiD9iPeK6f12DssWrK9mB
          stance: supports
          locator: CBDB:464641
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（464641）
          source: &a1
            id: s_ceiD9iPeK6f12DssWrK9mB
            source_type: api_record
            title: 中国历代人物传记资料库：王育（CBDB 464641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464641&o=json
            external_identifier: CBDB:464641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NsqW6a1gf8NLAC9KSLUr9e
        subject_person_id: p_xMDt8nz8xvd8tPzu8QCwMW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 464641）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r6ByOe4t8Dd8hl7DXekC85
          claim_id: c_NsqW6a1gf8NLAC9KSLUr9e
          source_id: s_ceiD9iPeK6f12DssWrK9mB
          stance: supports
          locator: CBDB:464641
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

# 王育

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王育 | accepted |
| bio.summary | 王育，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 464641） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王育（CBDB 464641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464641&o=json)
