---
schema: wang-person/v1
id: p_5CF4rn6puiLJrGvRcwEXQ8
status: active
merged_into: null
display_name: 王因灝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DK3YbTMfPrJ8J6r9tWrspP
        subject_person_id: p_5CF4rn6puiLJrGvRcwEXQ8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王因灝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1aKSnq3xrpVgtvJjTJB3rk
          claim_id: c_DK3YbTMfPrJ8J6r9tWrspP
          source_id: s_9G2Z6aPUZher6R5pc591y9
          stance: supports
          locator: CBDB:636638
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636638）
          source: &a1
            id: s_9G2Z6aPUZher6R5pc591y9
            source_type: api_record
            title: 中国历代人物传记资料库：王因灝（CBDB 636638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636638&o=json
            external_identifier: CBDB:636638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9jFf1kiWy1CaFAUhbWisAp
        subject_person_id: p_5CF4rn6puiLJrGvRcwEXQ8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王因灝，清人物。籍贯山陰，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636638）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x-DW1dQ8oCyNJRb3LLSdZE
          claim_id: c_9jFf1kiWy1CaFAUhbWisAp
          source_id: s_9G2Z6aPUZher6R5pc591y9
          stance: supports
          locator: CBDB:636638
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

# 王因灝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王因灝 | accepted |
| bio.summary | 王因灝，清人物。籍贯山陰，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636638） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王因灝（CBDB 636638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636638&o=json)
