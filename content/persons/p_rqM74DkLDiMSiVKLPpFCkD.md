---
schema: wang-person/v1
id: p_rqM74DkLDiMSiVKLPpFCkD
status: active
merged_into: null
display_name: 王惟一
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EkjBo3p6vLQwgY1vyLz21F
        subject_person_id: p_rqM74DkLDiMSiVKLPpFCkD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j6BBaCKkYY16Hxq96Y1wdC
          claim_id: c_EkjBo3p6vLQwgY1vyLz21F
          source_id: s_Gmg6CxitXWzCLxo9Pojk44
          stance: supports
          locator: CBDB:578339
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578339）
          source: &a1
            id: s_Gmg6CxitXWzCLxo9Pojk44
            source_type: api_record
            title: 中国历代人物传记资料库：王惟一（CBDB 578339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578339&o=json
            external_identifier: CBDB:578339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y5KFMZF6ZvgxTdrBTULBiR
        subject_person_id: p_rqM74DkLDiMSiVKLPpFCkD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟一，宋人物。籍贯吉水。（中国历代人物传记资料库 CBDB 578339）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bQYeE_QsimzS9ToXwJxPxS
          claim_id: c_Y5KFMZF6ZvgxTdrBTULBiR
          source_id: s_Gmg6CxitXWzCLxo9Pojk44
          stance: supports
          locator: CBDB:578339
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
  descendants:
    - claim:
        id: c_mhPFGh8Tcn6OCQPwy45Ds_
        subject_person_id: p_rqM74DkLDiMSiVKLPpFCkD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ABKTQQtBYcaiLNDKfsdoKa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DfVV9gNaOQOQ7ovt0hRjJt
          claim_id: c_mhPFGh8Tcn6OCQPwy45Ds_
          source_id: s_Gmg6CxitXWzCLxo9Pojk44
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，四九五  甘文望夫人吳氏壙記：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ABKTQQtBYcaiLNDKfsdoKa
        status: active
        display_name: 王夢良
        merged_into_person_id: null
  other: []
---

# 王惟一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟一 | accepted |
| bio.summary | 王惟一，宋人物。籍贯吉水。（中国历代人物传记资料库 CBDB 578339） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ABKTQQtBYcaiLNDKfsdoKa | 王夢良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟一（CBDB 578339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578339&o=json)
