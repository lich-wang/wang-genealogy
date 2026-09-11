---
schema: wang-person/v1
id: p_wv4Sqa9WkCSKBrvEZNeCVX
status: active
merged_into: null
display_name: 王正芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9gcetfYxUK8GtdQEfFVQJE
        subject_person_id: p_wv4Sqa9WkCSKBrvEZNeCVX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e69JDGPDuugbj1kKbe9YpG
          claim_id: c_9gcetfYxUK8GtdQEfFVQJE
          source_id: s_ahXziGPEXKNauuvBRoEh2c
          stance: supports
          locator: CBDB:638903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638903）
          source: &a1
            id: s_ahXziGPEXKNauuvBRoEh2c
            source_type: api_record
            title: 中国历代人物传记资料库：王正芳（CBDB 638903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638903&o=json
            external_identifier: CBDB:638903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.784Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TGTqdNTeLB7mc5chBjDXan
        subject_person_id: p_wv4Sqa9WkCSKBrvEZNeCVX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正芳，清人物。籍贯興安府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638903）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EHKU588eHNjzD0VNEqo3KQ
          claim_id: c_TGTqdNTeLB7mc5chBjDXan
          source_id: s_ahXziGPEXKNauuvBRoEh2c
          stance: supports
          locator: CBDB:638903
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

# 王正芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正芳 | accepted |
| bio.summary | 王正芳，清人物。籍贯興安府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638903） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正芳（CBDB 638903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638903&o=json)
