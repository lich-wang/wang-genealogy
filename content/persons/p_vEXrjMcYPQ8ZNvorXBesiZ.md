---
schema: wang-person/v1
id: p_vEXrjMcYPQ8ZNvorXBesiZ
status: active
merged_into: null
display_name: 王偶亶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4RABo93v1bNAfsQEQFug8b
        subject_person_id: p_vEXrjMcYPQ8ZNvorXBesiZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偶亶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q2FbKod17a9pEnHpR8KWez
          claim_id: c_4RABo93v1bNAfsQEQFug8b
          source_id: s_XtuEjm4BRh6GExehTT1spU
          stance: supports
          locator: CBDB:574705
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574705）
          source: &a1
            id: s_XtuEjm4BRh6GExehTT1spU
            source_type: api_record
            title: 中国历代人物传记资料库：王偶亶（CBDB 574705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574705&o=json
            external_identifier: CBDB:574705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_acwzfVmLBYXg2J9NTYs6X1
        subject_person_id: p_vEXrjMcYPQ8ZNvorXBesiZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偶亶，清人物。籍贯京山，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭。（中国历代人物传记资料库 CBDB 574705）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E52lsMo93h9YL1p8qQO1pm
          claim_id: c_acwzfVmLBYXg2J9NTYs6X1
          source_id: s_XtuEjm4BRh6GExehTT1spU
          stance: supports
          locator: CBDB:574705
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

# 王偶亶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偶亶 | accepted |
| bio.summary | 王偶亶，清人物。籍贯京山，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭。（中国历代人物传记资料库 CBDB 574705） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偶亶（CBDB 574705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574705&o=json)
