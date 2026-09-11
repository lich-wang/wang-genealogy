---
schema: wang-person/v1
id: p_97Z5HD2ZQ1oAoccUNcQWv9
status: active
merged_into: null
display_name: 王竪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gWYhzBVtaio54SMBW3GF4i
        subject_person_id: p_97Z5HD2ZQ1oAoccUNcQWv9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王竪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UL5Cb37PF1EiojW8WafFv2
          claim_id: c_gWYhzBVtaio54SMBW3GF4i
          source_id: s_AuR87DKiw3EihyaN4Jqxyi
          stance: supports
          locator: CBDB:343593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343593）
          source: &a1
            id: s_AuR87DKiw3EihyaN4Jqxyi
            source_type: api_record
            title: 中国历代人物传记资料库：王竪（CBDB 343593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343593&o=json
            external_identifier: CBDB:343593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vxYhTSAm2ib4bb4KV2AevC
        subject_person_id: p_97Z5HD2ZQ1oAoccUNcQWv9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王竪，明人物。明清進士進士，籍贯鹽山，入仕進士。（中国历代人物传记资料库 CBDB 343593）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JdHaKywh4qT6m8i9PkfKyE
          claim_id: c_vxYhTSAm2ib4bb4KV2AevC
          source_id: s_AuR87DKiw3EihyaN4Jqxyi
          stance: supports
          locator: CBDB:343593
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

# 王竪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王竪 | accepted |
| bio.summary | 王竪，明人物。明清進士進士，籍贯鹽山，入仕進士。（中国历代人物传记资料库 CBDB 343593） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王竪（CBDB 343593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343593&o=json)
