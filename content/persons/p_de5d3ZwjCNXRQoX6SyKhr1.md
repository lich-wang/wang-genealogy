---
schema: wang-person/v1
id: p_de5d3ZwjCNXRQoX6SyKhr1
status: active
merged_into: null
display_name: 王得凱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rEvF29iKMx75JRmCcpCB5F
        subject_person_id: p_de5d3ZwjCNXRQoX6SyKhr1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RMmTM8AGzjGki1CsQeiXTX
          claim_id: c_rEvF29iKMx75JRmCcpCB5F
          source_id: s_8j9BCWoqUQKKqzMmEBcNvz
          stance: supports
          locator: CBDB:637642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637642）
          source: &a1
            id: s_8j9BCWoqUQKKqzMmEBcNvz
            source_type: api_record
            title: 中国历代人物传记资料库：王得凱（CBDB 637642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637642&o=json
            external_identifier: CBDB:637642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wQJGA93NQFpuJF9imTqQcQ
        subject_person_id: p_de5d3ZwjCNXRQoX6SyKhr1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得凱，清人物。籍贯貴州省，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 637642）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_990iBjR1Lu5GCAwiaeR3Ud
          claim_id: c_wQJGA93NQFpuJF9imTqQcQ
          source_id: s_8j9BCWoqUQKKqzMmEBcNvz
          stance: supports
          locator: CBDB:637642
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

# 王得凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得凱 | accepted |
| bio.summary | 王得凱，清人物。籍贯貴州省，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 637642） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得凱（CBDB 637642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637642&o=json)
