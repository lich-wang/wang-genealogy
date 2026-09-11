---
schema: wang-person/v1
id: p_uwC7U2dhe6Kyw5xBECanBE
status: active
merged_into: null
display_name: 王珍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YKKBNdRbQQqZ91spD7HWWu
        subject_person_id: p_uwC7U2dhe6Kyw5xBECanBE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dnVQ6ZhmQ5j5tQBdemHX3k
          claim_id: c_YKKBNdRbQQqZ91spD7HWWu
          source_id: s_JPUss23qR95VuyfYEiVEVc
          stance: supports
          locator: CBDB:200536
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200536）
          source: &a1
            id: s_JPUss23qR95VuyfYEiVEVc
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 200536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200536&o=json
            external_identifier: CBDB:200536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_R5Pviwgyds3tE8y5V3wVQV
        subject_person_id: p_uwC7U2dhe6Kyw5xBECanBE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1455年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LRzC3rKPctjASBgUDQSLTA
          claim_id: c_R5Pviwgyds3tE8y5V3wVQV
          source_id: s_JPUss23qR95VuyfYEiVEVc
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
        id: c_XHQ8ZWFg3ridQ3JaFhDjVu
        subject_person_id: p_uwC7U2dhe6Kyw5xBECanBE
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
        - id: cs_Maw8hwGjBEFxF9kAzTCqGz
          claim_id: c_XHQ8ZWFg3ridQ3JaFhDjVu
          source_id: s_JPUss23qR95VuyfYEiVEVc
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
        id: c_mDnYVrPQ_OLPikcOR4pjt2
        subject_person_id: p_PiGQRrZ25P7Jmsf8AnzTUr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uwC7U2dhe6Kyw5xBECanBE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j-XHueNzO9Y8ZsEXF0Cge8
          claim_id: c_mDnYVrPQ_OLPikcOR4pjt2
          source_id: s_zCaK7Ajn8iTANBw3ydjYN4
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第八十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zCaK7Ajn8iTANBw3ydjYN4
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 259408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259408&o=json
            external_identifier: CBDB:259408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.460Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PiGQRrZ25P7Jmsf8AnzTUr
        status: active
        display_name: 王敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_2eOSsM-rcpso9U481YGvXI
        subject_person_id: p_HaHWeAEQnbFtxnWDTKBdRZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uwC7U2dhe6Kyw5xBECanBE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VhDsaGyMDnFQkLe8_9Lcu9
          claim_id: c_2eOSsM-rcpso9U481YGvXI
          source_id: s_a7ssFo3HHp2AHDAccJUT4i
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第八十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a7ssFo3HHp2AHDAccJUT4i
            source_type: api_record
            title: 中国历代人物传记资料库：王友才（CBDB 259407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259407&o=json
            external_identifier: CBDB:259407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HaHWeAEQnbFtxnWDTKBdRZ
        status: active
        display_name: 王友才
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍 | accepted |
| birth.date | 1455年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PiGQRrZ25P7Jmsf8AnzTUr | 王敬 | accepted |
| ancestors | p_HaHWeAEQnbFtxnWDTKBdRZ | 王友才 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 259408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259408&o=json)
- [中国历代人物传记资料库：王友才（CBDB 259407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259407&o=json)
- [中国历代人物传记资料库：王珍（CBDB 200536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200536&o=json)
