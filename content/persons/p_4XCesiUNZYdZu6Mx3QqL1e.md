---
schema: wang-person/v1
id: p_4XCesiUNZYdZu6Mx3QqL1e
status: active
merged_into: null
display_name: 王繼之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VNar676fR7dtcYjmtoPpCd
        subject_person_id: p_4XCesiUNZYdZu6Mx3QqL1e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uY6jP1ZBER83UJaRJ1eCK7
          claim_id: c_VNar676fR7dtcYjmtoPpCd
          source_id: s_qwpMNBEmLDwCNsh2YFbNUu
          stance: supports
          locator: CBDB:326828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326828）
          source: &a1
            id: s_qwpMNBEmLDwCNsh2YFbNUu
            source_type: api_record
            title: 中国历代人物传记资料库：王繼之（CBDB 326828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326828&o=json
            external_identifier: CBDB:326828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WwKZjhDnp8tycYrFbfo19g
        subject_person_id: p_4XCesiUNZYdZu6Mx3QqL1e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼之，明人物。嘉靖四十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 326828）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sgaiG8xI4b2XrmcD1YyQiY
          claim_id: c_WwKZjhDnp8tycYrFbfo19g
          source_id: s_qwpMNBEmLDwCNsh2YFbNUu
          stance: supports
          locator: CBDB:326828
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

# 王繼之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼之 | accepted |
| bio.summary | 王繼之，明人物。嘉靖四十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 326828） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼之（CBDB 326828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326828&o=json)
