---
schema: wang-person/v1
id: p_HJ5X5Mhv9Fcw1EF84KVmwn
status: active
merged_into: null
display_name: 王紹登
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4rS4AuVA1UE1N8EvSoLmGx
        subject_person_id: p_HJ5X5Mhv9Fcw1EF84KVmwn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹登
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DnAD6Lt3Ehr1m6CPZoNYi2
          claim_id: c_4rS4AuVA1UE1N8EvSoLmGx
          source_id: s_axbeLN8uTi8aBS6xxUNBLD
          stance: supports
          locator: CBDB:549653
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（549653）
          source: &a1
            id: s_axbeLN8uTi8aBS6xxUNBLD
            source_type: api_record
            title: 中国历代人物传记资料库：王紹登（CBDB 549653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=549653&o=json
            external_identifier: CBDB:549653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NoFUoias2LoUDAcLeffysF
        subject_person_id: p_HJ5X5Mhv9Fcw1EF84KVmwn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹登，宋人物。籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 549653）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fJAY97Cva3XI5L7DsHmJ-D
          claim_id: c_NoFUoias2LoUDAcLeffysF
          source_id: s_axbeLN8uTi8aBS6xxUNBLD
          stance: supports
          locator: CBDB:549653
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

# 王紹登

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹登 | accepted |
| bio.summary | 王紹登，宋人物。籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 549653） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹登（CBDB 549653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=549653&o=json)
