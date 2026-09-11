---
schema: wang-person/v1
id: p_JcLDd2AkhQG4nQStq42FNC
status: active
merged_into: null
display_name: 王溥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C4mZu2g4HjeUM8CxE55xkn
        subject_person_id: p_JcLDd2AkhQG4nQStq42FNC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4JVhVSYphGH2248bazwLyL
          claim_id: c_C4mZu2g4HjeUM8CxE55xkn
          source_id: s_VzrtEC2MbG12ZZF8BDusJj
          stance: supports
          locator: CBDB:153010
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153010）
          source: &a1
            id: s_VzrtEC2MbG12ZZF8BDusJj
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 153010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153010&o=json
            external_identifier: CBDB:153010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pCyEhzwNCwbNLfEodnASdU
        subject_person_id: p_JcLDd2AkhQG4nQStq42FNC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥，唐人物。籍贯江都，曾任州刺史。（中国历代人物传记资料库 CBDB 153010）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_je8aAcCb_-oOBZscnbZFuK
          claim_id: c_pCyEhzwNCwbNLfEodnASdU
          source_id: s_VzrtEC2MbG12ZZF8BDusJj
          stance: supports
          locator: CBDB:153010
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IkdwH8Fm1FGsu45UP2NeVV
        subject_person_id: p_YN2bi35jN8EKBymoEEUjxN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JcLDd2AkhQG4nQStq42FNC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yIOXxjkVQMxp84yg0Uo2pk
          claim_id: c_IkdwH8Fm1FGsu45UP2NeVV
          source_id: s_VzrtEC2MbG12ZZF8BDusJj
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 486：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YN2bi35jN8EKBymoEEUjxN
        status: active
        display_name: 王惠忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | 王溥，唐人物。籍贯江都，曾任州刺史。（中国历代人物传记资料库 CBDB 153010） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YN2bi35jN8EKBymoEEUjxN | 王惠忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 153010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153010&o=json)
