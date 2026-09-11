---
schema: wang-person/v1
id: p_JQ2MtbSvxnZ2BtVWDiPUDG
status: active
merged_into: null
display_name: 王俸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BJSu1gagr5uJpoiUGcCHfo
        subject_person_id: p_JQ2MtbSvxnZ2BtVWDiPUDG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cNYqg7KuPT9A3zQz55Jq8H
          claim_id: c_BJSu1gagr5uJpoiUGcCHfo
          source_id: s_JwMpqMiLa7hEmmJ6KKpRvo
          stance: supports
          locator: CBDB:307680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（307680）
          source: &a1
            id: s_JwMpqMiLa7hEmmJ6KKpRvo
            source_type: api_record
            title: 中国历代人物传记资料库：王俸（CBDB 307680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307680&o=json
            external_identifier: CBDB:307680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.792Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5B1iWFW5EjFE8Jp4M7Br8q
        subject_person_id: p_JQ2MtbSvxnZ2BtVWDiPUDG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俸，明人物。嘉靖二十三年進士，曾任七品散官。（中国历代人物传记资料库 CBDB 307680）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vkrXR9DwkzatcUH1U8CzyE
          claim_id: c_5B1iWFW5EjFE8Jp4M7Br8q
          source_id: s_JwMpqMiLa7hEmmJ6KKpRvo
          stance: supports
          locator: CBDB:307680
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
        id: c_3cxC_OItnyEDAraJ3Itjfi
        subject_person_id: p_JQ2MtbSvxnZ2BtVWDiPUDG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Rwr4J5rL0nDYHy1Ljqz4v
          claim_id: c_3cxC_OItnyEDAraJ3Itjfi
          source_id: s_JwMpqMiLa7hEmmJ6KKpRvo
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百四十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WQq7QzkQTzLqnMJ812eWYA
        status: active
        display_name: 王之誥
        merged_into_person_id: null
  other: []
---

# 王俸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俸 | accepted |
| bio.summary | 王俸，明人物。嘉靖二十三年進士，曾任七品散官。（中国历代人物传记资料库 CBDB 307680） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_WQq7QzkQTzLqnMJ812eWYA | 王之誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俸（CBDB 307680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307680&o=json)
