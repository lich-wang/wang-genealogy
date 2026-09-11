---
schema: wang-person/v1
id: p_1y18Ba6vJZgtotJSEi5dQB
status: active
merged_into: null
display_name: 王應春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iv1VfknatYRZzS9hG5q7bZ
        subject_person_id: p_1y18Ba6vJZgtotJSEi5dQB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ukTrPd4GjNFKLLK93BPFSq
          claim_id: c_iv1VfknatYRZzS9hG5q7bZ
          source_id: s_d9jBCe1HeBSMRp6ibqUWEH
          stance: supports
          locator: CBDB:212304
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212304）
          source: &a1
            id: s_d9jBCe1HeBSMRp6ibqUWEH
            source_type: api_record
            title: 中国历代人物传记资料库：王應春（CBDB 212304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212304&o=json
            external_identifier: CBDB:212304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.081Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qbsg6PZf598x25PogLAh7E
        subject_person_id: p_1y18Ba6vJZgtotJSEi5dQB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應春，明人物。萬曆二年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 212304）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XvCVnlR8NrusShBZJgJc_g
          claim_id: c_Qbsg6PZf598x25PogLAh7E
          source_id: s_d9jBCe1HeBSMRp6ibqUWEH
          stance: supports
          locator: CBDB:212304
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

# 王應春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應春 | accepted |
| bio.summary | 王應春，明人物。萬曆二年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 212304） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應春（CBDB 212304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212304&o=json)
