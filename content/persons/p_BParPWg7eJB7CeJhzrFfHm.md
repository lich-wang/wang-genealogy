---
schema: wang-person/v1
id: p_BParPWg7eJB7CeJhzrFfHm
status: active
merged_into: null
display_name: 董氏
revision: 1
cbdb_id: 693462
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GvUayjlaU7NcfZBAH1YYXF
        subject_person_id: p_BParPWg7eJB7CeJhzrFfHm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 董氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qkQe_SMOOsCAGD_gzQ17Dj
          claim_id: c_GvUayjlaU7NcfZBAH1YYXF
          source_id: s_Fz17L_S3kw-P4MuLN9rNLQ
          stance: supports
          locator: CBDB:693462
          quotation: null
          interpretation_note: CBDB 明确记录的王鍾配偶
          source: &a1
            id: s_Fz17L_S3kw-P4MuLN9rNLQ
            source_type: api_record
            title: 中国历代人物传记资料库：董氏(王鍾妻)（CBDB 693462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693462&o=json
            external_identifier: CBDB:693462
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
        id: c_R2lUU5hnPlPjQFWDveUrcz
        subject_person_id: p_sZCDGaFNXSgnjrDvazyDWg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BParPWg7eJB7CeJhzrFfHm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_StuVPiJVUL3THTVLU_s0A4
          claim_id: c_R2lUU5hnPlPjQFWDveUrcz
          source_id: s_Fz17L_S3kw-P4MuLN9rNLQ
          stance: supports
          locator: 蘇州府志，lgid=169723：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sZCDGaFNXSgnjrDvazyDWg
        status: active
        display_name: 王鍾
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 董氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 董氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_sZCDGaFNXSgnjrDvazyDWg | 王鍾 | accepted |

## 外部来源

- [中国历代人物传记资料库：董氏(王鍾妻)（CBDB 693462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693462&o=json)
