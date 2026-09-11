---
schema: wang-person/v1
id: p_w9i3DxK5tYZ48zzRUjm6Xn
status: active
merged_into: null
display_name: 王警道
cbdb_id: 240078
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1epxNEhzzDdYy951xxYsD8
        subject_person_id: p_w9i3DxK5tYZ48zzRUjm6Xn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王警道，明人物。中国历代人物传记资料库（CBDB）以人物编号 240078 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_plwuy0rrIUzjfsgV7KSw1i
          claim_id: c_1epxNEhzzDdYy951xxYsD8
          source_id: s_mwnQ36a9CaWUzdMFyfHYqV
          stance: supports
          locator: CBDB:240078
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mwnQ36a9CaWUzdMFyfHYqV
            source_type: api_record
            title: 中国历代人物传记资料库：王警道（CBDB 240078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240078&o=json
            external_identifier: CBDB:240078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UUE6NXaMEYv54CmeHXKKkB
        subject_person_id: p_w9i3DxK5tYZ48zzRUjm6Xn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王警道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EquGuCHyJr8MSfNNFPbmKQ
          claim_id: c_UUE6NXaMEYv54CmeHXKKkB
          source_id: s_mwnQ36a9CaWUzdMFyfHYqV
          stance: supports
          locator: CBDB:240078
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_mwnQ36a9CaWUzdMFyfHYqV
            source_type: api_record
            title: 中国历代人物传记资料库：王警道（CBDB 240078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240078&o=json
            external_identifier: CBDB:240078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_BGAsRgmyAfltiReLmXiBRX
        subject_person_id: p_w9i3DxK5tYZ48zzRUjm6Xn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GGoCNoVNHxmsGgT4y3whCN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iRP78Ds2L-ZLbpxPaGRaCP
          claim_id: c_BGAsRgmyAfltiReLmXiBRX
          source_id: s_mwnQ36a9CaWUzdMFyfHYqV
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第八十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GGoCNoVNHxmsGgT4y3whCN
        status: active
        display_name: 王瓖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王警道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王警道，明人物。中国历代人物传记资料库（CBDB）以人物编号 240078 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王警道 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GGoCNoVNHxmsGgT4y3whCN | 王瓖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王警道（CBDB 240078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240078&o=json)
