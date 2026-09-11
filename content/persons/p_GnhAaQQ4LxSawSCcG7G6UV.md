---
schema: wang-person/v1
id: p_GnhAaQQ4LxSawSCcG7G6UV
status: active
merged_into: null
display_name: 王端
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_As9iMWZ1L9AsgKjH3c9YjL
        subject_person_id: p_GnhAaQQ4LxSawSCcG7G6UV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3GJbmYZH83dAfhpjJAEYNS
          claim_id: c_As9iMWZ1L9AsgKjH3c9YjL
          source_id: s_75pZh8AALy5jTamyCy1h6Z
          stance: supports
          locator: CBDB:266938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266938）
          source: &a1
            id: s_75pZh8AALy5jTamyCy1h6Z
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 266938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266938&o=json
            external_identifier: CBDB:266938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UwxKoodMF8HoPNebB5s14k
        subject_person_id: p_GnhAaQQ4LxSawSCcG7G6UV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yJs1UDdotoDxQJeoyV9QU3
          claim_id: c_UwxKoodMF8HoPNebB5s14k
          source_id: s_75pZh8AALy5jTamyCy1h6Z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__3pMzz5yYL7lRMjOjXtDhy
        subject_person_id: p_GnhAaQQ4LxSawSCcG7G6UV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ryQAuRkxcym1JUyP8NWaCG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cKQRIxdMO7lUvF1DbVzzWR
          claim_id: c__3pMzz5yYL7lRMjOjXtDhy
          source_id: s_75pZh8AALy5jTamyCy1h6Z
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ryQAuRkxcym1JUyP8NWaCG
        status: active
        display_name: 王藎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ryQAuRkxcym1JUyP8NWaCG | 王藎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 266938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266938&o=json)
