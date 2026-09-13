---
schema: wang-person/v1
id: p_8UiJxE94RAsuCL5DgziXax
status: active
merged_into: null
display_name: 王大端
cbdb_id: 328845
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_47xC6PGBh82mBdJ9zHR7go
        subject_person_id: p_8UiJxE94RAsuCL5DgziXax
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大端，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 328845）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7lOuWbfuYZIF5drtQFVMux
          claim_id: c_47xC6PGBh82mBdJ9zHR7go
          source_id: s_N4Ce2ybK5BQyr3f9jPnubK
          stance: supports
          locator: CBDB:328845
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_N4Ce2ybK5BQyr3f9jPnubK
            source_type: api_record
            title: 中国历代人物传记资料库：王大端（CBDB 328845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328845&o=json
            external_identifier: CBDB:328845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qGgY6r5oGf5VPCi5oHsNXB
        subject_person_id: p_8UiJxE94RAsuCL5DgziXax
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dVpc97XQkzAF9KhFuJRD27
          claim_id: c_qGgY6r5oGf5VPCi5oHsNXB
          source_id: s_N4Ce2ybK5BQyr3f9jPnubK
          stance: supports
          locator: CBDB:328845
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_LhcPD8pAD9S2QXtrL9DKiy
        subject_person_id: p_8UiJxE94RAsuCL5DgziXax
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4DFuV6CGsBNLfJsdyJ3xiy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4AilQunnNcQTvnoaCb1J52
          claim_id: c_LhcPD8pAD9S2QXtrL9DKiy
          source_id: s_ARQKtERHmNGY6Hxj2bzaXN
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百六十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ARQKtERHmNGY6Hxj2bzaXN
            source_type: api_record
            title: 中国历代人物传记资料库：王廷簡（CBDB 205141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205141&o=json
            external_identifier: CBDB:205141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4DFuV6CGsBNLfJsdyJ3xiy
        status: active
        display_name: 王廷簡
        merged_into_person_id: null
  other: []
---

# 王大端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大端，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 328845） | accepted |
| name.primary | 王大端 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4DFuV6CGsBNLfJsdyJ3xiy | 王廷簡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大端（CBDB 328845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328845&o=json)
- [中国历代人物传记资料库：王廷簡（CBDB 205141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205141&o=json)
