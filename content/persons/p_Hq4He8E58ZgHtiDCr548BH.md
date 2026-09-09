---
schema: wang-person/v1
id: p_Hq4He8E58ZgHtiDCr548BH
status: active
merged_into: null
display_name: 王紹緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M7JBRy6dcRY3NEtFErAi8B
        subject_person_id: p_Hq4He8E58ZgHtiDCr548BH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3btRt927eagPWSWZdMjhQR
          claim_id: c_M7JBRy6dcRY3NEtFErAi8B
          source_id: s_mfwcycHmfGYFUd9sUi3WD3
          stance: supports
          locator: CBDB:342427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342427）
          source: &a1
            id: s_mfwcycHmfGYFUd9sUi3WD3
            source_type: api_record
            title: 中国历代人物传记资料库：王紹緒（CBDB 342427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342427&o=json
            external_identifier: CBDB:342427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NLCfq4gd2ZDekJdbzo9C2E
        subject_person_id: p_Hq4He8E58ZgHtiDCr548BH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uwkMysR2JXaFwcQ26uXbXe
          claim_id: c_NLCfq4gd2ZDekJdbzo9C2E
          source_id: s_mfwcycHmfGYFUd9sUi3WD3
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

# 王紹緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹緒 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹緒（CBDB 342427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342427&o=json)
