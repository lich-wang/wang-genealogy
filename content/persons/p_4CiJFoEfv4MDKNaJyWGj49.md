---
schema: wang-person/v1
id: p_4CiJFoEfv4MDKNaJyWGj49
status: active
merged_into: null
display_name: 王璠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DuD6DLR4hLEniKXWVPP3CY
        subject_person_id: p_4CiJFoEfv4MDKNaJyWGj49
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bAELcMHeHiGThemZhAu1Mx
          claim_id: c_DuD6DLR4hLEniKXWVPP3CY
          source_id: s_zBhFoise9A3SRP7CxzHW5j
          stance: supports
          locator: CBDB:250461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250461）
          source: &a1
            id: s_zBhFoise9A3SRP7CxzHW5j
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 250461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250461&o=json
            external_identifier: CBDB:250461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.223Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9rL2MnhCXNe6WYuMAXKe1a
        subject_person_id: p_4CiJFoEfv4MDKNaJyWGj49
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠，明人物。成化十一年進士，籍贯趙州。（中国历代人物传记资料库 CBDB 250461）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PYeoCaz5F_i01PN6r0pqfl
          claim_id: c_9rL2MnhCXNe6WYuMAXKe1a
          source_id: s_zBhFoise9A3SRP7CxzHW5j
          stance: supports
          locator: CBDB:250461
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

# 王璠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璠 | accepted |
| bio.summary | 王璠，明人物。成化十一年進士，籍贯趙州。（中国历代人物传记资料库 CBDB 250461） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璠（CBDB 250461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250461&o=json)
