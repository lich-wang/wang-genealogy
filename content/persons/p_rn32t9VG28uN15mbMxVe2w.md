---
schema: wang-person/v1
id: p_rn32t9VG28uN15mbMxVe2w
status: active
merged_into: null
display_name: 王喈玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mx2iQE4c3X5eoLbz3dmLZM
        subject_person_id: p_rn32t9VG28uN15mbMxVe2w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喈玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9xGLtBpcPWsyfNFvRGxLZw
          claim_id: c_Mx2iQE4c3X5eoLbz3dmLZM
          source_id: s_cUQTXdezX46uK8bTqwVgx2
          stance: supports
          locator: CBDB:636582
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636582）
          source: &a1
            id: s_cUQTXdezX46uK8bTqwVgx2
            source_type: api_record
            title: 中国历代人物传记资料库：王喈玉（CBDB 636582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636582&o=json
            external_identifier: CBDB:636582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e5CsCQWvmoReWBKCDGMDWh
        subject_person_id: p_rn32t9VG28uN15mbMxVe2w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喈玉，清人物。籍贯含山，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 636582）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sjn_QtwALTowIiCNVbHhR6
          claim_id: c_e5CsCQWvmoReWBKCDGMDWh
          source_id: s_cUQTXdezX46uK8bTqwVgx2
          stance: supports
          locator: CBDB:636582
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

# 王喈玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喈玉 | accepted |
| bio.summary | 王喈玉，清人物。籍贯含山，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 636582） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王喈玉（CBDB 636582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636582&o=json)
