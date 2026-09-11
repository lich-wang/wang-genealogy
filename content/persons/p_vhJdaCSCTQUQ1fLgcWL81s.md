---
schema: wang-person/v1
id: p_vhJdaCSCTQUQ1fLgcWL81s
status: active
merged_into: null
display_name: 洪淑儀
revision: 1
cbdb_id: 121664
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KGD6vGUr1mQZmxvSi6EZOY
        subject_person_id: p_vhJdaCSCTQUQ1fLgcWL81s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 洪淑儀，史料所见人物。本项目依据《中国历代人物传记资料库：洪淑儀（CBDB 121664）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OqkYRXUF0djZy4MA5BF76w
          claim_id: c_KGD6vGUr1mQZmxvSi6EZOY
          source_id: s_bmQPtd0BshLLUvlB9kwfc_
          stance: supports
          locator: CBDB:121664
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_bmQPtd0BshLLUvlB9kwfc_
            source_type: api_record
            title: 中国历代人物传记资料库：洪淑儀（CBDB 121664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121664&o=json
            external_identifier: CBDB:121664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ktv6LGQsGEAkyXm3VZbD8h
        subject_person_id: p_vhJdaCSCTQUQ1fLgcWL81s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 洪淑儀
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hdhedls2FNnRAgXTXFxSTH
          claim_id: c_Ktv6LGQsGEAkyXm3VZbD8h
          source_id: s_bmQPtd0BshLLUvlB9kwfc_
          stance: supports
          locator: CBDB:121664
          quotation: null
          interpretation_note: CBDB 明确记录的王翰君配偶
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
        id: c_A_3GaYkwJR3SjLB5cI6fGZ
        subject_person_id: p_x2T6ocCWYMY49gmSp3QJnj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vhJdaCSCTQUQ1fLgcWL81s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0jESm6CPb4v00xl51SrhPI
          claim_id: c_A_3GaYkwJR3SjLB5cI6fGZ
          source_id: s_bmQPtd0BshLLUvlB9kwfc_
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4300：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x2T6ocCWYMY49gmSp3QJnj
        status: active
        display_name: 王翰君
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 洪淑儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 洪淑儀，史料所见人物。本项目依据《中国历代人物传记资料库：洪淑儀（CBDB 121664）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 洪淑儀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_x2T6ocCWYMY49gmSp3QJnj | 王翰君 | accepted |

## 外部来源

- [中国历代人物传记资料库：洪淑儀（CBDB 121664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121664&o=json)
