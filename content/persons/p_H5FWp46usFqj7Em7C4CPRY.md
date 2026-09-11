---
schema: wang-person/v1
id: p_H5FWp46usFqj7Em7C4CPRY
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 255906
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R8f8YokighAwySf_tRUqwo
        subject_person_id: p_H5FWp46usFqj7Em7C4CPRY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jAqxIeTqaQQPOlGeE7KOvf
          claim_id: c_R8f8YokighAwySf_tRUqwo
          source_id: s_kiBVGL3FBIrPv7f-IEDZwF
          stance: supports
          locator: CBDB:255906
          quotation: null
          interpretation_note: CBDB 明确记录的王瑫配偶
          source: &a1
            id: s_kiBVGL3FBIrPv7f-IEDZwF
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王瑫妻)（CBDB 255906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255906&o=json
            external_identifier: CBDB:255906
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
        id: c_A2X5_XiodI2K4pt5LLjVC4
        subject_person_id: p_2Loswb2HqViVcQmQ8rSFe9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_H5FWp46usFqj7Em7C4CPRY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oX47GrLhcUVcfvVwaJKcqX
          claim_id: c_A2X5_XiodI2K4pt5LLjVC4
          source_id: s_kiBVGL3FBIrPv7f-IEDZwF
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第三十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2Loswb2HqViVcQmQ8rSFe9
        status: active
        display_name: 王瑫
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2Loswb2HqViVcQmQ8rSFe9 | 王瑫 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王瑫妻)（CBDB 255906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255906&o=json)
