---
schema: wang-person/v1
id: p_3GfmC8MTFBUnnSqz1tct8A
status: active
merged_into: null
display_name: 王瓊瑛
cbdb_id: 118577
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jyg1cT2A8EwuU9EDSUJF88
        subject_person_id: p_3GfmC8MTFBUnnSqz1tct8A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊瑛，清人物。中国历代人物传记资料库（CBDB）以人物编号 118577 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_-jJSwYJ7RENQpZS1Yh2sTr
          claim_id: c_jyg1cT2A8EwuU9EDSUJF88
          source_id: s_g9bxtFmf8G5ZLp2b3Kg2JT
          stance: supports
          locator: CBDB:118577
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_g9bxtFmf8G5ZLp2b3Kg2JT
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊瑛（CBDB 118577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118577&o=json
            external_identifier: CBDB:118577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VV1KuSvdWJBbQBhCdzwTaN
        subject_person_id: p_3GfmC8MTFBUnnSqz1tct8A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊瑛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kD941Sygkc2LHbXS6n9KHc
          claim_id: c_VV1KuSvdWJBbQBhCdzwTaN
          source_id: s_g9bxtFmf8G5ZLp2b3Kg2JT
          stance: supports
          locator: CBDB:118577
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_g9bxtFmf8G5ZLp2b3Kg2JT
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊瑛（CBDB 118577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118577&o=json
            external_identifier: CBDB:118577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8-S2WblRPRPb8QIctedOe4
        subject_person_id: p_zZVerX4aCQcewsabcCfJF9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3GfmC8MTFBUnnSqz1tct8A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bbgiaQQRAUxgmE78la1_Fn
          claim_id: c_8-S2WblRPRPb8QIctedOe4
          source_id: s_g9bxtFmf8G5ZLp2b3Kg2JT
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2654, HuWenKai #257：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zZVerX4aCQcewsabcCfJF9
        status: active
        display_name: 王燮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_pkNF91yItEQ8RkmAD0uquE
        subject_person_id: p_3GfmC8MTFBUnnSqz1tct8A
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QVJacyZZDcMUMA6LhaCPei
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f-rNEclpZ_laqvyrFDQpWV
          claim_id: c_pkNF91yItEQ8RkmAD0uquE
          source_id: s_J8XwNwf-7nyPG5FY-7dlia
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2654, HuWenKai #257：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_J8XwNwf-7nyPG5FY-7dlia
            source_type: api_record
            title: 中国历代人物传记资料库：曾建斗（CBDB 118579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118579&o=json
            external_identifier: CBDB:118579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QVJacyZZDcMUMA6LhaCPei
        status: active
        display_name: 曾建斗
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王瓊瑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瓊瑛，清人物。中国历代人物传记资料库（CBDB）以人物编号 118577 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王瓊瑛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zZVerX4aCQcewsabcCfJF9 | 王燮 | accepted |
| spouses | p_QVJacyZZDcMUMA6LhaCPei | 曾建斗 | accepted |

## 外部来源

- [中国历代人物传记资料库：曾建斗（CBDB 118579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118579&o=json)
- [中国历代人物传记资料库：王瓊瑛（CBDB 118577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118577&o=json)
