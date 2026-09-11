---
schema: wang-person/v1
id: p_2ndfBqXooiMa6ghB2LRcfo
status: active
merged_into: null
display_name: 王士貴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rAMgSHcobW8Kq3w2WDyY95
        subject_person_id: p_2ndfBqXooiMa6ghB2LRcfo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PvYa35u1piZcNB6QVJT1MF
          claim_id: c_rAMgSHcobW8Kq3w2WDyY95
          source_id: s_eYagQ1DZXhJzHRFQ7Yp5Mj
          stance: supports
          locator: CBDB:636821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636821）
          source: &a1
            id: s_eYagQ1DZXhJzHRFQ7Yp5Mj
            source_type: api_record
            title: 中国历代人物传记资料库：王士貴（CBDB 636821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636821&o=json
            external_identifier: CBDB:636821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dyqNMPSGZ1wkReJCzUM6Vx
        subject_person_id: p_2ndfBqXooiMa6ghB2LRcfo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士貴，清人物。籍贯寧波府，入仕軍功補授(軍功)，曾任都司。（中国历代人物传记资料库 CBDB 636821）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mYNsJMFOz-EGC8b97RJ1gR
          claim_id: c_dyqNMPSGZ1wkReJCzUM6Vx
          source_id: s_eYagQ1DZXhJzHRFQ7Yp5Mj
          stance: supports
          locator: CBDB:636821
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

# 王士貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士貴 | accepted |
| bio.summary | 王士貴，清人物。籍贯寧波府，入仕軍功補授(軍功)，曾任都司。（中国历代人物传记资料库 CBDB 636821） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士貴（CBDB 636821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636821&o=json)
