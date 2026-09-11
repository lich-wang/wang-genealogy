---
schema: wang-person/v1
id: p_YY1rTePcdQsjShFEiKy3Ec
status: active
merged_into: null
display_name: 李孝先
revision: 1
cbdb_id: 55876
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V9uEE7os6CulPtDaeS1ZJi
        subject_person_id: p_YY1rTePcdQsjShFEiKy3Ec
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李孝先，史料所见人物。本项目依据《中国历代人物传记资料库：李孝先（CBDB 55876）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_szcz81CzvvTaQOt8bfCKF1
          claim_id: c_V9uEE7os6CulPtDaeS1ZJi
          source_id: s_WNPWb8292xk2dqpKE2UAtr
          stance: supports
          locator: CBDB:55876
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_WNPWb8292xk2dqpKE2UAtr
            source_type: api_record
            title: 中国历代人物传记资料库：李孝先（CBDB 55876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55876&o=json
            external_identifier: CBDB:55876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_idyX-raa2nr0jer9b8orSU
        subject_person_id: p_YY1rTePcdQsjShFEiKy3Ec
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李孝先
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IDI2poCKT8F1r3kMmdNu7J
          claim_id: c_idyX-raa2nr0jer9b8orSU
          source_id: s_WNPWb8292xk2dqpKE2UAtr
          stance: supports
          locator: CBDB:55876
          quotation: null
          interpretation_note: CBDB 明确记录的王瑤湘配偶
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
        id: c_gUqNG3B6LD4at6oUjt-S-3
        subject_person_id: p_hMDo8ZJE6rxGQVCmjYvY2P
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YY1rTePcdQsjShFEiKy3Ec
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AbDocODLmg9yWSuI2HSS4b
          claim_id: c_gUqNG3B6LD4at6oUjt-S-3
          source_id: s_WNPWb8292xk2dqpKE2UAtr
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #636, HuWenKai #245：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hMDo8ZJE6rxGQVCmjYvY2P
        status: active
        display_name: 王瑤湘
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李孝先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李孝先，史料所见人物。本项目依据《中国历代人物传记资料库：李孝先（CBDB 55876）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 李孝先 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hMDo8ZJE6rxGQVCmjYvY2P | 王瑤湘 | accepted |

## 外部来源

- [中国历代人物传记资料库：李孝先（CBDB 55876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55876&o=json)
