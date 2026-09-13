---
schema: wang-person/v1
id: p_uWS3ofLwxoYWjnRbSLuL1G
status: active
merged_into: null
display_name: 王在京
cbdb_id: 294723
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8QLUbH37JcwdTRg62fF8Xx
        subject_person_id: p_uWS3ofLwxoYWjnRbSLuL1G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王在京，史料所见人物。本项目依据《中国历代人物传记资料库：王在京（CBDB 294723）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_QTVWy4Sx9Th6ffgA1OnCNy
          claim_id: c_8QLUbH37JcwdTRg62fF8Xx
          source_id: s_7p2NtFNMKtWv7ncH6BosRG
          stance: supports
          locator: CBDB:294723
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7p2NtFNMKtWv7ncH6BosRG
            source_type: api_record
            title: 中国历代人物传记资料库：王在京（CBDB 294723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294723&o=json
            external_identifier: CBDB:294723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cZK8HMqQsi3oxnVhWEJXPP
        subject_person_id: p_uWS3ofLwxoYWjnRbSLuL1G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王在京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Xu5LcZ5gE14cyFcYBgku8c
          claim_id: c_cZK8HMqQsi3oxnVhWEJXPP
          source_id: s_7p2NtFNMKtWv7ncH6BosRG
          stance: supports
          locator: CBDB:294723
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XbULSEgMceT2dWp8iX61vP
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uWS3ofLwxoYWjnRbSLuL1G
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V_WkiEl67MRe-SH7NSJKWV
          claim_id: c_XbULSEgMceT2dWp8iX61vP
          source_id: s_7p2NtFNMKtWv7ncH6BosRG
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7p2NtFNMKtWv7ncH6BosRG
            source_type: api_record
            title: 中国历代人物传记资料库：王在京（CBDB 294723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294723&o=json
            external_identifier: CBDB:294723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_35PzL233nqJ85Q2BX1Q5dA
        status: active
        display_name: 王良柱
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王在京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王在京，史料所见人物。本项目依据《中国历代人物传记资料库：王在京（CBDB 294723）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王在京 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_35PzL233nqJ85Q2BX1Q5dA | 王良柱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王在京（CBDB 294723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294723&o=json)
