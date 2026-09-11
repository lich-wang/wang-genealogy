---
schema: wang-person/v1
id: p_PkVHbp7ooYr1QRfwUsQL7L
status: active
merged_into: null
display_name: 王頤
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eayw48LQJ8yYcfzZUs5Btr
        subject_person_id: p_PkVHbp7ooYr1QRfwUsQL7L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ExAnFn7n4GG8HM2e1T1smr
          claim_id: c_eayw48LQJ8yYcfzZUs5Btr
          source_id: s_icyRFMLoCoXHRub2hbfzLA
          stance: supports
          locator: CBDB:205673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205673）
          source: &a1
            id: s_icyRFMLoCoXHRub2hbfzLA
            source_type: api_record
            title: 中国历代人物传记资料库：王頤（CBDB 205673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205673&o=json
            external_identifier: CBDB:205673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GLiKpKJAhVLikSRtMCPyRt
        subject_person_id: p_PkVHbp7ooYr1QRfwUsQL7L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2cj1MQaugWKUq4hWEEbbmM
          claim_id: c_GLiKpKJAhVLikSRtMCPyRt
          source_id: s_icyRFMLoCoXHRub2hbfzLA
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
        id: c_m7SUe4etuTNQt7d1KwZTi8
        subject_person_id: p_PkVHbp7ooYr1QRfwUsQL7L
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
        - id: cs_mEbiptQ53JUEYt5xp6ApXv
          claim_id: c_m7SUe4etuTNQt7d1KwZTi8
          source_id: s_icyRFMLoCoXHRub2hbfzLA
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
        id: c_Wv7sIz6Y4I7KVo959sXB5f
        subject_person_id: p_ynQe45xhMHwcsbW4fYyuNe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PkVHbp7ooYr1QRfwUsQL7L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gB6u4swQ68jYahEzH6c00T
          claim_id: c_Wv7sIz6Y4I7KVo959sXB5f
          source_id: s_PdAn2b9AhtdzeuR8Sxvi6R
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百二十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PdAn2b9AhtdzeuR8Sxvi6R
            source_type: api_record
            title: 中国历代人物传记资料库：王命（CBDB 336760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336760&o=json
            external_identifier: CBDB:336760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ynQe45xhMHwcsbW4fYyuNe
        status: active
        display_name: 王命
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0CG_5oZuB5G5TKH3mkGFKE
        subject_person_id: p_mGj5EQVd76YTE2RuVE4Mpc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PkVHbp7ooYr1QRfwUsQL7L
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_es50YarLwWaKUu4BpqS1Bq
          claim_id: c_0CG_5oZuB5G5TKH3mkGFKE
          source_id: s_jDP8Nd73X3biwMwUBLassP
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百二十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jDP8Nd73X3biwMwUBLassP
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 336759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336759&o=json
            external_identifier: CBDB:336759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mGj5EQVd76YTE2RuVE4Mpc
        status: active
        display_name: 王忠
        merged_into_person_id: null
    - claim:
        id: c_53Tuk9RtQC1Y3xO1xc2evJ
        subject_person_id: p_VxTXU8GfMKPTehA6EYkeki
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PkVHbp7ooYr1QRfwUsQL7L
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rD_a7aogqdBRLTfRwmKgHn
          claim_id: c_53Tuk9RtQC1Y3xO1xc2evJ
          source_id: s_LuTfVN8g5QXHPM7PXLaq35
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百二十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LuTfVN8g5QXHPM7PXLaq35
            source_type: api_record
            title: 中国历代人物传记资料库：王閏（CBDB 336758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336758&o=json
            external_identifier: CBDB:336758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VxTXU8GfMKPTehA6EYkeki
        status: active
        display_name: 王閏
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王頤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頤 | accepted |
| birth.date | 1526年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ynQe45xhMHwcsbW4fYyuNe | 王命 | accepted |
| ancestors | p_mGj5EQVd76YTE2RuVE4Mpc | 王忠 | accepted |
| ancestors | p_VxTXU8GfMKPTehA6EYkeki | 王閏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王命（CBDB 336760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336760&o=json)
- [中国历代人物传记资料库：王閏（CBDB 336758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336758&o=json)
- [中国历代人物传记资料库：王頤（CBDB 205673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205673&o=json)
- [中国历代人物传记资料库：王忠（CBDB 336759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336759&o=json)
