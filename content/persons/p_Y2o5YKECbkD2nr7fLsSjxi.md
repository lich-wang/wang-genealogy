---
schema: wang-person/v1
id: p_Y2o5YKECbkD2nr7fLsSjxi
status: active
merged_into: null
display_name: 王政
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s4xVERiMvzre16nqsqMoQ1
        subject_person_id: p_Y2o5YKECbkD2nr7fLsSjxi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2PxxSmkjxZP3A9K5CrXKK1
          claim_id: c_s4xVERiMvzre16nqsqMoQ1
          source_id: s_N5Dpuj1GVLjs8addUr7yKa
          stance: supports
          locator: CBDB:236826
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236826）
          source: &a1
            id: s_N5Dpuj1GVLjs8addUr7yKa
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 236826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236826&o=json
            external_identifier: CBDB:236826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_exYxNCAfZjYzwExM9cD7Ev
        subject_person_id: p_Y2o5YKECbkD2nr7fLsSjxi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 236826）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FoKcTvy5XbbvZB0ewVaqOM
          claim_id: c_exYxNCAfZjYzwExM9cD7Ev
          source_id: s_N5Dpuj1GVLjs8addUr7yKa
          stance: supports
          locator: CBDB:236826
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
        id: c_93YjcdRvpvGXHfNeIC8qPX
        subject_person_id: p_Y2o5YKECbkD2nr7fLsSjxi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CTUQz-mwZOsfjrd8ZiDRvE
          claim_id: c_93YjcdRvpvGXHfNeIC8qPX
          source_id: s_N5Dpuj1GVLjs8addUr7yKa
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        status: active
        display_name: 王儉
        merged_into_person_id: null
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 236826） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_gVNWQ2fsh1sB6kRPqwK7Rn | 王儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 236826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236826&o=json)
