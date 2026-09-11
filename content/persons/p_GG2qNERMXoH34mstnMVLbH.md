---
schema: wang-person/v1
id: p_GG2qNERMXoH34mstnMVLbH
status: active
merged_into: null
display_name: 王士珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t2qTKHWJfFPGfu3GHVmizP
        subject_person_id: p_GG2qNERMXoH34mstnMVLbH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_268hmuVGuAFC37ooVLzb6t
          claim_id: c_t2qTKHWJfFPGfu3GHVmizP
          source_id: s_ExSHtDHXPPM9MxQzJrES73
          stance: supports
          locator: CBDB:636808
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636808）
          source: &a1
            id: s_ExSHtDHXPPM9MxQzJrES73
            source_type: api_record
            title: 中国历代人物传记资料库：王士珍（CBDB 636808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636808&o=json
            external_identifier: CBDB:636808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U2QBD54ZTjfxPs4gLEyo2w
        subject_person_id: p_GG2qNERMXoH34mstnMVLbH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士珍，清人物。籍贯黃岡，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636808）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PmrKcT69pDonLK2rJNHEFt
          claim_id: c_U2QBD54ZTjfxPs4gLEyo2w
          source_id: s_ExSHtDHXPPM9MxQzJrES73
          stance: supports
          locator: CBDB:636808
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

# 王士珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士珍 | accepted |
| bio.summary | 王士珍，清人物。籍贯黃岡，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636808） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士珍（CBDB 636808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636808&o=json)
