---
schema: wang-person/v1
id: p_ZECwYha23r9NYt3sTtnFMC
status: active
merged_into: null
display_name: 王運昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SABCBfQcmHtCCJxX9G8HZ1
        subject_person_id: p_ZECwYha23r9NYt3sTtnFMC
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
        - id: cs_K9wuCiEumP2Q6HYKLgeFH3
          claim_id: c_SABCBfQcmHtCCJxX9G8HZ1
          source_id: s_x4XeTsxni3Yrb9CM3FsJWw
          stance: supports
          locator: CBDB:640445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640445）
          source: &a1
            id: s_x4XeTsxni3Yrb9CM3FsJWw
            source_type: api_record
            title: 中国历代人物传记资料库：王運昌（CBDB 640445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640445&o=json
            external_identifier: CBDB:640445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FP59k44gcL93r6sVatvXq6
        subject_person_id: p_ZECwYha23r9NYt3sTtnFMC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運昌，清人物。籍贯南城，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640445）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__6wza1oJ4rrwDRvfwUwuD8
          claim_id: c_FP59k44gcL93r6sVatvXq6
          source_id: s_x4XeTsxni3Yrb9CM3FsJWw
          stance: supports
          locator: CBDB:640445
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
| bio.summary | 王運昌，清人物。籍贯南城，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640445） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王運昌（CBDB 640445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640445&o=json)
