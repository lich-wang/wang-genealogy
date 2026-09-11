---
schema: wang-person/v1
id: p_cVodQoEouWPyWUS45StXqq
status: active
merged_into: null
display_name: 王霆瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GXYRis6p6S7EVEQCRnEpNp
        subject_person_id: p_cVodQoEouWPyWUS45StXqq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霆瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x2Ss7BRBkN6mFHSxj4zEHT
          claim_id: c_GXYRis6p6S7EVEQCRnEpNp
          source_id: s_e2VWXgSajTcFFBoKPAyWFY
          stance: supports
          locator: CBDB:543447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（543447）
          source: &a1
            id: s_e2VWXgSajTcFFBoKPAyWFY
            source_type: api_record
            title: 中国历代人物传记资料库：王霆瑞（CBDB 543447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543447&o=json
            external_identifier: CBDB:543447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RpN4Pp3ZMAME53SDzwheXG
        subject_person_id: p_cVodQoEouWPyWUS45StXqq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霆瑞，宋人物。籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 543447）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ejwyC108idwCW6kUWUyB_1
          claim_id: c_RpN4Pp3ZMAME53SDzwheXG
          source_id: s_e2VWXgSajTcFFBoKPAyWFY
          stance: supports
          locator: CBDB:543447
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

# 王霆瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霆瑞 | accepted |
| bio.summary | 王霆瑞，宋人物。籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 543447） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霆瑞（CBDB 543447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543447&o=json)
