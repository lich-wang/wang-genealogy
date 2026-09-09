---
schema: wang-person/v1
id: p_RJyaFhx2KvrCDwGFMNr3PC
status: active
merged_into: null
display_name: 王復
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AJs32pAjFkrc2JVG3JQ6AW
        subject_person_id: p_RJyaFhx2KvrCDwGFMNr3PC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y4FdBGRgxkh77sZ9xQKfMJ
          claim_id: c_AJs32pAjFkrc2JVG3JQ6AW
          source_id: s_w5DddrrFgwHjUaPnXpRwJx
          stance: supports
          locator: CBDB:38531
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38531）
          source: &a1
            id: s_w5DddrrFgwHjUaPnXpRwJx
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 38531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38531&o=json
            external_identifier: CBDB:38531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M7tAHo8xvdgK1iMYq44Riy
        subject_person_id: p_RJyaFhx2KvrCDwGFMNr3PC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WGaQt2MX62DW1ZF82ov3bP
          claim_id: c_M7tAHo8xvdgK1iMYq44Riy
          source_id: s_w5DddrrFgwHjUaPnXpRwJx
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

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 38531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38531&o=json)
