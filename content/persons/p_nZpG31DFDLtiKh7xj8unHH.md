---
schema: wang-person/v1
id: p_nZpG31DFDLtiKh7xj8unHH
status: active
merged_into: null
display_name: 王蘇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HByF7hBxLddiQhJiGQwzJj
        subject_person_id: p_nZpG31DFDLtiKh7xj8unHH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Psu43MZC5wmepZLNy62dQh
          claim_id: c_HByF7hBxLddiQhJiGQwzJj
          source_id: s_oarpUUh5igPC2BCxL4PRpQ
          stance: supports
          locator: CBDB:71070
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71070）
          source: &a1
            id: s_oarpUUh5igPC2BCxL4PRpQ
            source_type: api_record
            title: 中国历代人物传记资料库：王蘇（CBDB 71070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71070&o=json
            external_identifier: CBDB:71070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.134Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hZJLaggobaHqoJNGFRYkn5
        subject_person_id: p_nZpG31DFDLtiKh7xj8unHH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1763年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZgETycqWGAC6Bb2KT8ugq3
          claim_id: c_hZJLaggobaHqoJNGFRYkn5
          source_id: s_oarpUUh5igPC2BCxL4PRpQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yHRypmX1ue8qLa1cHEMuBx
        subject_person_id: p_nZpG31DFDLtiKh7xj8unHH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1816年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1MJhKpVsX8H2GNffFFsBA1
          claim_id: c_yHRypmX1ue8qLa1cHEMuBx
          source_id: s_oarpUUh5igPC2BCxL4PRpQ
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
        id: c_3y6z7gQS647Ts3E3FqTMP3
        subject_person_id: p_nZpG31DFDLtiKh7xj8unHH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘇（1763年—1816年），清人物。明清進士進士，籍贯江陰，入仕進士。（中国历代人物传记资料库 CBDB 71070）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YJ1uUhw4_fn15jWdXwpR9f
          claim_id: c_3y6z7gQS647Ts3E3FqTMP3
          source_id: s_oarpUUh5igPC2BCxL4PRpQ
          stance: supports
          locator: CBDB:71070
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2sflxT0XaU5AJBCiEX26tf
        subject_person_id: p_nZpG31DFDLtiKh7xj8unHH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cmSWpmMC4GUZ7P7o2kYzDr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BcZI5lRniCfOX1HZg3SVXT
          claim_id: c_2sflxT0XaU5AJBCiEX26tf
          source_id: s_4bRK7vHDfvKmn1gvCJKqc1
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4569, HuWenKai #241：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4bRK7vHDfvKmn1gvCJKqc1
            source_type: api_record
            title: 中国历代人物传记资料库：王甥稙（CBDB 72079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72079&o=json
            external_identifier: CBDB:72079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_cmSWpmMC4GUZ7P7o2kYzDr
        status: active
        display_name: 王甥稙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王蘇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘇 | accepted |
| birth.date | 1763年 | accepted |
| death.date | 1816年 | accepted |
| bio.summary | 王蘇（1763年—1816年），清人物。明清進士進士，籍贯江陰，入仕進士。（中国历代人物传记资料库 CBDB 71070） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cmSWpmMC4GUZ7P7o2kYzDr | 王甥稙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王甥稙（CBDB 72079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72079&o=json)
- [中国历代人物传记资料库：王蘇（CBDB 71070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71070&o=json)
