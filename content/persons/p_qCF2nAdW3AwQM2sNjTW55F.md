---
schema: wang-person/v1
id: p_qCF2nAdW3AwQM2sNjTW55F
status: active
merged_into: null
display_name: 王獻圖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eTjMnbS7EgF6K38sYRA5X9
        subject_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻圖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ACD1PturjjDGRAP6uNqYSx
          claim_id: c_eTjMnbS7EgF6K38sYRA5X9
          source_id: s_oxY7beP4DEJc8nwLt4U479
          stance: supports
          locator: CBDB:203927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203927）
          source: &a1
            id: s_oxY7beP4DEJc8nwLt4U479
            source_type: api_record
            title: 中国历代人物传记资料库：王獻圖（CBDB 203927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203927&o=json
            external_identifier: CBDB:203927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.808Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_K3BsfCXBu536pczzKaEB2F
        subject_person_id: p_qCF2nAdW3AwQM2sNjTW55F
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
        - id: cs_npcuYbPjSRJim9kHEPzXxp
          claim_id: c_K3BsfCXBu536pczzKaEB2F
          source_id: s_oxY7beP4DEJc8nwLt4U479
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
        id: c_NgC28nkKEPKVFCfFVHVyAc
        subject_person_id: p_qCF2nAdW3AwQM2sNjTW55F
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
        - id: cs_gHGN7ehxiN2rtYK6XnnhWv
          claim_id: c_NgC28nkKEPKVFCfFVHVyAc
          source_id: s_oxY7beP4DEJc8nwLt4U479
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
        id: c_u4i-zcB829ywiWwbG3I6aO
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k33HUxL9jqe8W_yibxsZAz
          claim_id: c_u4i-zcB829ywiWwbG3I6aO
          source_id: s_qkW3z3kvfwTuE7YPQuMZem
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qkW3z3kvfwTuE7YPQuMZem
            source_type: api_record
            title: 中国历代人物传记资料库：王灌（CBDB 312061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312061&o=json
            external_identifier: CBDB:312061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gGjZBHoDDbj9pFHekYZYqw
        status: active
        display_name: 王灌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0v4AfKJng9zSukmMRSCcAC
        subject_person_id: p_9HMtTjvmoGeT3dPyaMfM32
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mA8grMIShhog6iF2ViMKhN
          claim_id: c_0v4AfKJng9zSukmMRSCcAC
          source_id: s_LLQRGRGiNou9DsDTwjzxw2
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LLQRGRGiNou9DsDTwjzxw2
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 312060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312060&o=json
            external_identifier: CBDB:312060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.862Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9HMtTjvmoGeT3dPyaMfM32
        status: active
        display_name: 王鑰
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王獻圖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻圖 | accepted |
| birth.date | 1529年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gGjZBHoDDbj9pFHekYZYqw | 王灌 | accepted |
| ancestors | p_9HMtTjvmoGeT3dPyaMfM32 | 王鑰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王灌（CBDB 312061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312061&o=json)
- [中国历代人物传记资料库：王獻圖（CBDB 203927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203927&o=json)
- [中国历代人物传记资料库：王鑰（CBDB 312060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312060&o=json)
