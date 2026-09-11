---
schema: wang-person/v1
id: p_Y9aCBDYKQZVj1ftzC9LJsE
status: active
merged_into: null
display_name: 王朝宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BtWdRjzKFqihGFfeR9XJm1
        subject_person_id: p_Y9aCBDYKQZVj1ftzC9LJsE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RzhYgND545GA5LFthMFnWQ
          claim_id: c_BtWdRjzKFqihGFfeR9XJm1
          source_id: s_HHHjgmUm4X8i7vkBN5gpUH
          stance: supports
          locator: CBDB:473065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473065）
          source: &a1
            id: s_HHHjgmUm4X8i7vkBN5gpUH
            source_type: api_record
            title: 中国历代人物传记资料库：王朝宗（CBDB 473065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473065&o=json
            external_identifier: CBDB:473065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aNQR7bv2V9w2XpbMyaxswh
        subject_person_id: p_Y9aCBDYKQZVj1ftzC9LJsE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝宗，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 473065）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IoiCGU4s8DEthxpSNeFZiH
          claim_id: c_aNQR7bv2V9w2XpbMyaxswh
          source_id: s_HHHjgmUm4X8i7vkBN5gpUH
          stance: supports
          locator: CBDB:473065
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

# 王朝宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝宗 | accepted |
| bio.summary | 王朝宗，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 473065） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝宗（CBDB 473065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473065&o=json)
