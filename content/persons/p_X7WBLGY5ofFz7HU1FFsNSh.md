---
schema: wang-person/v1
id: p_X7WBLGY5ofFz7HU1FFsNSh
status: active
merged_into: null
display_name: 王恆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_14fiRtwMeeMJsMyU3XQLPy
        subject_person_id: p_X7WBLGY5ofFz7HU1FFsNSh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VTZ4Xv35ovG62DdZm5vSjn
          claim_id: c_14fiRtwMeeMJsMyU3XQLPy
          source_id: s_XpymcQvkXesikT6ZRGV6Vt
          stance: supports
          locator: CBDB:154881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（154881）
          source: &a1
            id: s_XpymcQvkXesikT6ZRGV6Vt
            source_type: api_record
            title: 中国历代人物传记资料库：王恆（CBDB 154881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154881&o=json
            external_identifier: CBDB:154881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FkLyPJfk76DeUxAJcRJM12
        subject_person_id: p_X7WBLGY5ofFz7HU1FFsNSh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 154881）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HAZTSCceAupSitf6PzffSV
          claim_id: c_FkLyPJfk76DeUxAJcRJM12
          source_id: s_XpymcQvkXesikT6ZRGV6Vt
          stance: supports
          locator: CBDB:154881
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_43NoAQzBvp0SYdANuqGSAG
        subject_person_id: p_hKFRGLXq8WXe249MjHQ238
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X7WBLGY5ofFz7HU1FFsNSh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sx4-o4hvS3Z8rxxlv8w-sh
          claim_id: c_43NoAQzBvp0SYdANuqGSAG
          source_id: s_XpymcQvkXesikT6ZRGV6Vt
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 24：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hKFRGLXq8WXe249MjHQ238
        status: active
        display_name: 王晉俗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恆 | accepted |
| bio.summary | 王恆，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 154881） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hKFRGLXq8WXe249MjHQ238 | 王晉俗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恆（CBDB 154881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154881&o=json)
