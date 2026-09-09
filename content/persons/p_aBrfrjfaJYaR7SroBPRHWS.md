---
schema: wang-person/v1
id: p_aBrfrjfaJYaR7SroBPRHWS
status: active
merged_into: null
display_name: 王構
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iTN7GKZQromQuXCx26LEmp
        subject_person_id: p_aBrfrjfaJYaR7SroBPRHWS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王構
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nmA17Hjp69xHrHPQfs8GY9
          claim_id: c_iTN7GKZQromQuXCx26LEmp
          source_id: s_bNeG83CCwWNoG1QVVGmkiQ
          stance: supports
          locator: CBDB:28785
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28785）
          source: &a1
            id: s_bNeG83CCwWNoG1QVVGmkiQ
            source_type: api_record
            title: 中国历代人物传记资料库：王構（CBDB 28785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28785&o=json
            external_identifier: CBDB:28785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.980Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4yYp51V9ZShqVg8FTShWya
        subject_person_id: p_aBrfrjfaJYaR7SroBPRHWS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1245年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6HrHbGKVHvTFV48MEN6Qnx
          claim_id: c_4yYp51V9ZShqVg8FTShWya
          source_id: s_bNeG83CCwWNoG1QVVGmkiQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TpDK6QBf8K7TJmgNHHLHPy
        subject_person_id: p_aBrfrjfaJYaR7SroBPRHWS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1310年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VC4FAjTbfi97qyxrCKYqyX
          claim_id: c_TpDK6QBf8K7TJmgNHHLHPy
          source_id: s_bNeG83CCwWNoG1QVVGmkiQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YocqEWM3bfsfbJ2UFNrf7D
        subject_person_id: p_aBrfrjfaJYaR7SroBPRHWS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bCvg6wso2Hj9f7jmGCJ7Zc
          claim_id: c_YocqEWM3bfsfbJ2UFNrf7D
          source_id: s_bNeG83CCwWNoG1QVVGmkiQ
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
  descendants: []
  other: []
---

# 王構

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王構 | accepted |
| birth.date | 1245年 | accepted |
| death.date | 1310年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王構（CBDB 28785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28785&o=json)
