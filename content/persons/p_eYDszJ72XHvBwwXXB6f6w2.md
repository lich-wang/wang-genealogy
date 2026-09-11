---
schema: wang-person/v1
id: p_eYDszJ72XHvBwwXXB6f6w2
status: active
merged_into: null
display_name: 王士和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xx4zAPzHNARizJFHdv2cEF
        subject_person_id: p_eYDszJ72XHvBwwXXB6f6w2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HWzjAAmfvf96PnDQcqPEN5
          claim_id: c_xx4zAPzHNARizJFHdv2cEF
          source_id: s_vba4PZp2oF27sS7ZsGQs22
          stance: supports
          locator: CBDB:126444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126444）
          source: &a1
            id: s_vba4PZp2oF27sS7ZsGQs22
            source_type: api_record
            title: 中国历代人物传记资料库：王士和（CBDB 126444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126444&o=json
            external_identifier: CBDB:126444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZmQ8peVXLKEWxoq5W79TJ7
        subject_person_id: p_eYDszJ72XHvBwwXXB6f6w2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士和，明人物。籍贯金谿，入仕鄉貢舉人，曾任兵部主事、知府、吏部司務。（中国历代人物传记资料库 CBDB 126444）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Aq2gimjvlfs43XXXnGWt-c
          claim_id: c_ZmQ8peVXLKEWxoq5W79TJ7
          source_id: s_vba4PZp2oF27sS7ZsGQs22
          stance: supports
          locator: CBDB:126444
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

# 王士和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士和 | accepted |
| bio.summary | 王士和，明人物。籍贯金谿，入仕鄉貢舉人，曾任兵部主事、知府、吏部司務。（中国历代人物传记资料库 CBDB 126444） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士和（CBDB 126444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126444&o=json)
