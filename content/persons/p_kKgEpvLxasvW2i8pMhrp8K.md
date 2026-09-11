---
schema: wang-person/v1
id: p_kKgEpvLxasvW2i8pMhrp8K
status: active
merged_into: null
display_name: 王贄
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qfJK3XbQhMFGpFnmEJ8uAV
        subject_person_id: p_kKgEpvLxasvW2i8pMhrp8K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CQgmtAAWrL1k352bAqQdk1
          claim_id: c_qfJK3XbQhMFGpFnmEJ8uAV
          source_id: s_M5AwJ11DD4gg3rQv13t8w8
          stance: supports
          locator: CBDB:137840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（137840）
          source: &a1
            id: s_M5AwJ11DD4gg3rQv13t8w8
            source_type: api_record
            title: 中国历代人物传记资料库：王贄（CBDB 137840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137840&o=json
            external_identifier: CBDB:137840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v7XLDLD1HqxBcf2GcThNpC
        subject_person_id: p_kKgEpvLxasvW2i8pMhrp8K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贄，宋人物。寶祐進士，籍贯仙遊。（中国历代人物传记资料库 CBDB 137840）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-_Zs0u3hlzWztzYE5ZB7dk
          claim_id: c_v7XLDLD1HqxBcf2GcThNpC
          source_id: s_M5AwJ11DD4gg3rQv13t8w8
          stance: supports
          locator: CBDB:137840
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
  descendants:
    - claim:
        id: c_O1ZomtSMjg9mx-dgbFQcL5
        subject_person_id: p_kKgEpvLxasvW2i8pMhrp8K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_56uyEnAkJaHCKdt6ziQAbm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Za91evkJiTiTPftmZEqc6c
          claim_id: c_O1ZomtSMjg9mx-dgbFQcL5
          source_id: s_CZd8TEaokZWVhzuyKovVdC
          stance: supports
          locator: 寶祐登科錄：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CZd8TEaokZWVhzuyKovVdC
            source_type: api_record
            title: 中国历代人物传记资料库：王里（CBDB 12912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12912&o=json
            external_identifier: CBDB:12912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_56uyEnAkJaHCKdt6ziQAbm
        status: active
        display_name: 王里
        merged_into_person_id: null
    - claim:
        id: c_LCeJG9RlpuW8NBsi5eGaFT
        subject_person_id: p_kKgEpvLxasvW2i8pMhrp8K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A1138VJxBzA36XW5H1g132
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_paeJWKzYgvCjjHYdQ0ylg2
          claim_id: c_LCeJG9RlpuW8NBsi5eGaFT
          source_id: s_M5AwJ11DD4gg3rQv13t8w8
          stance: supports
          locator: 寶祐登科錄：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A1138VJxBzA36XW5H1g132
        status: active
        display_name: 王與定
        merged_into_person_id: null
  other: []
---

# 王贄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贄 | accepted |
| bio.summary | 王贄，宋人物。寶祐進士，籍贯仙遊。（中国历代人物传记资料库 CBDB 137840） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_56uyEnAkJaHCKdt6ziQAbm | 王里 | accepted |
| descendants | p_A1138VJxBzA36XW5H1g132 | 王與定 | accepted |

## 外部来源

- [中国历代人物传记资料库：王里（CBDB 12912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12912&o=json)
- [中国历代人物传记资料库：王贄（CBDB 137840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137840&o=json)
