---
schema: wang-person/v1
id: p_nojPrrKJqFqJjyBvH6ZAkR
status: active
merged_into: null
display_name: 王仲友
cbdb_id: 287100
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iccjTtMiogATyGFUtdHjdj
        subject_person_id: p_nojPrrKJqFqJjyBvH6ZAkR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲友，史料所见人物。本项目依据《中国历代人物传记资料库：王仲友（CBDB 287100）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_hZeyFDMhh2cSOcm8UraYp7
          claim_id: c_iccjTtMiogATyGFUtdHjdj
          source_id: s_KkSzXUozt82pik3ap6JBJq
          stance: supports
          locator: CBDB:287100
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KkSzXUozt82pik3ap6JBJq
            source_type: api_record
            title: 中国历代人物传记资料库：王仲友（CBDB 287100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287100&o=json
            external_identifier: CBDB:287100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kjT75eP5KzDYhTi7oP64PG
        subject_person_id: p_nojPrrKJqFqJjyBvH6ZAkR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲友
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5fzeb1bYN1gY9Lh5P3f2td
          claim_id: c_kjT75eP5KzDYhTi7oP64PG
          source_id: s_KkSzXUozt82pik3ap6JBJq
          stance: supports
          locator: CBDB:287100
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_fdZVEQC8NHMEJCEqh8OIxk
        subject_person_id: p_nojPrrKJqFqJjyBvH6ZAkR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hMbDUQB1GaYNgCJcxGcWWL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uskvdLGJUocVQh1-xtFda8
          claim_id: c_fdZVEQC8NHMEJCEqh8OIxk
          source_id: s_qBXgxBd99XeUmj4pBc6DTT
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第四十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qBXgxBd99XeUmj4pBc6DTT
            source_type: api_record
            title: 中国历代人物传记资料库：王璜（CBDB 202374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202374&o=json
            external_identifier: CBDB:202374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.739Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hMbDUQB1GaYNgCJcxGcWWL
        status: active
        display_name: 王璜
        merged_into_person_id: null
  other: []
---

# 王仲友

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲友，史料所见人物。本项目依据《中国历代人物传记资料库：王仲友（CBDB 287100）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仲友 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hMbDUQB1GaYNgCJcxGcWWL | 王璜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璜（CBDB 202374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202374&o=json)
- [中国历代人物传记资料库：王仲友（CBDB 287100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287100&o=json)
