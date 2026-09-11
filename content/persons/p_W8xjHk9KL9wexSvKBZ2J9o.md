---
schema: wang-person/v1
id: p_W8xjHk9KL9wexSvKBZ2J9o
status: active
merged_into: null
display_name: 王景福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LtZECPRohH4VWhzvy6Vcj3
        subject_person_id: p_W8xjHk9KL9wexSvKBZ2J9o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HLQK9t82qxznNFhSc2U2PL
          claim_id: c_LtZECPRohH4VWhzvy6Vcj3
          source_id: s_1gUEDveDAmvk4nZaTL1uPj
          stance: supports
          locator: CBDB:638501
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638501）
          source: &a1
            id: s_1gUEDveDAmvk4nZaTL1uPj
            source_type: api_record
            title: 中国历代人物传记资料库：王景福（CBDB 638501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638501&o=json
            external_identifier: CBDB:638501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N4nEmQGZWqh6LWN3dqPdn1
        subject_person_id: p_W8xjHk9KL9wexSvKBZ2J9o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景福，清人物。籍贯山陰，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638501）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DEiLY5CT_3VNmdc_c7b2wu
          claim_id: c_N4nEmQGZWqh6LWN3dqPdn1
          source_id: s_1gUEDveDAmvk4nZaTL1uPj
          stance: supports
          locator: CBDB:638501
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

# 王景福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景福 | accepted |
| bio.summary | 王景福，清人物。籍贯山陰，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638501） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景福（CBDB 638501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638501&o=json)
