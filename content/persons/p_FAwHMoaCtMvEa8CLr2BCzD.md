---
schema: wang-person/v1
id: p_FAwHMoaCtMvEa8CLr2BCzD
status: active
merged_into: null
display_name: 王昆崖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bq7V3xkfDNFvdvcNRALDNo
        subject_person_id: p_FAwHMoaCtMvEa8CLr2BCzD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昆崖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_APb2DwJ4wXqjeqodBLfHbz
          claim_id: c_bq7V3xkfDNFvdvcNRALDNo
          source_id: s_UeecJ2yfH5s2hYMopVjoue
          stance: supports
          locator: CBDB:414772
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414772）
          source: &a1
            id: s_UeecJ2yfH5s2hYMopVjoue
            source_type: api_record
            title: 中国历代人物传记资料库：王昆崖（CBDB 414772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414772&o=json
            external_identifier: CBDB:414772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vm5kp6DtxhY2zwbJHhgkNg
        subject_person_id: p_FAwHMoaCtMvEa8CLr2BCzD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昆崖，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 414772）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xZ6FOEpGsBocTv1JGHl-e2
          claim_id: c_Vm5kp6DtxhY2zwbJHhgkNg
          source_id: s_UeecJ2yfH5s2hYMopVjoue
          stance: supports
          locator: CBDB:414772
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

# 王昆崖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昆崖 | accepted |
| bio.summary | 王昆崖，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 414772） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昆崖（CBDB 414772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414772&o=json)
