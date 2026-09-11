---
schema: wang-person/v1
id: p_ADb1WnrvjDNFbmCmqiRMmL
status: active
merged_into: null
display_name: 王旭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oHBLxtjMbNHB2GyMVq9n27
        subject_person_id: p_ADb1WnrvjDNFbmCmqiRMmL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3WBqsHtEyU325jVPEsgxmZ
          claim_id: c_oHBLxtjMbNHB2GyMVq9n27
          source_id: s_LMVSwWt752xYHrDjeoHf6D
          stance: supports
          locator: CBDB:288558
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288558）
          source: &a1
            id: s_LMVSwWt752xYHrDjeoHf6D
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 288558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288558&o=json
            external_identifier: CBDB:288558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.292Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jazE141g32TKZ9PHaZbsWu
        subject_person_id: p_ADb1WnrvjDNFbmCmqiRMmL
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
        - id: cs_8f1NxL6sB18SZ4CJmzcJyH
          claim_id: c_jazE141g32TKZ9PHaZbsWu
          source_id: s_LMVSwWt752xYHrDjeoHf6D
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
        id: c_n30UIh46FYvzlvE88kEzft
        subject_person_id: p_ADb1WnrvjDNFbmCmqiRMmL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JirTxmVijtiT96YhPfvEVf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FRNVr8k1DC6rbj8cdwEJj3
          claim_id: c_n30UIh46FYvzlvE88kEzft
          source_id: s_LMVSwWt752xYHrDjeoHf6D
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JirTxmVijtiT96YhPfvEVf
        status: active
        display_name: 王宗恆
        merged_into_person_id: null
  other: []
---

# 王旭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旭 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_JirTxmVijtiT96YhPfvEVf | 王宗恆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王旭（CBDB 288558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288558&o=json)
