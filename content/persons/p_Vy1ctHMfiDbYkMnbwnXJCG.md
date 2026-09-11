---
schema: wang-person/v1
id: p_Vy1ctHMfiDbYkMnbwnXJCG
status: active
merged_into: null
display_name: 王家壁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UfEMQ49RioUu2jXf2YDoWj
        subject_person_id: p_Vy1ctHMfiDbYkMnbwnXJCG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家壁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RgbA6PRpJKHiaKGK8VGxoG
          claim_id: c_UfEMQ49RioUu2jXf2YDoWj
          source_id: s_6K88EdWU55ne1998ADFPg4
          stance: supports
          locator: CBDB:637170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637170）
          source: &a1
            id: s_6K88EdWU55ne1998ADFPg4
            source_type: api_record
            title: 中国历代人物传记资料库：王家壁（CBDB 637170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637170&o=json
            external_identifier: CBDB:637170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rCjaoXief5BD1Va1UTttJa
        subject_person_id: p_Vy1ctHMfiDbYkMnbwnXJCG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家壁，清人物。籍贯武昌，曾任主事。（中国历代人物传记资料库 CBDB 637170）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vQOtI7NwF4-4x14mGEbSSR
          claim_id: c_rCjaoXief5BD1Va1UTttJa
          source_id: s_6K88EdWU55ne1998ADFPg4
          stance: supports
          locator: CBDB:637170
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

# 王家壁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家壁 | accepted |
| bio.summary | 王家壁，清人物。籍贯武昌，曾任主事。（中国历代人物传记资料库 CBDB 637170） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家壁（CBDB 637170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637170&o=json)
