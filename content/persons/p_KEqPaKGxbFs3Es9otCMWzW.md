---
schema: wang-person/v1
id: p_KEqPaKGxbFs3Es9otCMWzW
status: active
merged_into: null
display_name: 王旭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zQaG96NMGpi51CsrQGseBb
        subject_person_id: p_KEqPaKGxbFs3Es9otCMWzW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p3R7BxaVsqviQ3WBNjpefq
          claim_id: c_zQaG96NMGpi51CsrQGseBb
          source_id: s_ZButzoXeLW4RPHmDDofEpm
          stance: supports
          locator: CBDB:240186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240186）
          source: &a1
            id: s_ZButzoXeLW4RPHmDDofEpm
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 240186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240186&o=json
            external_identifier: CBDB:240186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JmDpETJFGCzFEdUNu88bfq
        subject_person_id: p_KEqPaKGxbFs3Es9otCMWzW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭，明人物。成化二年進士，籍贯靈璧。（中国历代人物传记资料库 CBDB 240186）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zivbxF4ZwK3jjNzfSjy_hE
          claim_id: c_JmDpETJFGCzFEdUNu88bfq
          source_id: s_ZButzoXeLW4RPHmDDofEpm
          stance: supports
          locator: CBDB:240186
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

# 王旭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旭 | accepted |
| bio.summary | 王旭，明人物。成化二年進士，籍贯靈璧。（中国历代人物传记资料库 CBDB 240186） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王旭（CBDB 240186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240186&o=json)
