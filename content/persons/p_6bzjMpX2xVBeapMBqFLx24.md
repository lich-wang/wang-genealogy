---
schema: wang-person/v1
id: p_6bzjMpX2xVBeapMBqFLx24
status: active
merged_into: null
display_name: 蘇軾
revision: 3
cbdb_id: 3767
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YFPYd85kmOFgJRk4b-v03j
        subject_person_id: p_6bzjMpX2xVBeapMBqFLx24
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蘇軾（1036—1101），宋人物。籍贯眉山，身份为書法家、史學家，入仕進士，曾任朝奉郎、左朝奉郎、提舉宮觀。（中国历代人物传记资料库 CBDB 3767）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y2IJ2YBYdxxf1Ft1f-wFUf
          claim_id: c_YFPYd85kmOFgJRk4b-v03j
          source_id: s_VI5DJ_-v1IlqelMh78jIWH
          stance: supports
          locator: CBDB:3767
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VI5DJ_-v1IlqelMh78jIWH
            source_type: api_record
            title: 中国历代人物传记资料库：蘇軾（CBDB 3767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3767&o=json
            external_identifier: CBDB:3767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_K0qpJXH8XEPU2Zzk9ojtTi
        subject_person_id: p_6bzjMpX2xVBeapMBqFLx24
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蘇軾
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OD-KIuCsVPjOwV25HUXOh9
          claim_id: c_K0qpJXH8XEPU2Zzk9ojtTi
          source_id: s_VI5DJ_-v1IlqelMh78jIWH
          stance: supports
          locator: CBDB:3767
          quotation: null
          interpretation_note: CBDB 明确记录的王弗配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_KloH-PkpzclhhCtq61yY__
        subject_person_id: p_hdMYXK1QBw8veXiANoQ2DP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6bzjMpX2xVBeapMBqFLx24
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QYeh-BALY6mo7H1CLl_NE-
          claim_id: c_KloH-PkpzclhhCtq61yY__
          source_id: s_VI5DJ_-v1IlqelMh78jIWH
          stance: supports
          locator: 宋人傳記資料索引(電子版)，23552;23554：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hdMYXK1QBw8veXiANoQ2DP
        status: active
        display_name: 王弗
        merged_into_person_id: null
    - claim:
        id: c_yRZxZdDNkgFNo7Fmks6Jdx
        subject_person_id: p_vZP12oPB8pqAEh8ntCzAQu
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6bzjMpX2xVBeapMBqFLx24
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0c_l90jBos0RvJRs9YvaFF
          claim_id: c_yRZxZdDNkgFNo7Fmks6Jdx
          source_id: s_cgJEPk3e9BtA4iGGAM7HMk
          stance: supports
          locator: 宋人傳記資料索引(電子版)，23552;23555：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cgJEPk3e9BtA4iGGAM7HMk
            source_type: api_record
            title: 中国历代人物传记资料库：王閏之（CBDB 5109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5109&o=json
            external_identifier: CBDB:5109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.465Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vZP12oPB8pqAEh8ntCzAQu
        status: active
        display_name: 王閏之
        merged_into_person_id: null
    - claim:
        id: c_tPyuu-sRjHeOTqjGPHPY6i
        subject_person_id: p_9weaDKuts44uqhsJarY8PD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6bzjMpX2xVBeapMBqFLx24
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_irBlpBukht1DNBBrwWccrb
          claim_id: c_tPyuu-sRjHeOTqjGPHPY6i
          source_id: s_tEKstwgNrfYNu4FyABAZjL
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5438：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tEKstwgNrfYNu4FyABAZjL
            source_type: api_record
            title: 中国历代人物传记资料库：王朝雲（CBDB 123459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123459&o=json
            external_identifier: CBDB:123459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9weaDKuts44uqhsJarY8PD
        status: active
        display_name: 王朝雲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蘇軾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蘇軾（1036—1101），宋人物。籍贯眉山，身份为書法家、史學家，入仕進士，曾任朝奉郎、左朝奉郎、提舉宮觀。（中国历代人物传记资料库 CBDB 3767） | accepted |
| name.primary | 蘇軾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hdMYXK1QBw8veXiANoQ2DP | 王弗 | accepted |
| spouses | p_vZP12oPB8pqAEh8ntCzAQu | 王閏之 | accepted |
| spouses | p_9weaDKuts44uqhsJarY8PD | 王朝雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：蘇軾（CBDB 3767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3767&o=json)
- [中国历代人物传记资料库：王朝雲（CBDB 123459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123459&o=json)
- [中国历代人物传记资料库：王閏之（CBDB 5109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5109&o=json)
