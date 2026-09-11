---
schema: wang-person/v1
id: p_5tUGjNNTxa32Gu1p3k1bMA
status: active
merged_into: null
display_name: 王良
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GAvwvnyrRtGcKxZNmQApUN
        subject_person_id: p_5tUGjNNTxa32Gu1p3k1bMA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PHCeKBvthAY1CVPUAS1gA7
          claim_id: c_GAvwvnyrRtGcKxZNmQApUN
          source_id: s_JDHukXmCY3ppiwfPPRcN7C
          stance: supports
          locator: CBDB:229894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229894）
          source: &a1
            id: s_JDHukXmCY3ppiwfPPRcN7C
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 229894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229894&o=json
            external_identifier: CBDB:229894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hxpnpmBX57UPpK3xuc61Jn
        subject_person_id: p_5tUGjNNTxa32Gu1p3k1bMA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_51XKo9pryDP3qNKs4mPZc8
          claim_id: c_hxpnpmBX57UPpK3xuc61Jn
          source_id: s_JDHukXmCY3ppiwfPPRcN7C
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_TtEQy5Jk-99ctE2bJzj6xm
        subject_person_id: p_5tUGjNNTxa32Gu1p3k1bMA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l7uZ6D-5U5K3dYOOn7ylC4
          claim_id: c_TtEQy5Jk-99ctE2bJzj6xm
          source_id: s_JDHukXmCY3ppiwfPPRcN7C
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DJcqSVwRMjWd5tk8GAdMxa
        status: active
        display_name: 王佐
        merged_into_person_id: null
  other: []
---

# 王良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DJcqSVwRMjWd5tk8GAdMxa | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良（CBDB 229894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229894&o=json)
