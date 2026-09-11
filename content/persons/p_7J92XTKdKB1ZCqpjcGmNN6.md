---
schema: wang-person/v1
id: p_7J92XTKdKB1ZCqpjcGmNN6
status: active
merged_into: null
display_name: 王道顯
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5s5vLPicPod3qrUpe7CSXU
        subject_person_id: p_7J92XTKdKB1ZCqpjcGmNN6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AW8KpkX53BPRirtqZQw8Bw
          claim_id: c_5s5vLPicPod3qrUpe7CSXU
          source_id: s_N6EJ8b9hqUHru7QrSzq26Y
          stance: supports
          locator: CBDB:206783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206783）
          source: &a1
            id: s_N6EJ8b9hqUHru7QrSzq26Y
            source_type: api_record
            title: 中国历代人物传记资料库：王道顯（CBDB 206783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206783&o=json
            external_identifier: CBDB:206783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LDLXt9Q9D4ckQiCLc2RU8L
        subject_person_id: p_7J92XTKdKB1ZCqpjcGmNN6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1554年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V8ww1Cq6H8s152kuF53odJ
          claim_id: c_LDLXt9Q9D4ckQiCLc2RU8L
          source_id: s_N6EJ8b9hqUHru7QrSzq26Y
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
        id: c_ZYYfs8p2Q2orwVGKR3KwCj
        subject_person_id: p_7J92XTKdKB1ZCqpjcGmNN6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道顯（生于1554年），明人物。明清進士進士，籍贯同安，入仕進士。（中国历代人物传记资料库 CBDB 206783）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uHJpVs-5LrpbV3NeDJtTS4
          claim_id: c_ZYYfs8p2Q2orwVGKR3KwCj
          source_id: s_N6EJ8b9hqUHru7QrSzq26Y
          stance: supports
          locator: CBDB:206783
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QUSz47y_VfgIxi0orJ5SEm
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7J92XTKdKB1ZCqpjcGmNN6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2DW_wl348YffCg68rb6vxP
          claim_id: c_QUSz47y_VfgIxi0orJ5SEm
          source_id: s_hLRwkutCkncJbEnwgC7yQu
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hLRwkutCkncJbEnwgC7yQu
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 223208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223208&o=json
            external_identifier: CBDB:223208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nrgvXCkYedEAAAukDFwR1j
        status: active
        display_name: 王三錫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_z8stwgW01us2HKUKWEiWmU
        subject_person_id: p_1xoJN7Ab35r2NFMPTVAnSF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7J92XTKdKB1ZCqpjcGmNN6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FiyPYII4kJJvoBaJkAQZ7r
          claim_id: c_z8stwgW01us2HKUKWEiWmU
          source_id: s_9K5JM4pkDjrnZF8txsGMFu
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第三十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9K5JM4pkDjrnZF8txsGMFu
            source_type: api_record
            title: 中国历代人物传记资料库：王岑（CBDB 223206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223206&o=json
            external_identifier: CBDB:223206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.404Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1xoJN7Ab35r2NFMPTVAnSF
        status: active
        display_name: 王岑
        merged_into_person_id: null
    - claim:
        id: c_er9q_jHlFqWazaUmxdUQiZ
        subject_person_id: p_k5YNa6LvfFnQALbqfEVpsK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7J92XTKdKB1ZCqpjcGmNN6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-37juW7PL8wjhdrLqNPq8W
          claim_id: c_er9q_jHlFqWazaUmxdUQiZ
          source_id: s_TzEVvLEvvwy1DX3XCDHLLP
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第三十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TzEVvLEvvwy1DX3XCDHLLP
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 223207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223207&o=json
            external_identifier: CBDB:223207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_k5YNa6LvfFnQALbqfEVpsK
        status: active
        display_name: 王濟
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王道顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道顯 | accepted |
| birth.date | 1554年 | accepted |
| bio.summary | 王道顯（生于1554年），明人物。明清進士進士，籍贯同安，入仕進士。（中国历代人物传记资料库 CBDB 206783） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nrgvXCkYedEAAAukDFwR1j | 王三錫 | accepted |
| ancestors | p_1xoJN7Ab35r2NFMPTVAnSF | 王岑 | accepted |
| ancestors | p_k5YNa6LvfFnQALbqfEVpsK | 王濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王岑（CBDB 223206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223206&o=json)
- [中国历代人物传记资料库：王道顯（CBDB 206783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206783&o=json)
- [中国历代人物传记资料库：王濟（CBDB 223207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223207&o=json)
- [中国历代人物传记资料库：王三錫（CBDB 223208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223208&o=json)
