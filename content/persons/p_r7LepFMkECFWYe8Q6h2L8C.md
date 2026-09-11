---
schema: wang-person/v1
id: p_r7LepFMkECFWYe8Q6h2L8C
status: active
merged_into: null
display_name: 王惟德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_At4gv4Gm8cqqEbg97DE3E3
        subject_person_id: p_r7LepFMkECFWYe8Q6h2L8C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r9NuoeZ3yRB34A91usWaWR
          claim_id: c_At4gv4Gm8cqqEbg97DE3E3
          source_id: s_FATeHYM6fQRAALXPwB3hQV
          stance: supports
          locator: CBDB:288733
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288733）
          source: &a1
            id: s_FATeHYM6fQRAALXPwB3hQV
            source_type: api_record
            title: 中国历代人物传记资料库：王惟德（CBDB 288733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288733&o=json
            external_identifier: CBDB:288733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_siNTNFp5yXDB92kWAPKWG1
        subject_person_id: p_r7LepFMkECFWYe8Q6h2L8C
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
        - id: cs_dNpGKZ1BCiov14pdwPjMJN
          claim_id: c_siNTNFp5yXDB92kWAPKWG1
          source_id: s_FATeHYM6fQRAALXPwB3hQV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_DVquuj-ROEUb8wUzsMKTAa
        subject_person_id: p_r7LepFMkECFWYe8Q6h2L8C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G--64IOO-f0IsLMoehrgJx
          claim_id: c_DVquuj-ROEUb8wUzsMKTAa
          source_id: s_FATeHYM6fQRAALXPwB3hQV
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hs5dTewocAZFYmsQxmyBFY
        status: active
        display_name: 王紳
        merged_into_person_id: null
  other: []
---

# 王惟德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟德 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Hs5dTewocAZFYmsQxmyBFY | 王紳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟德（CBDB 288733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288733&o=json)
