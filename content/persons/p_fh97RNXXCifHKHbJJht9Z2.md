---
schema: wang-person/v1
id: p_fh97RNXXCifHKHbJJht9Z2
status: active
merged_into: null
display_name: 王學智
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ty34FQVh5b9cTgMGqmq2KD
        subject_person_id: p_fh97RNXXCifHKHbJJht9Z2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ExRjR5YAN9DCHjmhiz1Bwb
          claim_id: c_Ty34FQVh5b9cTgMGqmq2KD
          source_id: s_9uDKB5dm6cd96ByAkP548b
          stance: supports
          locator: CBDB:637037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637037）
          source: &a1
            id: s_9uDKB5dm6cd96ByAkP548b
            source_type: api_record
            title: 中国历代人物传记资料库：王學智（CBDB 637037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637037&o=json
            external_identifier: CBDB:637037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_unbsGWjsLmbLJD6LsS796w
        subject_person_id: p_fh97RNXXCifHKHbJJht9Z2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王學智，清人物。籍贯黃州府，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 637037）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bv7O7ioul3hlWQYTUi4TGo
          claim_id: c_unbsGWjsLmbLJD6LsS796w
          source_id: s_9uDKB5dm6cd96ByAkP548b
          stance: supports
          locator: CBDB:637037
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

# 王學智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學智 | accepted |
| bio.summary | 王學智，清人物。籍贯黃州府，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 637037） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學智（CBDB 637037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637037&o=json)
