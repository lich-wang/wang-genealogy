---
schema: wang-person/v1
id: p_zxv5XndsJa17M5esqhdfFd
status: active
merged_into: null
display_name: 王昌穀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9NQjwSuzrDN65BoBjCft2w
        subject_person_id: p_zxv5XndsJa17M5esqhdfFd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌穀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AhFUfYDBuKXg8R2fFBZD3C
          claim_id: c_9NQjwSuzrDN65BoBjCft2w
          source_id: s_Mm9eEZxBMu5WpSqoHB5JXp
          stance: supports
          locator: CBDB:638377
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638377）
          source: &a1
            id: s_Mm9eEZxBMu5WpSqoHB5JXp
            source_type: api_record
            title: 中国历代人物传记资料库：王昌穀（CBDB 638377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638377&o=json
            external_identifier: CBDB:638377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ifi6v9JRDHPTu7D8Ypnrth
        subject_person_id: p_zxv5XndsJa17M5esqhdfFd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌穀，清人物。籍贯金匱，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638377）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J4GCxAVujSEmOrB4Li7W62
          claim_id: c_ifi6v9JRDHPTu7D8Ypnrth
          source_id: s_Mm9eEZxBMu5WpSqoHB5JXp
          stance: supports
          locator: CBDB:638377
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

# 王昌穀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌穀 | accepted |
| bio.summary | 王昌穀，清人物。籍贯金匱，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638377） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌穀（CBDB 638377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638377&o=json)
