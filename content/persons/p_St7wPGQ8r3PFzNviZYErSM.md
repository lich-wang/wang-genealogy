---
schema: wang-person/v1
id: p_St7wPGQ8r3PFzNviZYErSM
status: active
merged_into: null
display_name: 王之棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2qhES4gnrA9kDywKiqvRWi
        subject_person_id: p_St7wPGQ8r3PFzNviZYErSM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kYPYcXsthzGQA7kHu9RD1P
          claim_id: c_2qhES4gnrA9kDywKiqvRWi
          source_id: s_Ly27Ldm8n9fVWUK74HcLKQ
          stance: supports
          locator: CBDB:54837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（54837）
          source: &a1
            id: s_Ly27Ldm8n9fVWUK74HcLKQ
            source_type: api_record
            title: 中国历代人物传记资料库：王之棟（CBDB 54837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54837&o=json
            external_identifier: CBDB:54837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.728Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3GF9GGBWGcNqAANFwDV4dG
        subject_person_id: p_St7wPGQ8r3PFzNviZYErSM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之棟，清人物。曾任典史。（中国历代人物传记资料库 CBDB 54837）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_032hx_WqT7R57nLPobBEkR
          claim_id: c_3GF9GGBWGcNqAANFwDV4dG
          source_id: s_Ly27Ldm8n9fVWUK74HcLKQ
          stance: supports
          locator: CBDB:54837
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

# 王之棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之棟 | accepted |
| bio.summary | 王之棟，清人物。曾任典史。（中国历代人物传记资料库 CBDB 54837） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之棟（CBDB 54837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54837&o=json)
