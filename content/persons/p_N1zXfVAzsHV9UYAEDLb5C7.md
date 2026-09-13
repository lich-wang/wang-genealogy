---
schema: wang-person/v1
id: p_N1zXfVAzsHV9UYAEDLb5C7
status: active
merged_into: null
display_name: 王徽猷
cbdb_id: 204879
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SMWiujkCYHxcVz2WPHn552
        subject_person_id: p_N1zXfVAzsHV9UYAEDLb5C7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽猷（生于1526年），史料所见人物。本项目依据《中国历代人物传记资料库：王徽猷（CBDB 204879）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_N5mvuBuctMvaomD7StA6jM
          claim_id: c_SMWiujkCYHxcVz2WPHn552
          source_id: s_R83YFDtgAwJRNSFn22MUB6
          stance: supports
          locator: CBDB:204879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_R83YFDtgAwJRNSFn22MUB6
            source_type: api_record
            title: 中国历代人物传记资料库：王徽猷（CBDB 204879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204879&o=json
            external_identifier: CBDB:204879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_m5pHChKkE5tCP9dsrtGMhr
        subject_person_id: p_N1zXfVAzsHV9UYAEDLb5C7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1526-01-01
            latest: 1526-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hVxM3UBAXBQwNpzzAEJTst
          claim_id: c_m5pHChKkE5tCP9dsrtGMhr
          source_id: s_R83YFDtgAwJRNSFn22MUB6
          stance: supports
          locator: CBDB:204879
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1526
          source:
            id: s_R83YFDtgAwJRNSFn22MUB6
            source_type: api_record
            title: 中国历代人物传记资料库：王徽猷（CBDB 204879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204879&o=json
            external_identifier: CBDB:204879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2YtKAySXAB1Dx8FzpvYEGR
        subject_person_id: p_N1zXfVAzsHV9UYAEDLb5C7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cFA9ZffFSQ9rcsPmxNAPHZ
          claim_id: c_2YtKAySXAB1Dx8FzpvYEGR
          source_id: s_R83YFDtgAwJRNSFn22MUB6
          stance: supports
          locator: CBDB:204879
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1526
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_d5yb9cpZUVdeZ7DNvVpJTN
        subject_person_id: p_v2Fkat16mGPQiTSwTrQAp8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N1zXfVAzsHV9UYAEDLb5C7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tpzXIAXNVYCpX9T-KNmpIY
          claim_id: c_d5yb9cpZUVdeZ7DNvVpJTN
          source_id: s_CmEXBFKXmsb6MmUKf3utME
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百三十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CmEXBFKXmsb6MmUKf3utME
            source_type: api_record
            title: 中国历代人物传记资料库：王宦（CBDB 325295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325295&o=json
            external_identifier: CBDB:325295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_v2Fkat16mGPQiTSwTrQAp8
        status: active
        display_name: 王宦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jUr74TSh633lXIFmbp3WSE
        subject_person_id: p_1HXDM8KKMTLtxbW9bTRp2c
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_N1zXfVAzsHV9UYAEDLb5C7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IHi2Qat-FCHcZHmrzjD0KV
          claim_id: c_jUr74TSh633lXIFmbp3WSE
          source_id: s_DgiF7AhuQdKAwC6RSnWK49
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百三十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DgiF7AhuQdKAwC6RSnWK49
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞珎（CBDB 325294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325294&o=json
            external_identifier: CBDB:325294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_1HXDM8KKMTLtxbW9bTRp2c
        status: active
        display_name: 王瑞珎
        merged_into_person_id: null
    - claim:
        id: c_Z9qNLmnoAwiH0Cqv9-F3AP
        subject_person_id: p_dRS9X7dMoZBqTacJWGcvH3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_N1zXfVAzsHV9UYAEDLb5C7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4BSMKwrQzBmjSjKVTBzL48
          claim_id: c_Z9qNLmnoAwiH0Cqv9-F3AP
          source_id: s_3TQYmif72igNoweDdmsYNT
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百三十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3TQYmif72igNoweDdmsYNT
            source_type: api_record
            title: 中国历代人物传记资料库：王崇欽（CBDB 325293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325293&o=json
            external_identifier: CBDB:325293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_dRS9X7dMoZBqTacJWGcvH3
        status: active
        display_name: 王崇欽
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王徽猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王徽猷（生于1526年），史料所见人物。本项目依据《中国历代人物传记资料库：王徽猷（CBDB 204879）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1526年 | accepted |
| name.primary | 王徽猷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v2Fkat16mGPQiTSwTrQAp8 | 王宦 | accepted |
| ancestors | p_1HXDM8KKMTLtxbW9bTRp2c | 王瑞珎 | accepted |
| ancestors | p_dRS9X7dMoZBqTacJWGcvH3 | 王崇欽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇欽（CBDB 325293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325293&o=json)
- [中国历代人物传记资料库：王宦（CBDB 325295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325295&o=json)
- [中国历代人物传记资料库：王徽猷（CBDB 204879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204879&o=json)
- [中国历代人物传记资料库：王瑞珎（CBDB 325294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325294&o=json)
