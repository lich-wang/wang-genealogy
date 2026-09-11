---
schema: wang-person/v1
id: p_q1kGrJDC7gyAKZUtHZ77q7
status: active
merged_into: null
display_name: 王思誠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E7uYNCgFJyuQPAhpdd78NX
        subject_person_id: p_q1kGrJDC7gyAKZUtHZ77q7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dJRC7qJm2yKRiacH6EZ4xz
          claim_id: c_E7uYNCgFJyuQPAhpdd78NX
          source_id: s_D96JJmFB5R4h7wRLbH8jnL
          stance: supports
          locator: CBDB:343456
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343456）
          source: &a1
            id: s_D96JJmFB5R4h7wRLbH8jnL
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 343456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343456&o=json
            external_identifier: CBDB:343456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1tun1W1bFV7E1t6jRSm9J2
        subject_person_id: p_q1kGrJDC7gyAKZUtHZ77q7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思誠，明人物。明清進士進士，籍贯蒲臺，入仕進士。（中国历代人物传记资料库 CBDB 343456）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bSFtuZGUZ7lRwPY9kCeBJn
          claim_id: c_1tun1W1bFV7E1t6jRSm9J2
          source_id: s_D96JJmFB5R4h7wRLbH8jnL
          stance: supports
          locator: CBDB:343456
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

# 王思誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思誠 | accepted |
| bio.summary | 王思誠，明人物。明清進士進士，籍贯蒲臺，入仕進士。（中国历代人物传记资料库 CBDB 343456） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思誠（CBDB 343456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343456&o=json)
