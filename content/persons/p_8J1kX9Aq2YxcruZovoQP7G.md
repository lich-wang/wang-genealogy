---
schema: wang-person/v1
id: p_8J1kX9Aq2YxcruZovoQP7G
status: active
merged_into: null
display_name: 尹氏
revision: 1
cbdb_id: 238215
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ppd22V8DUPc0lwGob25eIg
        subject_person_id: p_8J1kX9Aq2YxcruZovoQP7G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 尹氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j8pmCDDczrLFbRF_p7SgVo
          claim_id: c_ppd22V8DUPc0lwGob25eIg
          source_id: s_JZR84oUvU8univAiB0NW5e
          stance: supports
          locator: CBDB:238215
          quotation: null
          interpretation_note: CBDB 明确记录的王理配偶
          source: &a1
            id: s_JZR84oUvU8univAiB0NW5e
            source_type: api_record
            title: 中国历代人物传记资料库：尹氏(王理妻)（CBDB 238215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238215&o=json
            external_identifier: CBDB:238215
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
        id: c_t8Y40_j9mRsLy2P3LOhrUD
        subject_person_id: p_UigxC39qu348GRPzwB2VV6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8J1kX9Aq2YxcruZovoQP7G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sCLz0DLjE1jOgJyeKQ5N1U
          claim_id: c_t8Y40_j9mRsLy2P3LOhrUD
          source_id: s_JZR84oUvU8univAiB0NW5e
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第二十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UigxC39qu348GRPzwB2VV6
        status: active
        display_name: 王理
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 尹氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 尹氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_UigxC39qu348GRPzwB2VV6 | 王理 | accepted |

## 外部来源

- [中国历代人物传记资料库：尹氏(王理妻)（CBDB 238215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238215&o=json)
