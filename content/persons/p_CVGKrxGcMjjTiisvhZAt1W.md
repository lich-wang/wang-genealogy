---
schema: wang-person/v1
id: p_CVGKrxGcMjjTiisvhZAt1W
status: active
merged_into: null
display_name: 王克敏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_woiBfdJPEWJpjsWozx5d9J
        subject_person_id: p_CVGKrxGcMjjTiisvhZAt1W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XteJretmQq9qDM8J9oHgyC
          claim_id: c_woiBfdJPEWJpjsWozx5d9J
          source_id: s_FQ5xfisS1BVZmHLwgSaKuF
          stance: supports
          locator: CBDB:470029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（470029）
          source: &a1
            id: s_FQ5xfisS1BVZmHLwgSaKuF
            source_type: api_record
            title: 中国历代人物传记资料库：王克敏（CBDB 470029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470029&o=json
            external_identifier: CBDB:470029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mJ8NC5opC85WW9SUs9dFsv
        subject_person_id: p_CVGKrxGcMjjTiisvhZAt1W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克敏，元人物。曾任散府知府或府尹。（中国历代人物传记资料库 CBDB 470029）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iVcVAg93PzwxjWjCaQZeMR
          claim_id: c_mJ8NC5opC85WW9SUs9dFsv
          source_id: s_FQ5xfisS1BVZmHLwgSaKuF
          stance: supports
          locator: CBDB:470029
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

# 王克敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克敏 | accepted |
| bio.summary | 王克敏，元人物。曾任散府知府或府尹。（中国历代人物传记资料库 CBDB 470029） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克敏（CBDB 470029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470029&o=json)
