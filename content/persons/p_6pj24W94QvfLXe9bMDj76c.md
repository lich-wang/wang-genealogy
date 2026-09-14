---
schema: wang-person/v1
id: p_6pj24W94QvfLXe9bMDj76c
status: active
merged_into: null
display_name: 王田
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_14eY6B1t2VFaLKyVRCEFu7
        subject_person_id: p_6pj24W94QvfLXe9bMDj76c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王田
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z528ocrEeAaBwn6NNHWfCK
          claim_id: c_14eY6B1t2VFaLKyVRCEFu7
          source_id: s_4GdhSDQeVvmmtp9PQKz63y
          stance: supports
          locator: CBDB:217297
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217297）
          source: &a1
            id: s_4GdhSDQeVvmmtp9PQKz63y
            source_type: api_record
            title: 中国历代人物传记资料库：王田（CBDB 217297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217297&o=json
            external_identifier: CBDB:217297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YqDb2ErHJFCaf2hRmyzT9E
        subject_person_id: p_6pj24W94QvfLXe9bMDj76c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王田，明人物。萬曆五年進士，籍贯耀州。（中国历代人物传记资料库 CBDB 217297）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6Qw71SqNYh4Fw8094hHpwg
          claim_id: c_YqDb2ErHJFCaf2hRmyzT9E
          source_id: s_4GdhSDQeVvmmtp9PQKz63y
          stance: supports
          locator: CBDB:217297
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wgcGd7QHMOjTZNcbhMKVsk
        subject_person_id: p_q3ewFUkH4tvUNYqQiNKdGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6pj24W94QvfLXe9bMDj76c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EOLpGD47S4eNdUmSyaIhFs
          claim_id: c_wgcGd7QHMOjTZNcbhMKVsk
          source_id: s_jy01ysNI_-_TD_22PFaowv
          stance: supports
          locator: CBDB：兄弟 王國（126690）之父／母 王邦憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王田 与 王國 为同胞（CBDB 记「兄」），王國 之父／母即 王田 之父／母。
          source:
            id: s_jy01ysNI_-_TD_22PFaowv
            source_type: api_record
            title: 中国历代人物传记资料库：王田（CBDB 217297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217297&o=json
            external_identifier: CBDB:217297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q3ewFUkH4tvUNYqQiNKdGz
        status: active
        display_name: 王邦憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2HQI8jNWtqXSrn2_Ud9day
        subject_person_id: p_6pj24W94QvfLXe9bMDj76c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_T2aW2r8VNf284ord2Teaqx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W1OYzx7-wZUZ2amPZ83dxf
          claim_id: c_2HQI8jNWtqXSrn2_Ud9day
          source_id: s_jy01ysNI_-_TD_22PFaowv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126690 王國）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jy01ysNI_-_TD_22PFaowv
            source_type: api_record
            title: 中国历代人物传记资料库：王田（CBDB 217297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217297&o=json
            external_identifier: CBDB:217297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T2aW2r8VNf284ord2Teaqx
        status: active
        display_name: 王國
        merged_into_person_id: null
---

# 王田

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王田 | accepted |
| bio.summary | 王田，明人物。萬曆五年進士，籍贯耀州。（中国历代人物传记资料库 CBDB 217297） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_q3ewFUkH4tvUNYqQiNKdGz | 王邦憲 | accepted |
| other | p_T2aW2r8VNf284ord2Teaqx | 王國 | accepted |

## 外部来源

- [中国历代人物传记资料库：王田（CBDB 217297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217297&o=json)
