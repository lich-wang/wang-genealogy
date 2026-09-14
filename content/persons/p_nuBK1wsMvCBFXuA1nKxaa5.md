---
schema: wang-person/v1
id: p_nuBK1wsMvCBFXuA1nKxaa5
status: active
merged_into: null
display_name: 王納講
cbdb_id: 204128
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gtNdih3tBij8hkk8WFfxrt
        subject_person_id: p_nuBK1wsMvCBFXuA1nKxaa5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納講（生于1512年），明人物。嘉靖二十九年進士，籍贯融縣，入仕進士。（中国历代人物传记资料库 CBDB 204128）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ijGsWBfr9MqAnQqLehGgb7
          claim_id: c_gtNdih3tBij8hkk8WFfxrt
          source_id: s_PLpfHYd4M8VTfy2jJ7SAKt
          stance: supports
          locator: CBDB:204128
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PLpfHYd4M8VTfy2jJ7SAKt
            source_type: api_record
            title: 中国历代人物传记资料库：王納講（CBDB 204128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204128&o=json
            external_identifier: CBDB:204128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_M3ZHhMT2HME2JoSR3x2GVW
        subject_person_id: p_nuBK1wsMvCBFXuA1nKxaa5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1512年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1512-01-01
            latest: 1512-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gjK7PCBVHSeYdsYCuA1arX
          claim_id: c_M3ZHhMT2HME2JoSR3x2GVW
          source_id: s_PLpfHYd4M8VTfy2jJ7SAKt
          stance: supports
          locator: CBDB:204128
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1512
          source:
            id: s_PLpfHYd4M8VTfy2jJ7SAKt
            source_type: api_record
            title: 中国历代人物传记资料库：王納講（CBDB 204128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204128&o=json
            external_identifier: CBDB:204128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KrusUoTb33pTbRYwx8Eqv1
        subject_person_id: p_nuBK1wsMvCBFXuA1nKxaa5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納講
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FFwuKPoaKbqzr2ABRZSU19
          claim_id: c_KrusUoTb33pTbRYwx8Eqv1
          source_id: s_PLpfHYd4M8VTfy2jJ7SAKt
          stance: supports
          locator: CBDB:204128
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1512
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GVpAYiTx80ZJBFqrNA_6dd
        subject_person_id: p_CsFdH8PxFCRt2fMScjK1Yr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nuBK1wsMvCBFXuA1nKxaa5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LggXngXsNCc9vQOFabXRjg
          claim_id: c_GVpAYiTx80ZJBFqrNA_6dd
          source_id: s_ihTS5ELNKA6qZ5PPLVNW2f
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百一十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ihTS5ELNKA6qZ5PPLVNW2f
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 314793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314793&o=json
            external_identifier: CBDB:314793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CsFdH8PxFCRt2fMScjK1Yr
        status: active
        display_name: 王儒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_sxzv_2lW4P1zIB9urVP_ke
        subject_person_id: p_7b33vYnQRvZ8AxMdE5eb2k
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nuBK1wsMvCBFXuA1nKxaa5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p2WN54kaYlq75_IJe_QHxk
          claim_id: c_sxzv_2lW4P1zIB9urVP_ke
          source_id: s_MpQgsmxtdHpRhDHdW8cVeo
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百一十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MpQgsmxtdHpRhDHdW8cVeo
            source_type: api_record
            title: 中国历代人物传记资料库：王暉（CBDB 314791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314791&o=json
            external_identifier: CBDB:314791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7b33vYnQRvZ8AxMdE5eb2k
        status: active
        display_name: 王暉
        merged_into_person_id: null
    - claim:
        id: c_RgsqsuCgfb_MISTrkIjNPY
        subject_person_id: p_ijbex4t9VLqLfFA3i5CSdB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nuBK1wsMvCBFXuA1nKxaa5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8lb2aB7h7ICoDg6dej_UBt
          claim_id: c_RgsqsuCgfb_MISTrkIjNPY
          source_id: s_m72RDGr9uLrghaW2vYR9aR
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百一十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m72RDGr9uLrghaW2vYR9aR
            source_type: api_record
            title: 中国历代人物传记资料库：王宏德（CBDB 314792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314792&o=json
            external_identifier: CBDB:314792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ijbex4t9VLqLfFA3i5CSdB
        status: active
        display_name: 王宏德
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_woCLtUJL8rx3vZgXAPDIBp
        subject_person_id: p_4YXKWy6SMNaEJM1R3UmhPJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nuBK1wsMvCBFXuA1nKxaa5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_npV2x3bt9Ee72bpnfZYs5T
          claim_id: c_woCLtUJL8rx3vZgXAPDIBp
          source_id: s_ecJlww7cxlIb8gxfM5lkzo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204128 王納講）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ecJlww7cxlIb8gxfM5lkzo
            source_type: api_record
            title: 中国历代人物传记资料库：王納言（CBDB 314799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314799&o=json
            external_identifier: CBDB:314799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4YXKWy6SMNaEJM1R3UmhPJ
        status: active
        display_name: 王納言
        merged_into_person_id: null
    - claim:
        id: c_ECX2OmDeEF0R20bEf1fEtx
        subject_person_id: p_Q6z2Rzm5XaJUBN19vPaCM4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nuBK1wsMvCBFXuA1nKxaa5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f8IJdpBk5jveB7CumlvMRT
          claim_id: c_ECX2OmDeEF0R20bEf1fEtx
          source_id: s_vK3H6VgR_M2_-f02KzKOm8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204128 王納講）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vK3H6VgR_M2_-f02KzKOm8
            source_type: api_record
            title: 中国历代人物传记资料库：王納議（CBDB 314800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314800&o=json
            external_identifier: CBDB:314800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q6z2Rzm5XaJUBN19vPaCM4
        status: active
        display_name: 王納議
        merged_into_person_id: null
---

# 王納講

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王納講（生于1512年），明人物。嘉靖二十九年進士，籍贯融縣，入仕進士。（中国历代人物传记资料库 CBDB 204128） | accepted |
| birth.date | 1512年 | accepted |
| name.primary | 王納講 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CsFdH8PxFCRt2fMScjK1Yr | 王儒 | accepted |
| ancestors | p_7b33vYnQRvZ8AxMdE5eb2k | 王暉 | accepted |
| ancestors | p_ijbex4t9VLqLfFA3i5CSdB | 王宏德 | accepted |
| other | p_4YXKWy6SMNaEJM1R3UmhPJ | 王納言 | accepted |
| other | p_Q6z2Rzm5XaJUBN19vPaCM4 | 王納議 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宏德（CBDB 314792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314792&o=json)
- [中国历代人物传记资料库：王暉（CBDB 314791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314791&o=json)
- [中国历代人物传记资料库：王納講（CBDB 204128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204128&o=json)
- [中国历代人物传记资料库：王納言（CBDB 314799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314799&o=json)
- [中国历代人物传记资料库：王納議（CBDB 314800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314800&o=json)
- [中国历代人物传记资料库：王儒（CBDB 314793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314793&o=json)
