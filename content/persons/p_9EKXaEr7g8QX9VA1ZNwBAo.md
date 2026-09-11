---
schema: wang-person/v1
id: p_9EKXaEr7g8QX9VA1ZNwBAo
status: active
merged_into: null
display_name: 徐氏
revision: 1
cbdb_id: 254109
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_thb8GMit0CVb6CcgZ05w2_
        subject_person_id: p_9EKXaEr7g8QX9VA1ZNwBAo
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
        - id: cs_1xPkqvXnzQa2ygVKTlSs1A
          claim_id: c_thb8GMit0CVb6CcgZ05w2_
          source_id: s_WYaxlF-2QxTm2ILmf_zJTn
          stance: supports
          locator: CBDB:254109
          quotation: null
          interpretation_note: CBDB 明确记录的王高配偶
          source: &a1
            id: s_WYaxlF-2QxTm2ILmf_zJTn
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王高妻)（CBDB 254109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254109&o=json
            external_identifier: CBDB:254109
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
        id: c_sV84Oqss79tZO3K7GhLcri
        subject_person_id: p_AUQVWk8JE4APmBfj8pSMKj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9EKXaEr7g8QX9VA1ZNwBAo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HvJ333yk0VvMPEjg7EFQZk
          claim_id: c_sV84Oqss79tZO3K7GhLcri
          source_id: s_WYaxlF-2QxTm2ILmf_zJTn
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第二甲第二十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AUQVWk8JE4APmBfj8pSMKj
        status: active
        display_name: 王高
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
| spouses | p_AUQVWk8JE4APmBfj8pSMKj | 王高 | accepted |

## 外部来源

- [中国历代人物传记资料库：徐氏(王高妻)（CBDB 254109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254109&o=json)
