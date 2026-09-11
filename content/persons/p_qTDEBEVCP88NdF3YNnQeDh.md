---
schema: wang-person/v1
id: p_qTDEBEVCP88NdF3YNnQeDh
status: active
merged_into: null
display_name: 王潨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xEsJKAjCMGJsQd54PEyCyo
        subject_person_id: p_qTDEBEVCP88NdF3YNnQeDh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pgwG8Kjpv4CWLH49MbDeRA
          claim_id: c_xEsJKAjCMGJsQd54PEyCyo
          source_id: s_HmN4j2E2n29M4GHRkL3QC6
          stance: supports
          locator: CBDB:639214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639214）
          source: &a1
            id: s_HmN4j2E2n29M4GHRkL3QC6
            source_type: api_record
            title: 中国历代人物传记资料库：王潨（CBDB 639214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639214&o=json
            external_identifier: CBDB:639214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pPaKM6BvocGTWy7VoSJqp2
        subject_person_id: p_qTDEBEVCP88NdF3YNnQeDh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潨，清人物。籍贯成都，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639214）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bxjuXiyFxy4AD09ol_9Y4c
          claim_id: c_pPaKM6BvocGTWy7VoSJqp2
          source_id: s_HmN4j2E2n29M4GHRkL3QC6
          stance: supports
          locator: CBDB:639214
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

# 王潨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潨 | accepted |
| bio.summary | 王潨，清人物。籍贯成都，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639214） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潨（CBDB 639214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639214&o=json)
