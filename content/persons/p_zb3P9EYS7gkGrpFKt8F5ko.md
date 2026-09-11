---
schema: wang-person/v1
id: p_zb3P9EYS7gkGrpFKt8F5ko
status: active
merged_into: null
display_name: 王同鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mbQRs8Co1J6gaP9v9FsJWU
        subject_person_id: p_zb3P9EYS7gkGrpFKt8F5ko
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S7inAkzqQWLaAWbhY94edp
          claim_id: c_mbQRs8Co1J6gaP9v9FsJWU
          source_id: s_w1CMGJ76ZHk8EZ3QJG7D8V
          stance: supports
          locator: CBDB:343625
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343625）
          source: &a1
            id: s_w1CMGJ76ZHk8EZ3QJG7D8V
            source_type: api_record
            title: 中国历代人物传记资料库：王同鼎（CBDB 343625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343625&o=json
            external_identifier: CBDB:343625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XrExPLvheScW3UgN7Lm31p
        subject_person_id: p_zb3P9EYS7gkGrpFKt8F5ko
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同鼎，清人物。明清進士進士，籍贯桐城，入仕進士。（中国历代人物传记资料库 CBDB 343625）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l5aTxUs5H5qTy7huD2T1yI
          claim_id: c_XrExPLvheScW3UgN7Lm31p
          source_id: s_w1CMGJ76ZHk8EZ3QJG7D8V
          stance: supports
          locator: CBDB:343625
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

# 王同鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同鼎 | accepted |
| bio.summary | 王同鼎，清人物。明清進士進士，籍贯桐城，入仕進士。（中国历代人物传记资料库 CBDB 343625） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同鼎（CBDB 343625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343625&o=json)
