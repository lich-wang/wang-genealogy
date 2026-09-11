---
schema: wang-person/v1
id: p_fLj7eCRaVcvbsywEcVLYML
status: active
merged_into: null
display_name: 王象峰
cbdb_id: 513477
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WLdkNa3qsC2AViMRvkM6pC
        subject_person_id: p_fLj7eCRaVcvbsywEcVLYML
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象峰，清人物。中国历代人物传记资料库（CBDB）以人物编号 513477 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_45L0cu3xRwRZQGfAvCplZm
          claim_id: c_WLdkNa3qsC2AViMRvkM6pC
          source_id: s_3J55f7GgUQb2B9ARKv92bi
          stance: supports
          locator: CBDB:513477
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_3J55f7GgUQb2B9ARKv92bi
            source_type: api_record
            title: 中国历代人物传记资料库：王象峰（CBDB 513477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513477&o=json
            external_identifier: CBDB:513477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_a8JkGmo2JxTQNedYcpFTFK
        subject_person_id: p_fLj7eCRaVcvbsywEcVLYML
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象峰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DLz3VGj4Qzrjb4VKW8x4ux
          claim_id: c_a8JkGmo2JxTQNedYcpFTFK
          source_id: s_3J55f7GgUQb2B9ARKv92bi
          stance: supports
          locator: CBDB:513477
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_3J55f7GgUQb2B9ARKv92bi
            source_type: api_record
            title: 中国历代人物传记资料库：王象峰（CBDB 513477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513477&o=json
            external_identifier: CBDB:513477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_GrNd4b261r-Ku8TSZJTzu5
        subject_person_id: p_fLj7eCRaVcvbsywEcVLYML
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6sBCzo4EktCjTb4NiwWGko
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VJZgV2T_9Sx8sQEBz3rhvJ
          claim_id: c_GrNd4b261r-Ku8TSZJTzu5
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），42：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HCahiMsh5E8CcBDkdkb7uC
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 56849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56849&o=json
            external_identifier: CBDB:56849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6sBCzo4EktCjTb4NiwWGko
        status: active
        display_name: 王傑
        merged_into_person_id: null
  other: []
---

# 王象峰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王象峰，清人物。中国历代人物传记资料库（CBDB）以人物编号 513477 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王象峰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_6sBCzo4EktCjTb4NiwWGko | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 56849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56849&o=json)
- [中国历代人物传记资料库：王象峰（CBDB 513477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513477&o=json)
