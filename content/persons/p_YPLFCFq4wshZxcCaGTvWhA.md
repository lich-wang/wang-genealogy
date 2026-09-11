---
schema: wang-person/v1
id: p_YPLFCFq4wshZxcCaGTvWhA
status: active
merged_into: null
display_name: 王常
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DmkiHBUnuKU5FJFRp889YP
        subject_person_id: p_YPLFCFq4wshZxcCaGTvWhA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JZTSRFMVUnQo9khp22qDMM
          claim_id: c_DmkiHBUnuKU5FJFRp889YP
          source_id: s_QpNAbj1ukQE5wEmxFfvnn4
          stance: supports
          locator: CBDB:208095
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208095）
          source: &a1
            id: s_QpNAbj1ukQE5wEmxFfvnn4
            source_type: api_record
            title: 中国历代人物传记资料库：王常（CBDB 208095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208095&o=json
            external_identifier: CBDB:208095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_szFS2BjoCLe6DfFQPmwqDN
        subject_person_id: p_YPLFCFq4wshZxcCaGTvWhA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1409年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HmME44eQw9KC71Ftzi4r3j
          claim_id: c_szFS2BjoCLe6DfFQPmwqDN
          source_id: s_QpNAbj1ukQE5wEmxFfvnn4
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
        id: c_v5TDCHi8CZVxkiKn8EriN2
        subject_person_id: p_YPLFCFq4wshZxcCaGTvWhA
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
        - id: cs_zRy1FLzDGJawwQw8F7PQRn
          claim_id: c_v5TDCHi8CZVxkiKn8EriN2
          source_id: s_QpNAbj1ukQE5wEmxFfvnn4
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
        id: c_fUrv1n9inRtO9eRNklqcAG
        subject_person_id: p_C5Fmj2W6LjNNLVnMBPi6k6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YPLFCFq4wshZxcCaGTvWhA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Hlb3BLQ_lHIqBohrm46gj
          claim_id: c_fUrv1n9inRtO9eRNklqcAG
          source_id: s_17F2jSsG6d1WTdyvgfd3u8
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第二甲第十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_17F2jSsG6d1WTdyvgfd3u8
            source_type: api_record
            title: 中国历代人物传记资料库：王汝為（CBDB 240369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240369&o=json
            external_identifier: CBDB:240369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C5Fmj2W6LjNNLVnMBPi6k6
        status: active
        display_name: 王汝為
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_VGysv7SNLZqMN2DOZ9e2Ih
        subject_person_id: p_GP3BzV5HnSBguScGwgcJbu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YPLFCFq4wshZxcCaGTvWhA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vHK_0rjIkItfGfFZEvQtg0
          claim_id: c_VGysv7SNLZqMN2DOZ9e2Ih
          source_id: s_6vf9dwDx4AT2Li3A6fy3QQ
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第二甲第十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6vf9dwDx4AT2Li3A6fy3QQ
            source_type: api_record
            title: 中国历代人物传记资料库：王思敬（CBDB 240368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240368&o=json
            external_identifier: CBDB:240368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GP3BzV5HnSBguScGwgcJbu
        status: active
        display_name: 王思敬
        merged_into_person_id: null
    - claim:
        id: c_DV3-eHYRE9OsTshSyNEKPI
        subject_person_id: p_LXVSMfmUiLLAkLsMQXrEbf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YPLFCFq4wshZxcCaGTvWhA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VNVV0X_lps17dcOTaHVsEV
          claim_id: c_DV3-eHYRE9OsTshSyNEKPI
          source_id: s_NJYFnv81qQpFAYvPP3f3BJ
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第二甲第十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NJYFnv81qQpFAYvPP3f3BJ
            source_type: api_record
            title: 中国历代人物传记资料库：王隱卿（CBDB 240367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240367&o=json
            external_identifier: CBDB:240367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_LXVSMfmUiLLAkLsMQXrEbf
        status: active
        display_name: 王隱卿
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王常 | accepted |
| birth.date | 1409年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C5Fmj2W6LjNNLVnMBPi6k6 | 王汝為 | accepted |
| ancestors | p_GP3BzV5HnSBguScGwgcJbu | 王思敬 | accepted |
| ancestors | p_LXVSMfmUiLLAkLsMQXrEbf | 王隱卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王常（CBDB 208095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208095&o=json)
- [中国历代人物传记资料库：王汝為（CBDB 240369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240369&o=json)
- [中国历代人物传记资料库：王思敬（CBDB 240368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240368&o=json)
- [中国历代人物传记资料库：王隱卿（CBDB 240367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240367&o=json)
