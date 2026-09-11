---
schema: wang-person/v1
id: p_JLRP1hsnSigNKG6ZPyV8tV
status: active
merged_into: null
display_name: 王經綸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FBd7c4W1ZB79wwiXWB8oMA
        subject_person_id: p_JLRP1hsnSigNKG6ZPyV8tV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jRXhCFGFokVaCjsABE4XLz
          claim_id: c_FBd7c4W1ZB79wwiXWB8oMA
          source_id: s_rtzG3LsidJeN4GrHxQYLqi
          stance: supports
          locator: CBDB:639794
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639794）
          source: &a1
            id: s_rtzG3LsidJeN4GrHxQYLqi
            source_type: api_record
            title: 中国历代人物传记资料库：王經綸（CBDB 639794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639794&o=json
            external_identifier: CBDB:639794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vkLtcNZBCYmCWPhPKBEbtA
        subject_person_id: p_JLRP1hsnSigNKG6ZPyV8tV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經綸，清人物。籍贯歷城，曾任都司、藍翎侍衛、三等侍衛。（中国历代人物传记资料库 CBDB 639794）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__-HqKBBHx6k2L2Kh5cx2Cs
          claim_id: c_vkLtcNZBCYmCWPhPKBEbtA
          source_id: s_rtzG3LsidJeN4GrHxQYLqi
          stance: supports
          locator: CBDB:639794
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

# 王經綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經綸 | accepted |
| bio.summary | 王經綸，清人物。籍贯歷城，曾任都司、藍翎侍衛、三等侍衛。（中国历代人物传记资料库 CBDB 639794） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王經綸（CBDB 639794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639794&o=json)
