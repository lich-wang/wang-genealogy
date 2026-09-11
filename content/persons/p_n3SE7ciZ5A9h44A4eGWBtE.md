---
schema: wang-person/v1
id: p_n3SE7ciZ5A9h44A4eGWBtE
status: active
merged_into: null
display_name: 王弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4TJcX1AwdBckZTdwzpRENC
        subject_person_id: p_n3SE7ciZ5A9h44A4eGWBtE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_psVEEWks1VeAc6tKzRe5tC
          claim_id: c_4TJcX1AwdBckZTdwzpRENC
          source_id: s_yTGgQkKbwWAzU2zffGH6ig
          stance: supports
          locator: CBDB:342038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342038）
          source: &a1
            id: s_yTGgQkKbwWAzU2zffGH6ig
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 342038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342038&o=json
            external_identifier: CBDB:342038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tqvX98vkgkoLoJDs1MiWjA
        subject_person_id: p_n3SE7ciZ5A9h44A4eGWBtE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼，明人物。明清進士進士，籍贯侯官，入仕進士。（中国历代人物传记资料库 CBDB 342038）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FsFeQs7Gi2I61juvcPfNu3
          claim_id: c_tqvX98vkgkoLoJDs1MiWjA
          source_id: s_yTGgQkKbwWAzU2zffGH6ig
          stance: supports
          locator: CBDB:342038
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | 王弼，明人物。明清進士進士，籍贯侯官，入仕進士。（中国历代人物传记资料库 CBDB 342038） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 342038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342038&o=json)
