---
schema: wang-person/v1
id: p_Ggn2t8z4X4B4wro6LB38G3
status: active
merged_into: null
display_name: 王虔暢
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YHy3WroDNnLZ3ZM6fCPD2B
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虔暢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HZ9F6JiotoPCknBeNocXqF
          claim_id: c_YHy3WroDNnLZ3ZM6fCPD2B
          source_id: s_9QaQbwhKmgQpuZ6DSsqNNd
          stance: supports
          locator: CBDB:142008
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142008）
          source: &a1
            id: s_9QaQbwhKmgQpuZ6DSsqNNd
            source_type: api_record
            title: 中国历代人物传记资料库：王虔暢（CBDB 142008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142008&o=json
            external_identifier: CBDB:142008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UN86JnLSQZqnFvQ7VKrKZ5
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 801年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5NsN3y7SQdyQVDwiXBh4Dq
          claim_id: c_UN86JnLSQZqnFvQ7VKrKZ5
          source_id: s_9QaQbwhKmgQpuZ6DSsqNNd
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
        id: c_ZAaZGaF748GmWpjo7pTN3R
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 866年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QgyJ71cJxRh1dsZskZEhF8
          claim_id: c_ZAaZGaF748GmWpjo7pTN3R
          source_id: s_9QaQbwhKmgQpuZ6DSsqNNd
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
        id: c_WhwLGuu4MeJhTH8Exrkjmp
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6mN3ShaB2fvX3iAfc2q5rk
          claim_id: c_WhwLGuu4MeJhTH8Exrkjmp
          source_id: s_9QaQbwhKmgQpuZ6DSsqNNd
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
        id: c_LbD1Yf5DjeRPkGFZCjlSTy
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4FYUq8fdEyD1ykW4CP1nsJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jKdIvo7skFgPOklvruVhP_
          claim_id: c_LbD1Yf5DjeRPkGFZCjlSTy
          source_id: s_K7GzGB34y9LV38gWsSGe88
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 56：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K7GzGB34y9LV38gWsSGe88
            source_type: api_record
            title: 中国历代人物传记资料库：王處溫（CBDB 160572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160572&o=json
            external_identifier: CBDB:160572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4FYUq8fdEyD1ykW4CP1nsJ
        status: active
        display_name: 王處溫
        merged_into_person_id: null
    - claim:
        id: c_u5Ja0wPDrt0oNFqtJNaU7L
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7KEiJpicYu9s2iUJpUKeLa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-zCllMc3tIhbKEXO644nBe
          claim_id: c_u5Ja0wPDrt0oNFqtJNaU7L
          source_id: s_jmbwK7AKEdW9Rtm2zDoJMq
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 56：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jmbwK7AKEdW9Rtm2zDoJMq
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 160570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160570&o=json
            external_identifier: CBDB:160570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7KEiJpicYu9s2iUJpUKeLa
        status: active
        display_name: 王璉
        merged_into_person_id: null
    - claim:
        id: c_KObRnsuBMwG_8c8_TS0Tw5
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EwDgLH5GRgdhsBuSp5fGjy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o_hpocVgxw9ORmSuboUOsG
          claim_id: c_KObRnsuBMwG_8c8_TS0Tw5
          source_id: s_qJrWp38DstuqZQLBfP8pMF
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qJrWp38DstuqZQLBfP8pMF
            source_type: api_record
            title: 中国历代人物传记资料库：王處脩（CBDB 189914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189914&o=json
            external_identifier: CBDB:189914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EwDgLH5GRgdhsBuSp5fGjy
        status: active
        display_name: 王處脩
        merged_into_person_id: null
    - claim:
        id: c_6MKqXhvjsutjNVMnCnVIYT
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H2DpSRdokD1K9UiqF5tCYj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nGzBaD7ydU-OTtXsE4JgAH
          claim_id: c_6MKqXhvjsutjNVMnCnVIYT
          source_id: s_7Nwb2yDzW8yngEXRij3p2Y
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 56：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7Nwb2yDzW8yngEXRij3p2Y
            source_type: api_record
            title: 中国历代人物传记资料库：王處修（CBDB 160571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160571&o=json
            external_identifier: CBDB:160571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H2DpSRdokD1K9UiqF5tCYj
        status: active
        display_name: 王處修
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_qKHE9XYecBr8AAbmHhRWdr
        subject_person_id: p_BzEC3FxQZmQshcKpSR8HHx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AxFZ63esuySh5wJiA2s8-R
          claim_id: c_qKHE9XYecBr8AAbmHhRWdr
          source_id: s_6tg181GfEavpwsgSRrvE1t
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 56：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6tg181GfEavpwsgSRrvE1t
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 160565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160565&o=json
            external_identifier: CBDB:160565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BzEC3FxQZmQshcKpSR8HHx
        status: active
        display_name: 王雲
        merged_into_person_id: null
    - claim:
        id: c_QZfL-_mqSI5kgamSjqRXOQ
        subject_person_id: p_omcnEPxMUJWQetwYnKCLjF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PEs6kPf-iXfU1P9lOkXTc8
          claim_id: c_QZfL-_mqSI5kgamSjqRXOQ
          source_id: s_cCzKSa17QMxMtnFYQLNKef
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 56：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cCzKSa17QMxMtnFYQLNKef
            source_type: api_record
            title: 中国历代人物传记资料库：王炅（CBDB 157068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157068&o=json
            external_identifier: CBDB:157068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_omcnEPxMUJWQetwYnKCLjF
        status: active
        display_name: 王炅
        merged_into_person_id: null
    - claim:
        id: c_by5WkTaV7Wdm7YhKo7_ZEB
        subject_person_id: p_PtYEMqNo3Ja6CBRf3JpwLp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vgee0uUD7LapQVgHlVCkyN
          claim_id: c_by5WkTaV7Wdm7YhKo7_ZEB
          source_id: s_xrt4f93dp6af9Q6LA6B4bQ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 56：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xrt4f93dp6af9Q6LA6B4bQ
            source_type: api_record
            title: 中国历代人物传记资料库：王希儁（CBDB 160576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160576&o=json
            external_identifier: CBDB:160576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PtYEMqNo3Ja6CBRf3JpwLp
        status: active
        display_name: 王希儁
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王虔暢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王虔暢 | accepted |
| birth.date | 801年 | accepted |
| death.date | 866年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4FYUq8fdEyD1ykW4CP1nsJ | 王處溫 | accepted |
| children | p_7KEiJpicYu9s2iUJpUKeLa | 王璉 | accepted |
| children | p_EwDgLH5GRgdhsBuSp5fGjy | 王處脩 | accepted |
| children | p_H2DpSRdokD1K9UiqF5tCYj | 王處修 | accepted |
| ancestors | p_BzEC3FxQZmQshcKpSR8HHx | 王雲 | accepted |
| ancestors | p_omcnEPxMUJWQetwYnKCLjF | 王炅 | accepted |
| ancestors | p_PtYEMqNo3Ja6CBRf3JpwLp | 王希儁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處溫（CBDB 160572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160572&o=json)
- [中国历代人物传记资料库：王處修（CBDB 160571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160571&o=json)
- [中国历代人物传记资料库：王處脩（CBDB 189914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189914&o=json)
- [中国历代人物传记资料库：王炅（CBDB 157068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157068&o=json)
- [中国历代人物传记资料库：王璉（CBDB 160570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160570&o=json)
- [中国历代人物传记资料库：王虔暢（CBDB 142008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142008&o=json)
- [中国历代人物传记资料库：王希儁（CBDB 160576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160576&o=json)
- [中国历代人物传记资料库：王雲（CBDB 160565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160565&o=json)
