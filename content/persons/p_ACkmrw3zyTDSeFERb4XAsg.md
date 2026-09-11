---
schema: wang-person/v1
id: p_ACkmrw3zyTDSeFERb4XAsg
status: active
merged_into: null
display_name: 郭氏
revision: 1
cbdb_id: 297049
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LWRdwVXWh7B6bhrYrkOhLZ
        subject_person_id: p_ACkmrw3zyTDSeFERb4XAsg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hPyQqjDVtojXGcpX8FLzfk
          claim_id: c_LWRdwVXWh7B6bhrYrkOhLZ
          source_id: s_eUrr-7xLTImpjn4rg7b0jS
          stance: supports
          locator: CBDB:297049
          quotation: null
          interpretation_note: CBDB 明确记录的王世雍配偶
          source: &a1
            id: s_eUrr-7xLTImpjn4rg7b0jS
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王世雍妻)（CBDB 297049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297049&o=json
            external_identifier: CBDB:297049
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
        id: c_HPdDi-f1I6JlmdrROz_bYi
        subject_person_id: p_dmToVAW68CjUAQM41bQAM7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ACkmrw3zyTDSeFERb4XAsg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7aFX0Pp8zVwCRwe6i0p6kh
          claim_id: c_HPdDi-f1I6JlmdrROz_bYi
          source_id: s_eUrr-7xLTImpjn4rg7b0jS
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第九十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dmToVAW68CjUAQM41bQAM7
        status: active
        display_name: 王世雍
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 郭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 郭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dmToVAW68CjUAQM41bQAM7 | 王世雍 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王世雍妻)（CBDB 297049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297049&o=json)
