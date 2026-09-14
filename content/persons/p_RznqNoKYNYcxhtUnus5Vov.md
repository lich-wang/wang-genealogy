---
schema: wang-person/v1
id: p_RznqNoKYNYcxhtUnus5Vov
status: active
merged_into: null
display_name: 王曉
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hYE2LwBJUnXFF3Uw3aPU8W
        subject_person_id: p_RznqNoKYNYcxhtUnus5Vov
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P1hjskFyVYTCybQ72KB9Vs
          claim_id: c_hYE2LwBJUnXFF3Uw3aPU8W
          source_id: s_tALXMMVctDVow2DGcPFKE8
          stance: supports
          locator: CBDB:205806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205806）
          source: &a1
            id: s_tALXMMVctDVow2DGcPFKE8
            source_type: api_record
            title: 中国历代人物传记资料库：王曉（CBDB 205806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205806&o=json
            external_identifier: CBDB:205806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7hEoMLD68k3tiBP9RZodod
        subject_person_id: p_RznqNoKYNYcxhtUnus5Vov
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1540年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ADWjd786zSnsr1oETau4qW
          claim_id: c_7hEoMLD68k3tiBP9RZodod
          source_id: s_tALXMMVctDVow2DGcPFKE8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wwFqEWzjZ9n92KzNNY9qLW
        subject_person_id: p_RznqNoKYNYcxhtUnus5Vov
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曉（生于1540年），明人物。明清進士進士，籍贯淄川，入仕進士。（中国历代人物传记资料库 CBDB 205806）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Oq2tgAckCx7H9aVOsQa7cL
          claim_id: c_wwFqEWzjZ9n92KzNNY9qLW
          source_id: s_tALXMMVctDVow2DGcPFKE8
          stance: supports
          locator: CBDB:205806
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ROaGXefZkS9O1kYT9zjdLM
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w3qc8_OqSfoBkr7BbQHoBc
          claim_id: c_ROaGXefZkS9O1kYT9zjdLM
          source_id: s_YiHzg9Jkj4EwDSKii8VwE5
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YiHzg9Jkj4EwDSKii8VwE5
            source_type: api_record
            title: 中国历代人物传记资料库：王崇義（CBDB 208868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208868&o=json
            external_identifier: CBDB:208868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_548o1SKAP1oKBMmyuHA5jA
        status: active
        display_name: 王崇義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_rTQkJcCMLQ49JOqGGJbGFX
        subject_person_id: p_F39Q7SQgdoYApUKzJf32to
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Q1El9iRW_cMW5w7rK2NA8
          claim_id: c_rTQkJcCMLQ49JOqGGJbGFX
          source_id: s_w6aW3x2Wcm6h57vANHEu3S
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_w6aW3x2Wcm6h57vANHEu3S
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 208866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208866&o=json
            external_identifier: CBDB:208866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F39Q7SQgdoYApUKzJf32to
        status: active
        display_name: 王振
        merged_into_person_id: null
    - claim:
        id: c_Km8yJ53Gtu3dCCt_gYHLaQ
        subject_person_id: p_XxsX8tJYzGn8mb6N1no1CW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yrddsFg3ScM1oyZ3qMRJGN
          claim_id: c_Km8yJ53Gtu3dCCt_gYHLaQ
          source_id: s_UWGm4JsTsioPrZS7AKNaUd
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UWGm4JsTsioPrZS7AKNaUd
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 208867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208867&o=json
            external_identifier: CBDB:208867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XxsX8tJYzGn8mb6N1no1CW
        status: active
        display_name: 王逵
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_M-NP4k29Z29jaoIU60XE1q
        subject_person_id: p_693pcJyMBGr2wCJtrWMyqP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6sY3VRKaW3kczEZi0fTHR7
          claim_id: c_M-NP4k29Z29jaoIU60XE1q
          source_id: s_vK8qGHoXkzrzZs5U-8CFTH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205806 王曉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vK8qGHoXkzrzZs5U-8CFTH
            source_type: api_record
            title: 中国历代人物传记资料库：王曄（CBDB 208878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208878&o=json
            external_identifier: CBDB:208878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_693pcJyMBGr2wCJtrWMyqP
        status: active
        display_name: 王曄
        merged_into_person_id: null
    - claim:
        id: c_3tdr7CLr9aX_tsTexMYLOD
        subject_person_id: p_GskD3RtdwKRsHbE33pjhxn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t0-W-qBLkN4JPWA7BEVU0c
          claim_id: c_3tdr7CLr9aX_tsTexMYLOD
          source_id: s_s2dB2kcODMwW9KhtZ5cf6z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205806 王曉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s2dB2kcODMwW9KhtZ5cf6z
            source_type: api_record
            title: 中国历代人物传记资料库：王暏（CBDB 208875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208875&o=json
            external_identifier: CBDB:208875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GskD3RtdwKRsHbE33pjhxn
        status: active
        display_name: 王暏
        merged_into_person_id: null
    - claim:
        id: c_pdQ905lvg05NK_3OtIcodw
        subject_person_id: p_NT5zCfqJiKCG5NCFQcToWy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6_z0VjE1SyrJZPk0V30Dfy
          claim_id: c_pdQ905lvg05NK_3OtIcodw
          source_id: s__l-PPUNdPV4c1gGk0d8HGn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205806 王曉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__l-PPUNdPV4c1gGk0d8HGn
            source_type: api_record
            title: 中国历代人物传记资料库：王曙（CBDB 208877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208877&o=json
            external_identifier: CBDB:208877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NT5zCfqJiKCG5NCFQcToWy
        status: active
        display_name: 王曙
        merged_into_person_id: null
    - claim:
        id: c_kpwBZOO_PT5M-FhL4GKV_a
        subject_person_id: p_QZDDHQkVG25ym6DbVHajPv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mTcLS3q8ZQXBJ8mn1XEefR
          claim_id: c_kpwBZOO_PT5M-FhL4GKV_a
          source_id: s_wWvnbcO3aiiZykEp7jepvR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205806 王曉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wWvnbcO3aiiZykEp7jepvR
            source_type: api_record
            title: 中国历代人物传记资料库：王晤（CBDB 208873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208873&o=json
            external_identifier: CBDB:208873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QZDDHQkVG25ym6DbVHajPv
        status: active
        display_name: 王晤
        merged_into_person_id: null
    - claim:
        id: c_iftYgxrWr8GzacfsdW3kHW
        subject_person_id: p_RznqNoKYNYcxhtUnus5Vov
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UXpDLH3Q6ACR5REW6rx98f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LLBkmUlG69X4xUHBTygAgc
          claim_id: c_iftYgxrWr8GzacfsdW3kHW
          source_id: s_kw5Ja6wXmY9ZCLlXLjIZWR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205806 王曉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kw5Ja6wXmY9ZCLlXLjIZWR
            source_type: api_record
            title: 中国历代人物传记资料库：王㫛（CBDB 208874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208874&o=json
            external_identifier: CBDB:208874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UXpDLH3Q6ACR5REW6rx98f
        status: active
        display_name: 王㫛
        merged_into_person_id: null
    - claim:
        id: c_KoW6ut6ZKnojusyq0WWrPM
        subject_person_id: p_RznqNoKYNYcxhtUnus5Vov
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nmPKNuXkMQTW2N47jRsjTb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IZWCcZ3KlvroUIplPJyOCp
          claim_id: c_KoW6ut6ZKnojusyq0WWrPM
          source_id: s_-OD9GOuDquz9fNdpkhB0re
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205806 王曉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-OD9GOuDquz9fNdpkhB0re
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 208879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208879&o=json
            external_identifier: CBDB:208879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nmPKNuXkMQTW2N47jRsjTb
        status: active
        display_name: 王時
        merged_into_person_id: null
---

# 王曉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曉 | accepted |
| birth.date | 1540年 | accepted |
| bio.summary | 王曉（生于1540年），明人物。明清進士進士，籍贯淄川，入仕進士。（中国历代人物传记资料库 CBDB 205806） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_548o1SKAP1oKBMmyuHA5jA | 王崇義 | accepted |
| ancestors | p_F39Q7SQgdoYApUKzJf32to | 王振 | accepted |
| ancestors | p_XxsX8tJYzGn8mb6N1no1CW | 王逵 | accepted |
| other | p_693pcJyMBGr2wCJtrWMyqP | 王曄 | accepted |
| other | p_GskD3RtdwKRsHbE33pjhxn | 王暏 | accepted |
| other | p_NT5zCfqJiKCG5NCFQcToWy | 王曙 | accepted |
| other | p_QZDDHQkVG25ym6DbVHajPv | 王晤 | accepted |
| other | p_UXpDLH3Q6ACR5REW6rx98f | 王㫛 | accepted |
| other | p_nmPKNuXkMQTW2N47jRsjTb | 王時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇義（CBDB 208868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208868&o=json)
- [中国历代人物传记资料库：王逵（CBDB 208867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208867&o=json)
- [中国历代人物传记资料库：王時（CBDB 208879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208879&o=json)
- [中国历代人物传记资料库：王暏（CBDB 208875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208875&o=json)
- [中国历代人物传记资料库：王曙（CBDB 208877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208877&o=json)
- [中国历代人物传记资料库：王晤（CBDB 208873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208873&o=json)
- [中国历代人物传记资料库：王曉（CBDB 205806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205806&o=json)
- [中国历代人物传记资料库：王曄（CBDB 208878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208878&o=json)
- [中国历代人物传记资料库：王振（CBDB 208866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208866&o=json)
- [中国历代人物传记资料库：王㫛（CBDB 208874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208874&o=json)
