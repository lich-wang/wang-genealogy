---
schema: wang-person/v1
id: p_HkaFqg6gWQC2imAMC5MUfJ
status: active
merged_into: null
display_name: 王廷樟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pdj1DJ17ybreEUEGHMUZkF
        subject_person_id: p_HkaFqg6gWQC2imAMC5MUfJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷樟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ncvfE4WopK6SeiDD7XwnQN
          claim_id: c_Pdj1DJ17ybreEUEGHMUZkF
          source_id: s_T2FGMjw6DGe5XsSFjLVC6a
          stance: supports
          locator: CBDB:637520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637520）
          source: &a1
            id: s_T2FGMjw6DGe5XsSFjLVC6a
            source_type: api_record
            title: 中国历代人物传记资料库：王廷樟（CBDB 637520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637520&o=json
            external_identifier: CBDB:637520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xQasLC1mwh8P33gkW9BPRz
        subject_person_id: p_HkaFqg6gWQC2imAMC5MUfJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷樟，清人物。籍贯山陰，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637520）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o-8baOq3ir7YOugOBjgUw1
          claim_id: c_xQasLC1mwh8P33gkW9BPRz
          source_id: s_T2FGMjw6DGe5XsSFjLVC6a
          stance: supports
          locator: CBDB:637520
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

# 王廷樟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷樟 | accepted |
| bio.summary | 王廷樟，清人物。籍贯山陰，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637520） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷樟（CBDB 637520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637520&o=json)
