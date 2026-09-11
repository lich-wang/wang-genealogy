---
schema: wang-person/v1
id: p_J74e2wYWEyiwu6bxJPyonr
status: active
merged_into: null
display_name: 王瑞藻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wH1hNwEPTrtLGd41EKiS29
        subject_person_id: p_J74e2wYWEyiwu6bxJPyonr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B9o8DYSD6zb7RUaSfankdH
          claim_id: c_wH1hNwEPTrtLGd41EKiS29
          source_id: s_wsLA2McYCGQ9uVTHWT5yXi
          stance: supports
          locator: CBDB:639436
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639436）
          source: &a1
            id: s_wsLA2McYCGQ9uVTHWT5yXi
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞藻（CBDB 639436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639436&o=json
            external_identifier: CBDB:639436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w84bbHC1mVHyjPCfUUkgeD
        subject_person_id: p_J74e2wYWEyiwu6bxJPyonr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞藻，清人物。籍贯膠州，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 639436）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bVn7bwj_ZiClCVv2AObd7R
          claim_id: c_w84bbHC1mVHyjPCfUUkgeD
          source_id: s_wsLA2McYCGQ9uVTHWT5yXi
          stance: supports
          locator: CBDB:639436
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

# 王瑞藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞藻 | accepted |
| bio.summary | 王瑞藻，清人物。籍贯膠州，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 639436） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑞藻（CBDB 639436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639436&o=json)
