---
schema: wang-person/v1
id: p_LhrxeDqUjTtFGwJ1VMc2Vm
status: active
merged_into: null
display_name: 王淮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_njarz9aa2NHP4AtKYUzYEt
        subject_person_id: p_LhrxeDqUjTtFGwJ1VMc2Vm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zZBjphxiacYvg7zBnJJA1X
          claim_id: c_njarz9aa2NHP4AtKYUzYEt
          source_id: s_AuU1EFaeSq8MCbVpaU7XJ8
          stance: supports
          locator: CBDB:479137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（479137）
          source: &a1
            id: s_AuU1EFaeSq8MCbVpaU7XJ8
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 479137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479137&o=json
            external_identifier: CBDB:479137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GccJzyRdjA3HYR4a523i9Q
        subject_person_id: p_LhrxeDqUjTtFGwJ1VMc2Vm
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
        - id: cs_nMSnEwwiG62AaUp2ygGCWh
          claim_id: c_GccJzyRdjA3HYR4a523i9Q
          source_id: s_AuU1EFaeSq8MCbVpaU7XJ8
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

# 王淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淮 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淮（CBDB 479137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479137&o=json)
