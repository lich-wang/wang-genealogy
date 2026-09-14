---
schema: wang-person/v1
id: p_WYkYmR1X2JspjyQZrTdLz8
status: active
merged_into: null
display_name: 王學仕
cbdb_id: 316264
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bTd8bjZcKVbN47QWApDaAr
        subject_person_id: p_WYkYmR1X2JspjyQZrTdLz8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學仕，明人物。嘉靖三十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 316264）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_h-h0NLych66CvXr9y6p_rS
          claim_id: c_bTd8bjZcKVbN47QWApDaAr
          source_id: s_CAL3G7kMztL3NAonKaaZCH
          stance: supports
          locator: CBDB:316264
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CAL3G7kMztL3NAonKaaZCH
            source_type: api_record
            title: 中国历代人物传记资料库：王學仕（CBDB 316264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316264&o=json
            external_identifier: CBDB:316264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NVoX3K3d721D23jQtEj5Rv
        subject_person_id: p_WYkYmR1X2JspjyQZrTdLz8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學仕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pcqE6m8hay3Vu7GmgD3C1D
          claim_id: c_NVoX3K3d721D23jQtEj5Rv
          source_id: s_CAL3G7kMztL3NAonKaaZCH
          stance: supports
          locator: CBDB:316264
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OQefSWUO-Yz-veWbUhdrhA
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WYkYmR1X2JspjyQZrTdLz8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gkzpp5j1RBTlnLdYAgr5NR
          claim_id: c_OQefSWUO-Yz-veWbUhdrhA
          source_id: s_oJhsoIN3aDNxIX2WLEIDFq
          stance: supports
          locator: CBDB：兄弟 王學謨（204228）之父／母 王世卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王學仕 与 王學謨 为同胞（CBDB 记「弟」），王學謨 之父／母即 王學仕 之父／母。
          source:
            id: s_oJhsoIN3aDNxIX2WLEIDFq
            source_type: api_record
            title: 中国历代人物传记资料库：王學仕（CBDB 316264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316264&o=json
            external_identifier: CBDB:316264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CTanKyckA8Emf57Dk1Jm7o
        status: active
        display_name: 王世卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_slxsoY0uCTN2NGlZGkB-Ac
        subject_person_id: p_WYkYmR1X2JspjyQZrTdLz8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5qMni6Xv9IyNhRKyWHBOJ3
          claim_id: c_slxsoY0uCTN2NGlZGkB-Ac
          source_id: s_oJhsoIN3aDNxIX2WLEIDFq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204228 王學謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oJhsoIN3aDNxIX2WLEIDFq
            source_type: api_record
            title: 中国历代人物传记资料库：王學仕（CBDB 316264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316264&o=json
            external_identifier: CBDB:316264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nxMTBwovWR92XT8tAZTvLW
        status: active
        display_name: 王學謨
        merged_into_person_id: null
---

# 王學仕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學仕，明人物。嘉靖三十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 316264） | accepted |
| name.primary | 王學仕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CTanKyckA8Emf57Dk1Jm7o | 王世卿 | accepted |
| other | p_nxMTBwovWR92XT8tAZTvLW | 王學謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學仕（CBDB 316264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316264&o=json)
