---
schema: wang-person/v1
id: p_55kRYvfKuc5skQp3jaRLSP
status: active
merged_into: null
display_name: 王元亮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tiL9jB22qjRPJpAkvT8EGo
        subject_person_id: p_55kRYvfKuc5skQp3jaRLSP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vDPzS13xqE32Yi91XxTVut
          claim_id: c_tiL9jB22qjRPJpAkvT8EGo
          source_id: s_v9mrUd9LJrnuL4AekdUihW
          stance: supports
          locator: CBDB:158557
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158557）
          source: &a1
            id: s_v9mrUd9LJrnuL4AekdUihW
            source_type: api_record
            title: 中国历代人物传记资料库：王元亮（CBDB 158557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158557&o=json
            external_identifier: CBDB:158557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xZmbkrUFg3K2GXAJo1DZYC
        subject_person_id: p_55kRYvfKuc5skQp3jaRLSP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元亮，唐人物。籍贯廣平。（中国历代人物传记资料库 CBDB 158557）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S44JDQPo5MVUaMZNrRxrOs
          claim_id: c_xZmbkrUFg3K2GXAJo1DZYC
          source_id: s_v9mrUd9LJrnuL4AekdUihW
          stance: supports
          locator: CBDB:158557
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LzmiiDd1pGLHc-HDqWPY48
        subject_person_id: p_GJeyWZ8BmQEGkRVveGseKt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_55kRYvfKuc5skQp3jaRLSP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uoTv1s_rDlcxxMkyWGjt3i
          claim_id: c_LzmiiDd1pGLHc-HDqWPY48
          source_id: s_v9mrUd9LJrnuL4AekdUihW
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 7：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GJeyWZ8BmQEGkRVveGseKt
        status: active
        display_name: 王方徹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元亮 | accepted |
| bio.summary | 王元亮，唐人物。籍贯廣平。（中国历代人物传记资料库 CBDB 158557） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GJeyWZ8BmQEGkRVveGseKt | 王方徹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元亮（CBDB 158557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158557&o=json)
