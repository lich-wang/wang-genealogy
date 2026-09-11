---
schema: wang-person/v1
id: p_K23baGuNzCVmxSWXhhYJ4B
status: active
merged_into: null
display_name: 王士性
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vgyfT2VMGiqKKzDJqqhPz6
        subject_person_id: p_K23baGuNzCVmxSWXhhYJ4B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士性
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YKtVK1XGusSgS7MsDtPf5W
          claim_id: c_vgyfT2VMGiqKKzDJqqhPz6
          source_id: s_m2HP5AsBU7URfS5L27w4ff
          stance: supports
          locator: CBDB:35066
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35066）
          source: &a1
            id: s_m2HP5AsBU7URfS5L27w4ff
            source_type: api_record
            title: 中国历代人物传记资料库：王士性（CBDB 35066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35066&o=json
            external_identifier: CBDB:35066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.115Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_12uPHDHT1RyaGRQztBmnz1
        subject_person_id: p_K23baGuNzCVmxSWXhhYJ4B
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1546年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A7HGvrF2cfCBrHkV7tP7CL
          claim_id: c_12uPHDHT1RyaGRQztBmnz1
          source_id: s_m2HP5AsBU7URfS5L27w4ff
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oD89FrThg9rbsMLM4NHjPa
        subject_person_id: p_K23baGuNzCVmxSWXhhYJ4B
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1598年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_21Lrzb86mr6ENpdXthbek7
          claim_id: c_oD89FrThg9rbsMLM4NHjPa
          source_id: s_m2HP5AsBU7URfS5L27w4ff
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
        id: c_AXkE9BaX6tYSm1AiDVz5eZ
        subject_person_id: p_K23baGuNzCVmxSWXhhYJ4B
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
        - id: cs_NhRCvhiqH9pEzEZRvUgY6j
          claim_id: c_AXkE9BaX6tYSm1AiDVz5eZ
          source_id: s_m2HP5AsBU7URfS5L27w4ff
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
        id: c_LiBwiD3Uc83gv8s5pZOEf0
        subject_person_id: p_zN5CkYRsAqXYKS76qUps77
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K23baGuNzCVmxSWXhhYJ4B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xq4BSZaTPGN0nXdUuTcYOQ
          claim_id: c_LiBwiD3Uc83gv8s5pZOEf0
          source_id: s_dfhF9ye4VCGanMLbAtkYJK
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dfhF9ye4VCGanMLbAtkYJK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗果（217868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217868&o=json
            external_identifier: CBDB:217868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:35.149Z
            metadata_json: null
      object_person:
        id: p_zN5CkYRsAqXYKS76qUps77
        status: active
        display_name: 王宗果
        merged_into_person_id: null
  children:
    - claim:
        id: c_PHYXoubcmIqudMeLnXmpFf
        subject_person_id: p_K23baGuNzCVmxSWXhhYJ4B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xHekMpoEQyryADJWz2qmff
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dpCvT0mf2_hO_U2P4pzEmz
          claim_id: c_PHYXoubcmIqudMeLnXmpFf
          source_id: s_B84tG19fbAZaBR8qXKc9vm
          stance: supports
          locator: 臨海縣志，lgid=353171：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B84tG19fbAZaBR8qXKc9vm
            source_type: api_record
            title: 中国历代人物传记资料库：王立轂（CBDB 702399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702399&o=json
            external_identifier: CBDB:702399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.615Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xHekMpoEQyryADJWz2qmff
        status: active
        display_name: 王立轂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_q6YnG7ZXWs728tOzlLCg8W
        subject_person_id: p_SyGzt2QVX9p9429Xmvya6D
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_K23baGuNzCVmxSWXhhYJ4B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EkP6yTh2TotMaxLgonhFBH
          claim_id: c_q6YnG7ZXWs728tOzlLCg8W
          source_id: s_kbnye63zTpxMvNcdscZoJi
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百六十九名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kbnye63zTpxMvNcdscZoJi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：趙氏（217871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217871&o=json
            external_identifier: CBDB:217871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:35.134Z
            metadata_json: null
      object_person:
        id: p_SyGzt2QVX9p9429Xmvya6D
        status: active
        display_name: 赵氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_XqhZQirKmKPuTLfyiKMSPQ
        subject_person_id: p_gSGT3VNm7ARS5peJbqNALW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_K23baGuNzCVmxSWXhhYJ4B
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r5_APwP7L-jis3zEj2z4E-
          claim_id: c_XqhZQirKmKPuTLfyiKMSPQ
          source_id: s_KaxcQyEUjWPJNvEJZwHUrS
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KaxcQyEUjWPJNvEJZwHUrS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王明（217866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217866&o=json
            external_identifier: CBDB:217866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_gSGT3VNm7ARS5peJbqNALW
        status: active
        display_name: 王明
        merged_into_person_id: null
    - claim:
        id: c__8Stv11ss-Es03WX2U3GeN
        subject_person_id: p_tc8tLCyEu49sXcAYbw2GP6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_K23baGuNzCVmxSWXhhYJ4B
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRxg2tCumYQoGl4-9bm3p7
          claim_id: c__8Stv11ss-Es03WX2U3GeN
          source_id: s_ub9ZomX4NcFY5GpeLj5pja
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百六十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ub9ZomX4NcFY5GpeLj5pja
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王誾（217867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217867&o=json
            external_identifier: CBDB:217867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:00.598Z
            metadata_json: null
      object_person:
        id: p_tc8tLCyEu49sXcAYbw2GP6
        status: active
        display_name: 王訚
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王士性

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士性 | accepted |
| birth.date | 1546年 | accepted |
| death.date | 1598年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zN5CkYRsAqXYKS76qUps77 | 王宗果 | accepted |
| children | p_xHekMpoEQyryADJWz2qmff | 王立轂 | accepted |
| spouses | p_SyGzt2QVX9p9429Xmvya6D | 赵氏 | accepted |
| ancestors | p_gSGT3VNm7ARS5peJbqNALW | 王明 | accepted |
| ancestors | p_tc8tLCyEu49sXcAYbw2GP6 | 王訚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立轂（CBDB 702399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702399&o=json)
- [中国历代人物传记资料库：王士性（CBDB 35066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35066&o=json)
- [CBDB 中国历代人物传记资料库：王明（217866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217866&o=json)
- [CBDB 中国历代人物传记资料库：王誾（217867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217867&o=json)
- [CBDB 中国历代人物传记资料库：王宗果（217868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217868&o=json)
- [CBDB 中国历代人物传记资料库：趙氏（217871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217871&o=json)
