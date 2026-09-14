---
schema: wang-person/v1
id: p_RB5jjWuze4xAiCmQ2mD8Z9
status: active
merged_into: null
display_name: 王徽詔
cbdb_id: 325304
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zpcJ8GMQpxEn5fQDDTJCe9
        subject_person_id: p_RB5jjWuze4xAiCmQ2mD8Z9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽詔，明人物。嘉靖三十八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 325304）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_AJ67iHdt7ZzdXTB7TeYxFb
          claim_id: c_zpcJ8GMQpxEn5fQDDTJCe9
          source_id: s_92VfGvNc4khhhW5zzvnF4X
          stance: supports
          locator: CBDB:325304
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_92VfGvNc4khhhW5zzvnF4X
            source_type: api_record
            title: 中国历代人物传记资料库：王徽詔（CBDB 325304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325304&o=json
            external_identifier: CBDB:325304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uX2P7HgzowdSgFAuErny7C
        subject_person_id: p_RB5jjWuze4xAiCmQ2mD8Z9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1Fm6hx74fRyLApDQt7M1eU
          claim_id: c_uX2P7HgzowdSgFAuErny7C
          source_id: s_92VfGvNc4khhhW5zzvnF4X
          stance: supports
          locator: CBDB:325304
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__WuCWmCyItlCwKcqdhbIXt
        subject_person_id: p_v2Fkat16mGPQiTSwTrQAp8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RB5jjWuze4xAiCmQ2mD8Z9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__bshT7aSkRMy5A6qyqlcuA
          claim_id: c__WuCWmCyItlCwKcqdhbIXt
          source_id: s_TBUTvX41_QDsheYQT0ISHR
          stance: supports
          locator: CBDB：兄弟 王徽猷（204879）之父／母 王宦
          quotation: null
          interpretation_note: 由兄弟关系推断：王徽詔 与 王徽猷 为同胞（CBDB 记「兄」），王徽猷 之父／母即 王徽詔 之父／母。
          source:
            id: s_TBUTvX41_QDsheYQT0ISHR
            source_type: api_record
            title: 中国历代人物传记资料库：王徽詔（CBDB 325304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325304&o=json
            external_identifier: CBDB:325304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v2Fkat16mGPQiTSwTrQAp8
        status: active
        display_name: 王宦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_GpleIDba0ArycvTD8YukTD
        subject_person_id: p_N1zXfVAzsHV9UYAEDLb5C7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RB5jjWuze4xAiCmQ2mD8Z9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9O4afLX4SveZKp4rEijJlb
          claim_id: c_GpleIDba0ArycvTD8YukTD
          source_id: s_TBUTvX41_QDsheYQT0ISHR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204879 王徽猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TBUTvX41_QDsheYQT0ISHR
            source_type: api_record
            title: 中国历代人物传记资料库：王徽詔（CBDB 325304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325304&o=json
            external_identifier: CBDB:325304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N1zXfVAzsHV9UYAEDLb5C7
        status: active
        display_name: 王徽猷
        merged_into_person_id: null
---

# 王徽詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王徽詔，明人物。嘉靖三十八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 325304） | accepted |
| name.primary | 王徽詔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v2Fkat16mGPQiTSwTrQAp8 | 王宦 | accepted |
| other | p_N1zXfVAzsHV9UYAEDLb5C7 | 王徽猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徽詔（CBDB 325304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325304&o=json)
