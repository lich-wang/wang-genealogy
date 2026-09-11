---
schema: wang-person/v1
id: p_BaCEpLmBh9gdSdwyoef2DV
status: active
merged_into: null
display_name: 王文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q4N8UMNdUGYCGyNEABKG5Y
        subject_person_id: p_BaCEpLmBh9gdSdwyoef2DV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DPkABmhQ4ipPiy28F4gHa4
          claim_id: c_q4N8UMNdUGYCGyNEABKG5Y
          source_id: s_3KAQewTF45GKo2xsEMnhLk
          stance: supports
          locator: CBDB:327527
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327527）
          source: &a1
            id: s_3KAQewTF45GKo2xsEMnhLk
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 327527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327527&o=json
            external_identifier: CBDB:327527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rr9rjEurFuK8MgeUSFWVop
        subject_person_id: p_BaCEpLmBh9gdSdwyoef2DV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 327527）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RzY9175Zr4eFxPJNUE09b1
          claim_id: c_rr9rjEurFuK8MgeUSFWVop
          source_id: s_3KAQewTF45GKo2xsEMnhLk
          stance: supports
          locator: CBDB:327527
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
        id: c_ks9ciwMmtJdfaI9vrgAObS
        subject_person_id: p_BaCEpLmBh9gdSdwyoef2DV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DNv4seWbRrzL6XEkYnzA_H
          claim_id: c_ks9ciwMmtJdfaI9vrgAObS
          source_id: s_3KAQewTF45GKo2xsEMnhLk
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DhXJg1QUSd5Fvqo5eHzd45
        status: active
        display_name: 王宇
        merged_into_person_id: null
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | 王文，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 327527） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DhXJg1QUSd5Fvqo5eHzd45 | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文（CBDB 327527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327527&o=json)
