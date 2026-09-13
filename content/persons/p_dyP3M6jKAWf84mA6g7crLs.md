---
schema: wang-person/v1
id: p_dyP3M6jKAWf84mA6g7crLs
status: active
merged_into: null
display_name: 王彥融
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CBQcNbV6CW3n5NymtGH1aE
        subject_person_id: p_dyP3M6jKAWf84mA6g7crLs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥融
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A3H2VLuNmrarygngHL3cY9
          claim_id: c_CBQcNbV6CW3n5NymtGH1aE
          source_id: s_T2Wc2EYYQNBLKSamaLsReD
          stance: supports
          locator: CBDB:1927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1927）
          source: &a1
            id: s_T2Wc2EYYQNBLKSamaLsReD
            source_type: api_record
            title: 中国历代人物传记资料库：王彥融（CBDB 1927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1927&o=json
            external_identifier: CBDB:1927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cTRDYvZTd4Z3KSTqLAX7Do
        subject_person_id: p_dyP3M6jKAWf84mA6g7crLs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1108年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V9iG3kQGtucAajHLFKkEgN
          claim_id: c_cTRDYvZTd4Z3KSTqLAX7Do
          source_id: s_T2Wc2EYYQNBLKSamaLsReD
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
        id: c_P3a6BwKtniD5WGvq45fWPv
        subject_person_id: p_dyP3M6jKAWf84mA6g7crLs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥融（生于1108年），宋人物。籍贯金壇，入仕特賜補官、准赦文除授等，曾任右朝奉大夫、散騎常侍、通判。（中国历代人物传记资料库 CBDB 1927）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__64qwelOvT0nFY5dgiAmZZ
          claim_id: c_P3a6BwKtniD5WGvq45fWPv
          source_id: s_T2Wc2EYYQNBLKSamaLsReD
          stance: supports
          locator: CBDB:1927
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h3x0P6uTXjc8YDCvnPwqtH
        subject_person_id: p_LmvwBv9Vm8BVkEPgL1A7GT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dyP3M6jKAWf84mA6g7crLs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_apFg0F4yRKhEeyfYzQp0WI
          claim_id: c_h3x0P6uTXjc8YDCvnPwqtH
          source_id: s_T2Wc2EYYQNBLKSamaLsReD
          stance: supports
          locator: CBDB 双向互证（父 王寀 ⇄ 子 王彥融）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_LmvwBv9Vm8BVkEPgL1A7GT
        status: active
        display_name: 王寀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_7SZbOcbPhqTrQsUG0gglhh
        subject_person_id: p_5QEFg5NX8fdCTZoicRnKAT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dyP3M6jKAWf84mA6g7crLs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_99qjTKmk63U4E3kaLCHw8n
          claim_id: c_7SZbOcbPhqTrQsUG0gglhh
          source_id: s_T2Wc2EYYQNBLKSamaLsReD
          stance: supports
          locator: CBDB 双向互证（祖父 王韶 ⇄ 孫 王彥融）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_5QEFg5NX8fdCTZoicRnKAT
        status: active
        display_name: 王韶
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王彥融

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥融 | accepted |
| birth.date | 1108年 | accepted |
| bio.summary | 王彥融（生于1108年），宋人物。籍贯金壇，入仕特賜補官、准赦文除授等，曾任右朝奉大夫、散騎常侍、通判。（中国历代人物传记资料库 CBDB 1927） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LmvwBv9Vm8BVkEPgL1A7GT | 王寀 | accepted |
| ancestors | p_5QEFg5NX8fdCTZoicRnKAT | 王韶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥融（CBDB 1927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1927&o=json)
