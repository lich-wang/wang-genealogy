---
schema: wang-person/v1
id: p_8efy5RVg9iQS8Xcteu35g9
status: active
merged_into: null
display_name: 常氏
revision: 1
cbdb_id: 148929
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SRXR6xjTIa9abmOXWEG5h_
        subject_person_id: p_8efy5RVg9iQS8Xcteu35g9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 常氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QCF7F-cAuwi36yAe9aogR-
          claim_id: c_SRXR6xjTIa9abmOXWEG5h_
          source_id: s_jdBQpKliBCkDgAlrxt0k0S
          stance: supports
          locator: CBDB:148929
          quotation: null
          interpretation_note: CBDB 明确记录的王通配偶
          source: &a1
            id: s_jdBQpKliBCkDgAlrxt0k0S
            source_type: api_record
            title: 中国历代人物传记资料库：常氏(王通妻)（CBDB 148929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148929&o=json
            external_identifier: CBDB:148929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_UyRfQx6QK_tQ23iwziMcye
        subject_person_id: p_z85WJTPGrij2g9bbAXuC1F
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8efy5RVg9iQS8Xcteu35g9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vPXtcBFiNvBahMhiA4ftni
          claim_id: c_UyRfQx6QK_tQ23iwziMcye
          source_id: s_jdBQpKliBCkDgAlrxt0k0S
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tiaolu 19：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z85WJTPGrij2g9bbAXuC1F
        status: active
        display_name: 王通
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 常氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 常氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_z85WJTPGrij2g9bbAXuC1F | 王通 | accepted |

## 外部来源

- [中国历代人物传记资料库：常氏(王通妻)（CBDB 148929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148929&o=json)
