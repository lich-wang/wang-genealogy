---
schema: wang-person/v1
id: p_WcfRjL2bSygbBqSD9Ac3ir
status: active
merged_into: null
display_name: 王大受
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D9pd2rMQG7dQwEmtw7dfmU
        subject_person_id: p_WcfRjL2bSygbBqSD9Ac3ir
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大受
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4GoVXGRqWnxi98LgL1a9pU
          claim_id: c_D9pd2rMQG7dQwEmtw7dfmU
          source_id: s_GJdCCDW469N3WQ9c6Q3ptz
          stance: supports
          locator: CBDB:342900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342900）
          source: &a1
            id: s_GJdCCDW469N3WQ9c6Q3ptz
            source_type: api_record
            title: 中国历代人物传记资料库：王大受（CBDB 342900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342900&o=json
            external_identifier: CBDB:342900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.117Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SuQ4t2ezsF5airB3HHBNYg
        subject_person_id: p_WcfRjL2bSygbBqSD9Ac3ir
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大受，明人物。明清進士進士，籍贯合州，入仕進士。（中国历代人物传记资料库 CBDB 342900）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2So2_IbDNCfgTxFeuA1JVn
          claim_id: c_SuQ4t2ezsF5airB3HHBNYg
          source_id: s_GJdCCDW469N3WQ9c6Q3ptz
          stance: supports
          locator: CBDB:342900
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

# 王大受

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大受 | accepted |
| bio.summary | 王大受，明人物。明清進士進士，籍贯合州，入仕進士。（中国历代人物传记资料库 CBDB 342900） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大受（CBDB 342900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342900&o=json)
