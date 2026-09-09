---
schema: wang-person/v1
id: p_2TZeTGTZuDYaC1LMbuWCmE
status: active
merged_into: null
display_name: 王錫瓉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sdavi7agzz1dn5koJTFj8A
        subject_person_id: p_2TZeTGTZuDYaC1LMbuWCmE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫瓉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fD4C84kkTYbQ2HbekU7FGE
          claim_id: c_sdavi7agzz1dn5koJTFj8A
          source_id: s_9MFXyy5Xgyj1xSdbbDE2tU
          stance: supports
          locator: CBDB:640626
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640626）
          source: &a1
            id: s_9MFXyy5Xgyj1xSdbbDE2tU
            source_type: api_record
            title: 中国历代人物传记资料库：王錫瓉（CBDB 640626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640626&o=json
            external_identifier: CBDB:640626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3MWn6RkCs8g2UGRrj6MygA
        subject_person_id: p_2TZeTGTZuDYaC1LMbuWCmE
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
        - id: cs_7KENqZkWL8nZMpknZrNhsU
          claim_id: c_3MWn6RkCs8g2UGRrj6MygA
          source_id: s_9MFXyy5Xgyj1xSdbbDE2tU
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

# 王錫瓉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫瓉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫瓉（CBDB 640626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640626&o=json)
