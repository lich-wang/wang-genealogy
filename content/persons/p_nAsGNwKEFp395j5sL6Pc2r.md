---
schema: wang-person/v1
id: p_nAsGNwKEFp395j5sL6Pc2r
status: active
merged_into: null
display_name: 王一造
cbdb_id: 458173
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F8KCNs1f33UH9d9D9WhDjT
        subject_person_id: p_nAsGNwKEFp395j5sL6Pc2r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一造，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 458173）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mkwtg6Sz9m28jZ6v37PfLc
          claim_id: c_F8KCNs1f33UH9d9D9WhDjT
          source_id: s_DjtHSzXLESmNDDBftDKc5M
          stance: supports
          locator: CBDB:458173
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DjtHSzXLESmNDDBftDKc5M
            source_type: api_record
            title: 中国历代人物传记资料库：王一造（CBDB 458173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458173&o=json
            external_identifier: CBDB:458173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:13.763Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bG9AsWXjwwnWABdzhK536m
        subject_person_id: p_nAsGNwKEFp395j5sL6Pc2r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一造
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RC673ydExWLFzMTQ2yc9CD
          claim_id: c_bG9AsWXjwwnWABdzhK536m
          source_id: s_DjtHSzXLESmNDDBftDKc5M
          stance: supports
          locator: CBDB:458173
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6601-6700）｜历史性依据：CBDB 朝代 = 明
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

# 王一造

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一造，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 458173） | accepted |
| name.primary | 王一造 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一造（CBDB 458173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458173&o=json)
