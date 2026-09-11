---
schema: wang-person/v1
id: p_7R4n26F86UHbBJWQVDXKxm
status: active
merged_into: null
display_name: 王希祥
cbdb_id: 164524
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LakXEuTcmzCE5H7kYcKFMT
        subject_person_id: p_7R4n26F86UHbBJWQVDXKxm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希祥，唐人物。中国历代人物传记资料库（CBDB）以人物编号 164524 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_tSbrmk3SX6r-yJX6GjlB7x
          claim_id: c_LakXEuTcmzCE5H7kYcKFMT
          source_id: s_WmENuiUcqhMDGZDv9QhqYE
          stance: supports
          locator: CBDB:164524
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_WmENuiUcqhMDGZDv9QhqYE
            source_type: api_record
            title: 中国历代人物传记资料库：王希祥（CBDB 164524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164524&o=json
            external_identifier: CBDB:164524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DXQrQLVKhDG9B344oTaKYu
        subject_person_id: p_7R4n26F86UHbBJWQVDXKxm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6EezsECU78tnDmpAR9wuS6
          claim_id: c_DXQrQLVKhDG9B344oTaKYu
          source_id: s_WmENuiUcqhMDGZDv9QhqYE
          stance: supports
          locator: CBDB:164524
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_WmENuiUcqhMDGZDv9QhqYE
            source_type: api_record
            title: 中国历代人物传记资料库：王希祥（CBDB 164524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164524&o=json
            external_identifier: CBDB:164524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_k_OZ8xuydNH4mxIgQwbMkQ
        subject_person_id: p_58eKuyTw67vdxXTN289qWv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7R4n26F86UHbBJWQVDXKxm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gldJ_nV0s9sbnyDmTqJqen
          claim_id: c_k_OZ8xuydNH4mxIgQwbMkQ
          source_id: s_4gpK9QVaKZiFw24XEk6HV6
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao13：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4gpK9QVaKZiFw24XEk6HV6
            source_type: api_record
            title: 中国历代人物传记资料库：王守言（CBDB 142958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142958&o=json
            external_identifier: CBDB:142958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.219Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_58eKuyTw67vdxXTN289qWv
        status: active
        display_name: 王守言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希祥，唐人物。中国历代人物传记资料库（CBDB）以人物编号 164524 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王希祥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_58eKuyTw67vdxXTN289qWv | 王守言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守言（CBDB 142958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142958&o=json)
- [中国历代人物传记资料库：王希祥（CBDB 164524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164524&o=json)
