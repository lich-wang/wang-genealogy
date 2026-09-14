---
schema: wang-person/v1
id: p_ZKxy5hUbt7MJA1exnNYFRa
status: active
merged_into: null
display_name: 王緄
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3J2NVTHZHj9GFWRcNdALCC
        subject_person_id: p_ZKxy5hUbt7MJA1exnNYFRa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6f4uTaXmgMnSJ58EDDc292
          claim_id: c_3J2NVTHZHj9GFWRcNdALCC
          source_id: s_HYQ4mjy27oB8q9BjxyHEhp
          stance: supports
          locator: CBDB:209206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209206）
          source: &a1
            id: s_HYQ4mjy27oB8q9BjxyHEhp
            source_type: api_record
            title: 中国历代人物传记资料库：王緄（CBDB 209206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209206&o=json
            external_identifier: CBDB:209206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QqyR6DmJUXdRbrXThFNLyH
        subject_person_id: p_ZKxy5hUbt7MJA1exnNYFRa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緄，明人物。隆慶五年進士，籍贯文安。（中国历代人物传记资料库 CBDB 209206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6urAvkiJyLIEmFA2u9bbke
          claim_id: c_QqyR6DmJUXdRbrXThFNLyH
          source_id: s_HYQ4mjy27oB8q9BjxyHEhp
          stance: supports
          locator: CBDB:209206
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FQIqOjNFErU-LDZdzFJ2EP
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZKxy5hUbt7MJA1exnNYFRa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ix9NVzWRul5jUeKFB9Qsnn
          claim_id: c_FQIqOjNFErU-LDZdzFJ2EP
          source_id: s_S2OJ0_lkF8Q1KO9ME4HI2S
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王緄 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王緄 之父／母。
          source:
            id: s_S2OJ0_lkF8Q1KO9ME4HI2S
            source_type: api_record
            title: 中国历代人物传记资料库：王緄（CBDB 209206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209206&o=json
            external_identifier: CBDB:209206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s94RydQTdDQooKZ8AoB28k
        status: active
        display_name: 王儀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9GWVu1wSUB57wuuIqoz6V7
        subject_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZKxy5hUbt7MJA1exnNYFRa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jcib-dRr-UwxaC_384Cvcr
          claim_id: c_9GWVu1wSUB57wuuIqoz6V7
          source_id: s_S2OJ0_lkF8Q1KO9ME4HI2S
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_S2OJ0_lkF8Q1KO9ME4HI2S
            source_type: api_record
            title: 中国历代人物传记资料库：王緄（CBDB 209206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209206&o=json
            external_identifier: CBDB:209206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ux2gsGHcSC8JtKGeSs9ttp
        status: active
        display_name: 王緘
        merged_into_person_id: null
---

# 王緄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緄 | accepted |
| bio.summary | 王緄，明人物。隆慶五年進士，籍贯文安。（中国历代人物传记资料库 CBDB 209206） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_s94RydQTdDQooKZ8AoB28k | 王儀 | accepted |
| other | p_Ux2gsGHcSC8JtKGeSs9ttp | 王緘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王緄（CBDB 209206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209206&o=json)
