---
schema: wang-person/v1
id: p_nUU3JpJnRvF6Ln6aV256TQ
status: active
merged_into: null
display_name: 王順
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_58r89p1yU6rCiPZX8X3vk4
        subject_person_id: p_nUU3JpJnRvF6Ln6aV256TQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kL5XA22Bdequ9cN9sL34Fh
          claim_id: c_58r89p1yU6rCiPZX8X3vk4
          source_id: s_49yB14hyCJJK2Zpozk1m1H
          stance: supports
          locator: CBDB:480885
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480885）
          source: &a1
            id: s_49yB14hyCJJK2Zpozk1m1H
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 480885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480885&o=json
            external_identifier: CBDB:480885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XJCo6aKtk7xt1XEesJzd3J
        subject_person_id: p_nUU3JpJnRvF6Ln6aV256TQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順，明人物。曾任百戶。（中国历代人物传记资料库 CBDB 480885）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uCKnTlQtXcXi__J-JkGQJB
          claim_id: c_XJCo6aKtk7xt1XEesJzd3J
          source_id: s_49yB14hyCJJK2Zpozk1m1H
          stance: supports
          locator: CBDB:480885
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

# 王順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王順 | accepted |
| bio.summary | 王順，明人物。曾任百戶。（中国历代人物传记资料库 CBDB 480885） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王順（CBDB 480885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480885&o=json)
