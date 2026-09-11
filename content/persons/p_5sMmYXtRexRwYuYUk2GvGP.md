---
schema: wang-person/v1
id: p_5sMmYXtRexRwYuYUk2GvGP
status: active
merged_into: null
display_name: 王允文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_abnWPVkWBaLEVE3YR65dNw
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dEDKNwCXLrRLbXn5yAHu9v
          claim_id: c_abnWPVkWBaLEVE3YR65dNw
          source_id: s_EGuP7RatW83eAhWrCGqvxP
          stance: supports
          locator: CBDB:215078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215078）
          source: &a1
            id: s_EGuP7RatW83eAhWrCGqvxP
            source_type: api_record
            title: 中国历代人物传记资料库：王允文（CBDB 215078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215078&o=json
            external_identifier: CBDB:215078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.180Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ae1W3zGDMt7MaxiCmd3E7m
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允文，明人物。萬曆二年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 215078）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hY6a698Jo1VbbWlCsk4Y04
          claim_id: c_Ae1W3zGDMt7MaxiCmd3E7m
          source_id: s_EGuP7RatW83eAhWrCGqvxP
          stance: supports
          locator: CBDB:215078
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_j2NwN8nyXrjP3pOENtZ3Cj
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fzDgg2Xm8C_VpWdHi4646b
          claim_id: c_j2NwN8nyXrjP3pOENtZ3Cj
          source_id: s_EGuP7RatW83eAhWrCGqvxP
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Uu3PhDPTRD4oQGaMJP7i1y
        status: active
        display_name: 王繼明
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王允文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允文 | accepted |
| bio.summary | 王允文，明人物。萬曆二年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 215078） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Uu3PhDPTRD4oQGaMJP7i1y | 王繼明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王允文（CBDB 215078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215078&o=json)
