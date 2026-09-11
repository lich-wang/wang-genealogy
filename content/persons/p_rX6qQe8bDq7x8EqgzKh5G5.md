---
schema: wang-person/v1
id: p_rX6qQe8bDq7x8EqgzKh5G5
status: active
merged_into: null
display_name: 王祖武
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7egcuZNT3dDPsiXkoei1NP
        subject_person_id: p_rX6qQe8bDq7x8EqgzKh5G5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JZKKSM5fuxyKXs8gK5L8Vr
          claim_id: c_7egcuZNT3dDPsiXkoei1NP
          source_id: s_f5SRHuhjXwhkk3DyKpCtQC
          stance: supports
          locator: CBDB:465288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465288）
          source: &a1
            id: s_f5SRHuhjXwhkk3DyKpCtQC
            source_type: api_record
            title: 中国历代人物传记资料库：王祖武（CBDB 465288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465288&o=json
            external_identifier: CBDB:465288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p3rvqQvq7eAjNdSZVyoW4r
        subject_person_id: p_rX6qQe8bDq7x8EqgzKh5G5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖武，清人物。入仕進士，曾任守備。（中国历代人物传记资料库 CBDB 465288）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mYZttcGRJ-GhxrF8J4x_WP
          claim_id: c_p3rvqQvq7eAjNdSZVyoW4r
          source_id: s_f5SRHuhjXwhkk3DyKpCtQC
          stance: supports
          locator: CBDB:465288
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
  descendants: []
  other: []
---

# 王祖武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖武 | accepted |
| bio.summary | 王祖武，清人物。入仕進士，曾任守備。（中国历代人物传记资料库 CBDB 465288） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖武（CBDB 465288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465288&o=json)
