---
schema: wang-person/v1
id: p_6gTciDBdkDFQABCEfo74CJ
status: active
merged_into: null
display_name: 陳其松
revision: 1
cbdb_id: 120323
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q7CpzI-TJTA0RZWIRiYP19
        subject_person_id: p_6gTciDBdkDFQABCEfo74CJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳其松
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VTSkb2q8wzka6PUZHBoW93
          claim_id: c_q7CpzI-TJTA0RZWIRiYP19
          source_id: s_KNlZZSaRuAGCbl6MYbkKhm
          stance: supports
          locator: CBDB:120323
          quotation: null
          interpretation_note: CBDB 明确记录的王少華配偶
          source: &a1
            id: s_KNlZZSaRuAGCbl6MYbkKhm
            source_type: api_record
            title: 中国历代人物传记资料库：陳其松（CBDB 120323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120323&o=json
            external_identifier: CBDB:120323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_V7t79LmzsPYLaOmHkAqsF3
        subject_person_id: p_tn8DUA9bYGXcmK139JjzXS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6gTciDBdkDFQABCEfo74CJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VTz6-D7_DV1dlgbFEzODnl
          claim_id: c_V7t79LmzsPYLaOmHkAqsF3
          source_id: s_KNlZZSaRuAGCbl6MYbkKhm
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3623, HuWenKai #230：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tn8DUA9bYGXcmK139JjzXS
        status: active
        display_name: 王少華
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳其松

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳其松 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_tn8DUA9bYGXcmK139JjzXS | 王少華 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳其松（CBDB 120323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120323&o=json)
