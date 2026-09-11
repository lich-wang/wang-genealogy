---
schema: wang-person/v1
id: p_D7bGdQmpFXERhFMYshmm25
status: active
merged_into: null
display_name: 王仲文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NY8tXnY1bQAVQogjMXEe39
        subject_person_id: p_D7bGdQmpFXERhFMYshmm25
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CaEBAQ4WFdg6ZCqijrMYFQ
          claim_id: c_NY8tXnY1bQAVQogjMXEe39
          source_id: s_EzuxHaGfTCtDWukPZ5ENqP
          stance: supports
          locator: CBDB:241018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241018）
          source: &a1
            id: s_EzuxHaGfTCtDWukPZ5ENqP
            source_type: api_record
            title: 中国历代人物传记资料库：王仲文（CBDB 241018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241018&o=json
            external_identifier: CBDB:241018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yfR1qzMb5QCS95gUtAeimo
        subject_person_id: p_D7bGdQmpFXERhFMYshmm25
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲文，明人物。正統十三年進士，曾任知縣。（中国历代人物传记资料库 CBDB 241018）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iHXh8p66yBFBo13R4PgX-V
          claim_id: c_yfR1qzMb5QCS95gUtAeimo
          source_id: s_EzuxHaGfTCtDWukPZ5ENqP
          stance: supports
          locator: CBDB:241018
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_LAWFhC0Iv2ByXrapOT1zGb
        subject_person_id: p_D7bGdQmpFXERhFMYshmm25
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jPPkcZZKtmthnfYDVtzokp
          claim_id: c_LAWFhC0Iv2ByXrapOT1zGb
          source_id: s_EzuxHaGfTCtDWukPZ5ENqP
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第四十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bfSy8dPRhP5ZK4VbYiPWT2
        status: active
        display_name: 王正
        merged_into_person_id: null
  other: []
---

# 王仲文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲文 | accepted |
| bio.summary | 王仲文，明人物。正統十三年進士，曾任知縣。（中国历代人物传记资料库 CBDB 241018） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_bfSy8dPRhP5ZK4VbYiPWT2 | 王正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲文（CBDB 241018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241018&o=json)
