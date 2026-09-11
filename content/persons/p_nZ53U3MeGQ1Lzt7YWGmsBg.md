---
schema: wang-person/v1
id: p_nZ53U3MeGQ1Lzt7YWGmsBg
status: active
merged_into: null
display_name: 王縡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PzdSNkMLEzBT7G284JLFAb
        subject_person_id: p_nZ53U3MeGQ1Lzt7YWGmsBg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qtdG28RpyTomNbry4A4GB7
          claim_id: c_PzdSNkMLEzBT7G284JLFAb
          source_id: s_gRsAP2hZVmCD6sFPCceHtL
          stance: supports
          locator: CBDB:342279
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342279）
          source: &a1
            id: s_gRsAP2hZVmCD6sFPCceHtL
            source_type: api_record
            title: 中国历代人物传记资料库：王縡（CBDB 342279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342279&o=json
            external_identifier: CBDB:342279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GzBqDDyNe3g7Nhvy5C5kjC
        subject_person_id: p_nZ53U3MeGQ1Lzt7YWGmsBg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縡，清人物。明清進士進士，籍贯無錫，入仕進士，曾任戶部主事、鄉試考官。（中国历代人物传记资料库 CBDB 342279）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QinxPzip8DADmBkR5sFq8C
          claim_id: c_GzBqDDyNe3g7Nhvy5C5kjC
          source_id: s_gRsAP2hZVmCD6sFPCceHtL
          stance: supports
          locator: CBDB:342279
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

# 王縡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縡 | accepted |
| bio.summary | 王縡，清人物。明清進士進士，籍贯無錫，入仕進士，曾任戶部主事、鄉試考官。（中国历代人物传记资料库 CBDB 342279） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王縡（CBDB 342279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342279&o=json)
