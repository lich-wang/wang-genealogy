---
schema: wang-person/v1
id: p_xMJ31sywd2sF93wwJMjwCi
status: active
merged_into: null
display_name: 王蘗屏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fvNEkRU6i9QwYiB1FHptDo
        subject_person_id: p_xMJ31sywd2sF93wwJMjwCi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘗屏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ay4NuodNKnWFdKr8nE9aXg
          claim_id: c_fvNEkRU6i9QwYiB1FHptDo
          source_id: s_qC524Sdba3rMTaNw7NZUAN
          stance: supports
          locator: CBDB:562664
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562664）
          source: &a1
            id: s_qC524Sdba3rMTaNw7NZUAN
            source_type: api_record
            title: 中国历代人物传记资料库：王蘗屏（CBDB 562664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562664&o=json
            external_identifier: CBDB:562664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wPRr36Skqgz3xhReKx4sjz
        subject_person_id: p_xMJ31sywd2sF93wwJMjwCi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘗屏，明人物。籍贯山陰，身份为詩人。（中国历代人物传记资料库 CBDB 562664）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Skk9FxUNuApdA6QIoeeGd3
          claim_id: c_wPRr36Skqgz3xhReKx4sjz
          source_id: s_qC524Sdba3rMTaNw7NZUAN
          stance: supports
          locator: CBDB:562664
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9AMkAYxYQ5XAfjosaE_jYl
        subject_person_id: p_YDMKprHypVe8Lcrbj9sFHn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xMJ31sywd2sF93wwJMjwCi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SLRCNan4sTxEcjAVgOTnO-
          claim_id: c_9AMkAYxYQ5XAfjosaE_jYl
          source_id: s_qC524Sdba3rMTaNw7NZUAN
          stance: supports
          locator: 紹興府志:八十卷，lgid=316645：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YDMKprHypVe8Lcrbj9sFHn
        status: active
        display_name: 王埜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王蘗屏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘗屏 | accepted |
| bio.summary | 王蘗屏，明人物。籍贯山陰，身份为詩人。（中国历代人物传记资料库 CBDB 562664） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YDMKprHypVe8Lcrbj9sFHn | 王埜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘗屏（CBDB 562664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562664&o=json)
