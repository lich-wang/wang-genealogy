---
schema: wang-person/v1
id: p_mh1VLruNopX6JbXJRyWAeq
status: active
merged_into: null
display_name: 王秉彝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d7rPQUE29g7ft6nUmWzyQ4
        subject_person_id: p_mh1VLruNopX6JbXJRyWAeq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9PCA9gq6JdsLh7JhDV1yBu
          claim_id: c_d7rPQUE29g7ft6nUmWzyQ4
          source_id: s_BbURoHrCrtPY4iH9BNWFsu
          stance: supports
          locator: CBDB:342126
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342126）
          source: &a1
            id: s_BbURoHrCrtPY4iH9BNWFsu
            source_type: api_record
            title: 中国历代人物传记资料库：王秉彝（CBDB 342126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342126&o=json
            external_identifier: CBDB:342126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c36ANWKk1tfF6Eu2c57P4m
        subject_person_id: p_mh1VLruNopX6JbXJRyWAeq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉彝，明人物。明清進士進士，籍贯石首，入仕進士。（中国历代人物传记资料库 CBDB 342126）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1Wb3F-gruItqrFLht4XjWS
          claim_id: c_c36ANWKk1tfF6Eu2c57P4m
          source_id: s_BbURoHrCrtPY4iH9BNWFsu
          stance: supports
          locator: CBDB:342126
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

# 王秉彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉彝 | accepted |
| bio.summary | 王秉彝，明人物。明清進士進士，籍贯石首，入仕進士。（中国历代人物传记资料库 CBDB 342126） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉彝（CBDB 342126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342126&o=json)
