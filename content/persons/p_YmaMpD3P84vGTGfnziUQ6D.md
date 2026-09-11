---
schema: wang-person/v1
id: p_YmaMpD3P84vGTGfnziUQ6D
status: active
merged_into: null
display_name: 王鉉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VSN6UjSB9UUiUXF21W2rPt
        subject_person_id: p_YmaMpD3P84vGTGfnziUQ6D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PsghkYSa6eGt3SN78XE9a6
          claim_id: c_VSN6UjSB9UUiUXF21W2rPt
          source_id: s_iGseEPduq9MM6iwxFdMzYm
          stance: supports
          locator: CBDB:261855
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261855）
          source: &a1
            id: s_iGseEPduq9MM6iwxFdMzYm
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 261855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261855&o=json
            external_identifier: CBDB:261855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.567Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DYPepeFm7e2CTiaYxKsyvt
        subject_person_id: p_YmaMpD3P84vGTGfnziUQ6D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉，明人物。弘治三年進士，籍贯醴泉。（中国历代人物传记资料库 CBDB 261855）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aovE1Mn1bTSfEcN3tN8sVx
          claim_id: c_DYPepeFm7e2CTiaYxKsyvt
          source_id: s_iGseEPduq9MM6iwxFdMzYm
          stance: supports
          locator: CBDB:261855
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

# 王鉉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉉 | accepted |
| bio.summary | 王鉉，明人物。弘治三年進士，籍贯醴泉。（中国历代人物传记资料库 CBDB 261855） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉉（CBDB 261855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261855&o=json)
