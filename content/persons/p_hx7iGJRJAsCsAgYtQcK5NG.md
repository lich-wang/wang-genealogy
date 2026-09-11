---
schema: wang-person/v1
id: p_hx7iGJRJAsCsAgYtQcK5NG
status: active
merged_into: null
display_name: 王昶
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9gN5KkBauq7a4M8L4cq52K
        subject_person_id: p_hx7iGJRJAsCsAgYtQcK5NG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dBKwLB8w4cbGgxunkZJ9BH
          claim_id: c_9gN5KkBauq7a4M8L4cq52K
          source_id: s_whVVwFfuq3kv612rh95dCN
          stance: supports
          locator: CBDB:199167
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199167）
          source: &a1
            id: s_whVVwFfuq3kv612rh95dCN
            source_type: api_record
            title: 中国历代人物传记资料库：王昶（CBDB 199167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199167&o=json
            external_identifier: CBDB:199167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uCcN7iakfyJMgQF8seEJ3P
        subject_person_id: p_hx7iGJRJAsCsAgYtQcK5NG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1435年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WPDvQEShfPk3CbY56iBguL
          claim_id: c_uCcN7iakfyJMgQF8seEJ3P
          source_id: s_whVVwFfuq3kv612rh95dCN
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
        id: c_oL7S4M5ynvyC8eXTZ6hmf8
        subject_person_id: p_hx7iGJRJAsCsAgYtQcK5NG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昶（生于1435年），明人物。成化二年進士，籍贯靈璧，入仕進士。（中国历代人物传记资料库 CBDB 199167）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZS2FCfx2vrwqdVuC0IHrox
          claim_id: c_oL7S4M5ynvyC8eXTZ6hmf8
          source_id: s_whVVwFfuq3kv612rh95dCN
          stance: supports
          locator: CBDB:199167
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_v4VcbS_-9EqJmE33knHZ0M
        subject_person_id: p_pXhKxQ18tXJwqo1Ez5cWyA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hx7iGJRJAsCsAgYtQcK5NG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KUIFCg277CoZK86eXMUDAu
          claim_id: c_v4VcbS_-9EqJmE33knHZ0M
          source_id: s_whVVwFfuq3kv612rh95dCN
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百一十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pXhKxQ18tXJwqo1Ez5cWyA
        status: active
        display_name: 王麟
        merged_into_person_id: null
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
          source:
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
      object_person:
        id: p_RMBAgbHGtJKy5dC5huM3qf
        status: active
        display_name: 魏氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_pQKD92oNaT6pKysLjKI8vg
        subject_person_id: p_T6bnNGBJQU3jsREwqmUX57
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hx7iGJRJAsCsAgYtQcK5NG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R_JRNp_5M1nIWZu_Qrip9H
          claim_id: c_pQKD92oNaT6pKysLjKI8vg
          source_id: s_whVVwFfuq3kv612rh95dCN
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百一十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T6bnNGBJQU3jsREwqmUX57
        status: active
        display_name: 王恭
        merged_into_person_id: null
    - claim:
        id: c_6-0-UGTa0TxA0ZUYsoIB6t
        subject_person_id: p_xiKX93gQqium5L2n78Lr53
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hx7iGJRJAsCsAgYtQcK5NG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sFoXSebhT1SXkiSB1tfk5H
          claim_id: c_6-0-UGTa0TxA0ZUYsoIB6t
          source_id: s_whVVwFfuq3kv612rh95dCN
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百一十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xiKX93gQqium5L2n78Lr53
        status: active
        display_name: 王友
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王昶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昶 | accepted |
| birth.date | 1435年 | accepted |
| bio.summary | 王昶（生于1435年），明人物。成化二年進士，籍贯靈璧，入仕進士。（中国历代人物传记资料库 CBDB 199167） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pXhKxQ18tXJwqo1Ez5cWyA | 王麟 | accepted |
| spouses | p_RMBAgbHGtJKy5dC5huM3qf | 魏氏 | accepted |
| ancestors | p_T6bnNGBJQU3jsREwqmUX57 | 王恭 | accepted |
| ancestors | p_xiKX93gQqium5L2n78Lr53 | 王友 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昶（CBDB 199167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199167&o=json)
- [中国历代人物传记资料库：魏氏(王昶妻)（CBDB 240175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240175&o=json)
