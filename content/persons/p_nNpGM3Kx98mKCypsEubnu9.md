---
schema: wang-person/v1
id: p_nNpGM3Kx98mKCypsEubnu9
status: active
merged_into: null
display_name: 王運昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cHFepgeCJcxNSoCb22t62N
        subject_person_id: p_nNpGM3Kx98mKCypsEubnu9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8f95P1HozhdsCu7c3izQ5A
          claim_id: c_cHFepgeCJcxNSoCb22t62N
          source_id: s_mBN3dMhxtWasgp8PEpqQVz
          stance: supports
          locator: CBDB:640444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640444）
          source: &a1
            id: s_mBN3dMhxtWasgp8PEpqQVz
            source_type: api_record
            title: 中国历代人物传记资料库：王運昌（CBDB 640444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640444&o=json
            external_identifier: CBDB:640444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Un3S7TeLhXqhxDJaaC8TN
        subject_person_id: p_nNpGM3Kx98mKCypsEubnu9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運昌，清人物。籍贯順天府，入仕廩生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640444）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o5PRos5twv2awowo-TOdVX
          claim_id: c_4Un3S7TeLhXqhxDJaaC8TN
          source_id: s_mBN3dMhxtWasgp8PEpqQVz
          stance: supports
          locator: CBDB:640444
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

# 王運昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王運昌 | accepted |
| bio.summary | 王運昌，清人物。籍贯順天府，入仕廩生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640444） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王運昌（CBDB 640444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640444&o=json)
