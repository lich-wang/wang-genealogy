---
schema: wang-person/v1
id: p_ZSdmaffBtX3DKbv12A8Zie
status: active
merged_into: null
display_name: 王輝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zNbjEsEbEGDFh9E2suVN6L
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G4sRV6WxHiUURrmQMjQct1
          claim_id: c_zNbjEsEbEGDFh9E2suVN6L
          source_id: s_b9Fk2CCtttY3pUV4gR1mV7
          stance: supports
          locator: CBDB:242210
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242210）
          source: &a1
            id: s_b9Fk2CCtttY3pUV4gR1mV7
            source_type: api_record
            title: 中国历代人物传记资料库：王輝（CBDB 242210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242210&o=json
            external_identifier: CBDB:242210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FPC1QNMQHitxQof3fuqcUX
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
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
        - id: cs_3tvi5iCBEwpRRxa5kU3CxK
          claim_id: c_FPC1QNMQHitxQof3fuqcUX
          source_id: s_b9Fk2CCtttY3pUV4gR1mV7
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
        id: c_wEExksD47eEVF-MrHpYvO2
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J9NadhxFwxWfp7AyRarwGS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qaApADrzH27KZtwE8mT8aA
          claim_id: c_wEExksD47eEVF-MrHpYvO2
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bbRqnXQuKPo1U93iT5YxWY
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 199241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199241&o=json
            external_identifier: CBDB:199241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J9NadhxFwxWfp7AyRarwGS
        status: active
        display_name: 王義
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王輝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輝 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_J9NadhxFwxWfp7AyRarwGS | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輝（CBDB 242210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242210&o=json)
- [中国历代人物传记资料库：王義（CBDB 199241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199241&o=json)
