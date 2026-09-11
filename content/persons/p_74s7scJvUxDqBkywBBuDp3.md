---
schema: wang-person/v1
id: p_74s7scJvUxDqBkywBBuDp3
status: active
merged_into: null
display_name: 王毓珽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_76kC5oGbkiQzBFK5wHCF82
        subject_person_id: p_74s7scJvUxDqBkywBBuDp3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓珽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zyke4ezb73YYT4CL8VUSUX
          claim_id: c_76kC5oGbkiQzBFK5wHCF82
          source_id: s_bZkTHj1hdhb4qhtpbCV46e
          stance: supports
          locator: CBDB:638958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638958）
          source: &a1
            id: s_bZkTHj1hdhb4qhtpbCV46e
            source_type: api_record
            title: 中国历代人物传记资料库：王毓珽（CBDB 638958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638958&o=json
            external_identifier: CBDB:638958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_na793yH91r17mJDCvKdzbi
        subject_person_id: p_74s7scJvUxDqBkywBBuDp3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓珽，清人物。籍贯廣平，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 638958）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pit1q3snNo92Kw3FYQsXyN
          claim_id: c_na793yH91r17mJDCvKdzbi
          source_id: s_bZkTHj1hdhb4qhtpbCV46e
          stance: supports
          locator: CBDB:638958
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

# 王毓珽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓珽 | accepted |
| bio.summary | 王毓珽，清人物。籍贯廣平，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 638958） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王毓珽（CBDB 638958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638958&o=json)
