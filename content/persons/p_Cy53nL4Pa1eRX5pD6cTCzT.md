---
schema: wang-person/v1
id: p_Cy53nL4Pa1eRX5pD6cTCzT
status: active
merged_into: null
display_name: 丁睿
revision: 1
cbdb_id: 570151
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R2Wri4cRo-1jZu5qsVY4cc
        subject_person_id: p_Cy53nL4Pa1eRX5pD6cTCzT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 丁睿
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E2YfO4VoxCJCBCE-9ZAPNT
          claim_id: c_R2Wri4cRo-1jZu5qsVY4cc
          source_id: s_cjXW4IOmPFuTMIJTmUV0eD
          stance: supports
          locator: CBDB:570151
          quotation: null
          interpretation_note: CBDB 明确记录的王玉映配偶
          source: &a1
            id: s_cjXW4IOmPFuTMIJTmUV0eD
            source_type: api_record
            title: 中国历代人物传记资料库：丁睿（CBDB 570151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570151&o=json
            external_identifier: CBDB:570151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_SrdC0v78E04tAQmEk8IMnM
        subject_person_id: p_DqeZRrh1AHPNm4EUNSCfwn
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Cy53nL4Pa1eRX5pD6cTCzT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nIt_Uyb-bc7tAlQ5pk3vTC
          claim_id: c_SrdC0v78E04tAQmEk8IMnM
          source_id: s_cjXW4IOmPFuTMIJTmUV0eD
          stance: supports
          locator: 紹興府志:八十卷，lgid=316796：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DqeZRrh1AHPNm4EUNSCfwn
        status: active
        display_name: 王玉映
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 丁睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 丁睿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_DqeZRrh1AHPNm4EUNSCfwn | 王玉映 | accepted |

## 外部来源

- [中国历代人物传记资料库：丁睿（CBDB 570151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570151&o=json)
