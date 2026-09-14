---
schema: wang-person/v1
id: p_5zz7gPQ34eK1HF4tNPnrfW
status: active
merged_into: null
display_name: 王大化
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eXkeYpWb11ho9qMLCcJQ8e
        subject_person_id: p_5zz7gPQ34eK1HF4tNPnrfW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9qnAaNjfaVra5Vvia3bmoe
          claim_id: c_eXkeYpWb11ho9qMLCcJQ8e
          source_id: s_1HwuHNH6ipsirA6C9B15BJ
          stance: supports
          locator: CBDB:301950
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301950）
          source: &a1
            id: s_1HwuHNH6ipsirA6C9B15BJ
            source_type: api_record
            title: 中国历代人物传记资料库：王大化（CBDB 301950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301950&o=json
            external_identifier: CBDB:301950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZRMPkUFR2auGFXroDNLQLV
        subject_person_id: p_5zz7gPQ34eK1HF4tNPnrfW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大化，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 301950）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w0MOkMTjHxuQbjA8OHdvZ7
          claim_id: c_ZRMPkUFR2auGFXroDNLQLV
          source_id: s_1HwuHNH6ipsirA6C9B15BJ
          stance: supports
          locator: CBDB:301950
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z118Q-mwCPVBs55vZ6w1Lb
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5zz7gPQ34eK1HF4tNPnrfW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9P9qg-qn9nRK2G9l-ameNv
          claim_id: c_z118Q-mwCPVBs55vZ6w1Lb
          source_id: s_DrhG7LZgKxorEqcqNrJen1
          stance: supports
          locator: CBDB：兄弟 王大平（203248）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王大化 与 王大平 为同胞（CBDB 记「弟」），王大平 之父／母即 王大化 之父／母。
          source:
            id: s_DrhG7LZgKxorEqcqNrJen1
            source_type: api_record
            title: 中国历代人物传记资料库：王大化（CBDB 301950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301950&o=json
            external_identifier: CBDB:301950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1qFNNFzs4996RToNKGEdK3
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RmStjVFTXiuX_Kj2K6vZr3
        subject_person_id: p_5zz7gPQ34eK1HF4tNPnrfW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gbnU3IZT5l84PlVPny3cS6
          claim_id: c_RmStjVFTXiuX_Kj2K6vZr3
          source_id: s_DrhG7LZgKxorEqcqNrJen1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203248 王大平）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DrhG7LZgKxorEqcqNrJen1
            source_type: api_record
            title: 中国历代人物传记资料库：王大化（CBDB 301950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301950&o=json
            external_identifier: CBDB:301950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h6Qqwu6rcGKuAFwWWFGZPB
        status: active
        display_name: 王大平
        merged_into_person_id: null
---

# 王大化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大化 | accepted |
| bio.summary | 王大化，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 301950） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1qFNNFzs4996RToNKGEdK3 | 王玉 | accepted |
| other | p_h6Qqwu6rcGKuAFwWWFGZPB | 王大平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大化（CBDB 301950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301950&o=json)
