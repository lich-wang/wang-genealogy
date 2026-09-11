---
schema: wang-person/v1
id: p_84mk3B5RgDvY134bJa6DBu
status: active
merged_into: null
display_name: 王政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LFfs92zE2ty9ictXjo5caC
        subject_person_id: p_84mk3B5RgDvY134bJa6DBu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PupAqEsqscqAhPmcUUv9GD
          claim_id: c_LFfs92zE2ty9ictXjo5caC
          source_id: s_PEwMyPSY8Ex54NR9nFiaDJ
          stance: supports
          locator: CBDB:342076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342076）
          source: &a1
            id: s_PEwMyPSY8Ex54NR9nFiaDJ
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 342076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342076&o=json
            external_identifier: CBDB:342076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kMXwEb71hJ4uCAvH7b8Uko
        subject_person_id: p_84mk3B5RgDvY134bJa6DBu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。明清進士進士，籍贯開州，入仕進士。（中国历代人物传记资料库 CBDB 342076）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pp93X3rdDUS6sM5rsXksv8
          claim_id: c_kMXwEb71hJ4uCAvH7b8Uko
          source_id: s_PEwMyPSY8Ex54NR9nFiaDJ
          stance: supports
          locator: CBDB:342076
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

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。明清進士進士，籍贯開州，入仕進士。（中国历代人物传记资料库 CBDB 342076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 342076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342076&o=json)
