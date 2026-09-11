---
schema: wang-person/v1
id: p_ntQc3p4s7BLdaB5NMf8QXA
status: active
merged_into: null
display_name: 王信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m5W6it1uFFXxUBNQFU9s13
        subject_person_id: p_ntQc3p4s7BLdaB5NMf8QXA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BnBAyhEqRZWXqXjqFJMQMN
          claim_id: c_m5W6it1uFFXxUBNQFU9s13
          source_id: s_y9EwPW7ajC14ZFU9fTGeFn
          stance: supports
          locator: CBDB:285102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285102）
          source: &a1
            id: s_y9EwPW7ajC14ZFU9fTGeFn
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 285102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285102&o=json
            external_identifier: CBDB:285102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.207Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YKSqLGAsyJNET15482G3Wm
        subject_person_id: p_ntQc3p4s7BLdaB5NMf8QXA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，明人物。正德十六年進士，曾任刑部主事。（中国历代人物传记资料库 CBDB 285102）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qGVfONHS2K2zOeUC0u-SQB
          claim_id: c_YKSqLGAsyJNET15482G3Wm
          source_id: s_y9EwPW7ajC14ZFU9fTGeFn
          stance: supports
          locator: CBDB:285102
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_bpPeeG5MbgvJvB25iG_eNX
        subject_person_id: p_ntQc3p4s7BLdaB5NMf8QXA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mzfdPkfX3Q3SMWu8QjHhbB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W5GAKGf3MKE16jhyWsYO0r
          claim_id: c_bpPeeG5MbgvJvB25iG_eNX
          source_id: s_y9EwPW7ajC14ZFU9fTGeFn
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第九十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mzfdPkfX3Q3SMWu8QjHhbB
        status: active
        display_name: 王世爵
        merged_into_person_id: null
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，明人物。正德十六年進士，曾任刑部主事。（中国历代人物传记资料库 CBDB 285102） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_mzfdPkfX3Q3SMWu8QjHhbB | 王世爵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 285102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285102&o=json)
