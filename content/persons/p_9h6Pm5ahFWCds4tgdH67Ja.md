---
schema: wang-person/v1
id: p_9h6Pm5ahFWCds4tgdH67Ja
status: active
merged_into: null
display_name: 王材升
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MaD6nW9xcVso3xZsew8n4w
        subject_person_id: p_9h6Pm5ahFWCds4tgdH67Ja
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材升
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r2ASwP12jL9ArxXsiQ8apL
          claim_id: c_MaD6nW9xcVso3xZsew8n4w
          source_id: s_w5QbaMc78XFey37s4CwFET
          stance: supports
          locator: CBDB:574276
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574276）
          source: &a1
            id: s_w5QbaMc78XFey37s4CwFET
            source_type: api_record
            title: 中国历代人物传记资料库：王材升（CBDB 574276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574276&o=json
            external_identifier: CBDB:574276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1JLhwpsAaAZ6FjSxQkGkXw
        subject_person_id: p_9h6Pm5ahFWCds4tgdH67Ja
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材升，清人物。籍贯黃岡。（中国历代人物传记资料库 CBDB 574276）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mBUNgWdn2ljCehERz6M9VK
          claim_id: c_1JLhwpsAaAZ6FjSxQkGkXw
          source_id: s_w5QbaMc78XFey37s4CwFET
          stance: supports
          locator: CBDB:574276
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

# 王材升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王材升 | accepted |
| bio.summary | 王材升，清人物。籍贯黃岡。（中国历代人物传记资料库 CBDB 574276） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王材升（CBDB 574276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574276&o=json)
