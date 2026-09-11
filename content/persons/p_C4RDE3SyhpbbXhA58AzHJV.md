---
schema: wang-person/v1
id: p_C4RDE3SyhpbbXhA58AzHJV
status: active
merged_into: null
display_name: 王問禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vxsZ7fpA6KxgGqHrBozZFe
        subject_person_id: p_C4RDE3SyhpbbXhA58AzHJV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B9h7w3ofZgjnstbJMEANNe
          claim_id: c_vxsZ7fpA6KxgGqHrBozZFe
          source_id: s_92HKBXSEg9wu9Y1JU54D1A
          stance: supports
          locator: CBDB:698026
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698026）
          source: &a1
            id: s_92HKBXSEg9wu9Y1JU54D1A
            source_type: api_record
            title: 中国历代人物传记资料库：王問禮（CBDB 698026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698026&o=json
            external_identifier: CBDB:698026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gM6VRUn46sVEpXaXM5uwFE
        subject_person_id: p_C4RDE3SyhpbbXhA58AzHJV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問禮，明人物。籍贯休寧，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 698026）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H83YoVVbe4f7bORuVHfobt
          claim_id: c_gM6VRUn46sVEpXaXM5uwFE
          source_id: s_92HKBXSEg9wu9Y1JU54D1A
          stance: supports
          locator: CBDB:698026
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

# 王問禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王問禮 | accepted |
| bio.summary | 王問禮，明人物。籍贯休寧，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 698026） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王問禮（CBDB 698026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698026&o=json)
