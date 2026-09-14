---
schema: wang-person/v1
id: p_y879UiTRBKZaXHHY531ywf
status: active
merged_into: null
display_name: 王价
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rPchucMdkLjX5i36Mpn6Fn
        subject_person_id: p_y879UiTRBKZaXHHY531ywf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王价
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mBKeN8ATn1AGNLcgaaU84g
          claim_id: c_rPchucMdkLjX5i36Mpn6Fn
          source_id: s_DzXG3LXn36MGy42WhJa3z1
          stance: supports
          locator: CBDB:206196
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206196）
          source: &a1
            id: s_DzXG3LXn36MGy42WhJa3z1
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 206196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206196&o=json
            external_identifier: CBDB:206196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_eZGpTm68nQhvewb9JxYYT9
        subject_person_id: p_y879UiTRBKZaXHHY531ywf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1542年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VHhqCsi1cHsVGz9bB35Raf
          claim_id: c_eZGpTm68nQhvewb9JxYYT9
          source_id: s_DzXG3LXn36MGy42WhJa3z1
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
        id: c_eGvpvXbqNuUxEN3APDDViV
        subject_person_id: p_y879UiTRBKZaXHHY531ywf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王价（生于1542年），明人物。明清進士進士，籍贯孟津，入仕進士。（中国历代人物传记资料库 CBDB 206196）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kJC34d7h8aq7G-P1iOehYL
          claim_id: c_eGvpvXbqNuUxEN3APDDViV
          source_id: s_DzXG3LXn36MGy42WhJa3z1
          stance: supports
          locator: CBDB:206196
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Yd_xgENAUTD_cPfiu_Um8i
        subject_person_id: p_Pgpmm7wnTqLY7xY2HfhhZC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rF2MJVr3WB6MFqRIvgqciH
          claim_id: c_Yd_xgENAUTD_cPfiu_Um8i
          source_id: s_vkFCXGRpL1SJxRu1DGXA7i
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百四十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vkFCXGRpL1SJxRu1DGXA7i
            source_type: api_record
            title: 中国历代人物传记资料库：王繼乾（CBDB 214679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214679&o=json
            external_identifier: CBDB:214679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Pgpmm7wnTqLY7xY2HfhhZC
        status: active
        display_name: 王繼乾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ECfs6c0X1kWZNFkpI60FJ6
        subject_person_id: p_bDuDm8E7rwt53cHmgXe8Yp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NMEBV1mE4WiGidbYY7xiP4
          claim_id: c_ECfs6c0X1kWZNFkpI60FJ6
          source_id: s_KEq5QZagwPxmW6L1hXn1sv
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百四十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KEq5QZagwPxmW6L1hXn1sv
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 214678）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214678&o=json
            external_identifier: CBDB:214678
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bDuDm8E7rwt53cHmgXe8Yp
        status: active
        display_name: 王鼎
        merged_into_person_id: null
    - claim:
        id: c_7gC2HpAbSdbKHajSvWRT_i
        subject_person_id: p_yTRLX3uBmFG8xiMstRoWYF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uGzexBWNuowQCCcZPqHo19
          claim_id: c_7gC2HpAbSdbKHajSvWRT_i
          source_id: s_oLpGEqrxMy2Vo15XQSCwCW
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百四十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oLpGEqrxMy2Vo15XQSCwCW
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 214677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214677&o=json
            external_identifier: CBDB:214677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yTRLX3uBmFG8xiMstRoWYF
        status: active
        display_name: 王智
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_6fo_-4WG-lhKXoC4dZY3ps
        subject_person_id: p_21mcVq7Xt6u1gPQfobtDW1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uo2aczTlTCgBMV9AKmeq7M
          claim_id: c_6fo_-4WG-lhKXoC4dZY3ps
          source_id: s_Io2urZAfOj4aHuhC0xrPxi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206196 王价）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Io2urZAfOj4aHuhC0xrPxi
            source_type: api_record
            title: 中国历代人物传记资料库：王作（CBDB 214685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214685&o=json
            external_identifier: CBDB:214685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_21mcVq7Xt6u1gPQfobtDW1
        status: active
        display_name: 王作
        merged_into_person_id: null
    - claim:
        id: c_DuOW_qANjpdZTZcbvxi9pB
        subject_person_id: p_3XnXd85VStVCmY7ujxhcGR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NWG9ezWTLjM9mfs9QiLmg6
          claim_id: c_DuOW_qANjpdZTZcbvxi9pB
          source_id: s_Lp8KcbJlv0QTy_re5AauzL
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206196 王价）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Lp8KcbJlv0QTy_re5AauzL
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 214684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214684&o=json
            external_identifier: CBDB:214684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3XnXd85VStVCmY7ujxhcGR
        status: active
        display_name: 王化
        merged_into_person_id: null
    - claim:
        id: c_GDopvBEYy1kVsQtpOkjCaG
        subject_person_id: p_KRykJ7B8iyR1KCWDJQUVuH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eHc-PimexsQqGcVWlmzNhP
          claim_id: c_GDopvBEYy1kVsQtpOkjCaG
          source_id: s_st8actLl-36hSNHek5jfk4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206196 王价）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_st8actLl-36hSNHek5jfk4
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 214690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214690&o=json
            external_identifier: CBDB:214690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KRykJ7B8iyR1KCWDJQUVuH
        status: active
        display_name: 王儀
        merged_into_person_id: null
    - claim:
        id: c_PpOoEz-SeyeWufPDSbP0iX
        subject_person_id: p_XfFbR5xmjQvgTMhQ2KfFaU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RU5p09vvyhXt1_pkb-mB4E
          claim_id: c_PpOoEz-SeyeWufPDSbP0iX
          source_id: s_OKTQTAtt1s4ROZ0CTOpmzG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206196 王价）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OKTQTAtt1s4ROZ0CTOpmzG
            source_type: api_record
            title: 中国历代人物传记资料库：王僖（CBDB 214689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214689&o=json
            external_identifier: CBDB:214689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XfFbR5xmjQvgTMhQ2KfFaU
        status: active
        display_name: 王僖
        merged_into_person_id: null
    - claim:
        id: c_oNE9o2ppkXPqBr7RXb6Ej4
        subject_person_id: p_bHAK8cy9BjyQwXX58CvYTJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__7MYf4nWZit2bP2wgIFxAF
          claim_id: c_oNE9o2ppkXPqBr7RXb6Ej4
          source_id: s_KaFOURxb2Z9vyWXxAL0t26
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206196 王价）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KaFOURxb2Z9vyWXxAL0t26
            source_type: api_record
            title: 中国历代人物传记资料库：王僴（CBDB 214688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214688&o=json
            external_identifier: CBDB:214688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bHAK8cy9BjyQwXX58CvYTJ
        status: active
        display_name: 王僴
        merged_into_person_id: null
    - claim:
        id: c_PB9QhartdKdvRuSz-eN8vY
        subject_person_id: p_tsiYx22EuMadnnzE8CPcvt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Bmabfa0Irmjbb49-_abKx
          claim_id: c_PB9QhartdKdvRuSz-eN8vY
          source_id: s_9AWMPSJUlAPJKEUVseyQ-D
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206196 王价）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9AWMPSJUlAPJKEUVseyQ-D
            source_type: api_record
            title: 中国历代人物传记资料库：王修（CBDB 214687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214687&o=json
            external_identifier: CBDB:214687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tsiYx22EuMadnnzE8CPcvt
        status: active
        display_name: 王修
        merged_into_person_id: null
    - claim:
        id: c_QCzNlWABDRWUu72CaaAAA1
        subject_person_id: p_tzYcmpNNC1uUDJcBGMdf78
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GA9DzYGOxkMEQifAdPQmYu
          claim_id: c_QCzNlWABDRWUu72CaaAAA1
          source_id: s_wU21Za6-RnYiyL09Cz8Lmu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206196 王价）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wU21Za6-RnYiyL09Cz8Lmu
            source_type: api_record
            title: 中国历代人物传记资料库：王倬（CBDB 214686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214686&o=json
            external_identifier: CBDB:214686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tzYcmpNNC1uUDJcBGMdf78
        status: active
        display_name: 王倬
        merged_into_person_id: null
---

# 王价

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王价 | accepted |
| birth.date | 1542年 | accepted |
| bio.summary | 王价（生于1542年），明人物。明清進士進士，籍贯孟津，入仕進士。（中国历代人物传记资料库 CBDB 206196） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Pgpmm7wnTqLY7xY2HfhhZC | 王繼乾 | accepted |
| ancestors | p_bDuDm8E7rwt53cHmgXe8Yp | 王鼎 | accepted |
| ancestors | p_yTRLX3uBmFG8xiMstRoWYF | 王智 | accepted |
| other | p_21mcVq7Xt6u1gPQfobtDW1 | 王作 | accepted |
| other | p_3XnXd85VStVCmY7ujxhcGR | 王化 | accepted |
| other | p_KRykJ7B8iyR1KCWDJQUVuH | 王儀 | accepted |
| other | p_XfFbR5xmjQvgTMhQ2KfFaU | 王僖 | accepted |
| other | p_bHAK8cy9BjyQwXX58CvYTJ | 王僴 | accepted |
| other | p_tsiYx22EuMadnnzE8CPcvt | 王修 | accepted |
| other | p_tzYcmpNNC1uUDJcBGMdf78 | 王倬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 214678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214678&o=json)
- [中国历代人物传记资料库：王化（CBDB 214684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214684&o=json)
- [中国历代人物传记资料库：王繼乾（CBDB 214679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214679&o=json)
- [中国历代人物传记资料库：王价（CBDB 206196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206196&o=json)
- [中国历代人物传记资料库：王僖（CBDB 214689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214689&o=json)
- [中国历代人物传记资料库：王僴（CBDB 214688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214688&o=json)
- [中国历代人物传记资料库：王修（CBDB 214687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214687&o=json)
- [中国历代人物传记资料库：王儀（CBDB 214690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214690&o=json)
- [中国历代人物传记资料库：王智（CBDB 214677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214677&o=json)
- [中国历代人物传记资料库：王倬（CBDB 214686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214686&o=json)
- [中国历代人物传记资料库：王作（CBDB 214685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214685&o=json)
