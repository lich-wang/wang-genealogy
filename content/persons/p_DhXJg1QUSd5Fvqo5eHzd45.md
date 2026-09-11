---
schema: wang-person/v1
id: p_DhXJg1QUSd5Fvqo5eHzd45
status: active
merged_into: null
display_name: 王宇
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s7sDMyRXZSA2GvsPKh1QSg
        subject_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vNvpvsnBXM1qtZdtKuz5mv
          claim_id: c_s7sDMyRXZSA2GvsPKh1QSg
          source_id: s_FsTUsBNFhCg8mc3eniTCnB
          stance: supports
          locator: CBDB:205042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205042）
          source: &a1
            id: s_FsTUsBNFhCg8mc3eniTCnB
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 205042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205042&o=json
            external_identifier: CBDB:205042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fHUtvHjEAREB39QtBQmiUG
        subject_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zqPmE9JUB984uzUVaCLAMB
          claim_id: c_fHUtvHjEAREB39QtBQmiUG
          source_id: s_FsTUsBNFhCg8mc3eniTCnB
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
        id: c_vEwBpZiJ4s1wGp4yi546j1
        subject_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
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
        - id: cs_PzV6fg4t5Vu5W89oh9Fo53
          claim_id: c_vEwBpZiJ4s1wGp4yi546j1
          source_id: s_FsTUsBNFhCg8mc3eniTCnB
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
        id: c_izKiuPL40dgywPDd9sMR5W
        subject_person_id: p_kmpABikpWftaJACcFD3yJ1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ohSU0hJbjf1lFLZE9JKQmL
          claim_id: c_izKiuPL40dgywPDd9sMR5W
          source_id: s_vkd7AEwfWrQDLC88pSas2j
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vkd7AEwfWrQDLC88pSas2j
            source_type: api_record
            title: 中国历代人物传记资料库：王繼德（CBDB 327528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327528&o=json
            external_identifier: CBDB:327528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_kmpABikpWftaJACcFD3yJ1
        status: active
        display_name: 王繼德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_rLSR3v_aNrJXu4aEDPoRx2
        subject_person_id: p_5479G2XFAVCuDDDRS2B8rJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dzhlov0SafcbThupPEj1cT
          claim_id: c_rLSR3v_aNrJXu4aEDPoRx2
          source_id: s_NqC1cFY5XWRBnZVGxVxQcG
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NqC1cFY5XWRBnZVGxVxQcG
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 327526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327526&o=json
            external_identifier: CBDB:327526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5479G2XFAVCuDDDRS2B8rJ
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_ks9ciwMmtJdfaI9vrgAObS
        subject_person_id: p_BaCEpLmBh9gdSdwyoef2DV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DNv4seWbRrzL6XEkYnzA_H
          claim_id: c_ks9ciwMmtJdfaI9vrgAObS
          source_id: s_3KAQewTF45GKo2xsEMnhLk
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3KAQewTF45GKo2xsEMnhLk
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 327527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327527&o=json
            external_identifier: CBDB:327527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BaCEpLmBh9gdSdwyoef2DV
        status: active
        display_name: 王文
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宇 | accepted |
| birth.date | 1537年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kmpABikpWftaJACcFD3yJ1 | 王繼德 | accepted |
| ancestors | p_5479G2XFAVCuDDDRS2B8rJ | 王俊 | accepted |
| ancestors | p_BaCEpLmBh9gdSdwyoef2DV | 王文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼德（CBDB 327528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327528&o=json)
- [中国历代人物传记资料库：王俊（CBDB 327526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327526&o=json)
- [中国历代人物传记资料库：王文（CBDB 327527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327527&o=json)
- [中国历代人物传记资料库：王宇（CBDB 205042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205042&o=json)
