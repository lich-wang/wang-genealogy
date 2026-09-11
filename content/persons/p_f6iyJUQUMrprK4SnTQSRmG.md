---
schema: wang-person/v1
id: p_f6iyJUQUMrprK4SnTQSRmG
status: active
merged_into: null
display_name: 王金策
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eTyx18qf2rb5XdvUGU89Nu
        subject_person_id: p_f6iyJUQUMrprK4SnTQSRmG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金策
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rwvt5PPejr5nuX1Pr83Dgi
          claim_id: c_eTyx18qf2rb5XdvUGU89Nu
          source_id: s_df6DGAuS9Keqw6VKKFo896
          stance: supports
          locator: CBDB:120325
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（120325）
          source: &a1
            id: s_df6DGAuS9Keqw6VKKFo896
            source_type: api_record
            title: 中国历代人物传记资料库：王金策（CBDB 120325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120325&o=json
            external_identifier: CBDB:120325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cscuKp1GopZS5kduLDbaW7
        subject_person_id: p_f6iyJUQUMrprK4SnTQSRmG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金策，史料所见人物。本项目依据《中国历代人物传记资料库：王金策（CBDB 120325）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__tJViHHVWz5ZvMFFQ0sLCk
          claim_id: c_cscuKp1GopZS5kduLDbaW7
          source_id: s_df6DGAuS9Keqw6VKKFo896
          stance: supports
          locator: CBDB:120325
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王金策

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金策 | accepted |
| bio.summary | 王金策，史料所见人物。本项目依据《中国历代人物传记资料库：王金策（CBDB 120325）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金策（CBDB 120325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120325&o=json)
