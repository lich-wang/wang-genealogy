---
schema: wang-person/v1
id: p_oEjk9MMP49z4GcDFBCjNtL
status: active
merged_into: null
display_name: 王恕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_74eiacNUcBomBv2kf5bm6D
        subject_person_id: p_oEjk9MMP49z4GcDFBCjNtL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5WESRGZLDM7FxbeL9EKqxu
          claim_id: c_74eiacNUcBomBv2kf5bm6D
          source_id: s_eF47dAHdzoGoyGD1iroBjF
          stance: supports
          locator: CBDB:214605
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214605）
          source: &a1
            id: s_eF47dAHdzoGoyGD1iroBjF
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 214605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214605&o=json
            external_identifier: CBDB:214605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_az4CDz9qFPFPm3xvn59Qny
        subject_person_id: p_oEjk9MMP49z4GcDFBCjNtL
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
        - id: cs_k4wpKvJL5GFCZ7fggKA9Ca
          claim_id: c_az4CDz9qFPFPm3xvn59Qny
          source_id: s_eF47dAHdzoGoyGD1iroBjF
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
        id: c_QtnXU0Lj0TcD0hoGQEx1HN
        subject_person_id: p_oEjk9MMP49z4GcDFBCjNtL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RRZuE21H2Z9728UGo3kUPT
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lZMSUFVCEllRnOtj8rgYnP
          claim_id: c_QtnXU0Lj0TcD0hoGQEx1HN
          source_id: s_eF47dAHdzoGoyGD1iroBjF
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百四十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RRZuE21H2Z9728UGo3kUPT
        status: active
        display_name: 王邦俊
        merged_into_person_id: null
  other: []
---

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RRZuE21H2Z9728UGo3kUPT | 王邦俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恕（CBDB 214605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214605&o=json)
