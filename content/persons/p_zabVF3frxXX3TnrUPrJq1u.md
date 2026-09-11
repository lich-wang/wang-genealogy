---
schema: wang-person/v1
id: p_zabVF3frxXX3TnrUPrJq1u
status: active
merged_into: null
display_name: 王祚新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9vVt3ZZvEegsQ6m5jebwEV
        subject_person_id: p_zabVF3frxXX3TnrUPrJq1u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sTG3nHJ86Tv2L9NFSgRPy4
          claim_id: c_9vVt3ZZvEegsQ6m5jebwEV
          source_id: s_A6spYt36uXPPXfMZYvitFq
          stance: supports
          locator: CBDB:639590
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639590）
          source: &a1
            id: s_A6spYt36uXPPXfMZYvitFq
            source_type: api_record
            title: 中国历代人物传记资料库：王祚新（CBDB 639590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639590&o=json
            external_identifier: CBDB:639590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QP1XaSFPCzF7R4PxQGZ6kW
        subject_person_id: p_zabVF3frxXX3TnrUPrJq1u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚新，清人物。籍贯安慶府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639590）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cBXiZRBiHyZpn6jpfh6Fwp
          claim_id: c_QP1XaSFPCzF7R4PxQGZ6kW
          source_id: s_A6spYt36uXPPXfMZYvitFq
          stance: supports
          locator: CBDB:639590
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

# 王祚新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚新 | accepted |
| bio.summary | 王祚新，清人物。籍贯安慶府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639590） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祚新（CBDB 639590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639590&o=json)
