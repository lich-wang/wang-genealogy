---
schema: wang-person/v1
id: p_PnGbaR3xqVcNi2dVtZs5vp
status: active
merged_into: null
display_name: 王貴
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WQgisPU61DNv1P9BArz3GL
        subject_person_id: p_PnGbaR3xqVcNi2dVtZs5vp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D3CjT45EcGWyFPEFYABukc
          claim_id: c_WQgisPU61DNv1P9BArz3GL
          source_id: s_19Z6bax2M8eeVEU4bCYyWi
          stance: supports
          locator: CBDB:37958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37958）
          source: &a1
            id: s_19Z6bax2M8eeVEU4bCYyWi
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 37958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37958&o=json
            external_identifier: CBDB:37958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iyeaYLtRSjtTzVbueVp89Y
        subject_person_id: p_PnGbaR3xqVcNi2dVtZs5vp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 914年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HfPpTEFQXB1tuXmGbHt6LD
          claim_id: c_iyeaYLtRSjtTzVbueVp89Y
          source_id: s_19Z6bax2M8eeVEU4bCYyWi
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
        id: c_2A8qQhqngmm4mPVAV6RnCA
        subject_person_id: p_PnGbaR3xqVcNi2dVtZs5vp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 986年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sPTFoMbtRgDAbsKAMoyotf
          claim_id: c_2A8qQhqngmm4mPVAV6RnCA
          source_id: s_19Z6bax2M8eeVEU4bCYyWi
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
        id: c_nQjHvevq8cbqBz5HyyrxTG
        subject_person_id: p_PnGbaR3xqVcNi2dVtZs5vp
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
        - id: cs_KGZqNeJyFmUcQtdoowGPaL
          claim_id: c_nQjHvevq8cbqBz5HyyrxTG
          source_id: s_19Z6bax2M8eeVEU4bCYyWi
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
        id: c_Ieo9onK4UrjKJx2rBhp6-D
        subject_person_id: p_PnGbaR3xqVcNi2dVtZs5vp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EPdcQuXUgQszegY1g4ehmC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I3_bluWQ1PxlR30cRshMbL
          claim_id: c_Ieo9onK4UrjKJx2rBhp6-D
          source_id: s_Sg5yuNoAxrRo523CBTcAoj
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Sg5yuNoAxrRo523CBTcAoj
            source_type: api_record
            title: 中国历代人物传记资料库：王文昱（CBDB 37967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37967&o=json
            external_identifier: CBDB:37967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EPdcQuXUgQszegY1g4ehmC
        status: active
        display_name: 王文昱
        merged_into_person_id: null
    - claim:
        id: c_3jAiSQYIvC22-bSuAY0Ewi
        subject_person_id: p_PnGbaR3xqVcNi2dVtZs5vp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ASmBptU9jrcURupyEbhPcU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9vWhrWPbcNMAn8tf0HE_tj
          claim_id: c_3jAiSQYIvC22-bSuAY0Ewi
          source_id: s_DRPMtn8HoLiVag81md5fBp
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DRPMtn8HoLiVag81md5fBp
            source_type: api_record
            title: 中国历代人物传记资料库：王文晟（CBDB 37963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37963&o=json
            external_identifier: CBDB:37963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ASmBptU9jrcURupyEbhPcU
        status: active
        display_name: 王文晟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴 | accepted |
| birth.date | 914年 | accepted |
| death.date | 986年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EPdcQuXUgQszegY1g4ehmC | 王文昱 | accepted |
| children | p_ASmBptU9jrcURupyEbhPcU | 王文晟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 37958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37958&o=json)
- [中国历代人物传记资料库：王文晟（CBDB 37963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37963&o=json)
- [中国历代人物传记资料库：王文昱（CBDB 37967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37967&o=json)
