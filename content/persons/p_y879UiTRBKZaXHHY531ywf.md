---
schema: wang-person/v1
id: p_y879UiTRBKZaXHHY531ywf
status: active
merged_into: null
display_name: 王价
revision: 3
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DcXAba5w4BDHQkSmfFVrRC
          claim_id: c_eGvpvXbqNuUxEN3APDDViV
          source_id: s_DzXG3LXn36MGy42WhJa3z1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
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
  other: []
---

# 王价

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王价 | accepted |
| birth.date | 1542年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_bDuDm8E7rwt53cHmgXe8Yp | 王鼎 | accepted |
| ancestors | p_yTRLX3uBmFG8xiMstRoWYF | 王智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 214678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214678&o=json)
- [中国历代人物传记资料库：王价（CBDB 206196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206196&o=json)
- [中国历代人物传记资料库：王智（CBDB 214677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214677&o=json)
