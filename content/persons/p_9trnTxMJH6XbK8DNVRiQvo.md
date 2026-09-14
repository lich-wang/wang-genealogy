---
schema: wang-person/v1
id: p_9trnTxMJH6XbK8DNVRiQvo
status: active
merged_into: null
display_name: 王鏈
cbdb_id: 273673
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u3M63UaFJMT8V5S2811BhF
        subject_person_id: p_9trnTxMJH6XbK8DNVRiQvo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏈，明人物。景泰五年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 273673）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_43aO443PniAXfENuKLdj8C
          claim_id: c_u3M63UaFJMT8V5S2811BhF
          source_id: s_Ra3spaNLMkoo6fXnXyokDQ
          stance: supports
          locator: CBDB:273673
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ra3spaNLMkoo6fXnXyokDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鏈（CBDB 273673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273673&o=json
            external_identifier: CBDB:273673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oeMR5NtjVQEJWHwmWfueE5
        subject_person_id: p_9trnTxMJH6XbK8DNVRiQvo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_21PAjHNMeNG1Ask2tjvj22
          claim_id: c_oeMR5NtjVQEJWHwmWfueE5
          source_id: s_Ra3spaNLMkoo6fXnXyokDQ
          stance: supports
          locator: CBDB:273673
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NZAhwDV1VIVSGZ3UbNcm-0
        subject_person_id: p_fbcjmX688Gs2kLT5MbYSLr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9trnTxMJH6XbK8DNVRiQvo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-NGrAe2iBlHiMyAxHf3gKF
          claim_id: c_NZAhwDV1VIVSGZ3UbNcm-0
          source_id: s_TdewXk6R55_5XlGFWPCqJ-
          stance: supports
          locator: CBDB：兄弟 王盧（198449）之父／母 王伯堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王鏈 与 王盧 为同胞（CBDB 记「兄」），王盧 之父／母即 王鏈 之父／母。
          source:
            id: s_TdewXk6R55_5XlGFWPCqJ-
            source_type: api_record
            title: 中国历代人物传记资料库：王鏈（CBDB 273673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273673&o=json
            external_identifier: CBDB:273673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fbcjmX688Gs2kLT5MbYSLr
        status: active
        display_name: 王伯堅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gUhAOmt6rluwFPwyDYpCos
        subject_person_id: p_9trnTxMJH6XbK8DNVRiQvo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YZgMMK2h5d44s5CGoUpM7o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jeuk8U5I2eefuTxUW9zYYt
          claim_id: c_gUhAOmt6rluwFPwyDYpCos
          source_id: s_TdewXk6R55_5XlGFWPCqJ-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198449 王盧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TdewXk6R55_5XlGFWPCqJ-
            source_type: api_record
            title: 中国历代人物传记资料库：王鏈（CBDB 273673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273673&o=json
            external_identifier: CBDB:273673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YZgMMK2h5d44s5CGoUpM7o
        status: active
        display_name: 王盧
        merged_into_person_id: null
---

# 王鏈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鏈，明人物。景泰五年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 273673） | accepted |
| name.primary | 王鏈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fbcjmX688Gs2kLT5MbYSLr | 王伯堅 | accepted |
| other | p_YZgMMK2h5d44s5CGoUpM7o | 王盧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鏈（CBDB 273673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273673&o=json)
