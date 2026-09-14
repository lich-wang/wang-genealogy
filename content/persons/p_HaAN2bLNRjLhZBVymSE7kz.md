---
schema: wang-person/v1
id: p_HaAN2bLNRjLhZBVymSE7kz
status: active
merged_into: null
display_name: 王用行
cbdb_id: 324573
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tod9MV7a3XMpXk4yU1SqM6
        subject_person_id: p_HaAN2bLNRjLhZBVymSE7kz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用行，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324573）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8vWL8gS7P4BTZpnSnOEYUP
          claim_id: c_tod9MV7a3XMpXk4yU1SqM6
          source_id: s_wb6mGbtJrJPmWjQX5kExrq
          stance: supports
          locator: CBDB:324573
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wb6mGbtJrJPmWjQX5kExrq
            source_type: api_record
            title: 中国历代人物传记资料库：王用行（CBDB 324573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324573&o=json
            external_identifier: CBDB:324573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4FnR76F2UYRETXJ9jEpa1N
        subject_person_id: p_HaAN2bLNRjLhZBVymSE7kz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_T1nyW7RHnpCmhDcT5LL472
          claim_id: c_4FnR76F2UYRETXJ9jEpa1N
          source_id: s_wb6mGbtJrJPmWjQX5kExrq
          stance: supports
          locator: CBDB:324573
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ftwT3LhT9qIQGVGBmXFPqu
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HaAN2bLNRjLhZBVymSE7kz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Rkc5PJUaY8YYymo-01BSA
          claim_id: c_ftwT3LhT9qIQGVGBmXFPqu
          source_id: s_5P_v-w6ghkP5P4G2XcpS-Z
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王用行 与 王用楨 为同胞（CBDB 记「兄」），王用楨 之父／母即 王用行 之父／母。
          source:
            id: s_5P_v-w6ghkP5P4G2XcpS-Z
            source_type: api_record
            title: 中国历代人物传记资料库：王用行（CBDB 324573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324573&o=json
            external_identifier: CBDB:324573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        status: active
        display_name: 王纘宗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ICzip-gVSuzK1nsj4lakh5
        subject_person_id: p_HaAN2bLNRjLhZBVymSE7kz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vb3azR_fOwejJCs-SE69GS
          claim_id: c_ICzip-gVSuzK1nsj4lakh5
          source_id: s_5P_v-w6ghkP5P4G2XcpS-Z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5P_v-w6ghkP5P4G2XcpS-Z
            source_type: api_record
            title: 中国历代人物传记资料库：王用行（CBDB 324573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324573&o=json
            external_identifier: CBDB:324573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hpB2Y5ktFHzZw4LUr2KGvj
        status: active
        display_name: 王用楨
        merged_into_person_id: null
---

# 王用行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用行，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324573） | accepted |
| name.primary | 王用行 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oZ4kQSFi4x4MxZ3DEL5Xbj | 王纘宗 | accepted |
| other | p_hpB2Y5ktFHzZw4LUr2KGvj | 王用楨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用行（CBDB 324573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324573&o=json)
