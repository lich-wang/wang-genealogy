---
schema: wang-person/v1
id: p_RQVrQrt8H6fpe6QNUDCtvQ
status: active
merged_into: null
display_name: 王臨策
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sho4ibnGH2vxQjRVLjLQdc
        subject_person_id: p_RQVrQrt8H6fpe6QNUDCtvQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臨策
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nHXG7AtxMG17nt7ybSAgWL
          claim_id: c_sho4ibnGH2vxQjRVLjLQdc
          source_id: s_WbSuJDAYSZYzKHjwbXSv5R
          stance: supports
          locator: CBDB:640004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640004）
          source: &a1
            id: s_WbSuJDAYSZYzKHjwbXSv5R
            source_type: api_record
            title: 中国历代人物传记资料库：王臨策（CBDB 640004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640004&o=json
            external_identifier: CBDB:640004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y5RWxUadEtUTsZmYxWSEN1
        subject_person_id: p_RQVrQrt8H6fpe6QNUDCtvQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臨策，清人物。籍贯東鄉，入仕優貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640004）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EfAPFzxBnRHb8orhY1WwRX
          claim_id: c_y5RWxUadEtUTsZmYxWSEN1
          source_id: s_WbSuJDAYSZYzKHjwbXSv5R
          stance: supports
          locator: CBDB:640004
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

# 王臨策

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臨策 | accepted |
| bio.summary | 王臨策，清人物。籍贯東鄉，入仕優貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640004） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臨策（CBDB 640004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640004&o=json)
