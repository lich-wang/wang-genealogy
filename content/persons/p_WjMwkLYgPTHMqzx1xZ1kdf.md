---
schema: wang-person/v1
id: p_WjMwkLYgPTHMqzx1xZ1kdf
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 444803
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rgY5YDL86Er8sxtWvfFaJX
        subject_person_id: p_WjMwkLYgPTHMqzx1xZ1kdf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(永穆公主)（CBDB 444803）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rSiyKWLfS9CasSqYNjwLS9
          claim_id: c_rgY5YDL86Er8sxtWvfFaJX
          source_id: s_-8rR-2TSdT85Nbc7NnVDe8
          stance: supports
          locator: CBDB:444803
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_-8rR-2TSdT85Nbc7NnVDe8
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(永穆公主)（CBDB 444803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444803&o=json
            external_identifier: CBDB:444803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1FQefL1P0CDlaz-xlnlx5O
        subject_person_id: p_WjMwkLYgPTHMqzx1xZ1kdf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YsehnLrv1U8ER6zB8GBtP7
          claim_id: c_1FQefL1P0CDlaz-xlnlx5O
          source_id: s_-8rR-2TSdT85Nbc7NnVDe8
          stance: supports
          locator: CBDB:444803
          quotation: null
          interpretation_note: CBDB 明确记录的王繇配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_wcjNuwfaWAVzGvmVF-5qJF
        subject_person_id: p_Lr8L9s9EF6He1HszkYXFMW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WjMwkLYgPTHMqzx1xZ1kdf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H0uhY1-ER92djQFWe59iQ6
          claim_id: c_wcjNuwfaWAVzGvmVF-5qJF
          source_id: s_-8rR-2TSdT85Nbc7NnVDe8
          stance: supports
          locator: 新唐書，3657：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Lr8L9s9EF6He1HszkYXFMW
        status: active
        display_name: 王繇
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(永穆公主)（CBDB 444803）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Lr8L9s9EF6He1HszkYXFMW | 王繇 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(永穆公主)（CBDB 444803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444803&o=json)
