---
schema: wang-person/v1
id: p_T5PQ9CAbY6aCKC68hcQUQv
status: active
merged_into: null
display_name: 王毓江
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QbqYv1sUUKq3iuaUddn6Yg
        subject_person_id: p_T5PQ9CAbY6aCKC68hcQUQv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓江
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LZZ7MWf6HVoBtQDeWFyykU
          claim_id: c_QbqYv1sUUKq3iuaUddn6Yg
          source_id: s_J73ZuN5H4ZsmYU4wqcAa1e
          stance: supports
          locator: CBDB:69414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69414）
          source: &a1
            id: s_J73ZuN5H4ZsmYU4wqcAa1e
            source_type: api_record
            title: 中国历代人物传记资料库：王毓江（CBDB 69414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69414&o=json
            external_identifier: CBDB:69414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_e7tL2cSYEuN8GWxPqm4E6V
        subject_person_id: p_T5PQ9CAbY6aCKC68hcQUQv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1911年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R2vtMv3vR5G9snWzcDZv51
          claim_id: c_e7tL2cSYEuN8GWxPqm4E6V
          source_id: s_J73ZuN5H4ZsmYU4wqcAa1e
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kcnieLQFHY48TbBj4wwuKH
        subject_person_id: p_T5PQ9CAbY6aCKC68hcQUQv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓江（卒于1911年），清人物。籍贯宿州，入仕廩貢生。（中国历代人物传记资料库 CBDB 69414）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OtuxWsEj_v0fF5uwRwkjkZ
          claim_id: c_kcnieLQFHY48TbBj4wwuKH
          source_id: s_J73ZuN5H4ZsmYU4wqcAa1e
          stance: supports
          locator: CBDB:69414
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1iliRAKNRiVKxZtMGiqibu
        subject_person_id: p_QFtZdGUZHPGwpcUccEqnYk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T5PQ9CAbY6aCKC68hcQUQv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B3q2PQTmCOKYo3y_24Oj9J
          claim_id: c_1iliRAKNRiVKxZtMGiqibu
          source_id: s_8vcXqLk838TZ8Ue66ZftqA
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13120：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8vcXqLk838TZ8Ue66ZftqA
            source_type: api_record
            title: 中国历代人物传记资料库：王心忠（CBDB 526944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526944&o=json
            external_identifier: CBDB:526944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QFtZdGUZHPGwpcUccEqnYk
        status: active
        display_name: 王心忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王毓江

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓江 | accepted |
| death.date | 1911年 | accepted |
| bio.summary | 王毓江（卒于1911年），清人物。籍贯宿州，入仕廩貢生。（中国历代人物传记资料库 CBDB 69414） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QFtZdGUZHPGwpcUccEqnYk | 王心忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王心忠（CBDB 526944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526944&o=json)
- [中国历代人物传记资料库：王毓江（CBDB 69414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69414&o=json)
