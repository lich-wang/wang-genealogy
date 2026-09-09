---
schema: wang-person/v1
id: p_EE5Lk9Y3qkS4Uipo9uSpDC
status: active
merged_into: null
display_name: 王賡夔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XUBvWW1dHPLUpejqGDiWyo
        subject_person_id: p_EE5Lk9Y3qkS4Uipo9uSpDC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡夔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aWnfmkmbCz6F6asAns1K4G
          claim_id: c_XUBvWW1dHPLUpejqGDiWyo
          source_id: s_K17idHFeWAuWN3zdcPJ7aP
          stance: supports
          locator: CBDB:640334
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640334）
          source: &a1
            id: s_K17idHFeWAuWN3zdcPJ7aP
            source_type: api_record
            title: 中国历代人物传记资料库：王賡夔（CBDB 640334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640334&o=json
            external_identifier: CBDB:640334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AQ5azPjwMBhCJ27SVWbQYg
        subject_person_id: p_EE5Lk9Y3qkS4Uipo9uSpDC
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
        - id: cs_vmXg4JoQs56EBGuvvrbW8z
          claim_id: c_AQ5azPjwMBhCJ27SVWbQYg
          source_id: s_K17idHFeWAuWN3zdcPJ7aP
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

# 王賡夔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賡夔 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賡夔（CBDB 640334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640334&o=json)
