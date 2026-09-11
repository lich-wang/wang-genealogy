---
schema: wang-person/v1
id: p_H3E5VxBaQfqgvzveq3gJSK
status: active
merged_into: null
display_name: 王代恕
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uwXeD1TN9JyyGfB6G2GToY
        subject_person_id: p_H3E5VxBaQfqgvzveq3gJSK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王代恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DNTsYGHvbBVrzsrK4GtyxN
          claim_id: c_uwXeD1TN9JyyGfB6G2GToY
          source_id: s_2Uy9LcTEbqt4ThFXCehGaG
          stance: supports
          locator: CBDB:12850
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12850）
          source: &a1
            id: s_2Uy9LcTEbqt4ThFXCehGaG
            source_type: api_record
            title: 中国历代人物传记资料库：王代恕（CBDB 12850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12850&o=json
            external_identifier: CBDB:12850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fAychUZkvFvHznc82TF2js
        subject_person_id: p_H3E5VxBaQfqgvzveq3gJSK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 973年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eX7qvo1e2NdM7VWZHfyAEz
          claim_id: c_fAychUZkvFvHznc82TF2js
          source_id: s_2Uy9LcTEbqt4ThFXCehGaG
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
        id: c_ymUyhuvKBKJraDf1w7MfDD
        subject_person_id: p_H3E5VxBaQfqgvzveq3gJSK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1041年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B1peJPpbw4gAAcnatWD1pv
          claim_id: c_ymUyhuvKBKJraDf1w7MfDD
          source_id: s_2Uy9LcTEbqt4ThFXCehGaG
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
        id: c_s662LnSmwohP2vaNLeBVW4
        subject_person_id: p_H3E5VxBaQfqgvzveq3gJSK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ey4hpue1nTQ3mc4anHTBy9
          claim_id: c_s662LnSmwohP2vaNLeBVW4
          source_id: s_2Uy9LcTEbqt4ThFXCehGaG
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
        id: c_qh-g-48aF3oaXZd7DilhzV
        subject_person_id: p_NuT9NrbF95GBrUJnPKKH1H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H3E5VxBaQfqgvzveq3gJSK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zn9SZNI3k2BsO0_E0IOksT
          claim_id: c_qh-g-48aF3oaXZd7DilhzV
          source_id: s_2Uy9LcTEbqt4ThFXCehGaG
          stance: supports
          locator: CBDB 双向互证（父 王銳 ⇄ 子 王代恕）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_NuT9NrbF95GBrUJnPKKH1H
        status: active
        display_name: 王銳
        merged_into_person_id: null
  children:
    - claim:
        id: c_U96dfAZ_m17I3PyyZQ9pf3
        subject_person_id: p_H3E5VxBaQfqgvzveq3gJSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WU89T3dCoRMDk6eTHgawKb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WBdPMA_OcM8taWEz-fW6BA
          claim_id: c_U96dfAZ_m17I3PyyZQ9pf3
          source_id: s_K58g1dFPD1BQpDPDwmjsyE
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1779;1780：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K58g1dFPD1BQpDPDwmjsyE
            source_type: api_record
            title: 中国历代人物传记资料库：王拱辰（CBDB 1847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json
            external_identifier: CBDB:1847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WU89T3dCoRMDk6eTHgawKb
        status: active
        display_name: 王拱辰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Mhit7TvC0h83nJKBCLImI8
        subject_person_id: p_JFQHkPEwEAq8jJVUaH1sob
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_H3E5VxBaQfqgvzveq3gJSK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3FPjBuYjSPR8RAPoR1aIz2
          claim_id: c_Mhit7TvC0h83nJKBCLImI8
          source_id: s_8BQ9yVvbv6wTsDsk1Wki7f
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1514;1515：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8BQ9yVvbv6wTsDsk1Wki7f
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（5209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5209&o=json
            external_identifier: CBDB:5209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:00.418Z
            metadata_json: null
      object_person:
        id: p_JFQHkPEwEAq8jJVUaH1sob
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王代恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王代恕 | accepted |
| birth.date | 973年 | accepted |
| death.date | 1041年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NuT9NrbF95GBrUJnPKKH1H | 王銳 | accepted |
| children | p_WU89T3dCoRMDk6eTHgawKb | 王拱辰 | accepted |
| spouses | p_JFQHkPEwEAq8jJVUaH1sob | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王代恕（CBDB 12850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12850&o=json)
- [中国历代人物传记资料库：王拱辰（CBDB 1847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json)
- [CBDB 中国历代人物传记资料库：李氏（5209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5209&o=json)
