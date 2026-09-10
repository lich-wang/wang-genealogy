---
schema: wang-person/v1
id: p_ZiM4N5Gs41SCGQ3WKw5622
status: active
merged_into: null
display_name: 徐氏
revision: 1
cbdb_id: 255124
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zkJCp9-41g6wxHEmr7QIf6
        subject_person_id: p_ZiM4N5Gs41SCGQ3WKw5622
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NGyGFvsOE4wbZqW3yLEjVq
          claim_id: c_zkJCp9-41g6wxHEmr7QIf6
          source_id: s_0Q1g4m1HimdpRhpab3Atrh
          stance: supports
          locator: CBDB:255124
          quotation: null
          interpretation_note: CBDB 明确记录的王宥配偶
          source: &a1
            id: s_0Q1g4m1HimdpRhpab3Atrh
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王宥妻)（CBDB 255124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255124&o=json
            external_identifier: CBDB:255124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
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
        id: c_Jrj-VJ01J5eqNojB8Tw_5e
        subject_person_id: p_ZiM4N5Gs41SCGQ3WKw5622
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HFW0XKWif2TXk6C7C0nt3C
          claim_id: c_Jrj-VJ01J5eqNojB8Tw_5e
          source_id: s_0Q1g4m1HimdpRhpab3Atrh
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十二名：丈夫
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_15Nh8Xnsw6Q2WxxXdtixbY
        status: active
        display_name: 王宥
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 徐氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 徐氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_15Nh8Xnsw6Q2WxxXdtixbY | 王宥 | accepted |

## 外部来源

- [中国历代人物传记资料库：徐氏(王宥妻)（CBDB 255124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255124&o=json)
