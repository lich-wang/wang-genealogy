---
schema: wang-person/v1
id: p_Pgpmm7wnTqLY7xY2HfhhZC
status: active
merged_into: null
display_name: 王繼乾
cbdb_id: 214679
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yDxM3qaBqpBJXDhPmvLa97
        subject_person_id: p_Pgpmm7wnTqLY7xY2HfhhZC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼乾，明人物。萬曆二年進士，籍贯孟津，曾任賜冠帶。（中国历代人物传记资料库 CBDB 214679）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_iPiloUe3UesE8B8chAgpw1
          claim_id: c_yDxM3qaBqpBJXDhPmvLa97
          source_id: s_vkFCXGRpL1SJxRu1DGXA7i
          stance: supports
          locator: CBDB:214679
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xMeGcSncKp93vzhNvf4PDt
        subject_person_id: p_Pgpmm7wnTqLY7xY2HfhhZC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_57oWUPk5XMqeBmDpjM9iis
          claim_id: c_xMeGcSncKp93vzhNvf4PDt
          source_id: s_vkFCXGRpL1SJxRu1DGXA7i
          stance: supports
          locator: CBDB:214679
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
        id: p_y879UiTRBKZaXHHY531ywf
        status: active
        display_name: 王价
        merged_into_person_id: null
    - claim:
        id: c_2a0R1V3H5QC0mAjQC5NV1O
        subject_person_id: p_Pgpmm7wnTqLY7xY2HfhhZC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_21mcVq7Xt6u1gPQfobtDW1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-1DJBKc0z82n1f9YK9BQgH
          claim_id: c_2a0R1V3H5QC0mAjQC5NV1O
          source_id: s_Io2urZAfOj4aHuhC0xrPxi
          stance: supports
          locator: CBDB：兄弟 王价（206196）之父／母 王繼乾
          quotation: null
          interpretation_note: 由兄弟关系推断：王作 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王作 之父／母。
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
        id: c_W18Irm8iKWRzNccFJvtoMe
        subject_person_id: p_Pgpmm7wnTqLY7xY2HfhhZC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3XnXd85VStVCmY7ujxhcGR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yyY-NtvVuKJEX8RuhS2R3c
          claim_id: c_W18Irm8iKWRzNccFJvtoMe
          source_id: s_Lp8KcbJlv0QTy_re5AauzL
          stance: supports
          locator: CBDB：兄弟 王价（206196）之父／母 王繼乾
          quotation: null
          interpretation_note: 由兄弟关系推断：王化 与 王价 为同胞（CBDB 记「弟」），王价 之父／母即 王化 之父／母。
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
        id: c_3tT4dIZwaJjPyekQLLzspt
        subject_person_id: p_Pgpmm7wnTqLY7xY2HfhhZC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KRykJ7B8iyR1KCWDJQUVuH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EMoGzptrjuPgBIIDWR3LKM
          claim_id: c_3tT4dIZwaJjPyekQLLzspt
          source_id: s_st8actLl-36hSNHek5jfk4
          stance: supports
          locator: CBDB：兄弟 王价（206196）之父／母 王繼乾
          quotation: null
          interpretation_note: 由兄弟关系推断：王儀 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王儀 之父／母。
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
        id: c_P8Hhh9ozJbaPKXYn6_SjP9
        subject_person_id: p_Pgpmm7wnTqLY7xY2HfhhZC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XfFbR5xmjQvgTMhQ2KfFaU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AzTuZ9cfcHgkLMX0_CmFKY
          claim_id: c_P8Hhh9ozJbaPKXYn6_SjP9
          source_id: s_OKTQTAtt1s4ROZ0CTOpmzG
          stance: supports
          locator: CBDB：兄弟 王价（206196）之父／母 王繼乾
          quotation: null
          interpretation_note: 由兄弟关系推断：王僖 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王僖 之父／母。
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
        id: c_1HhbmO-KLcmPjhGHVAm454
        subject_person_id: p_Pgpmm7wnTqLY7xY2HfhhZC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bHAK8cy9BjyQwXX58CvYTJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Grt8zyWOVuLBnBfqwUlvYr
          claim_id: c_1HhbmO-KLcmPjhGHVAm454
          source_id: s_KaFOURxb2Z9vyWXxAL0t26
          stance: supports
          locator: CBDB：兄弟 王价（206196）之父／母 王繼乾
          quotation: null
          interpretation_note: 由兄弟关系推断：王僴 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王僴 之父／母。
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
        id: c_lW0A7isAcH2af-qgajvv8g
        subject_person_id: p_Pgpmm7wnTqLY7xY2HfhhZC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tsiYx22EuMadnnzE8CPcvt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QpBCPfH2mFBNQ4MUzPn7CG
          claim_id: c_lW0A7isAcH2af-qgajvv8g
          source_id: s_9AWMPSJUlAPJKEUVseyQ-D
          stance: supports
          locator: CBDB：兄弟 王价（206196）之父／母 王繼乾
          quotation: null
          interpretation_note: 由兄弟关系推断：王修 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王修 之父／母。
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
        id: c_l9-JyCrVZSmfScwe6vBFPv
        subject_person_id: p_Pgpmm7wnTqLY7xY2HfhhZC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tzYcmpNNC1uUDJcBGMdf78
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xIpX--e-bRR5_0BmVIxzOW
          claim_id: c_l9-JyCrVZSmfScwe6vBFPv
          source_id: s_wU21Za6-RnYiyL09Cz8Lmu
          stance: supports
          locator: CBDB：兄弟 王价（206196）之父／母 王繼乾
          quotation: null
          interpretation_note: 由兄弟关系推断：王倬 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王倬 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繼乾，明人物。萬曆二年進士，籍贯孟津，曾任賜冠帶。（中国历代人物传记资料库 CBDB 214679） | accepted |
| name.primary | 王繼乾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_y879UiTRBKZaXHHY531ywf | 王价 | accepted |
| children | p_21mcVq7Xt6u1gPQfobtDW1 | 王作 | accepted |
| children | p_3XnXd85VStVCmY7ujxhcGR | 王化 | accepted |
| children | p_KRykJ7B8iyR1KCWDJQUVuH | 王儀 | accepted |
| children | p_XfFbR5xmjQvgTMhQ2KfFaU | 王僖 | accepted |
| children | p_bHAK8cy9BjyQwXX58CvYTJ | 王僴 | accepted |
| children | p_tsiYx22EuMadnnzE8CPcvt | 王修 | accepted |
| children | p_tzYcmpNNC1uUDJcBGMdf78 | 王倬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王化（CBDB 214684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214684&o=json)
- [中国历代人物传记资料库：王繼乾（CBDB 214679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214679&o=json)
- [中国历代人物传记资料库：王僖（CBDB 214689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214689&o=json)
- [中国历代人物传记资料库：王僴（CBDB 214688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214688&o=json)
- [中国历代人物传记资料库：王修（CBDB 214687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214687&o=json)
- [中国历代人物传记资料库：王儀（CBDB 214690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214690&o=json)
- [中国历代人物传记资料库：王倬（CBDB 214686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214686&o=json)
- [中国历代人物传记资料库：王作（CBDB 214685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214685&o=json)
