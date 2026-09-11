---
schema: wang-person/v1
id: p_1vWc5rHv6JUuHdBQ2ZMSb2
status: active
merged_into: null
display_name: 王棠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fo4T1oHfHhL2dpiRLhn34G
        subject_person_id: p_1vWc5rHv6JUuHdBQ2ZMSb2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NsbTUgEq58hPSdwwDB9DQn
          claim_id: c_fo4T1oHfHhL2dpiRLhn34G
          source_id: s_L4hA8h1CjWmXRgBxPRZu6r
          stance: supports
          locator: CBDB:555998
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555998）
          source: &a1
            id: s_L4hA8h1CjWmXRgBxPRZu6r
            source_type: api_record
            title: 中国历代人物传记资料库：王棠（CBDB 555998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555998&o=json
            external_identifier: CBDB:555998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qjKXd63P43Ntgb6JN5toLn
        subject_person_id: p_1vWc5rHv6JUuHdBQ2ZMSb2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L8vSfGt5roxS56hXYbS6Hz
          claim_id: c_qjKXd63P43Ntgb6JN5toLn
          source_id: s_L4hA8h1CjWmXRgBxPRZu6r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vL1GcJDK2Fer6z0hQgVw8y
        subject_person_id: p_JDkk9mN2RuQb3Zpo6HEPAu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1vWc5rHv6JUuHdBQ2ZMSb2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mRMY5WNOayQLbLNeFRg2Iy
          claim_id: c_vL1GcJDK2Fer6z0hQgVw8y
          source_id: s_L4hA8h1CjWmXRgBxPRZu6r
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163683：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JDkk9mN2RuQb3Zpo6HEPAu
        status: active
        display_name: 王泰徵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王棠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JDkk9mN2RuQb3Zpo6HEPAu | 王泰徵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棠（CBDB 555998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555998&o=json)
