---
schema: wang-person/v1
id: p_2X56zUa2MYrGErZu5r54un
status: active
merged_into: null
display_name: 王爕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cTgsRVCGWGHbGPefus1Sz9
        subject_person_id: p_2X56zUa2MYrGErZu5r54un
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hnSmKTs3FYuggW2yg6QQuj
          claim_id: c_cTgsRVCGWGHbGPefus1Sz9
          source_id: s_vJrdW9xMquKxDLAjo4S8K1
          stance: supports
          locator: CBDB:205106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205106）
          source: &a1
            id: s_vJrdW9xMquKxDLAjo4S8K1
            source_type: api_record
            title: 中国历代人物传记资料库：王爕（CBDB 205106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205106&o=json
            external_identifier: CBDB:205106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yJe68n2zFa7uFTvxdtw972
        subject_person_id: p_2X56zUa2MYrGErZu5r54un
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1529年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JTcK5KabZMoNPeF8CjqvHo
          claim_id: c_yJe68n2zFa7uFTvxdtw972
          source_id: s_vJrdW9xMquKxDLAjo4S8K1
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
        id: c_huxJkhFioAzfDiqCkzP2B4
        subject_person_id: p_2X56zUa2MYrGErZu5r54un
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
        - id: cs_WiG75JiHifBNjuLHUECLLm
          claim_id: c_huxJkhFioAzfDiqCkzP2B4
          source_id: s_vJrdW9xMquKxDLAjo4S8K1
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
        id: c_Cclo6lkTizaflkBRX_l6sJ
        subject_person_id: p_H8E9DJ6cL51HbCtFQ3ZmfS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2X56zUa2MYrGErZu5r54un
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_94q-0QGbBfloUHqRb2Dff0
          claim_id: c_Cclo6lkTizaflkBRX_l6sJ
          source_id: s_vJrdW9xMquKxDLAjo4S8K1
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百一十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H8E9DJ6cL51HbCtFQ3ZmfS
        status: active
        display_name: 王楩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HyURtRscJNKC5mIWuWc5Qq
        subject_person_id: p_2X56zUa2MYrGErZu5r54un
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wHFs225Fr73NNgbiYpYAoK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wv0AmNCQ_d293JsFzMBZH8
          claim_id: c_HyURtRscJNKC5mIWuWc5Qq
          source_id: s_HtqC6QuUna3OkArQdcPPY_
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百一十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HtqC6QuUna3OkArQdcPPY_
            source_type: api_record
            title: 中国历代人物传记资料库：許氏(王爕妻)（CBDB 328402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328402&o=json
            external_identifier: CBDB:328402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wHFs225Fr73NNgbiYpYAoK
        status: active
        display_name: 許氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_9g4LSQFa53lcxmy5tfl3TU
        subject_person_id: p_pP89K6a61yquC5wjNZD3hv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2X56zUa2MYrGErZu5r54un
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cRNnHeAlRrARG4ne2a38Yy
          claim_id: c_9g4LSQFa53lcxmy5tfl3TU
          source_id: s_vJrdW9xMquKxDLAjo4S8K1
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百一十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pP89K6a61yquC5wjNZD3hv
        status: active
        display_name: 王鉞
        merged_into_person_id: null
    - claim:
        id: c_8DJ1c2dLrRM5iQmwiw2Vvt
        subject_person_id: p_yfUcpUNSmQKywdUMLPWsyg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2X56zUa2MYrGErZu5r54un
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sPSHdO2lRF2DtZEcmMtdMO
          claim_id: c_8DJ1c2dLrRM5iQmwiw2Vvt
          source_id: s_vJrdW9xMquKxDLAjo4S8K1
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百一十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yfUcpUNSmQKywdUMLPWsyg
        status: active
        display_name: 王瑾
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王爕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爕 | accepted |
| birth.date | 1529年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H8E9DJ6cL51HbCtFQ3ZmfS | 王楩 | accepted |
| spouses | p_wHFs225Fr73NNgbiYpYAoK | 許氏 | accepted |
| ancestors | p_pP89K6a61yquC5wjNZD3hv | 王鉞 | accepted |
| ancestors | p_yfUcpUNSmQKywdUMLPWsyg | 王瑾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王爕（CBDB 205106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205106&o=json)
- [中国历代人物传记资料库：許氏(王爕妻)（CBDB 328402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328402&o=json)
