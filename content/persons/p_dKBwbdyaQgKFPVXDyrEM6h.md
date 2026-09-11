---
schema: wang-person/v1
id: p_dKBwbdyaQgKFPVXDyrEM6h
status: active
merged_into: null
display_name: 王潤之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vqTBfC2M3CyPXrBvXES9zF
        subject_person_id: p_dKBwbdyaQgKFPVXDyrEM6h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sq3Y17AhtcES8xYACbQ1kL
          claim_id: c_vqTBfC2M3CyPXrBvXES9zF
          source_id: s_hBYtwbM7G5Mx2YVBKq2K7n
          stance: supports
          locator: CBDB:22223
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22223）
          source: &a1
            id: s_hBYtwbM7G5Mx2YVBKq2K7n
            source_type: api_record
            title: 中国历代人物传记资料库：王潤之（CBDB 22223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22223&o=json
            external_identifier: CBDB:22223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PaPkm4bjCFHJGy7AKpqfMo
        subject_person_id: p_dKBwbdyaQgKFPVXDyrEM6h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤之，宋人物。籍贯莆田。（中国历代人物传记资料库 CBDB 22223）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o-agAJ2MKrrl2EqNlXP-Rj
          claim_id: c_PaPkm4bjCFHJGy7AKpqfMo
          source_id: s_hBYtwbM7G5Mx2YVBKq2K7n
          stance: supports
          locator: CBDB:22223
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

# 王潤之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潤之 | accepted |
| bio.summary | 王潤之，宋人物。籍贯莆田。（中国历代人物传记资料库 CBDB 22223） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潤之（CBDB 22223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22223&o=json)
