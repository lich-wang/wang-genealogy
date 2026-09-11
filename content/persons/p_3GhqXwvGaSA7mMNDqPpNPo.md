---
schema: wang-person/v1
id: p_3GhqXwvGaSA7mMNDqPpNPo
status: active
merged_into: null
display_name: 王煥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YNimKF6QbwRHAnB4E32KHL
        subject_person_id: p_3GhqXwvGaSA7mMNDqPpNPo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TZwFSo44wrynaVPaUa1FDv
          claim_id: c_YNimKF6QbwRHAnB4E32KHL
          source_id: s_PVaHnUbE4MjNeuzSewR1B9
          stance: supports
          locator: CBDB:147879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147879）
          source: &a1
            id: s_PVaHnUbE4MjNeuzSewR1B9
            source_type: api_record
            title: 中国历代人物传记资料库：王煥（CBDB 147879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147879&o=json
            external_identifier: CBDB:147879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Z1DPMHbFEiBJzcBzDRwHX
        subject_person_id: p_3GhqXwvGaSA7mMNDqPpNPo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥，唐人物。籍贯北市，曾任錄事參軍、上輕車都尉。（中国历代人物传记资料库 CBDB 147879）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TrkrJr1FuDLz-dIFyQYMOM
          claim_id: c_3Z1DPMHbFEiBJzcBzDRwHX
          source_id: s_PVaHnUbE4MjNeuzSewR1B9
          stance: supports
          locator: CBDB:147879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GZGNVhsWG_DDaycADeNqsC
        subject_person_id: p_3GhqXwvGaSA7mMNDqPpNPo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ns7z95FLd6ZsL2zdnh2dfV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mTmHxHhdVBbt3sux1ljLnc
          claim_id: c_GZGNVhsWG_DDaycADeNqsC
          source_id: s_PVaHnUbE4MjNeuzSewR1B9
          stance: supports
          locator: 唐代墓誌匯編:二卷，Longshuo 71：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ns7z95FLd6ZsL2zdnh2dfV
        status: active
        display_name: 王楷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王煥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煥 | accepted |
| bio.summary | 王煥，唐人物。籍贯北市，曾任錄事參軍、上輕車都尉。（中国历代人物传记资料库 CBDB 147879） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ns7z95FLd6ZsL2zdnh2dfV | 王楷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煥（CBDB 147879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147879&o=json)
