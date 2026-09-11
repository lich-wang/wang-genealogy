---
schema: wang-person/v1
id: p_Ar8Jm82UPjkwQTQshe4Qjp
status: active
merged_into: null
display_name: 王和
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wQRbEFZYuGpCVc3eXvzGfM
        subject_person_id: p_Ar8Jm82UPjkwQTQshe4Qjp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sREG1xaBjyF3wmFxh6D2b9
          claim_id: c_wQRbEFZYuGpCVc3eXvzGfM
          source_id: s_ySYDtSpmMcv328B7MkqLJE
          stance: supports
          locator: CBDB:126584
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126584）
          source: &a1
            id: s_ySYDtSpmMcv328B7MkqLJE
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 126584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126584&o=json
            external_identifier: CBDB:126584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PLA6nJHAbzLYmv1XXjJ2Ls
        subject_person_id: p_Ar8Jm82UPjkwQTQshe4Qjp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和，明人物。籍贯遷安，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126584）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BgxqDv8NBVhSv3Oi1_RflV
          claim_id: c_PLA6nJHAbzLYmv1XXjJ2Ls
          source_id: s_ySYDtSpmMcv328B7MkqLJE
          stance: supports
          locator: CBDB:126584
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KziKaePZeewm2qNIQYxgAc
        subject_person_id: p_BYDSNUPk7U99Wpw23cKFea
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ar8Jm82UPjkwQTQshe4Qjp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vcw40PSW9BeXWtAFiEttvf
          claim_id: c_KziKaePZeewm2qNIQYxgAc
          source_id: s_ySYDtSpmMcv328B7MkqLJE
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百零六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BYDSNUPk7U99Wpw23cKFea
        status: active
        display_name: 王政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_hg1Aze9cBplAHczt6SvAtb
        subject_person_id: p_Ar8Jm82UPjkwQTQshe4Qjp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6e5n3vfAdWxuDaRkJDj1gr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qSF9Jj5CwR2B35pIJ_8xdP
          claim_id: c_hg1Aze9cBplAHczt6SvAtb
          source_id: s_4Gqmp4AbwWdo0JOkI1V_sr
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百零六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4Gqmp4AbwWdo0JOkI1V_sr
            source_type: api_record
            title: 中国历代人物传记资料库：高氏(王和妻)（CBDB 252677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252677&o=json
            external_identifier: CBDB:252677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6e5n3vfAdWxuDaRkJDj1gr
        status: active
        display_name: 高氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c__2boz_jAaaLEkP-vc0EIqO
        subject_person_id: p_ECAKHMRDs8Na2Nz3MQ9W4z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ar8Jm82UPjkwQTQshe4Qjp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1qllUi7hV290O7CBEPvitg
          claim_id: c__2boz_jAaaLEkP-vc0EIqO
          source_id: s_ySYDtSpmMcv328B7MkqLJE
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百零六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ECAKHMRDs8Na2Nz3MQ9W4z
        status: active
        display_name: 王敬先
        merged_into_person_id: null
    - claim:
        id: c_OzvxgWrQ8TMhoDyrf2hASZ
        subject_person_id: p_bf9NCQmSwQEP6EKTE7LQQ5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ar8Jm82UPjkwQTQshe4Qjp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gu_37E7iIVedOyDQDPaSsc
          claim_id: c_OzvxgWrQ8TMhoDyrf2hASZ
          source_id: s_ySYDtSpmMcv328B7MkqLJE
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百零六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bf9NCQmSwQEP6EKTE7LQQ5
        status: active
        display_name: 王斌
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王和 | accepted |
| bio.summary | 王和，明人物。籍贯遷安，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126584） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BYDSNUPk7U99Wpw23cKFea | 王政 | accepted |
| spouses | p_6e5n3vfAdWxuDaRkJDj1gr | 高氏 | accepted |
| ancestors | p_ECAKHMRDs8Na2Nz3MQ9W4z | 王敬先 | accepted |
| ancestors | p_bf9NCQmSwQEP6EKTE7LQQ5 | 王斌 | accepted |

## 外部来源

- [中国历代人物传记资料库：高氏(王和妻)（CBDB 252677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252677&o=json)
- [中国历代人物传记资料库：王和（CBDB 126584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126584&o=json)
