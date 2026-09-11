---
schema: wang-person/v1
id: p_2wQZ4HH3qUsaPxm7C4niKV
status: active
merged_into: null
display_name: 王言
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B3fY2RTqYMu2eK2KUCYczN
        subject_person_id: p_2wQZ4HH3qUsaPxm7C4niKV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H55613BrVYDY8gpUTfma8d
          claim_id: c_B3fY2RTqYMu2eK2KUCYczN
          source_id: s_CbSVVPUWeW1qptLLBhXx8A
          stance: supports
          locator: CBDB:204113
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204113）
          source: &a1
            id: s_CbSVVPUWeW1qptLLBhXx8A
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 204113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204113&o=json
            external_identifier: CBDB:204113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6yuNgTTT6k2n1b64ju5Vt3
        subject_person_id: p_2wQZ4HH3qUsaPxm7C4niKV
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
        - id: cs_5fnPFosQqvKuAcsBKERnQf
          claim_id: c_6yuNgTTT6k2n1b64ju5Vt3
          source_id: s_CbSVVPUWeW1qptLLBhXx8A
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
        id: c_KWNyaMrgezARfeHsobUGb7
        subject_person_id: p_2wQZ4HH3qUsaPxm7C4niKV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言（生于1525年），明人物。明清進士進士，籍贯隴西，入仕進士。（中国历代人物传记资料库 CBDB 204113）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ondVMQq0yxoTjK5jQ3W8MR
          claim_id: c_KWNyaMrgezARfeHsobUGb7
          source_id: s_CbSVVPUWeW1qptLLBhXx8A
          stance: supports
          locator: CBDB:204113
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tOJQyPUmtVeRMUjl2RZu3i
        subject_person_id: p_wVxUNqb5LiTRFZz7R3Zy9W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2wQZ4HH3qUsaPxm7C4niKV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VUR9dL3vM5SwKvXg6H11Fe
          claim_id: c_tOJQyPUmtVeRMUjl2RZu3i
          source_id: s_CbSVVPUWeW1qptLLBhXx8A
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百九十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wVxUNqb5LiTRFZz7R3Zy9W
        status: active
        display_name: 王世福
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VGff0IewAqlpBQ0D8yy8LD
        subject_person_id: p_2wQZ4HH3qUsaPxm7C4niKV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gpwVb2k1hoAopRtG9WgfeP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yTKlcuFToAbvlME6JJ8M-l
          claim_id: c_VGff0IewAqlpBQ0D8yy8LD
          source_id: s_HQZUSOPr96jUStoeDkSPrq
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百九十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HQZUSOPr96jUStoeDkSPrq
            source_type: api_record
            title: 中国历代人物传记资料库：喬氏(王言妻)（CBDB 314593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314593&o=json
            external_identifier: CBDB:314593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gpwVb2k1hoAopRtG9WgfeP
        status: active
        display_name: 喬氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_oMhWxZzVicLFejUs67h6ub
        subject_person_id: p_FWwQe6BFSuiX29HZbYGUCq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2wQZ4HH3qUsaPxm7C4niKV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mjptz3iLWntv295tF1kHOY
          claim_id: c_oMhWxZzVicLFejUs67h6ub
          source_id: s_CbSVVPUWeW1qptLLBhXx8A
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百九十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FWwQe6BFSuiX29HZbYGUCq
        status: active
        display_name: 王通
        merged_into_person_id: null
    - claim:
        id: c_X_4QvQ5G3ezVwelGBoYLp-
        subject_person_id: p_5ey4xHJWDuvWd4CK8d2uXx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2wQZ4HH3qUsaPxm7C4niKV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mzxXQeBlFmvaCeXrRud9la
          claim_id: c_X_4QvQ5G3ezVwelGBoYLp-
          source_id: s_CbSVVPUWeW1qptLLBhXx8A
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百九十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5ey4xHJWDuvWd4CK8d2uXx
        status: active
        display_name: 王銳
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| birth.date | 1525年 | accepted |
| bio.summary | 王言（生于1525年），明人物。明清進士進士，籍贯隴西，入仕進士。（中国历代人物传记资料库 CBDB 204113） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wVxUNqb5LiTRFZz7R3Zy9W | 王世福 | accepted |
| spouses | p_gpwVb2k1hoAopRtG9WgfeP | 喬氏 | accepted |
| ancestors | p_FWwQe6BFSuiX29HZbYGUCq | 王通 | accepted |
| ancestors | p_5ey4xHJWDuvWd4CK8d2uXx | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：喬氏(王言妻)（CBDB 314593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314593&o=json)
- [中国历代人物传记资料库：王言（CBDB 204113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204113&o=json)
