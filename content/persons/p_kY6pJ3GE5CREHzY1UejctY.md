---
schema: wang-person/v1
id: p_kY6pJ3GE5CREHzY1UejctY
status: active
merged_into: null
display_name: 王定
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G8WZw491pB7kWyfA19b91F
        subject_person_id: p_kY6pJ3GE5CREHzY1UejctY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZQv64Dvzt1kVnTa3G8FF1z
          claim_id: c_G8WZw491pB7kWyfA19b91F
          source_id: s_JiB68FF8ZNA2txd59uAzXh
          stance: supports
          locator: CBDB:145052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145052）
          source: &a1
            id: s_JiB68FF8ZNA2txd59uAzXh
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 145052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145052&o=json
            external_identifier: CBDB:145052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_k8A1LqCHRSHPwZLvGJWoVW
        subject_person_id: p_kY6pJ3GE5CREHzY1UejctY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 784年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CSkYxqSF6wLe16NTYCPPak
          claim_id: c_k8A1LqCHRSHPwZLvGJWoVW
          source_id: s_JiB68FF8ZNA2txd59uAzXh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PkwuQ152ZvVBSVhu17b7Ec
        subject_person_id: p_kY6pJ3GE5CREHzY1UejctY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m8azrQoYN3bYUB378qa128
          claim_id: c_PkwuQ152ZvVBSVhu17b7Ec
          source_id: s_JiB68FF8ZNA2txd59uAzXh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UQFanduY7VoGuGKGSY3KRF
        subject_person_id: p_9uzT9MsPAMdeGut41RiW3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kY6pJ3GE5CREHzY1UejctY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HeyZl51yndbu14CwCbYn_U
          claim_id: c_UQFanduY7VoGuGKGSY3KRF
          source_id: s_LaQHp5mjAHgZukLwRbkP2p
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LaQHp5mjAHgZukLwRbkP2p
            source_type: api_record
            title: 中国历代人物传记资料库：王易從（CBDB 92036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92036&o=json
            external_identifier: CBDB:92036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9uzT9MsPAMdeGut41RiW3f
        status: active
        display_name: 王易從
        merged_into_person_id: null
  children:
    - claim:
        id: c_UdE3sl7wvh2EexO7E4MeWM
        subject_person_id: p_kY6pJ3GE5CREHzY1UejctY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3MV6yZKdTh6BgYBCM4HjhN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_66jUqv3pUv753Ua8K_3ET3
          claim_id: c_UdE3sl7wvh2EexO7E4MeWM
          source_id: s_9b17asnDsANoTCQAPz6hZT
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9b17asnDsANoTCQAPz6hZT
            source_type: api_record
            title: 中国历代人物传记资料库：王逢（CBDB 175948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175948&o=json
            external_identifier: CBDB:175948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.214Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3MV6yZKdTh6BgYBCM4HjhN
        status: active
        display_name: 王逢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定 | accepted |
| death.date | 784年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9uzT9MsPAMdeGut41RiW3f | 王易從 | accepted |
| children | p_3MV6yZKdTh6BgYBCM4HjhN | 王逢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定（CBDB 145052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145052&o=json)
- [中国历代人物传记资料库：王逢（CBDB 175948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175948&o=json)
- [中国历代人物传记资料库：王易從（CBDB 92036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92036&o=json)
