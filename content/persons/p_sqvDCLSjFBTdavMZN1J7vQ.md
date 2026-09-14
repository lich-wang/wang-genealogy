---
schema: wang-person/v1
id: p_sqvDCLSjFBTdavMZN1J7vQ
status: active
merged_into: null
display_name: 王烺
cbdb_id: 300378
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nVWHEhC4VuXie75rHzkfS7
        subject_person_id: p_sqvDCLSjFBTdavMZN1J7vQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烺，明人物。嘉靖十七年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 300378）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_iZ5_hahpb9i34lNLxAhKiW
          claim_id: c_nVWHEhC4VuXie75rHzkfS7
          source_id: s_FGqvc8b9Q4tvsBSUURChKG
          stance: supports
          locator: CBDB:300378
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FGqvc8b9Q4tvsBSUURChKG
            source_type: api_record
            title: 中国历代人物传记资料库：王烺（CBDB 300378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300378&o=json
            external_identifier: CBDB:300378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QQesCK8KtE6HLnrjcc65gV
        subject_person_id: p_sqvDCLSjFBTdavMZN1J7vQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sS9g2PLQtQRYBp2uoAA6iJ
          claim_id: c_QQesCK8KtE6HLnrjcc65gV
          source_id: s_FGqvc8b9Q4tvsBSUURChKG
          stance: supports
          locator: CBDB:300378
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1xgBlabJrqYFcqwA3EiJlV
        subject_person_id: p_B2bBEtj4zAmwMdnWXTzqPS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sqvDCLSjFBTdavMZN1J7vQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3URJaUWxIidvrOWDDp1Jpt
          claim_id: c_1xgBlabJrqYFcqwA3EiJlV
          source_id: s_NPikcApruT7EmF9sXREyxk
          stance: supports
          locator: CBDB：兄弟 王炯（203137）之父／母 王木
          quotation: null
          interpretation_note: 由兄弟关系推断：王烺 与 王炯 为同胞（CBDB 记「兄」），王炯 之父／母即 王烺 之父／母。
          source:
            id: s_NPikcApruT7EmF9sXREyxk
            source_type: api_record
            title: 中国历代人物传记资料库：王烺（CBDB 300378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300378&o=json
            external_identifier: CBDB:300378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B2bBEtj4zAmwMdnWXTzqPS
        status: active
        display_name: 王木
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0D0dfHQeAnDIJG3NwaL8Q9
        subject_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sqvDCLSjFBTdavMZN1J7vQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MrXQhXrnMQ0lLrcMLmyFNZ
          claim_id: c_0D0dfHQeAnDIJG3NwaL8Q9
          source_id: s_NPikcApruT7EmF9sXREyxk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203137 王炯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NPikcApruT7EmF9sXREyxk
            source_type: api_record
            title: 中国历代人物传记资料库：王烺（CBDB 300378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300378&o=json
            external_identifier: CBDB:300378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sSGZsmVuWDC2RLoBps8cmA
        status: active
        display_name: 王炯
        merged_into_person_id: null
---

# 王烺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王烺，明人物。嘉靖十七年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 300378） | accepted |
| name.primary | 王烺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B2bBEtj4zAmwMdnWXTzqPS | 王木 | accepted |
| other | p_sSGZsmVuWDC2RLoBps8cmA | 王炯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王烺（CBDB 300378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300378&o=json)
