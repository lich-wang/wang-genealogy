---
schema: wang-person/v1
id: p_omB1ZnjjXZPsF2vMKoaaLR
status: active
merged_into: null
display_name: 王定國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EnES51m1YryfErJG6ardBv
        subject_person_id: p_omB1ZnjjXZPsF2vMKoaaLR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UFhUdr2c77mFzqyMDLf3Ah
          claim_id: c_EnES51m1YryfErJG6ardBv
          source_id: s_EwirNhGjV84RM7Hj4irCGo
          stance: supports
          locator: CBDB:45900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45900）
          source: &a1
            id: s_EwirNhGjV84RM7Hj4irCGo
            source_type: api_record
            title: 中国历代人物传记资料库：王定國（CBDB 45900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45900&o=json
            external_identifier: CBDB:45900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.709Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JRaEHnRogKxe6kHsQfjFK8
        subject_person_id: p_omB1ZnjjXZPsF2vMKoaaLR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定國，宋人物。籍贯陽曲。（中国历代人物传记资料库 CBDB 45900）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EqdMY0w_Tw_7JgFzQ7YkF3
          claim_id: c_JRaEHnRogKxe6kHsQfjFK8
          source_id: s_EwirNhGjV84RM7Hj4irCGo
          stance: supports
          locator: CBDB:45900
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

# 王定國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定國 | accepted |
| bio.summary | 王定國，宋人物。籍贯陽曲。（中国历代人物传记资料库 CBDB 45900） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定國（CBDB 45900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45900&o=json)
