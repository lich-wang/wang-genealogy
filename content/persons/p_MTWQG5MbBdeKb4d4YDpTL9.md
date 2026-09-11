---
schema: wang-person/v1
id: p_MTWQG5MbBdeKb4d4YDpTL9
status: active
merged_into: null
display_name: 王瓛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7veAMEppF3y4VHeYsQQy6A
        subject_person_id: p_MTWQG5MbBdeKb4d4YDpTL9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jq12iSE7CvohC2QkJC7F7c
          claim_id: c_7veAMEppF3y4VHeYsQQy6A
          source_id: s_391zJx8Esv1o7z1Sc23gUa
          stance: supports
          locator: CBDB:332686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332686）
          source: &a1
            id: s_391zJx8Esv1o7z1Sc23gUa
            source_type: api_record
            title: 中国历代人物传记资料库：王瓛（CBDB 332686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332686&o=json
            external_identifier: CBDB:332686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2uGG6ijhazbmNmKFJjYE7z
        subject_person_id: p_MTWQG5MbBdeKb4d4YDpTL9
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
        - id: cs_r7iqDJaJtfWo4Uc33wPyM6
          claim_id: c_2uGG6ijhazbmNmKFJjYE7z
          source_id: s_391zJx8Esv1o7z1Sc23gUa
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
        id: c_XwdrBCQzDovVG6tqB2MiOn
        subject_person_id: p_MTWQG5MbBdeKb4d4YDpTL9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nRCNMPx2SM6KXhzY8k8vA7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ar0y4mWZmh0w1dveipVv7E
          claim_id: c_XwdrBCQzDovVG6tqB2MiOn
          source_id: s_391zJx8Esv1o7z1Sc23gUa
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nRCNMPx2SM6KXhzY8k8vA7
        status: active
        display_name: 王應吉
        merged_into_person_id: null
  other: []
---

# 王瓛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_nRCNMPx2SM6KXhzY8k8vA7 | 王應吉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓛（CBDB 332686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332686&o=json)
