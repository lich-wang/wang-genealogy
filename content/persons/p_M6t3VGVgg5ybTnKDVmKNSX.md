---
schema: wang-person/v1
id: p_M6t3VGVgg5ybTnKDVmKNSX
status: active
merged_into: null
display_name: 丁氏
revision: 1
cbdb_id: 118492
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gOeFBLZu-NcyLD8yUuY9x2
        subject_person_id: p_M6t3VGVgg5ybTnKDVmKNSX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 丁氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qfmy--qnAnrJtpCYkWjkv8
          claim_id: c_gOeFBLZu-NcyLD8yUuY9x2
          source_id: s_ea8vnisD_dQHhQKRWBgzTs
          stance: supports
          locator: CBDB:118492
          quotation: null
          interpretation_note: CBDB 明确记录的王序禮配偶
          source: &a1
            id: s_ea8vnisD_dQHhQKRWBgzTs
            source_type: api_record
            title: 中国历代人物传记资料库：丁氏(王序禮妻)（CBDB 118492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118492&o=json
            external_identifier: CBDB:118492
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
        id: c_CVcfk7G-hFNJp7GXMu58NE
        subject_person_id: p_5kBeiGPTh9zzzB99spZLjF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_M6t3VGVgg5ybTnKDVmKNSX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c0w8MDsigtxoWvJPoFYeqt
          claim_id: c_CVcfk7G-hFNJp7GXMu58NE
          source_id: s_ea8vnisD_dQHhQKRWBgzTs
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2597：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5kBeiGPTh9zzzB99spZLjF
        status: active
        display_name: 王序禮
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 丁氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 丁氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5kBeiGPTh9zzzB99spZLjF | 王序禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：丁氏(王序禮妻)（CBDB 118492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118492&o=json)
