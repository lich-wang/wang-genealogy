---
schema: wang-person/v1
id: p_TLMTH7jzGuUF6dmUKbkFKS
status: active
merged_into: null
display_name: 王極
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tP3Ad7K5nc8caM374XJEzQ
        subject_person_id: p_TLMTH7jzGuUF6dmUKbkFKS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王極
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mv5cSk7dVcfFPTAZ1C8P32
          claim_id: c_tP3Ad7K5nc8caM374XJEzQ
          source_id: s_daDBe3KzBbGAm5EK5W3cVY
          stance: supports
          locator: CBDB:550749
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550749）
          source: &a1
            id: s_daDBe3KzBbGAm5EK5W3cVY
            source_type: api_record
            title: 中国历代人物传记资料库：王極（CBDB 550749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550749&o=json
            external_identifier: CBDB:550749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VGEzJJo1RK6KWvNEXgSvwT
        subject_person_id: p_TLMTH7jzGuUF6dmUKbkFKS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王極，史料所见人物。本项目依据《中国历代人物传记资料库：王極（CBDB 550749）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__25RzveiBCC-ND3e-DpaIj
          claim_id: c_VGEzJJo1RK6KWvNEXgSvwT
          source_id: s_daDBe3KzBbGAm5EK5W3cVY
          stance: supports
          locator: CBDB:550749
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王極

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王極 | accepted |
| bio.summary | 王極，史料所见人物。本项目依据《中国历代人物传记资料库：王極（CBDB 550749）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王極（CBDB 550749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550749&o=json)
