---
schema: wang-person/v1
id: p_zifx2jXZ4KYQ5E3oJJ9Kmx
status: active
merged_into: null
display_name: 王少微
cbdb_id: 153386
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D1PUV4FnE2qz3H6KpybG5a
        subject_person_id: p_zifx2jXZ4KYQ5E3oJJ9Kmx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王少微，唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 153386）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fme8Ol1lKIU8CtdYG3LVoP
          claim_id: c_D1PUV4FnE2qz3H6KpybG5a
          source_id: s_QmAD9qdgMGWz3bjZxGxeRm
          stance: supports
          locator: CBDB:153386
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QmAD9qdgMGWz3bjZxGxeRm
            source_type: api_record
            title: 中国历代人物传记资料库：王少微（CBDB 153386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153386&o=json
            external_identifier: CBDB:153386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_91Ki9LW5No7df85gtgXc8z
        subject_person_id: p_zifx2jXZ4KYQ5E3oJJ9Kmx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王少微
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_n8Xbcf2CGyCgazpSEwoQyu
          claim_id: c_91Ki9LW5No7df85gtgXc8z
          source_id: s_QmAD9qdgMGWz3bjZxGxeRm
          stance: supports
          locator: CBDB:153386
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T3r6xRBc9yQ5J7sz7-_ECT
        subject_person_id: p_FeBSyMhR8CUYiFybnucP3c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zifx2jXZ4KYQ5E3oJJ9Kmx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4wYBL-ZyPNeozS5AZhUJ7n
          claim_id: c_T3r6xRBc9yQ5J7sz7-_ECT
          source_id: s_QmAD9qdgMGWz3bjZxGxeRm
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 34：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QmAD9qdgMGWz3bjZxGxeRm
            source_type: api_record
            title: 中国历代人物传记资料库：王少微（CBDB 153386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153386&o=json
            external_identifier: CBDB:153386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_FeBSyMhR8CUYiFybnucP3c
        status: active
        display_name: 王秦客
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王少微

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王少微，唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 153386） | accepted |
| name.primary | 王少微 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FeBSyMhR8CUYiFybnucP3c | 王秦客 | accepted |

## 外部来源

- [中国历代人物传记资料库：王少微（CBDB 153386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153386&o=json)
