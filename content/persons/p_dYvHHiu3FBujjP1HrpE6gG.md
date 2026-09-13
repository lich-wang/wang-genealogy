---
schema: wang-person/v1
id: p_dYvHHiu3FBujjP1HrpE6gG
status: active
merged_into: null
display_name: 王冲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CHJez4yBZd81HmsJpEgFTR
        subject_person_id: p_dYvHHiu3FBujjP1HrpE6gG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冲
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a5GRVoGFn131cYFF865jc4
          claim_id: c_CHJez4yBZd81HmsJpEgFTR
          source_id: s_UWthQq7zN6dPdf6fSe5GjD
          stance: supports
          locator: CBDB:17840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17840）
          source: &a1
            id: s_UWthQq7zN6dPdf6fSe5GjD
            source_type: api_record
            title: 中国历代人物传记资料库：王冲（CBDB 17840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17840&o=json
            external_identifier: CBDB:17840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.688Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4rZYVwGPGNTm5Ar5bbpvMQ
        subject_person_id: p_dYvHHiu3FBujjP1HrpE6gG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冲，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 17840）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K6xy6BkhPnEKBdc9Al3tJe
          claim_id: c_4rZYVwGPGNTm5Ar5bbpvMQ
          source_id: s_UWthQq7zN6dPdf6fSe5GjD
          stance: supports
          locator: CBDB:17840
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_82IodU4KWAqpxdHLp5Q2Px
        subject_person_id: p_dzQsozLMz4kdNcHPqJVsZP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dYvHHiu3FBujjP1HrpE6gG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fgczewv78bUrDOYpCSWrKu
          claim_id: c_82IodU4KWAqpxdHLp5Q2Px
          source_id: s_8i3-E7MR7jbmL6AbT6bnXS
          stance: supports
          locator: 宋史·卷二百八十二·王旦：三子：雍，冲，素。
          quotation: null
          interpretation_note: 依据《宋史·王旦传》；CBDB 17840 亦记父王旦。
          source:
            id: s_8i3-E7MR7jbmL6AbT6bnXS
            source_type: website
            title: 维基文库：宋史·卷二百八十二·王旦
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/宋史/卷282
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T11:39:35.127Z
            metadata_json: null
      object_person:
        id: p_dzQsozLMz4kdNcHPqJVsZP
        status: active
        display_name: 王旦
        merged_into_person_id: null
  children:
    - claim:
        id: c_E8QYHsjUTUWT1vQmICAh10
        subject_person_id: p_dYvHHiu3FBujjP1HrpE6gG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AZk4wkgQ7UuXpAj8THZhSe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-foGgJlz_zMOrL6mUJSUR7
          claim_id: c_E8QYHsjUTUWT1vQmICAh10
          source_id: s_UPXA3cLM7jkbMSu2afxwPY
          stance: supports
          locator: CBDB 双向互证（父 王冲 ⇄ 子 王靖）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_UPXA3cLM7jkbMSu2afxwPY
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 1788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1788&o=json
            external_identifier: CBDB:1788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.255Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AZk4wkgQ7UuXpAj8THZhSe
        status: active
        display_name: 王靖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王冲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冲 | accepted |
| bio.summary | 王冲，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 17840） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dzQsozLMz4kdNcHPqJVsZP | 王旦 | accepted |
| children | p_AZk4wkgQ7UuXpAj8THZhSe | 王靖 | accepted |

## 外部来源

- [维基文库：宋史·卷二百八十二·王旦](https://zh.wikisource.org/wiki/宋史/卷282)
- [中国历代人物传记资料库：王冲（CBDB 17840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17840&o=json)
- [中国历代人物传记资料库：王靖（CBDB 1788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1788&o=json)
