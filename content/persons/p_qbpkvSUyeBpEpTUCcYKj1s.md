---
schema: wang-person/v1
id: p_qbpkvSUyeBpEpTUCcYKj1s
status: active
merged_into: null
display_name: 王宗哲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zUEjM9ii4GKrKvi1UXjPCF
        subject_person_id: p_qbpkvSUyeBpEpTUCcYKj1s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C6sY2gACeANCbxTFY7nn4b
          claim_id: c_zUEjM9ii4GKrKvi1UXjPCF
          source_id: s_1kUWP5QsLzpLafYXyMDByd
          stance: supports
          locator: CBDB:101234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101234）
          source: &a1
            id: s_1kUWP5QsLzpLafYXyMDByd
            source_type: api_record
            title: 中国历代人物传记资料库：王宗哲（CBDB 101234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101234&o=json
            external_identifier: CBDB:101234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h8pyPEHVDDdVtJnCNvhdWL
        subject_person_id: p_qbpkvSUyeBpEpTUCcYKj1s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗哲，元人物。籍贯無極，入仕進士，曾任翰林國史院修撰、肅政廉訪司僉事。（中国历代人物传记资料库 CBDB 101234）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rHkhj3EeM-TrzboP4_1gv-
          claim_id: c_h8pyPEHVDDdVtJnCNvhdWL
          source_id: s_1kUWP5QsLzpLafYXyMDByd
          stance: supports
          locator: CBDB:101234
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

# 王宗哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗哲 | accepted |
| bio.summary | 王宗哲，元人物。籍贯無極，入仕進士，曾任翰林國史院修撰、肅政廉訪司僉事。（中国历代人物传记资料库 CBDB 101234） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗哲（CBDB 101234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101234&o=json)
