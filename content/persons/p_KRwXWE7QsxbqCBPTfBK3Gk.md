---
schema: wang-person/v1
id: p_KRwXWE7QsxbqCBPTfBK3Gk
status: active
merged_into: null
display_name: 王緝祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EH4AhMHBJCiaLtY5RZP7Ak
        subject_person_id: p_KRwXWE7QsxbqCBPTfBK3Gk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緝祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HFUJFfE1xf176CDaCbN5Qg
          claim_id: c_EH4AhMHBJCiaLtY5RZP7Ak
          source_id: s_LQpM6EcheTEuzEcr7HndDX
          stance: supports
          locator: CBDB:342384
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342384）
          source: &a1
            id: s_LQpM6EcheTEuzEcr7HndDX
            source_type: api_record
            title: 中国历代人物传记资料库：王緝祖（CBDB 342384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342384&o=json
            external_identifier: CBDB:342384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BdPV9CBQywpznFrfD1xqQB
        subject_person_id: p_KRwXWE7QsxbqCBPTfBK3Gk
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
        - id: cs_DXFnDHSe4F7Ss27f7nHdu9
          claim_id: c_BdPV9CBQywpznFrfD1xqQB
          source_id: s_LQpM6EcheTEuzEcr7HndDX
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

# 王緝祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緝祖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緝祖（CBDB 342384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342384&o=json)
