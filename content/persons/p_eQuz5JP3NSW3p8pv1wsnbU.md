---
schema: wang-person/v1
id: p_eQuz5JP3NSW3p8pv1wsnbU
status: active
merged_into: null
display_name: 王啟瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hp7PFrnr1dCwLvsSnVNH1Y
        subject_person_id: p_eQuz5JP3NSW3p8pv1wsnbU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qL9gzKkUZtcQojUEok13wh
          claim_id: c_Hp7PFrnr1dCwLvsSnVNH1Y
          source_id: s_7e7XvDBnnb1zHBfBEo575R
          stance: supports
          locator: CBDB:636554
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636554）
          source: &a1
            id: s_7e7XvDBnnb1zHBfBEo575R
            source_type: api_record
            title: 中国历代人物传记资料库：王啟瑞（CBDB 636554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636554&o=json
            external_identifier: CBDB:636554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wNWKqk2SBuBjy7RYBjv721
        subject_person_id: p_eQuz5JP3NSW3p8pv1wsnbU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟瑞，清人物。籍贯諸暨，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636554）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e7qetVbZ7uabU8zClQbiec
          claim_id: c_wNWKqk2SBuBjy7RYBjv721
          source_id: s_7e7XvDBnnb1zHBfBEo575R
          stance: supports
          locator: CBDB:636554
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

# 王啟瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟瑞 | accepted |
| bio.summary | 王啟瑞，清人物。籍贯諸暨，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636554） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟瑞（CBDB 636554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636554&o=json)
