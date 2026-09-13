---
schema: wang-person/v1
id: p_8srex36RoTqoJnJRaQkDA7
status: active
merged_into: null
display_name: 王成龍
cbdb_id: 414677
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LKFmjAM2WvdrSNYM74xPdm
        subject_person_id: p_8srex36RoTqoJnJRaQkDA7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成龍，清人物。曾任知州。（中国历代人物传记资料库 CBDB 414677）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wBTf-qfbA4RSmVv9K84cBE
          claim_id: c_LKFmjAM2WvdrSNYM74xPdm
          source_id: s_aff6xjFASLNxTN28iYWhMw
          stance: supports
          locator: CBDB:414677
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aff6xjFASLNxTN28iYWhMw
            source_type: api_record
            title: 中国历代人物传记资料库：王成龍（CBDB 414677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414677&o=json
            external_identifier: CBDB:414677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:38.799Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2K31oyAfNw2AZm7R81F6XQ
        subject_person_id: p_8srex36RoTqoJnJRaQkDA7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7FKr6pXWfZ2Ww9UsvoMz8x
          claim_id: c_2K31oyAfNw2AZm7R81F6XQ
          source_id: s_aff6xjFASLNxTN28iYWhMw
          stance: supports
          locator: CBDB:414677
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5701-5800）｜历史性依据：CBDB 朝代 = 清
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

# 王成龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王成龍，清人物。曾任知州。（中国历代人物传记资料库 CBDB 414677） | accepted |
| name.primary | 王成龍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成龍（CBDB 414677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414677&o=json)
