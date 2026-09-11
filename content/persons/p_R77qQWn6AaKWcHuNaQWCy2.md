---
schema: wang-person/v1
id: p_R77qQWn6AaKWcHuNaQWCy2
status: active
merged_into: null
display_name: 王堂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1LQ2cNeKe2NvXTVBZjTBw1
        subject_person_id: p_R77qQWn6AaKWcHuNaQWCy2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q7Ngpy256KNRowHQBvSqQV
          claim_id: c_1LQ2cNeKe2NvXTVBZjTBw1
          source_id: s_qegrNY11n7cxSM5ZGsYzeb
          stance: supports
          locator: CBDB:204814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204814）
          source: &a1
            id: s_qegrNY11n7cxSM5ZGsYzeb
            source_type: api_record
            title: 中国历代人物传记资料库：王堂（CBDB 204814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204814&o=json
            external_identifier: CBDB:204814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_znCN2AzeYPhF6PSb3xGRpH
        subject_person_id: p_R77qQWn6AaKWcHuNaQWCy2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1532年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DkjT3a1mcDKEodTMBQb1WM
          claim_id: c_znCN2AzeYPhF6PSb3xGRpH
          source_id: s_qegrNY11n7cxSM5ZGsYzeb
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
        id: c_aHu61oXWDhwPqAbtbEEAuc
        subject_person_id: p_R77qQWn6AaKWcHuNaQWCy2
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
        - id: cs_KykmGaqyX1PhMeMzz7Qp7b
          claim_id: c_aHu61oXWDhwPqAbtbEEAuc
          source_id: s_qegrNY11n7cxSM5ZGsYzeb
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
  ancestors:
    - claim:
        id: c_Jl32I7halky5tKIXe6lE6C
        subject_person_id: p_Bra3wsJ6ysE9pnbB2keq5x
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_R77qQWn6AaKWcHuNaQWCy2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L6S0TiC4vewMpbwHkW7Kbk
          claim_id: c_Jl32I7halky5tKIXe6lE6C
          source_id: s_7zjAZA6esVuiH8g63UQBEF
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7zjAZA6esVuiH8g63UQBEF
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 324424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324424&o=json
            external_identifier: CBDB:324424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Bra3wsJ6ysE9pnbB2keq5x
        status: active
        display_name: 王定
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堂 | accepted |
| birth.date | 1532年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Bra3wsJ6ysE9pnbB2keq5x | 王定 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定（CBDB 324424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324424&o=json)
- [中国历代人物传记资料库：王堂（CBDB 204814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204814&o=json)
