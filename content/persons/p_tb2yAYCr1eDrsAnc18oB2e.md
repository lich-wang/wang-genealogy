---
schema: wang-person/v1
id: p_tb2yAYCr1eDrsAnc18oB2e
status: active
merged_into: null
display_name: 王政懋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A4kY96hk31w4KYSs5s9xLF
        subject_person_id: p_tb2yAYCr1eDrsAnc18oB2e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NkkFBVCMJGEKKDAgPF9HVv
          claim_id: c_A4kY96hk31w4KYSs5s9xLF
          source_id: s_4su7yMrPQq5k6cPzsKgg5k
          stance: supports
          locator: CBDB:638166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638166）
          source: &a1
            id: s_4su7yMrPQq5k6cPzsKgg5k
            source_type: api_record
            title: 中国历代人物传记资料库：王政懋（CBDB 638166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638166&o=json
            external_identifier: CBDB:638166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.549Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eH8dM4imrJGNoVpMimnHgA
        subject_person_id: p_tb2yAYCr1eDrsAnc18oB2e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政懋，清人物。籍贯寶慶府，入仕廩生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638166）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1bFknvZNdsklX04cwsEYkm
          claim_id: c_eH8dM4imrJGNoVpMimnHgA
          source_id: s_4su7yMrPQq5k6cPzsKgg5k
          stance: supports
          locator: CBDB:638166
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

# 王政懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政懋 | accepted |
| bio.summary | 王政懋，清人物。籍贯寶慶府，入仕廩生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政懋（CBDB 638166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638166&o=json)
