---
schema: wang-person/v1
id: p_NzB8gp6CgQTGMkPmEGAF9j
status: active
merged_into: null
display_name: 馮氏
revision: 1
cbdb_id: 283884
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2WqepVS9RJjWYTu4S2CVGA
        subject_person_id: p_NzB8gp6CgQTGMkPmEGAF9j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 馮氏，明人物。正德十六年進士。（中国历代人物传记资料库 CBDB 283884）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SZytFyfWyI-NLkoV8TtUGO
          claim_id: c_2WqepVS9RJjWYTu4S2CVGA
          source_id: s_C2Pq0LW_W5S0pAIebYY9xM
          stance: supports
          locator: CBDB:283884
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_C2Pq0LW_W5S0pAIebYY9xM
            source_type: api_record
            title: 中国历代人物传记资料库：馮氏(王道妻)（CBDB 283884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283884&o=json
            external_identifier: CBDB:283884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HM_z6r9vifpdK3CBoKcVml
        subject_person_id: p_NzB8gp6CgQTGMkPmEGAF9j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 馮氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__G-Qe7MFGQCfuQE4kLCq1o
          claim_id: c_HM_z6r9vifpdK3CBoKcVml
          source_id: s_C2Pq0LW_W5S0pAIebYY9xM
          stance: supports
          locator: CBDB:283884
          quotation: null
          interpretation_note: CBDB 明确记录的王道配偶
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
        id: c_27wnXYvECV-vQCDgJLDQc3
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NzB8gp6CgQTGMkPmEGAF9j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L4ebYvJv1CMD6xVnZI0N8F
          claim_id: c_27wnXYvECV-vQCDgJLDQc3
          source_id: s_C2Pq0LW_W5S0pAIebYY9xM
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AfLhoGsLbskzeER6Tw4Mw8
        status: active
        display_name: 王道
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 馮氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 馮氏，明人物。正德十六年進士。（中国历代人物传记资料库 CBDB 283884） | accepted |
| name.primary | 馮氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_AfLhoGsLbskzeER6Tw4Mw8 | 王道 | accepted |

## 外部来源

- [中国历代人物传记资料库：馮氏(王道妻)（CBDB 283884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283884&o=json)
