---
schema: wang-person/v1
id: p_2SvtP724rEDaCfbzpBPj5x
status: active
merged_into: null
display_name: 王儒端
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZsX7ziVSAw61dm7DPNFJ6N
        subject_person_id: p_2SvtP724rEDaCfbzpBPj5x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w9r3kZpQjjuTkCMWsscPSz
          claim_id: c_ZsX7ziVSAw61dm7DPNFJ6N
          source_id: s_KMmXm9wxLbUxMz7sdL4pcn
          stance: supports
          locator: CBDB:636110
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636110）
          source: &a1
            id: s_KMmXm9wxLbUxMz7sdL4pcn
            source_type: api_record
            title: 中国历代人物传记资料库：王儒端（CBDB 636110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636110&o=json
            external_identifier: CBDB:636110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.890Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o7BWgFj2iUb91M7d3xgXnq
        subject_person_id: p_2SvtP724rEDaCfbzpBPj5x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒端，清人物。籍贯石屏州，入仕優貢生，曾任經歷。（中国历代人物传记资料库 CBDB 636110）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LA5B-U7Td0xPMUte8iOV1_
          claim_id: c_o7BWgFj2iUb91M7d3xgXnq
          source_id: s_KMmXm9wxLbUxMz7sdL4pcn
          stance: supports
          locator: CBDB:636110
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

# 王儒端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒端 | accepted |
| bio.summary | 王儒端，清人物。籍贯石屏州，入仕優貢生，曾任經歷。（中国历代人物传记资料库 CBDB 636110） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儒端（CBDB 636110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636110&o=json)
