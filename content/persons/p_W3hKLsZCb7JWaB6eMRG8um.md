---
schema: wang-person/v1
id: p_W3hKLsZCb7JWaB6eMRG8um
status: active
merged_into: null
display_name: 王沄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wNZEr1ojpPT8Cq1FLy2TZs
        subject_person_id: p_W3hKLsZCb7JWaB6eMRG8um
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_we5D4vNufMZUBjuskrkZdA
          claim_id: c_wNZEr1ojpPT8Cq1FLy2TZs
          source_id: s_jkNoMf2Zq1hSi8yEhjoPhV
          stance: supports
          locator: CBDB:320257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320257）
          source: &a1
            id: s_jkNoMf2Zq1hSi8yEhjoPhV
            source_type: api_record
            title: 中国历代人物传记资料库：王沄（CBDB 320257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320257&o=json
            external_identifier: CBDB:320257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.059Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wNa8FUwZzyHmLDi3nGC3mG
        subject_person_id: p_W3hKLsZCb7JWaB6eMRG8um
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
        - id: cs_gW3VF2uM1f9bF8TLcFYTG3
          claim_id: c_wNa8FUwZzyHmLDi3nGC3mG
          source_id: s_jkNoMf2Zq1hSi8yEhjoPhV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_ACc1xBws7mA2Ao333iSn1t
        status: active
        display_name: 王三聘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王沄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沄 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ACc1xBws7mA2Ao333iSn1t | 王三聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三聘（CBDB 204520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204520&o=json)
- [中国历代人物传记资料库：王沄（CBDB 320257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320257&o=json)
