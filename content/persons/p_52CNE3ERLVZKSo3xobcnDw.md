---
schema: wang-person/v1
id: p_52CNE3ERLVZKSo3xobcnDw
status: active
merged_into: null
display_name: 王可象
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CU3PEr9rwuUPeAYwNjf5Aw
        subject_person_id: p_52CNE3ERLVZKSo3xobcnDw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可象
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LrC66uRKzajk1t99ooQn6x
          claim_id: c_CU3PEr9rwuUPeAYwNjf5Aw
          source_id: s_qHLA53Vbd5H3oDcc77bwsG
          stance: supports
          locator: CBDB:574384
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574384）
          source: &a1
            id: s_qHLA53Vbd5H3oDcc77bwsG
            source_type: api_record
            title: 中国历代人物传记资料库：王可象（CBDB 574384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574384&o=json
            external_identifier: CBDB:574384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.680Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N7setd2iHgg9YD16DLCqf2
        subject_person_id: p_52CNE3ERLVZKSo3xobcnDw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可象，明人物。籍贯蘄州。（中国历代人物传记资料库 CBDB 574384）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D6qFjxhPnJjRjYB4Jz_OJ0
          claim_id: c_N7setd2iHgg9YD16DLCqf2
          source_id: s_qHLA53Vbd5H3oDcc77bwsG
          stance: supports
          locator: CBDB:574384
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

# 王可象

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可象 | accepted |
| bio.summary | 王可象，明人物。籍贯蘄州。（中国历代人物传记资料库 CBDB 574384） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王可象（CBDB 574384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574384&o=json)
