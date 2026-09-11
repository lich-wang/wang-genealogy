---
schema: wang-person/v1
id: p_Rk6UZPGzGNsjxcm4q78tiz
status: active
merged_into: null
display_name: 杭氏
revision: 1
cbdb_id: 260099
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fOy_JpRe6YylMKHUD4tt6a
        subject_person_id: p_Rk6UZPGzGNsjxcm4q78tiz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 杭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vJ36LZHinHU_cBAgUmJ1w3
          claim_id: c_fOy_JpRe6YylMKHUD4tt6a
          source_id: s_QBh1En54nsFwLGrITRbmOA
          stance: supports
          locator: CBDB:260099
          quotation: null
          interpretation_note: CBDB 明确记录的王秩配偶
          source: &a1
            id: s_QBh1En54nsFwLGrITRbmOA
            source_type: api_record
            title: 中国历代人物传记资料库：杭氏(王秩妻)（CBDB 260099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260099&o=json
            external_identifier: CBDB:260099
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
        id: c_0HqfJz36KbEtU_-8eGHKFP
        subject_person_id: p_7THfMJodZEJjq2hbN5iKFW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Rk6UZPGzGNsjxcm4q78tiz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gzGB9SwBicph3Q-59SkyHj
          claim_id: c_0HqfJz36KbEtU_-8eGHKFP
          source_id: s_QBh1En54nsFwLGrITRbmOA
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7THfMJodZEJjq2hbN5iKFW
        status: active
        display_name: 王秩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 杭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 杭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7THfMJodZEJjq2hbN5iKFW | 王秩 | accepted |

## 外部来源

- [中国历代人物传记资料库：杭氏(王秩妻)（CBDB 260099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260099&o=json)
