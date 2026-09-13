---
schema: wang-person/v1
id: p_19yi77kuN8w8f2UW7vbua8
status: active
merged_into: null
display_name: 王鎋
cbdb_id: 262675
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FzZpQHpxtGGYVA7Nk2Ujmk
        subject_person_id: p_19yi77kuN8w8f2UW7vbua8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎋，明人物。弘治三年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 262675）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_y4U_7fCxWIH7gTPWI5mT86
          claim_id: c_FzZpQHpxtGGYVA7Nk2Ujmk
          source_id: s_wqJMNaK8NfP2DZE1JAKJtx
          stance: supports
          locator: CBDB:262675
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wqJMNaK8NfP2DZE1JAKJtx
            source_type: api_record
            title: 中国历代人物传记资料库：王鎋（CBDB 262675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262675&o=json
            external_identifier: CBDB:262675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_52rQ2AYuWhMRRVhZyj97Fw
        subject_person_id: p_19yi77kuN8w8f2UW7vbua8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7825BzRVJ1QyrPiaVHa2ov
          claim_id: c_52rQ2AYuWhMRRVhZyj97Fw
          source_id: s_wqJMNaK8NfP2DZE1JAKJtx
          stance: supports
          locator: CBDB:262675
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
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

# 王鎋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鎋，明人物。弘治三年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 262675） | accepted |
| name.primary | 王鎋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎋（CBDB 262675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262675&o=json)
