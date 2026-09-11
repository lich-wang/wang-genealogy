---
schema: wang-person/v1
id: p_qDMQBGR2e3tZ2gAPo7nDfp
status: active
merged_into: null
display_name: 王政
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q5oDtNEDizZRheAAkUPBL9
        subject_person_id: p_qDMQBGR2e3tZ2gAPo7nDfp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UiB1ajNzUGrKoBAymhLGbz
          claim_id: c_Q5oDtNEDizZRheAAkUPBL9
          source_id: s_UBUh5h5nzTVT5Ku38zSw1g
          stance: supports
          locator: CBDB:295399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295399）
          source: &a1
            id: s_UBUh5h5nzTVT5Ku38zSw1g
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 295399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295399&o=json
            external_identifier: CBDB:295399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VRQcderbmwMwHGcc3SEKvL
        subject_person_id: p_qDMQBGR2e3tZ2gAPo7nDfp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 295399）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iCT8YZ85IMh6ybHavWIec2
          claim_id: c_VRQcderbmwMwHGcc3SEKvL
          source_id: s_UBUh5h5nzTVT5Ku38zSw1g
          stance: supports
          locator: CBDB:295399
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
        id: c_BBtKIhvUbuNB-Rftmo_nw_
        subject_person_id: p_qDMQBGR2e3tZ2gAPo7nDfp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0B9MPrpLItaTvNScdLWepH
          claim_id: c_BBtKIhvUbuNB-Rftmo_nw_
          source_id: s_9t6MfGDZdGonHJQxFCm4qT
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9t6MfGDZdGonHJQxFCm4qT
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 202834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202834&o=json
            external_identifier: CBDB:202834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fJbtRZx7s1XqSoTR8tLmBu
        status: active
        display_name: 王珉
        merged_into_person_id: null
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 295399） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_fJbtRZx7s1XqSoTR8tLmBu | 王珉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珉（CBDB 202834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202834&o=json)
- [中国历代人物传记资料库：王政（CBDB 295399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295399&o=json)
