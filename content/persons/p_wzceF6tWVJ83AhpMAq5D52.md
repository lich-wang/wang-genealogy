---
schema: wang-person/v1
id: p_wzceF6tWVJ83AhpMAq5D52
status: active
merged_into: null
display_name: 王傑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aAjaJ5ZbbmRUs87WKKYGtK
        subject_person_id: p_wzceF6tWVJ83AhpMAq5D52
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hWxiQWY69PHoPxsSNfStQj
          claim_id: c_aAjaJ5ZbbmRUs87WKKYGtK
          source_id: s_zB3THQr2NaoXdG7eQBmwgq
          stance: supports
          locator: CBDB:21604
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21604）
          source: &a1
            id: s_zB3THQr2NaoXdG7eQBmwgq
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 21604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21604&o=json
            external_identifier: CBDB:21604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bxE5mqDhNhCbPE3bEnjGCY
        subject_person_id: p_wzceF6tWVJ83AhpMAq5D52
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1096年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1mhcPTT5WqWQGF6Jf5n6zA
          claim_id: c_bxE5mqDhNhCbPE3bEnjGCY
          source_id: s_zB3THQr2NaoXdG7eQBmwgq
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
        id: c_U4EwSKbS2MqJXDA3PDXoR4
        subject_person_id: p_wzceF6tWVJ83AhpMAq5D52
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8nSw96baY35t4PtDLxe79i
          claim_id: c_U4EwSKbS2MqJXDA3PDXoR4
          source_id: s_zB3THQr2NaoXdG7eQBmwgq
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
        id: c_rFUiS-eMQ3pVtIblh9FJ9H
        subject_person_id: p_Rtoh67ecKEDAjF2PNBDiVv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wzceF6tWVJ83AhpMAq5D52
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SQyqJrpb0O9PHis-X2Pmmo
          claim_id: c_rFUiS-eMQ3pVtIblh9FJ9H
          source_id: s_zB3THQr2NaoXdG7eQBmwgq
          stance: supports
          locator: CBDB 双向互证（父 王周惠 ⇄ 子 王傑）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Rtoh67ecKEDAjF2PNBDiVv
        status: active
        display_name: 王周惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_k56xJE7r8siWk-WfndKWKW
        subject_person_id: p_wzceF6tWVJ83AhpMAq5D52
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cph4pJ48WSEgaeG4RFvhs4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oLAeUNGUfWVMu4pMOn3KUV
          claim_id: c_k56xJE7r8siWk-WfndKWKW
          source_id: s_XkTjhQeuOn1OPwAyXRIOgu
          stance: supports
          locator: 紹興十八年同年小錄，105：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XkTjhQeuOn1OPwAyXRIOgu
            source_type: api_record
            title: 中国历代人物传记资料库：黃氏(王傑妻)（CBDB 134818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134818&o=json
            external_identifier: CBDB:134818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cph4pJ48WSEgaeG4RFvhs4
        status: active
        display_name: 黃氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| birth.date | 1096年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Rtoh67ecKEDAjF2PNBDiVv | 王周惠 | accepted |
| spouses | p_cph4pJ48WSEgaeG4RFvhs4 | 黃氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：黃氏(王傑妻)（CBDB 134818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134818&o=json)
- [中国历代人物传记资料库：王傑（CBDB 21604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21604&o=json)
