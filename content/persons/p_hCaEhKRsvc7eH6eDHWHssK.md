---
schema: wang-person/v1
id: p_hCaEhKRsvc7eH6eDHWHssK
status: active
merged_into: null
display_name: 王國祚
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_15VGZRaagxi4aMGPJ5UMPj
        subject_person_id: p_hCaEhKRsvc7eH6eDHWHssK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KG1q2AEgCKmU2ouJx9si1M
          claim_id: c_15VGZRaagxi4aMGPJ5UMPj
          source_id: s_9i4WBxGhQDQD114CRTXrvN
          stance: supports
          locator: CBDB:206219
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206219）
          source: &a1
            id: s_9i4WBxGhQDQD114CRTXrvN
            source_type: api_record
            title: 中国历代人物传记资料库：王國祚（CBDB 206219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206219&o=json
            external_identifier: CBDB:206219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.890Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6SJAqjm5quxvB4LNfdAuq9
        subject_person_id: p_hCaEhKRsvc7eH6eDHWHssK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1545年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ADSsnJbaXY3Wre6Rk3if6P
          claim_id: c_6SJAqjm5quxvB4LNfdAuq9
          source_id: s_9i4WBxGhQDQD114CRTXrvN
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
        id: c_DkjPMpTuC48vMQXvvyRABV
        subject_person_id: p_hCaEhKRsvc7eH6eDHWHssK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國祚（生于1545年），明人物。明清進士進士，籍贯滄州，入仕進士。（中国历代人物传记资料库 CBDB 206219）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2i28C1NXm-30ErsC3Ktp7j
          claim_id: c_DkjPMpTuC48vMQXvvyRABV
          source_id: s_9i4WBxGhQDQD114CRTXrvN
          stance: supports
          locator: CBDB:206219
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MyDZ3V1xP_VAN0M19Wsvn_
        subject_person_id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hCaEhKRsvc7eH6eDHWHssK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Si1fVG34fou-v5n51h97rE
          claim_id: c_MyDZ3V1xP_VAN0M19Wsvn_
          source_id: s_9h4rgB3biLSeN3h49QvQgX
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9h4rgB3biLSeN3h49QvQgX
            source_type: api_record
            title: 中国历代人物传记资料库：王勉學（CBDB 214954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214954&o=json
            external_identifier: CBDB:214954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        status: active
        display_name: 王勉學
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_QOIzRwOjig5nnoDVpxgWQA
        subject_person_id: p_GAeLRTZkJHf27aCa6TLAnS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hCaEhKRsvc7eH6eDHWHssK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4I-VLedK0xy27qovmY2SA0
          claim_id: c_QOIzRwOjig5nnoDVpxgWQA
          source_id: s_3is5u2XsaGDBeEp3trVmuE
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百七十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3is5u2XsaGDBeEp3trVmuE
            source_type: api_record
            title: 中国历代人物传记资料库：王道充（CBDB 214953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214953&o=json
            external_identifier: CBDB:214953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.171Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GAeLRTZkJHf27aCa6TLAnS
        status: active
        display_name: 王道充
        merged_into_person_id: null
    - claim:
        id: c_jFAW5lMBKw4CjE3CoNXoCf
        subject_person_id: p_pC3v2cv72NbWMc2sFM73KX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hCaEhKRsvc7eH6eDHWHssK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2CPbk_w-s_BRs5ep0bloA-
          claim_id: c_jFAW5lMBKw4CjE3CoNXoCf
          source_id: s_1JWA1f1ntDVG2JcJA8LVhG
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百七十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1JWA1f1ntDVG2JcJA8LVhG
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 214952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214952&o=json
            external_identifier: CBDB:214952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.170Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pC3v2cv72NbWMc2sFM73KX
        status: active
        display_name: 王輔
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王國祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國祚 | accepted |
| birth.date | 1545年 | accepted |
| bio.summary | 王國祚（生于1545年），明人物。明清進士進士，籍贯滄州，入仕進士。（中国历代人物传记资料库 CBDB 206219） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jJ8CBW1eQx8HAeDCP6Kxoi | 王勉學 | accepted |
| ancestors | p_GAeLRTZkJHf27aCa6TLAnS | 王道充 | accepted |
| ancestors | p_pC3v2cv72NbWMc2sFM73KX | 王輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道充（CBDB 214953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214953&o=json)
- [中国历代人物传记资料库：王輔（CBDB 214952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214952&o=json)
- [中国历代人物传记资料库：王國祚（CBDB 206219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206219&o=json)
- [中国历代人物传记资料库：王勉學（CBDB 214954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214954&o=json)
