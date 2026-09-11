---
schema: wang-person/v1
id: p_7LTXKnc7tgbyWn2kq2c1gJ
status: active
merged_into: null
display_name: 王貴
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RCosoKKK7M8BZWnzPLvrnv
        subject_person_id: p_7LTXKnc7tgbyWn2kq2c1gJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EsGfFAxAb1tPZx1oLMGqHw
          claim_id: c_RCosoKKK7M8BZWnzPLvrnv
          source_id: s_1W8kE8oJ4E9W3JKdLy74oz
          stance: supports
          locator: CBDB:285302
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285302）
          source: &a1
            id: s_1W8kE8oJ4E9W3JKdLy74oz
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 285302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285302&o=json
            external_identifier: CBDB:285302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CfFm4vJoNYc5VJ1jcpnsNf
        subject_person_id: p_7LTXKnc7tgbyWn2kq2c1gJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴，明人物。正德十六年進士。（中国历代人物传记资料库 CBDB 285302）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SKdchEPwKOsW_8wHrJ3hB5
          claim_id: c_CfFm4vJoNYc5VJ1jcpnsNf
          source_id: s_1W8kE8oJ4E9W3JKdLy74oz
          stance: supports
          locator: CBDB:285302
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
        id: c_o-3igfWnx-xDL6rlaQmRQl
        subject_person_id: p_7LTXKnc7tgbyWn2kq2c1gJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_o9X4e64D4iKX33c4myBcBe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Iab5Z17MrmQDyxha3trxA3
          claim_id: c_o-3igfWnx-xDL6rlaQmRQl
          source_id: s_1W8kE8oJ4E9W3JKdLy74oz
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百一十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_o9X4e64D4iKX33c4myBcBe
        status: active
        display_name: 王繼禮
        merged_into_person_id: null
  other: []
---

# 王貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴 | accepted |
| bio.summary | 王貴，明人物。正德十六年進士。（中国历代人物传记资料库 CBDB 285302） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_o9X4e64D4iKX33c4myBcBe | 王繼禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 285302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285302&o=json)
