---
schema: wang-person/v1
id: p_L8P2VUpvF18rZr81dmo1qP
status: active
merged_into: null
display_name: 王鳴鶴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rj7ciep1toUv7b5uGHvEF1
        subject_person_id: p_L8P2VUpvF18rZr81dmo1qP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴鶴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S8J8M7H3B9mMbKEqTwQru1
          claim_id: c_Rj7ciep1toUv7b5uGHvEF1
          source_id: s_fXLavWCZ1U1qnGkVNPYwwr
          stance: supports
          locator: CBDB:439035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（439035）
          source: &a1
            id: s_fXLavWCZ1U1qnGkVNPYwwr
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴鶴（CBDB 439035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439035&o=json
            external_identifier: CBDB:439035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.087Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_68VLmp1YAsSQAP48u6b7r7
        subject_person_id: p_L8P2VUpvF18rZr81dmo1qP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴鶴，明人物。籍贯沭陽，入仕武舉進士，曾任守備、衛指揮同知、正千戶。（中国历代人物传记资料库 CBDB 439035）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2fHkgYBz3SkTdaEjCCcu7B
          claim_id: c_68VLmp1YAsSQAP48u6b7r7
          source_id: s_fXLavWCZ1U1qnGkVNPYwwr
          stance: supports
          locator: CBDB:439035
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

# 王鳴鶴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳴鶴 | accepted |
| bio.summary | 王鳴鶴，明人物。籍贯沭陽，入仕武舉進士，曾任守備、衛指揮同知、正千戶。（中国历代人物传记资料库 CBDB 439035） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳴鶴（CBDB 439035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439035&o=json)
