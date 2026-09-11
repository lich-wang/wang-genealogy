---
schema: wang-person/v1
id: p_Wio2Qi9A81uGwRv1zKHEox
status: active
merged_into: null
display_name: 俞氏
revision: 1
cbdb_id: 386850
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b4a2Oz2fJqaX7nNgLSSPTY
        subject_person_id: p_Wio2Qi9A81uGwRv1zKHEox
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 俞氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SR50jyJWGwmm71fP7CnT7A
          claim_id: c_b4a2Oz2fJqaX7nNgLSSPTY
          source_id: s_8RYzNBANqRnDTrwO0W1eq2
          stance: supports
          locator: CBDB:386850
          quotation: null
          interpretation_note: CBDB 明确记录的王致平配偶
          source: &a1
            id: s_8RYzNBANqRnDTrwO0W1eq2
            source_type: api_record
            title: 中国历代人物传记资料库：俞氏(王致平妻)（CBDB 386850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386850&o=json
            external_identifier: CBDB:386850
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
        id: c_iSoM3tB6jfhBVotMjDZ8YE
        subject_person_id: p_aS3VZka9W3GWYch6YyDoFs
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Wio2Qi9A81uGwRv1zKHEox
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZTOmZedaIijxsGc9brB3dm
          claim_id: c_iSoM3tB6jfhBVotMjDZ8YE
          source_id: s_8RYzNBANqRnDTrwO0W1eq2
          stance: supports
          locator: CBDB 双向互证（妻子 俞氏(王致平妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aS3VZka9W3GWYch6YyDoFs
        status: active
        display_name: 王致平
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 俞氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 俞氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_aS3VZka9W3GWYch6YyDoFs | 王致平 | accepted |

## 外部来源

- [中国历代人物传记资料库：俞氏(王致平妻)（CBDB 386850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386850&o=json)
