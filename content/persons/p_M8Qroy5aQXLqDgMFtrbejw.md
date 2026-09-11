---
schema: wang-person/v1
id: p_M8Qroy5aQXLqDgMFtrbejw
status: active
merged_into: null
display_name: 王叔寧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_foR9qVxJMBDNURqH2u92U7
        subject_person_id: p_M8Qroy5aQXLqDgMFtrbejw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2PafUbJmwnXe2LfJFYWdqE
          claim_id: c_foR9qVxJMBDNURqH2u92U7
          source_id: s_8nCZzwbMm8wDd9RSJSAdVF
          stance: supports
          locator: CBDB:143282
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143282）
          source: &a1
            id: s_8nCZzwbMm8wDd9RSJSAdVF
            source_type: api_record
            title: 中国历代人物传记资料库：王叔寧（CBDB 143282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143282&o=json
            external_identifier: CBDB:143282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4dvS27a1AMMs9ZN4EsK5Lj
        subject_person_id: p_M8Qroy5aQXLqDgMFtrbejw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 763年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_csn1iPE9Bvm7p29F7aBVAH
          claim_id: c_4dvS27a1AMMs9ZN4EsK5Lj
          source_id: s_8nCZzwbMm8wDd9RSJSAdVF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QbkbURNA9UAotFh5gcZ3br
        subject_person_id: p_M8Qroy5aQXLqDgMFtrbejw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 815年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MVMpAigY5CdsE7RFgC29VM
          claim_id: c_QbkbURNA9UAotFh5gcZ3br
          source_id: s_8nCZzwbMm8wDd9RSJSAdVF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KjMUZUXW71ZqLyd4JMQpSK
        subject_person_id: p_M8Qroy5aQXLqDgMFtrbejw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qWfuDAuDzaE8ZP3dV7hH7A
          claim_id: c_KjMUZUXW71ZqLyd4JMQpSK
          source_id: s_8nCZzwbMm8wDd9RSJSAdVF
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
        id: c_jf8Ps2GgroHLPEJR0rnxDv
        subject_person_id: p_icFiqV4qE727ZGi81Wiaj9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_M8Qroy5aQXLqDgMFtrbejw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fBnP-EBEfpPsHLlPvUPO0W
          claim_id: c_jf8Ps2GgroHLPEJR0rnxDv
          source_id: s_5vMiv1iEZEf1ReAx618mW6
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yuanhe57：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5vMiv1iEZEf1ReAx618mW6
            source_type: api_record
            title: 中国历代人物传记资料库：王逸（CBDB 166174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166174&o=json
            external_identifier: CBDB:166174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_icFiqV4qE727ZGi81Wiaj9
        status: active
        display_name: 王逸
        merged_into_person_id: null
    - claim:
        id: c_BC7Y9L60eFpVOfsJhE2PNK
        subject_person_id: p_9wAPVGy1D3QZqQkHupd1oN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_M8Qroy5aQXLqDgMFtrbejw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xYEDXhxS8hO54krEpZtcp7
          claim_id: c_BC7Y9L60eFpVOfsJhE2PNK
          source_id: s_Zb8HrtBDTsX7Vey51QZzLq
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yuanhe57：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Zb8HrtBDTsX7Vey51QZzLq
            source_type: api_record
            title: 中国历代人物传记资料库：王承訓（CBDB 166173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166173&o=json
            external_identifier: CBDB:166173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9wAPVGy1D3QZqQkHupd1oN
        status: active
        display_name: 王承訓
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王叔寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔寧 | accepted |
| birth.date | 763年 | accepted |
| death.date | 815年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_icFiqV4qE727ZGi81Wiaj9 | 王逸 | accepted |
| ancestors | p_9wAPVGy1D3QZqQkHupd1oN | 王承訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承訓（CBDB 166173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166173&o=json)
- [中国历代人物传记资料库：王叔寧（CBDB 143282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143282&o=json)
- [中国历代人物传记资料库：王逸（CBDB 166174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166174&o=json)
