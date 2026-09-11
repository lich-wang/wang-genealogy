---
schema: wang-person/v1
id: p_e6hZfnHu9F2Qd2GTzWkfjg
status: active
merged_into: null
display_name: 王道成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7P1o6TogduiMLQQdFw6SFb
        subject_person_id: p_e6hZfnHu9F2Qd2GTzWkfjg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D9yP1hqBqVGD1Nm6NjtKxp
          claim_id: c_7P1o6TogduiMLQQdFw6SFb
          source_id: s_ov1VJQfKd2RNDa1eV5Sz96
          stance: supports
          locator: CBDB:219576
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219576）
          source: &a1
            id: s_ov1VJQfKd2RNDa1eV5Sz96
            source_type: api_record
            title: 中国历代人物传记资料库：王道成（CBDB 219576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219576&o=json
            external_identifier: CBDB:219576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.289Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3xHkgX7KFyvFaDVcqR2UFE
        subject_person_id: p_e6hZfnHu9F2Qd2GTzWkfjg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道成，明人物。萬曆八年進士，籍贯潁州。（中国历代人物传记资料库 CBDB 219576）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-9VCqk60qI5QEVVpZrWo9M
          claim_id: c_3xHkgX7KFyvFaDVcqR2UFE
          source_id: s_ov1VJQfKd2RNDa1eV5Sz96
          stance: supports
          locator: CBDB:219576
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

# 王道成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道成 | accepted |
| bio.summary | 王道成，明人物。萬曆八年進士，籍贯潁州。（中国历代人物传记资料库 CBDB 219576） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道成（CBDB 219576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219576&o=json)
