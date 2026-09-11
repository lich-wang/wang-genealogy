---
schema: wang-person/v1
id: p_zPA3i3KEXxiLMEnkBzskLE
status: active
merged_into: null
display_name: 王昌庭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7P9EV6huKaAKYA3ojERM2d
        subject_person_id: p_zPA3i3KEXxiLMEnkBzskLE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CSBBAKnWUiGJXg85L39pJa
          claim_id: c_7P9EV6huKaAKYA3ojERM2d
          source_id: s_HL7iKpp3eewHYQKu462iy9
          stance: supports
          locator: CBDB:169204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169204）
          source: &a1
            id: s_HL7iKpp3eewHYQKu462iy9
            source_type: api_record
            title: 中国历代人物传记资料库：王昌庭（CBDB 169204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169204&o=json
            external_identifier: CBDB:169204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JPC7hx2FoukJKEfaXKA6Bc
        subject_person_id: p_zPA3i3KEXxiLMEnkBzskLE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 801年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mG94mg5tLqQ7DK8Aiw7EmU
          claim_id: c_JPC7hx2FoukJKEfaXKA6Bc
          source_id: s_HL7iKpp3eewHYQKu462iy9
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
        id: c_bMYnDd9ntBhC4sH9JkWGoM
        subject_person_id: p_zPA3i3KEXxiLMEnkBzskLE
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
        - id: cs_cUZQCW3eagYSbeXo5XnzE9
          claim_id: c_bMYnDd9ntBhC4sH9JkWGoM
          source_id: s_HL7iKpp3eewHYQKu462iy9
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
        id: c_iANTM5ks-PC_xDeOJhAdDN
        subject_person_id: p_Zm9kQvVJDN5XViFfJoHyzQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zPA3i3KEXxiLMEnkBzskLE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CbAxsHFYCSluXe8URa8-pE
          claim_id: c_iANTM5ks-PC_xDeOJhAdDN
          source_id: s_HL7iKpp3eewHYQKu462iy9
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Zm9kQvVJDN5XViFfJoHyzQ
        status: active
        display_name: 王銳
        merged_into_person_id: null
  children:
    - claim:
        id: c_cwn2VKJ-zapUkZW_RqZaSh
        subject_person_id: p_zPA3i3KEXxiLMEnkBzskLE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U2YiDmDT6smYK1JJKHRwfQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pG5we0W2J44UFcMQFlb9SI
          claim_id: c_cwn2VKJ-zapUkZW_RqZaSh
          source_id: s_BFo837xf3DsLPaLeKBPCxJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BFo837xf3DsLPaLeKBPCxJ
            source_type: api_record
            title: 中国历代人物传记资料库：王顒（CBDB 145057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145057&o=json
            external_identifier: CBDB:145057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_U2YiDmDT6smYK1JJKHRwfQ
        status: active
        display_name: 王顒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昌庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌庭 | accepted |
| death.date | 801年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Zm9kQvVJDN5XViFfJoHyzQ | 王銳 | accepted |
| children | p_U2YiDmDT6smYK1JJKHRwfQ | 王顒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌庭（CBDB 169204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169204&o=json)
- [中国历代人物传记资料库：王顒（CBDB 145057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145057&o=json)
