---
schema: wang-person/v1
id: p_s1ZXHeqo8Z46dXUx2GzL8b
status: active
merged_into: null
display_name: 苗氏
revision: 1
cbdb_id: 683893
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c__oDstoL0in-ltaFWwC9CtC
        subject_person_id: p_s1ZXHeqo8Z46dXUx2GzL8b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 苗氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-RUNvgtWQv3F01Z9NsL8U-
          claim_id: c__oDstoL0in-ltaFWwC9CtC
          source_id: s_isR4W9i9QKdaRgxFmT1KMg
          stance: supports
          locator: CBDB:683893
          quotation: null
          interpretation_note: CBDB 明确记录的王茂瓊配偶
          source: &a1
            id: s_isR4W9i9QKdaRgxFmT1KMg
            source_type: api_record
            title: 中国历代人物传记资料库：苗氏(王茂瓊妻)（CBDB 683893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683893&o=json
            external_identifier: CBDB:683893
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
        id: c_BhaVZU8TfRQnSwx8t52Ghm
        subject_person_id: p_xudQJZpJJZhahsozMDV86i
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_s1ZXHeqo8Z46dXUx2GzL8b
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W4nvIWPjLn47gPTZW-5uIQ
          claim_id: c_BhaVZU8TfRQnSwx8t52Ghm
          source_id: s_isR4W9i9QKdaRgxFmT1KMg
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xudQJZpJJZhahsozMDV86i
        status: active
        display_name: 王茂瓊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 苗氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 苗氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xudQJZpJJZhahsozMDV86i | 王茂瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：苗氏(王茂瓊妻)（CBDB 683893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683893&o=json)
