---
schema: wang-person/v1
id: p_BiNVgvYz3nJ9G3CCb78YaH
status: active
merged_into: null
display_name: 王周
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d895Fus8KBrMaPZEfDtqyV
        subject_person_id: p_BiNVgvYz3nJ9G3CCb78YaH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pvX8YEs99sdvDT8xn5pn5b
          claim_id: c_d895Fus8KBrMaPZEfDtqyV
          source_id: s_EJcpUPACuG7TChvvw4mLdp
          stance: supports
          locator: CBDB:19905
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19905）
          source: &a1
            id: s_EJcpUPACuG7TChvvw4mLdp
            source_type: api_record
            title: 中国历代人物传记资料库：王周（CBDB 19905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19905&o=json
            external_identifier: CBDB:19905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7hRy69ywQga9n7YGo8LEVM
        subject_person_id: p_BiNVgvYz3nJ9G3CCb78YaH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a5w3uE5FRCAH6qMPvHLFJc
          claim_id: c_7hRy69ywQga9n7YGo8LEVM
          source_id: s_EJcpUPACuG7TChvvw4mLdp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_S60TAavPGl7H4DApsDVKVV
        subject_person_id: p_VJppnzH8QEnRzy4cuHqGDc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BiNVgvYz3nJ9G3CCb78YaH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gneAVh7FEvjLH71QaLpFR
          claim_id: c_S60TAavPGl7H4DApsDVKVV
          source_id: s_EJcpUPACuG7TChvvw4mLdp
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1408：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VJppnzH8QEnRzy4cuHqGDc
        status: active
        display_name: 王文亮
        merged_into_person_id: null
  children:
    - claim:
        id: c_7LPyUmgLPxzkq0Q4azGLEG
        subject_person_id: p_BiNVgvYz3nJ9G3CCb78YaH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W8gB3V15xCSBne67itBg5g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IkcZkQ_CtOx0rqm7P6M3CW
          claim_id: c_7LPyUmgLPxzkq0Q4azGLEG
          source_id: s_EJcpUPACuG7TChvvw4mLdp
          stance: supports
          locator: CBDB 双向互证（子 王夬 ⇄ 父 王周）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_W8gB3V15xCSBne67itBg5g
        status: active
        display_name: 王夬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王周 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VJppnzH8QEnRzy4cuHqGDc | 王文亮 | accepted |
| children | p_W8gB3V15xCSBne67itBg5g | 王夬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王周（CBDB 19905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19905&o=json)
