---
schema: wang-person/v1
id: p_nWnvvK3mCHgBPx6MNxbPBC
status: active
merged_into: null
display_name: 王崇簡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VoNd8EGq4R6QtSUCHFE9Fw
        subject_person_id: p_nWnvvK3mCHgBPx6MNxbPBC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vPEkdBefdScfS7ua1LE63E
          claim_id: c_VoNd8EGq4R6QtSUCHFE9Fw
          source_id: s_PYfj8Ko8WPPJgmRb4BBBiE
          stance: supports
          locator: CBDB:65761
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65761）
          source: &a1
            id: s_PYfj8Ko8WPPJgmRb4BBBiE
            source_type: api_record
            title: 中国历代人物传记资料库：王崇簡（CBDB 65761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65761&o=json
            external_identifier: CBDB:65761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CwCtuKpL84LmazKs2auFt3
        subject_person_id: p_nWnvvK3mCHgBPx6MNxbPBC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1602年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P77qXJSmZCXU8L3xV24eiU
          claim_id: c_CwCtuKpL84LmazKs2auFt3
          source_id: s_PYfj8Ko8WPPJgmRb4BBBiE
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
        id: c_4kmSxK6eMY1s6M86Qe3GV2
        subject_person_id: p_nWnvvK3mCHgBPx6MNxbPBC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1678年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZuUJEJsZqErR94BcZgXzmh
          claim_id: c_4kmSxK6eMY1s6M86Qe3GV2
          source_id: s_PYfj8Ko8WPPJgmRb4BBBiE
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
        id: c_x6t2VrY57J1JjifFPWW2Cy
        subject_person_id: p_nWnvvK3mCHgBPx6MNxbPBC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇簡（1602年—1678年），清人物。明清進士進士，籍贯宛平，身份为畫家，入仕進士。（中国历代人物传记资料库 CBDB 65761）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L6s_Tig-PUYBtNOA8saql9
          claim_id: c_x6t2VrY57J1JjifFPWW2Cy
          source_id: s_PYfj8Ko8WPPJgmRb4BBBiE
          stance: supports
          locator: CBDB:65761
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_DlBBbVIbF72OeurUQytkI9
        subject_person_id: p_nWnvvK3mCHgBPx6MNxbPBC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RZdjgJ11qcquH8ZNUR8LB1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ytBPfS3EFOGXTJm7Nd3Yr9
          claim_id: c_DlBBbVIbF72OeurUQytkI9
          source_id: s_PYfj8Ko8WPPJgmRb4BBBiE
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9215：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RZdjgJ11qcquH8ZNUR8LB1
        status: active
        display_name: 王存住
        merged_into_person_id: null
    - claim:
        id: c_31mxKCjQKQQoymqZZc6y66
        subject_person_id: p_nWnvvK3mCHgBPx6MNxbPBC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C92FkFgepDESC2MLabMgSC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ctENqJMNGl3ueRlZVSje6X
          claim_id: c_31mxKCjQKQQoymqZZc6y66
          source_id: s_PYfj8Ko8WPPJgmRb4BBBiE
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9215：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_C92FkFgepDESC2MLabMgSC
        status: active
        display_name: 王克弘
        merged_into_person_id: null
    - claim:
        id: c_-qhC5SArW8DwsavJ1bnzRv
        subject_person_id: p_nWnvvK3mCHgBPx6MNxbPBC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HCQ6JdVaaN3wiCmmgYUyL9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aW9eAx2C1QldfWzqPD4jH_
          claim_id: c_-qhC5SArW8DwsavJ1bnzRv
          source_id: s_PYfj8Ko8WPPJgmRb4BBBiE
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9215：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HCQ6JdVaaN3wiCmmgYUyL9
        status: active
        display_name: 王克遠
        merged_into_person_id: null
    - claim:
        id: c_kdh8C8pp4T_v1f6w0o3P5s
        subject_person_id: p_nWnvvK3mCHgBPx6MNxbPBC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D1GMjzDU2wEYq4LDJjjeMJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hljcw-ciCbSawaWO9ib-R0
          claim_id: c_kdh8C8pp4T_v1f6w0o3P5s
          source_id: s_PYfj8Ko8WPPJgmRb4BBBiE
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9215：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D1GMjzDU2wEYq4LDJjjeMJ
        status: active
        display_name: 王雙鶴
        merged_into_person_id: null
    - claim:
        id: c_Ugjq7DzVeak2Qm2dAtc5eY
        subject_person_id: p_nWnvvK3mCHgBPx6MNxbPBC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZK5kFaWDXbAi9odKWjqWmw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fvNslVNHu3FuFnoDz0Znon
          claim_id: c_Ugjq7DzVeak2Qm2dAtc5eY
          source_id: s_PYfj8Ko8WPPJgmRb4BBBiE
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9215：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZK5kFaWDXbAi9odKWjqWmw
        status: active
        display_name: 王穩住
        merged_into_person_id: null
    - claim:
        id: c_cMbd9h8BMxTE3RgmFpWbgn
        subject_person_id: p_nWnvvK3mCHgBPx6MNxbPBC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jDcaJoocr4txWJLGakd1D3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xhvc0xw8YltSQb-Q95pb2i
          claim_id: c_cMbd9h8BMxTE3RgmFpWbgn
          source_id: s_PYfj8Ko8WPPJgmRb4BBBiE
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9215：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jDcaJoocr4txWJLGakd1D3
        status: active
        display_name: 王仲鳳
        merged_into_person_id: null
    - claim:
        id: c_iIh2bnrT9X2mR9a0aaW697
        subject_person_id: p_nWnvvK3mCHgBPx6MNxbPBC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hSvdFVHQZBQyyQR1M8ki7U
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GsjZ4q_DruKm_8UT1SZY4I
          claim_id: c_iIh2bnrT9X2mR9a0aaW697
          source_id: s_PYfj8Ko8WPPJgmRb4BBBiE
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9215：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hSvdFVHQZBQyyQR1M8ki7U
        status: active
        display_name: 王長麟
        merged_into_person_id: null
  other: []
---

# 王崇簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇簡 | accepted |
| birth.date | 1602年 | accepted |
| death.date | 1678年 | accepted |
| bio.summary | 王崇簡（1602年—1678年），清人物。明清進士進士，籍贯宛平，身份为畫家，入仕進士。（中国历代人物传记资料库 CBDB 65761） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RZdjgJ11qcquH8ZNUR8LB1 | 王存住 | accepted |
| descendants | p_C92FkFgepDESC2MLabMgSC | 王克弘 | accepted |
| descendants | p_HCQ6JdVaaN3wiCmmgYUyL9 | 王克遠 | accepted |
| descendants | p_D1GMjzDU2wEYq4LDJjjeMJ | 王雙鶴 | accepted |
| descendants | p_ZK5kFaWDXbAi9odKWjqWmw | 王穩住 | accepted |
| descendants | p_jDcaJoocr4txWJLGakd1D3 | 王仲鳳 | accepted |
| descendants | p_hSvdFVHQZBQyyQR1M8ki7U | 王長麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇簡（CBDB 65761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65761&o=json)
