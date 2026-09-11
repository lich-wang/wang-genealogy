---
schema: wang-person/v1
id: p_i2JVTfPMCGtyMKkC19CgzK
status: active
merged_into: null
display_name: 王明萬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vdFfQPwGx6TrqhJju3iU4i
        subject_person_id: p_i2JVTfPMCGtyMKkC19CgzK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明萬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8m1zkqgVQzMNsUREvSmbPN
          claim_id: c_vdFfQPwGx6TrqhJju3iU4i
          source_id: s_F5b58UAsnPMCATq2noD31G
          stance: supports
          locator: CBDB:638391
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638391）
          source: &a1
            id: s_F5b58UAsnPMCATq2noD31G
            source_type: api_record
            title: 中国历代人物传记资料库：王明萬（CBDB 638391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638391&o=json
            external_identifier: CBDB:638391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QKEWUN61tvGiergM58a15D
        subject_person_id: p_i2JVTfPMCGtyMKkC19CgzK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王明萬，清人物。籍贯陳州府，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 638391）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NouOxnOSloB7OCnFH0mG5R
          claim_id: c_QKEWUN61tvGiergM58a15D
          source_id: s_F5b58UAsnPMCATq2noD31G
          stance: supports
          locator: CBDB:638391
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

# 王明萬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明萬 | accepted |
| bio.summary | 王明萬，清人物。籍贯陳州府，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 638391） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明萬（CBDB 638391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638391&o=json)
