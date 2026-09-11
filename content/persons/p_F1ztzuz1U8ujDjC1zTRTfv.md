---
schema: wang-person/v1
id: p_F1ztzuz1U8ujDjC1zTRTfv
status: active
merged_into: null
display_name: 王陸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_unoGY7UCXn6xUerscUkMcG
        subject_person_id: p_F1ztzuz1U8ujDjC1zTRTfv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iBfqtTW9ghcBt4d7kMq4y9
          claim_id: c_unoGY7UCXn6xUerscUkMcG
          source_id: s_V5rjyX2LipcYUg7MCz2X2J
          stance: supports
          locator: CBDB:256023
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256023）
          source: &a1
            id: s_V5rjyX2LipcYUg7MCz2X2J
            source_type: api_record
            title: 中国历代人物传记资料库：王陸（CBDB 256023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256023&o=json
            external_identifier: CBDB:256023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.372Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oPdpJThWRAL3B6yD18SDmP
        subject_person_id: p_F1ztzuz1U8ujDjC1zTRTfv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陸，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 256023）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kj1XpGiGnsYO4e_yTmrskY
          claim_id: c_oPdpJThWRAL3B6yD18SDmP
          source_id: s_V5rjyX2LipcYUg7MCz2X2J
          stance: supports
          locator: CBDB:256023
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_ewl21wyAVlYfqibDN_AhmF
        subject_person_id: p_F1ztzuz1U8ujDjC1zTRTfv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q746PBZNycHf9YN5GVT1MS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gLER_ireIs5xhCp5mw7u99
          claim_id: c_ewl21wyAVlYfqibDN_AhmF
          source_id: s_V5rjyX2LipcYUg7MCz2X2J
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第四十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q746PBZNycHf9YN5GVT1MS
        status: active
        display_name: 王璇
        merged_into_person_id: null
  other: []
---

# 王陸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陸 | accepted |
| bio.summary | 王陸，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 256023） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Q746PBZNycHf9YN5GVT1MS | 王璇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陸（CBDB 256023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256023&o=json)
