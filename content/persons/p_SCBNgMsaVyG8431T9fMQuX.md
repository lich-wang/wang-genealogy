---
schema: wang-person/v1
id: p_SCBNgMsaVyG8431T9fMQuX
status: active
merged_into: null
display_name: 王友諒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dMKE2rFEhX9hSB5baTUbcE
        subject_person_id: p_SCBNgMsaVyG8431T9fMQuX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友諒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TEE5Qm7bKDNBqhytDu9AXD
          claim_id: c_dMKE2rFEhX9hSB5baTUbcE
          source_id: s_Nh3MfVCaWadN9P35n8zKcR
          stance: supports
          locator: CBDB:287039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287039）
          source: &a1
            id: s_Nh3MfVCaWadN9P35n8zKcR
            source_type: api_record
            title: 中国历代人物传记资料库：王友諒（CBDB 287039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287039&o=json
            external_identifier: CBDB:287039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iznYMRDkbQs5eAJdAUYg3w
        subject_person_id: p_SCBNgMsaVyG8431T9fMQuX
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
        - id: cs_rZ3aewnvZ7xFpnybQczJ2e
          claim_id: c_iznYMRDkbQs5eAJdAUYg3w
          source_id: s_Nh3MfVCaWadN9P35n8zKcR
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
        id: c_thf8EBv4DqHJiJYB1J8eQy
        subject_person_id: p_SCBNgMsaVyG8431T9fMQuX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wKQiP1EfRixbApmFB2CXep
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L9Wzh1vRkePCYThLcvuwRF
          claim_id: c_thf8EBv4DqHJiJYB1J8eQy
          source_id: s_Nh3MfVCaWadN9P35n8zKcR
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wKQiP1EfRixbApmFB2CXep
        status: active
        display_name: 王詢
        merged_into_person_id: null
  other: []
---

# 王友諒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友諒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_wKQiP1EfRixbApmFB2CXep | 王詢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王友諒（CBDB 287039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287039&o=json)
