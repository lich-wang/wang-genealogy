---
schema: wang-person/v1
id: p_1oeS3ozES1xNf6Ww7VNcgB
status: active
merged_into: null
display_name: 蕭氏
revision: 1
cbdb_id: 306738
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GDRlOpHulNPqLydChF8kRd
        subject_person_id: p_1oeS3ozES1xNf6Ww7VNcgB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蕭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x1HrFOHXZwckiBos1KjMEU
          claim_id: c_GDRlOpHulNPqLydChF8kRd
          source_id: s_KBqF5TGVsWibwKkW8Cetxg
          stance: supports
          locator: CBDB:306738
          quotation: null
          interpretation_note: CBDB 明确记录的王鳴臣配偶
          source: &a1
            id: s_KBqF5TGVsWibwKkW8Cetxg
            source_type: api_record
            title: 中国历代人物传记资料库：蕭氏(王鳴臣妻)（CBDB 306738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306738&o=json
            external_identifier: CBDB:306738
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
        id: c_vjfPj-e7D_6O-uYI6IeOSW
        subject_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1oeS3ozES1xNf6Ww7VNcgB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q8aRUZLn-WhtdEYTfCHjJM
          claim_id: c_vjfPj-e7D_6O-uYI6IeOSW
          source_id: s_KBqF5TGVsWibwKkW8Cetxg
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第五十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gYn21nxF9d7iJNFwbu2Rnf
        status: active
        display_name: 王鳴臣
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蕭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 蕭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_gYn21nxF9d7iJNFwbu2Rnf | 王鳴臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：蕭氏(王鳴臣妻)（CBDB 306738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306738&o=json)
