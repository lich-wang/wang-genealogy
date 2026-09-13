---
schema: wang-person/v1
id: p_ty9PKEiXJ1CHxxCE6Rgx3y
status: active
merged_into: null
display_name: 王文琬
cbdb_id: 250474
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6Msha6CKKUsbzG3jpx74ie
        subject_person_id: p_ty9PKEiXJ1CHxxCE6Rgx3y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文琬，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 250474）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jz9Xu652o85VGEyCi004ZM
          claim_id: c_6Msha6CKKUsbzG3jpx74ie
          source_id: s_JCYmXraF4bZ7XZi2CXehtL
          stance: supports
          locator: CBDB:250474
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JCYmXraF4bZ7XZi2CXehtL
            source_type: api_record
            title: 中国历代人物传记资料库：王文琬（CBDB 250474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250474&o=json
            external_identifier: CBDB:250474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eFJsfzpWoLKJ4Aja94evFV
        subject_person_id: p_ty9PKEiXJ1CHxxCE6Rgx3y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文琬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EKM4R9B6MKBcNB2vEVqBG1
          claim_id: c_eFJsfzpWoLKJ4Aja94evFV
          source_id: s_JCYmXraF4bZ7XZi2CXehtL
          stance: supports
          locator: CBDB:250474
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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
        id: c_-A9Rsm7Q5hUQUb8AXcOMXY
        subject_person_id: p_ty9PKEiXJ1CHxxCE6Rgx3y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6EMaiK2d7QYsew9Vg9gPZP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__WMXllYjHh-oPbrFiNaxq1
          claim_id: c_-A9Rsm7Q5hUQUb8AXcOMXY
          source_id: s_U4WGeE3TRg6Y2JCL5J84jy
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百八十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U4WGeE3TRg6Y2JCL5J84jy
            source_type: api_record
            title: 中国历代人物传记资料库：王華（CBDB 199850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199850&o=json
            external_identifier: CBDB:199850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.580Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6EMaiK2d7QYsew9Vg9gPZP
        status: active
        display_name: 王華
        merged_into_person_id: null
  other: []
---

# 王文琬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文琬，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 250474） | accepted |
| name.primary | 王文琬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_6EMaiK2d7QYsew9Vg9gPZP | 王華 | accepted |

## 外部来源

- [中国历代人物传记资料库：王華（CBDB 199850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199850&o=json)
- [中国历代人物传记资料库：王文琬（CBDB 250474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250474&o=json)
