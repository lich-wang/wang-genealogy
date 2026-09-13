---
schema: wang-person/v1
id: p_FPm342hJnW4nNNP3DLXzd5
status: active
merged_into: null
display_name: 王一官
cbdb_id: 59886
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gi8j6zQAYtrK5sdga3pgxE
        subject_person_id: p_FPm342hJnW4nNNP3DLXzd5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一官，清人物。曾任縣知縣。（中国历代人物传记资料库 CBDB 59886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_U72mZGJI150_GCtQ3R3mir
          claim_id: c_gi8j6zQAYtrK5sdga3pgxE
          source_id: s_TuNnfaGz5y4GqPnpF2ga2M
          stance: supports
          locator: CBDB:59886
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_TuNnfaGz5y4GqPnpF2ga2M
            source_type: api_record
            title: 中国历代人物传记资料库：王一官（CBDB 59886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59886&o=json
            external_identifier: CBDB:59886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UGDLhwyEZQ2PZaHJshJB1W
        subject_person_id: p_FPm342hJnW4nNNP3DLXzd5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HoPzShCuNCvMa6HBHv4i8A
          claim_id: c_UGDLhwyEZQ2PZaHJshJB1W
          source_id: s_TuNnfaGz5y4GqPnpF2ga2M
          stance: supports
          locator: CBDB:59886
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
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

# 王一官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一官，清人物。曾任縣知縣。（中国历代人物传记资料库 CBDB 59886） | accepted |
| name.primary | 王一官 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一官（CBDB 59886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59886&o=json)
