---
schema: wang-person/v1
id: p_KhmS5kyzCCCFTjqjDJhXt2
status: active
merged_into: null
display_name: 王用康
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TaEYA4YrMgwbLCQAQMq6J5
        subject_person_id: p_KhmS5kyzCCCFTjqjDJhXt2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UL8FRPVZPGpwmHnWRw4eTT
          claim_id: c_TaEYA4YrMgwbLCQAQMq6J5
          source_id: s_4MxK9r6yC71DtSC85QaiQz
          stance: supports
          locator: CBDB:204031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204031）
          source: &a1
            id: s_4MxK9r6yC71DtSC85QaiQz
            source_type: api_record
            title: 中国历代人物传记资料库：王用康（CBDB 204031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204031&o=json
            external_identifier: CBDB:204031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.813Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4VotTr17Vjd28HyQMR9qQ6
        subject_person_id: p_KhmS5kyzCCCFTjqjDJhXt2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1521年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EjVFqfL5rcJ3YGJjcJ5MDB
          claim_id: c_4VotTr17Vjd28HyQMR9qQ6
          source_id: s_4MxK9r6yC71DtSC85QaiQz
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
        id: c_7J4RU6GhBEB8SdcTsHZDA9
        subject_person_id: p_KhmS5kyzCCCFTjqjDJhXt2
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
        - id: cs_z1fcLb2qd3CisfAe9oQEUc
          claim_id: c_7J4RU6GhBEB8SdcTsHZDA9
          source_id: s_4MxK9r6yC71DtSC85QaiQz
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
        id: c_M53inaslSpwUtKE-opkOOD
        subject_person_id: p_CNhGCXJt47qYJmsa2oXPha
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KhmS5kyzCCCFTjqjDJhXt2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DMtCGEmxHIAS1h379dxsvV
          claim_id: c_M53inaslSpwUtKE-opkOOD
          source_id: s_B1A2xBEPUgAgkN62mCP5je
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B1A2xBEPUgAgkN62mCP5je
            source_type: api_record
            title: 中国历代人物传记资料库：王尚忠（CBDB 313488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313488&o=json
            external_identifier: CBDB:313488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CNhGCXJt47qYJmsa2oXPha
        status: active
        display_name: 王尚忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_yfgz3EJK-tfSY0hz89QkN_
        subject_person_id: p_kEiW2DFXECMJ78e5d2rZzN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KhmS5kyzCCCFTjqjDJhXt2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NI0dsMh_8r6gTeOBQVzMSu
          claim_id: c_yfgz3EJK-tfSY0hz89QkN_
          source_id: s_5BmvnxiEn5qr1cdrrV9A1v
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第八十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5BmvnxiEn5qr1cdrrV9A1v
            source_type: api_record
            title: 中国历代人物传记资料库：王萱（CBDB 313487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313487&o=json
            external_identifier: CBDB:313487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kEiW2DFXECMJ78e5d2rZzN
        status: active
        display_name: 王萱
        merged_into_person_id: null
    - claim:
        id: c_sHtPDNcP4BDWz2QPMJv-N_
        subject_person_id: p_tP5KCeJ7js1QoBJvxCT1Uq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KhmS5kyzCCCFTjqjDJhXt2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bx-t3AE_pdO0lUsbTBsknb
          claim_id: c_sHtPDNcP4BDWz2QPMJv-N_
          source_id: s_uRCEMjFBmqVA9mcEhZJ3Yp
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第八十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uRCEMjFBmqVA9mcEhZJ3Yp
            source_type: api_record
            title: 中国历代人物传记资料库：王亮（CBDB 313486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313486&o=json
            external_identifier: CBDB:313486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tP5KCeJ7js1QoBJvxCT1Uq
        status: active
        display_name: 王亮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王用康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用康 | accepted |
| birth.date | 1521年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CNhGCXJt47qYJmsa2oXPha | 王尚忠 | accepted |
| ancestors | p_kEiW2DFXECMJ78e5d2rZzN | 王萱 | accepted |
| ancestors | p_tP5KCeJ7js1QoBJvxCT1Uq | 王亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亮（CBDB 313486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313486&o=json)
- [中国历代人物传记资料库：王尚忠（CBDB 313488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313488&o=json)
- [中国历代人物传记资料库：王萱（CBDB 313487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313487&o=json)
- [中国历代人物传记资料库：王用康（CBDB 204031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204031&o=json)
