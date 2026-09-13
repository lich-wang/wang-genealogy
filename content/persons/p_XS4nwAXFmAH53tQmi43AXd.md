---
schema: wang-person/v1
id: p_XS4nwAXFmAH53tQmi43AXd
status: active
merged_into: null
display_name: 王罍
cbdb_id: 266729
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_72AK9UFvyyF5yy1ZqhaJfY
        subject_person_id: p_XS4nwAXFmAH53tQmi43AXd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王罍，明人物。弘治六年進士，曾任同知。（中国历代人物传记资料库 CBDB 266729）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Gky4IPcqY2am52hbB23SJ1
          claim_id: c_72AK9UFvyyF5yy1ZqhaJfY
          source_id: s_MDpqgWNHEj6A8FLWAD3zbM
          stance: supports
          locator: CBDB:266729
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MDpqgWNHEj6A8FLWAD3zbM
            source_type: api_record
            title: 中国历代人物传记资料库：王罍（CBDB 266729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266729&o=json
            external_identifier: CBDB:266729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7FbSApLi8om47KCFVJ8E5D
        subject_person_id: p_XS4nwAXFmAH53tQmi43AXd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王罍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AR1ikyLY25UqnjE2xKz3HU
          claim_id: c_7FbSApLi8om47KCFVJ8E5D
          source_id: s_MDpqgWNHEj6A8FLWAD3zbM
          stance: supports
          locator: CBDB:266729
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
  descendants:
    - claim:
        id: c_XVoF_fzMwsOjyelmxDyRrK
        subject_person_id: p_XS4nwAXFmAH53tQmi43AXd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZPR9uVttv_WOgKr7Tx0zK
          claim_id: c_XVoF_fzMwsOjyelmxDyRrK
          source_id: s_MDpqgWNHEj6A8FLWAD3zbM
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MDpqgWNHEj6A8FLWAD3zbM
            source_type: api_record
            title: 中国历代人物传记资料库：王罍（CBDB 266729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266729&o=json
            external_identifier: CBDB:266729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_xF6zkmGrf6YvrKuUEphBZ1
        status: active
        display_name: 王震
        merged_into_person_id: null
  other: []
---

# 王罍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王罍，明人物。弘治六年進士，曾任同知。（中国历代人物传记资料库 CBDB 266729） | accepted |
| name.primary | 王罍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_xF6zkmGrf6YvrKuUEphBZ1 | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王罍（CBDB 266729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266729&o=json)
