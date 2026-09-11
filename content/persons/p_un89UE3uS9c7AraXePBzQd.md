---
schema: wang-person/v1
id: p_un89UE3uS9c7AraXePBzQd
status: active
merged_into: null
display_name: 王乾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WKJj8Tz54APxeA4CYheihQ
        subject_person_id: p_un89UE3uS9c7AraXePBzQd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xnJBKjK3452YW5Po47hEYw
          claim_id: c_WKJj8Tz54APxeA4CYheihQ
          source_id: s_GDhZp4yTa8qY5cCcLu4ocm
          stance: supports
          locator: CBDB:320119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320119）
          source: &a1
            id: s_GDhZp4yTa8qY5cCcLu4ocm
            source_type: api_record
            title: 中国历代人物传记资料库：王乾（CBDB 320119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320119&o=json
            external_identifier: CBDB:320119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_92TYRor1XCgL5FWfn7ATVr
        subject_person_id: p_un89UE3uS9c7AraXePBzQd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾，明人物。嘉靖三十五年進士。（中国历代人物传记资料库 CBDB 320119）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rBVTe6s3rRuY3qrtng1IDa
          claim_id: c_92TYRor1XCgL5FWfn7ATVr
          source_id: s_GDhZp4yTa8qY5cCcLu4ocm
          stance: supports
          locator: CBDB:320119
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
        id: c_fsuwQnuua2WwwRLzEAbTYH
        subject_person_id: p_un89UE3uS9c7AraXePBzQd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JCIRR5HvPZKrnqaL5A7DyL
          claim_id: c_fsuwQnuua2WwwRLzEAbTYH
          source_id: s_GDhZp4yTa8qY5cCcLu4ocm
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_R58pqFjKH7zhFPrnUA5Ato
        status: active
        display_name: 王楷
        merged_into_person_id: null
  other: []
---

# 王乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乾 | accepted |
| bio.summary | 王乾，明人物。嘉靖三十五年進士。（中国历代人物传记资料库 CBDB 320119） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_R58pqFjKH7zhFPrnUA5Ato | 王楷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王乾（CBDB 320119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320119&o=json)
