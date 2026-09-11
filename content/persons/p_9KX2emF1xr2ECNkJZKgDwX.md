---
schema: wang-person/v1
id: p_9KX2emF1xr2ECNkJZKgDwX
status: active
merged_into: null
display_name: 王祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sLEPJUj4HN3EiepTYpEPsE
        subject_person_id: p_9KX2emF1xr2ECNkJZKgDwX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gk4tq48Ayd6rU2wFPkSDMb
          claim_id: c_sLEPJUj4HN3EiepTYpEPsE
          source_id: s_RNR7cQU21es4vW16YappWn
          stance: supports
          locator: CBDB:688834
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688834）
          source: &a1
            id: s_RNR7cQU21es4vW16YappWn
            source_type: api_record
            title: 中国历代人物传记资料库：王祥（CBDB 688834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688834&o=json
            external_identifier: CBDB:688834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aTK3KA2K5KrQjYDpwBKMFb
        subject_person_id: p_9KX2emF1xr2ECNkJZKgDwX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥，宋人物。籍贯福清，入仕進士。（中国历代人物传记资料库 CBDB 688834）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_61ftzRKJ4acsh_I8JUUsEH
          claim_id: c_aTK3KA2K5KrQjYDpwBKMFb
          source_id: s_RNR7cQU21es4vW16YappWn
          stance: supports
          locator: CBDB:688834
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

# 王祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祥 | accepted |
| bio.summary | 王祥，宋人物。籍贯福清，入仕進士。（中国历代人物传记资料库 CBDB 688834） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祥（CBDB 688834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688834&o=json)
