---
schema: wang-person/v1
id: p_7MXLqhuX5DY3uL1k2iYrBv
status: active
merged_into: null
display_name: 王之垣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6ner844f3d9eczRzo68ktm
        subject_person_id: p_7MXLqhuX5DY3uL1k2iYrBv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之垣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BDvCBtUAGq6xFtSma9ga8k
          claim_id: c_6ner844f3d9eczRzo68ktm
          source_id: s_td6tyFm8ZKocP1zATqxfnK
          stance: supports
          locator: CBDB:217737
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217737）
          source: &a1
            id: s_td6tyFm8ZKocP1zATqxfnK
            source_type: api_record
            title: 中国历代人物传记资料库：王之垣（CBDB 217737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217737&o=json
            external_identifier: CBDB:217737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zei7aYDaCQXoGDeasqP4JA
        subject_person_id: p_7MXLqhuX5DY3uL1k2iYrBv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之垣，明人物。萬曆五年進士，籍贯新城，曾任府尹。（中国历代人物传记资料库 CBDB 217737）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WTidQ2Ew5poxXSKUO06J2y
          claim_id: c_Zei7aYDaCQXoGDeasqP4JA
          source_id: s_td6tyFm8ZKocP1zATqxfnK
          stance: supports
          locator: CBDB:217737
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_a2fOiHH20jzOh6dkzkh-vs
        subject_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_7MXLqhuX5DY3uL1k2iYrBv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_we5dTvDzzf3ysWogKTGTZ5
          claim_id: c_a2fOiHH20jzOh6dkzkh-vs
          source_id: s_m1-Om2dSn93YTWIyOqXinn
          stance: supports
          locator: CBDB：兄弟 王之猷（126467）之父／母 王重光
          quotation: null
          interpretation_note: 由兄弟关系推断：王之垣 与 王之猷 为同胞（CBDB 记「弟」），王之猷 之父／母即 王之垣 之父／母。
          source:
            id: s_m1-Om2dSn93YTWIyOqXinn
            source_type: api_record
            title: 中国历代人物传记资料库：王之垣（CBDB 217737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217737&o=json
            external_identifier: CBDB:217737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TA3Wv_5j5vQF6rEgAjnlmd
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7MXLqhuX5DY3uL1k2iYrBv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sg9EcZJFHIo0vRHMSqEO2h
          claim_id: c_TA3Wv_5j5vQF6rEgAjnlmd
          source_id: s_m1-Om2dSn93YTWIyOqXinn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126467 王之猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_m1-Om2dSn93YTWIyOqXinn
            source_type: api_record
            title: 中国历代人物传记资料库：王之垣（CBDB 217737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217737&o=json
            external_identifier: CBDB:217737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
---

# 王之垣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之垣 | accepted |
| bio.summary | 王之垣，明人物。萬曆五年進士，籍贯新城，曾任府尹。（中国历代人物传记资料库 CBDB 217737） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |
| other | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之垣（CBDB 217737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217737&o=json)
