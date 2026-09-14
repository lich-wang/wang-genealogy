---
schema: wang-person/v1
id: p_5GKmc7UBMnwgzBKbep1LTG
status: active
merged_into: null
display_name: 王諍
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cy9K85oCUAT6tKKDNFoPtx
        subject_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PYjh2mCcXwPijZtH1Y956p
          claim_id: c_Cy9K85oCUAT6tKKDNFoPtx
          source_id: s_Nm1QHMi2nHmFQJMsjfaAoh
          stance: supports
          locator: CBDB:126801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126801）
          source: &a1
            id: s_Nm1QHMi2nHmFQJMsjfaAoh
            source_type: api_record
            title: 中国历代人物传记资料库：王諍（CBDB 126801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126801&o=json
            external_identifier: CBDB:126801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.214Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HWeZADDwFfyxQFe39j6mo4
        subject_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諍，明人物。明清進士進士，籍贯竹山，入仕進士，曾任僉都御史、巡撫、巡撫右僉都御史。（中国历代人物传记资料库 CBDB 126801）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EtjFtJ-G-dxs3u_F5seR3Z
          claim_id: c_HWeZADDwFfyxQFe39j6mo4
          source_id: s_Nm1QHMi2nHmFQJMsjfaAoh
          stance: supports
          locator: CBDB:126801
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ojG94FzsJyYRwQnIJFS0Fi
        subject_person_id: p_bAZKMRH7j8tU7qjcKDr2aW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MNsjqfYS77doF0oXjNzvzA
          claim_id: c_ojG94FzsJyYRwQnIJFS0Fi
          source_id: s_Nm1QHMi2nHmFQJMsjfaAoh
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第八十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bAZKMRH7j8tU7qjcKDr2aW
        status: active
        display_name: 王鍊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_y4lUjwYWukLkXpf84xi80r
        subject_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YheECCMgxNFP5vnubzLKeH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rAZVwAk7wmzpaBWp-BNRYw
          claim_id: c_y4lUjwYWukLkXpf84xi80r
          source_id: s_pzPe74sQKGC7yS44kl-9Yn
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第八十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pzPe74sQKGC7yS44kl-9Yn
            source_type: api_record
            title: 中国历代人物传记资料库：藍氏(王諍妻)（CBDB 313481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313481&o=json
            external_identifier: CBDB:313481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YheECCMgxNFP5vnubzLKeH
        status: active
        display_name: 藍氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_M2VBNqCnXSttQBbCkgS39T
        subject_person_id: p_vvJKpxyPnKH6BqHgJrYPVN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1GyNS2k-AYAYHuuH_M6uVq
          claim_id: c_M2VBNqCnXSttQBbCkgS39T
          source_id: s_Nm1QHMi2nHmFQJMsjfaAoh
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第八十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vvJKpxyPnKH6BqHgJrYPVN
        status: active
        display_name: 王秉圭
        merged_into_person_id: null
    - claim:
        id: c_zhwFjFCnQ2sfNPonoQJRkq
        subject_person_id: p_uyZJaFJvXnu5ox27KtPT4N
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZwqGjgWmrAMlkEVNPMBk67
          claim_id: c_zhwFjFCnQ2sfNPonoQJRkq
          source_id: s_Nm1QHMi2nHmFQJMsjfaAoh
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第八十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uyZJaFJvXnu5ox27KtPT4N
        status: active
        display_name: 王陸
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_BE3nyJ7DcN7WeGuFueU0f_
        subject_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_BefirQ5qAsYuyzL4CSTwoe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UdkW5XOtGeE1gG4nsYOdzR
          claim_id: c_BE3nyJ7DcN7WeGuFueU0f_
          source_id: s_XaLqZ22xcGRAGSza010d4G
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126801 王諍）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XaLqZ22xcGRAGSza010d4G
            source_type: api_record
            title: 中国历代人物传记资料库：王誡（CBDB 313485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313485&o=json
            external_identifier: CBDB:313485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BefirQ5qAsYuyzL4CSTwoe
        status: active
        display_name: 王誡
        merged_into_person_id: null
    - claim:
        id: c_zDfzf83aTHpVMlDWu7FLRh
        subject_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hBm6vHDc7fWZ3yuVi2Vit4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5QrVZN0e7qGl_64bHV-EDN
          claim_id: c_zDfzf83aTHpVMlDWu7FLRh
          source_id: s_zntLQdgCS8XtgGkovL7HDs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126801 王諍）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zntLQdgCS8XtgGkovL7HDs
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 313482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313482&o=json
            external_identifier: CBDB:313482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hBm6vHDc7fWZ3yuVi2Vit4
        status: active
        display_name: 王訓
        merged_into_person_id: null
    - claim:
        id: c_XPfjp6FUaITdjtPHTR2Hhp
        subject_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pj1hQzuo8QaWabdrm9w4P8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XYnXQ_cqtoONHg5pnWgG4V
          claim_id: c_XPfjp6FUaITdjtPHTR2Hhp
          source_id: s_u2nMamULpp7PMvNILIKuE7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126801 王諍）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_u2nMamULpp7PMvNILIKuE7
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 313483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313483&o=json
            external_identifier: CBDB:313483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pj1hQzuo8QaWabdrm9w4P8
        status: active
        display_name: 王誥
        merged_into_person_id: null
---

# 王諍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諍 | accepted |
| bio.summary | 王諍，明人物。明清進士進士，籍贯竹山，入仕進士，曾任僉都御史、巡撫、巡撫右僉都御史。（中国历代人物传记资料库 CBDB 126801） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bAZKMRH7j8tU7qjcKDr2aW | 王鍊 | accepted |
| spouses | p_YheECCMgxNFP5vnubzLKeH | 藍氏 | accepted |
| ancestors | p_vvJKpxyPnKH6BqHgJrYPVN | 王秉圭 | accepted |
| ancestors | p_uyZJaFJvXnu5ox27KtPT4N | 王陸 | accepted |
| other | p_BefirQ5qAsYuyzL4CSTwoe | 王誡 | accepted |
| other | p_hBm6vHDc7fWZ3yuVi2Vit4 | 王訓 | accepted |
| other | p_pj1hQzuo8QaWabdrm9w4P8 | 王誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：藍氏(王諍妻)（CBDB 313481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313481&o=json)
- [中国历代人物传记资料库：王誥（CBDB 313483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313483&o=json)
- [中国历代人物传记资料库：王誡（CBDB 313485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313485&o=json)
- [中国历代人物传记资料库：王訓（CBDB 313482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313482&o=json)
- [中国历代人物传记资料库：王諍（CBDB 126801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126801&o=json)
