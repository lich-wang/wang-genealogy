---
schema: wang-person/v1
id: p_GNJsx3Q85rgpVgxn3x48Qa
status: active
merged_into: null
display_name: 王衷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CZPwU8Tx8UeuXn7N93kHGp
        subject_person_id: p_GNJsx3Q85rgpVgxn3x48Qa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9kskANGVHba6i8ia9YmYPq
          claim_id: c_CZPwU8Tx8UeuXn7N93kHGp
          source_id: s_T3j6G5ohTqUbec4VfKfJaF
          stance: supports
          locator: CBDB:693374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693374）
          source: &a1
            id: s_T3j6G5ohTqUbec4VfKfJaF
            source_type: api_record
            title: 中国历代人物传记资料库：王衷（CBDB 693374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693374&o=json
            external_identifier: CBDB:693374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.656Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UTyQt6Ypw5zAKq3qhNTad3
        subject_person_id: p_GNJsx3Q85rgpVgxn3x48Qa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衷，明人物。籍贯海鹽，身份为詩人、卜筮者（太乙、軌革、六壬、遁甲等）。（中国历代人物传记资料库 CBDB 693374）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2bm_PWBw6OpgbZ8ZvyquGQ
          claim_id: c_UTyQt6Ypw5zAKq3qhNTad3
          source_id: s_T3j6G5ohTqUbec4VfKfJaF
          stance: supports
          locator: CBDB:693374
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

# 王衷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衷 | accepted |
| bio.summary | 王衷，明人物。籍贯海鹽，身份为詩人、卜筮者（太乙、軌革、六壬、遁甲等）。（中国历代人物传记资料库 CBDB 693374） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衷（CBDB 693374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693374&o=json)
