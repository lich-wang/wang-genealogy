---
schema: wang-person/v1
id: p_Hkh581K7emL658hTg8LfTa
status: active
merged_into: null
display_name: 王瑶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1yLzdiWpVBvQiwvGBDPKmb
        subject_person_id: p_Hkh581K7emL658hTg8LfTa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QVUweTvQgry5RXFhskd299
          claim_id: c_1yLzdiWpVBvQiwvGBDPKmb
          source_id: s_k8SeM152g6JXmPjkMkHUFQ
          stance: supports
          locator: CBDB:475475
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（475475）
          source: &a1
            id: s_k8SeM152g6JXmPjkMkHUFQ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑶（CBDB 475475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475475&o=json
            external_identifier: CBDB:475475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sS8TNwXUNrHVC8CFgX7wgz
        subject_person_id: p_Hkh581K7emL658hTg8LfTa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑶，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 475475）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9N-O9X4CdGyUF2LkVNAWZi
          claim_id: c_sS8TNwXUNrHVC8CFgX7wgz
          source_id: s_k8SeM152g6JXmPjkMkHUFQ
          stance: supports
          locator: CBDB:475475
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

# 王瑶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑶 | accepted |
| bio.summary | 王瑶，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 475475） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑶（CBDB 475475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475475&o=json)
