---
schema: wang-person/v1
id: p_XzN9ACDH6FS4dWnaqQj8qq
status: active
merged_into: null
display_name: 王忠顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fgr1zP1J6zcKn5q2g8SeLF
        subject_person_id: p_XzN9ACDH6FS4dWnaqQj8qq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bhUBXxgtczCb8vDvCUWZcg
          claim_id: c_Fgr1zP1J6zcKn5q2g8SeLF
          source_id: s_vic7BYSPMQP8G88QcDV5nM
          stance: supports
          locator: CBDB:637787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637787）
          source: &a1
            id: s_vic7BYSPMQP8G88QcDV5nM
            source_type: api_record
            title: 中国历代人物传记资料库：王忠顯（CBDB 637787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637787&o=json
            external_identifier: CBDB:637787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AtxBCrUJipNuGwpm4kEVg3
        subject_person_id: p_XzN9ACDH6FS4dWnaqQj8qq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠顯，清人物。籍贯山陰，入仕監生，曾任司獄。（中国历代人物传记资料库 CBDB 637787）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nYnf1amH8r5U0qKrtpyqwD
          claim_id: c_AtxBCrUJipNuGwpm4kEVg3
          source_id: s_vic7BYSPMQP8G88QcDV5nM
          stance: supports
          locator: CBDB:637787
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

# 王忠顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠顯 | accepted |
| bio.summary | 王忠顯，清人物。籍贯山陰，入仕監生，曾任司獄。（中国历代人物传记资料库 CBDB 637787） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忠顯（CBDB 637787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637787&o=json)
