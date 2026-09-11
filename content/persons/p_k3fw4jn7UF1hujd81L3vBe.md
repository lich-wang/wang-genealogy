---
schema: wang-person/v1
id: p_k3fw4jn7UF1hujd81L3vBe
status: active
merged_into: null
display_name: 王蔚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_55uE26EaMAW6ibGsLGWDb4
        subject_person_id: p_k3fw4jn7UF1hujd81L3vBe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sVTXFHctHdJFKQ65mJrNao
          claim_id: c_55uE26EaMAW6ibGsLGWDb4
          source_id: s_U7g8Yd5LE8wFECaYyRm7KG
          stance: supports
          locator: CBDB:205903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205903）
          source: &a1
            id: s_U7g8Yd5LE8wFECaYyRm7KG
            source_type: api_record
            title: 中国历代人物传记资料库：王蔚（CBDB 205903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205903&o=json
            external_identifier: CBDB:205903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PWsXRFcmWABXxDQsrmCtSL
        subject_person_id: p_k3fw4jn7UF1hujd81L3vBe
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
        - id: cs_jN9Xk315RtV681ZMCWC4Xt
          claim_id: c_PWsXRFcmWABXxDQsrmCtSL
          source_id: s_U7g8Yd5LE8wFECaYyRm7KG
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
        id: c_nrkKjNW5tTDyjHfbV4iSge
        subject_person_id: p_k3fw4jn7UF1hujd81L3vBe
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
        - id: cs_KHCMSPwNXs3i16QySTFUNU
          claim_id: c_nrkKjNW5tTDyjHfbV4iSge
          source_id: s_U7g8Yd5LE8wFECaYyRm7KG
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
        id: c_wLHNayD-BMiX-fwj_amy1n
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k3fw4jn7UF1hujd81L3vBe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BS0Jzn4pTaobnYPano6J-t
          claim_id: c_wLHNayD-BMiX-fwj_amy1n
          source_id: s_fX2NiBK6X1E4F19HSQV43o
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百四十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fX2NiBK6X1E4F19HSQV43o
            source_type: api_record
            title: 中国历代人物传记资料库：王撫民（CBDB 210428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210428&o=json
            external_identifier: CBDB:210428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cJPjdNwsR6729BhxkY9bu9
        status: active
        display_name: 王撫民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王蔚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蔚 | accepted |
| birth.date | 1542年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cJPjdNwsR6729BhxkY9bu9 | 王撫民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王撫民（CBDB 210428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210428&o=json)
- [中国历代人物传记资料库：王蔚（CBDB 205903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205903&o=json)
