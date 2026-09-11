---
schema: wang-person/v1
id: p_RMBAgbHGtJKy5dC5huM3qf
status: active
merged_into: null
display_name: 魏氏
revision: 1
cbdb_id: 240175
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qcUPNGhCx59D33OlXT48PX
        subject_person_id: p_RMBAgbHGtJKy5dC5huM3qf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 魏氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gytnplTL81dTNg8B-XTdnp
          claim_id: c_qcUPNGhCx59D33OlXT48PX
          source_id: s_HSRonpX-tZc_4TtnJ4Jr2u
          stance: supports
          locator: CBDB:240175
          quotation: null
          interpretation_note: CBDB 明确记录的王昶配偶
          source: &a1
            id: s_HSRonpX-tZc_4TtnJ4Jr2u
            source_type: api_record
            title: 中国历代人物传记资料库：魏氏(王昶妻)（CBDB 240175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240175&o=json
            external_identifier: CBDB:240175
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
        id: c_d-ll2Rmgrid_YqomkTwrsO
        subject_person_id: p_hx7iGJRJAsCsAgYtQcK5NG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_RMBAgbHGtJKy5dC5huM3qf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pwd9UiD8kk-63hIsbd3lPs
          claim_id: c_d-ll2Rmgrid_YqomkTwrsO
          source_id: s_HSRonpX-tZc_4TtnJ4Jr2u
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百一十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hx7iGJRJAsCsAgYtQcK5NG
        status: active
        display_name: 王昶
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 魏氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 魏氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hx7iGJRJAsCsAgYtQcK5NG | 王昶 | accepted |

## 外部来源

- [中国历代人物传记资料库：魏氏(王昶妻)（CBDB 240175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240175&o=json)
