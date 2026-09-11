---
schema: wang-person/v1
id: p_ACc1xBws7mA2Ao333iSn1t
status: active
merged_into: null
display_name: 王三聘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FSqtbrgmfNA4zKHuTJQ5Ac
        subject_person_id: p_ACc1xBws7mA2Ao333iSn1t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ykJoBStafTV6m1HuE2vuE
          claim_id: c_FSqtbrgmfNA4zKHuTJQ5Ac
          source_id: s_aezRG3VnGWPt4X8ieiDCFT
          stance: supports
          locator: CBDB:204520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204520）
          source: &a1
            id: s_aezRG3VnGWPt4X8ieiDCFT
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 204520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204520&o=json
            external_identifier: CBDB:204520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dTGcJPq7JyCZpYTyHweMv8
        subject_person_id: p_ACc1xBws7mA2Ao333iSn1t
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1525年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DvFF7JHP35kkWZQoWGK6v3
          claim_id: c_dTGcJPq7JyCZpYTyHweMv8
          source_id: s_aezRG3VnGWPt4X8ieiDCFT
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
        id: c_eamQNDQNMsf8x63KszENq9
        subject_person_id: p_ACc1xBws7mA2Ao333iSn1t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘（生于1525年），明人物。明清進士進士，籍贯代州，入仕進士。（中国历代人物传记资料库 CBDB 204520）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jGkZHoNpSIvaBix903BMFc
          claim_id: c_eamQNDQNMsf8x63KszENq9
          source_id: s_aezRG3VnGWPt4X8ieiDCFT
          stance: supports
          locator: CBDB:204520
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FM0tHKVCVrgrcVRVEGzQw2
        subject_person_id: p_W3hKLsZCb7JWaB6eMRG8um
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ACc1xBws7mA2Ao333iSn1t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sfpJUMjO34fI7eRCCA3V5l
          claim_id: c_FM0tHKVCVrgrcVRVEGzQw2
          source_id: s_aezRG3VnGWPt4X8ieiDCFT
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第二十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W3hKLsZCb7JWaB6eMRG8um
        status: active
        display_name: 王沄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_sNYBM6V3Wemm82t67ouTds
        subject_person_id: p_ACc1xBws7mA2Ao333iSn1t
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_7qHPv3dNV3pb6foTr1R6Mj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GjcW1j7DNu0AaBwVJls6ME
          claim_id: c_sNYBM6V3Wemm82t67ouTds
          source_id: s_QkoyttXMgGStu0CRNt48PH
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第二十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QkoyttXMgGStu0CRNt48PH
            source_type: api_record
            title: 中国历代人物传记资料库：任氏(王三聘妻)（CBDB 320260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320260&o=json
            external_identifier: CBDB:320260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7qHPv3dNV3pb6foTr1R6Mj
        status: active
        display_name: 任氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_jcUew3Lw5VRRZl-f1Jmb_2
        subject_person_id: p_UBvJGVLqxVxxgkGH1oiL2o
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ACc1xBws7mA2Ao333iSn1t
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s_ZgC_qf7Y2HPZjV-TZCRU
          claim_id: c_jcUew3Lw5VRRZl-f1Jmb_2
          source_id: s_aezRG3VnGWPt4X8ieiDCFT
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第二十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UBvJGVLqxVxxgkGH1oiL2o
        status: active
        display_name: 王忠
        merged_into_person_id: null
    - claim:
        id: c_dsYaM7JtDv-mjF9kof6cj1
        subject_person_id: p_qwzu3ZKpNmFFiKcPJz3w4X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ACc1xBws7mA2Ao333iSn1t
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c8SY52SCJYAzTceuX3Z4MP
          claim_id: c_dsYaM7JtDv-mjF9kof6cj1
          source_id: s_aezRG3VnGWPt4X8ieiDCFT
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第二十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qwzu3ZKpNmFFiKcPJz3w4X
        status: active
        display_name: 王景華
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王三聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三聘 | accepted |
| birth.date | 1525年 | accepted |
| bio.summary | 王三聘（生于1525年），明人物。明清進士進士，籍贯代州，入仕進士。（中国历代人物传记资料库 CBDB 204520） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W3hKLsZCb7JWaB6eMRG8um | 王沄 | accepted |
| spouses | p_7qHPv3dNV3pb6foTr1R6Mj | 任氏 | accepted |
| ancestors | p_UBvJGVLqxVxxgkGH1oiL2o | 王忠 | accepted |
| ancestors | p_qwzu3ZKpNmFFiKcPJz3w4X | 王景華 | accepted |

## 外部来源

- [中国历代人物传记资料库：任氏(王三聘妻)（CBDB 320260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320260&o=json)
- [中国历代人物传记资料库：王三聘（CBDB 204520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204520&o=json)
