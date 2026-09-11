---
schema: wang-person/v1
id: p_dLiSeF4Lbz1dJ8ztCYt4m4
status: active
merged_into: null
display_name: 王替襄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a3SwGgSa9VuQSgAy6k74Qf
        subject_person_id: p_dLiSeF4Lbz1dJ8ztCYt4m4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王替襄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YfwxEKg4Mq9prkmUMDo92E
          claim_id: c_a3SwGgSa9VuQSgAy6k74Qf
          source_id: s_WV11pkUHtn2kjt34P4U1Nf
          stance: supports
          locator: CBDB:638562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638562）
          source: &a1
            id: s_WV11pkUHtn2kjt34P4U1Nf
            source_type: api_record
            title: 中国历代人物传记资料库：王替襄（CBDB 638562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638562&o=json
            external_identifier: CBDB:638562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.674Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sKfaHcLVpC6D6QD68A6DAy
        subject_person_id: p_dLiSeF4Lbz1dJ8ztCYt4m4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王替襄，清人物。籍贯中衛，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 638562）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CGgtTn7F8TUi0-DngGJFvS
          claim_id: c_sKfaHcLVpC6D6QD68A6DAy
          source_id: s_WV11pkUHtn2kjt34P4U1Nf
          stance: supports
          locator: CBDB:638562
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

# 王替襄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王替襄 | accepted |
| bio.summary | 王替襄，清人物。籍贯中衛，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 638562） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王替襄（CBDB 638562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638562&o=json)
