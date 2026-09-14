---
schema: wang-person/v1
id: p_7wMJEu4VBuvk1eo4J8qNM8
status: active
merged_into: null
display_name: 王稷
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CH4pfCgpBBQTDFBMcFveiM
        subject_person_id: p_7wMJEu4VBuvk1eo4J8qNM8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qmysAohaVpBAz8pm23ncNp
          claim_id: c_CH4pfCgpBBQTDFBMcFveiM
          source_id: s_86XeuFe5s5z1dk1XXex7vP
          stance: supports
          locator: CBDB:260102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260102）
          source: &a1
            id: s_86XeuFe5s5z1dk1XXex7vP
            source_type: api_record
            title: 中国历代人物传记资料库：王稷（CBDB 260102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260102&o=json
            external_identifier: CBDB:260102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a9FyDVFycPi2ErRXHaTuo3
        subject_person_id: p_7wMJEu4VBuvk1eo4J8qNM8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷，明人物。成化二十三年進士，籍贯崑山，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 260102）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dgM7mbWVvJZkca8ocSkV-Y
          claim_id: c_a9FyDVFycPi2ErRXHaTuo3
          source_id: s_86XeuFe5s5z1dk1XXex7vP
          stance: supports
          locator: CBDB:260102
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CNHwskBLmLOi_EeBx8bW2J
        subject_person_id: p_t8KEZXxBW1dy3kvu8XnvuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7wMJEu4VBuvk1eo4J8qNM8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_02ymBBwZcqJz3J8Sxqtedf
          claim_id: c_CNHwskBLmLOi_EeBx8bW2J
          source_id: s_zqOrJx3I6gYq3KW3XoVnQy
          stance: supports
          locator: CBDB：兄弟 王秩（200588）之父／母 王詁
          quotation: null
          interpretation_note: 由兄弟关系推断：王稷 与 王秩 为同胞（CBDB 记「兄」），王秩 之父／母即 王稷 之父／母。
          source:
            id: s_zqOrJx3I6gYq3KW3XoVnQy
            source_type: api_record
            title: 中国历代人物传记资料库：王稷（CBDB 260102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260102&o=json
            external_identifier: CBDB:260102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t8KEZXxBW1dy3kvu8XnvuX
        status: active
        display_name: 王詁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NHdSw8_p-4f8ZEHIBIVJq_
        subject_person_id: p_7THfMJodZEJjq2hbN5iKFW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7wMJEu4VBuvk1eo4J8qNM8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CsQwCLymodAL_5m17erSiL
          claim_id: c_NHdSw8_p-4f8ZEHIBIVJq_
          source_id: s_zqOrJx3I6gYq3KW3XoVnQy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200588 王秩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zqOrJx3I6gYq3KW3XoVnQy
            source_type: api_record
            title: 中国历代人物传记资料库：王稷（CBDB 260102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260102&o=json
            external_identifier: CBDB:260102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7THfMJodZEJjq2hbN5iKFW
        status: active
        display_name: 王秩
        merged_into_person_id: null
---

# 王稷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稷 | accepted |
| bio.summary | 王稷，明人物。成化二十三年進士，籍贯崑山，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 260102） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t8KEZXxBW1dy3kvu8XnvuX | 王詁 | accepted |
| other | p_7THfMJodZEJjq2hbN5iKFW | 王秩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稷（CBDB 260102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260102&o=json)
