---
schema: wang-person/v1
id: p_MRMok3xd5DWsmSbnHR4ydJ
status: active
merged_into: null
display_name: 王箎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e4kH32WB1tfyDk6RpsZ5AT
        subject_person_id: p_MRMok3xd5DWsmSbnHR4ydJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王箎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9oYmMq9hG7sxhmBfw3g36v
          claim_id: c_e4kH32WB1tfyDk6RpsZ5AT
          source_id: s_cbJ2eXMJrhcqKzWGS6V3kZ
          stance: supports
          locator: CBDB:539508
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（539508）
          source: &a1
            id: s_cbJ2eXMJrhcqKzWGS6V3kZ
            source_type: api_record
            title: 中国历代人物传记资料库：王箎（CBDB 539508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539508&o=json
            external_identifier: CBDB:539508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CiD8LM91awMKy59BQ1wAHV
        subject_person_id: p_MRMok3xd5DWsmSbnHR4ydJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王箎，宋人物。籍贯嘉興，入仕進士。（中国历代人物传记资料库 CBDB 539508）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8vNQ_D-8cc6rqZolaqr_Iu
          claim_id: c_CiD8LM91awMKy59BQ1wAHV
          source_id: s_cbJ2eXMJrhcqKzWGS6V3kZ
          stance: supports
          locator: CBDB:539508
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

# 王箎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王箎 | accepted |
| bio.summary | 王箎，宋人物。籍贯嘉興，入仕進士。（中国历代人物传记资料库 CBDB 539508） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王箎（CBDB 539508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539508&o=json)
