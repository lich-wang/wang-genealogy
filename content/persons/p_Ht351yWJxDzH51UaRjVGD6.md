---
schema: wang-person/v1
id: p_Ht351yWJxDzH51UaRjVGD6
status: active
merged_into: null
display_name: 王朝輔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6U9z7Z8ep9YGjY33WMQmkP
        subject_person_id: p_Ht351yWJxDzH51UaRjVGD6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gF1fLU7SyUppZCmLZpMG3o
          claim_id: c_6U9z7Z8ep9YGjY33WMQmkP
          source_id: s_j2k9T32pUYfkSM1SeiWqkS
          stance: supports
          locator: CBDB:267259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267259）
          source: &a1
            id: s_j2k9T32pUYfkSM1SeiWqkS
            source_type: api_record
            title: 中国历代人物传记资料库：王朝輔（CBDB 267259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267259&o=json
            external_identifier: CBDB:267259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.776Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_35T5Dy5LbeqsG23J6XpHAH
        subject_person_id: p_Ht351yWJxDzH51UaRjVGD6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝輔，明人物。弘治九年進士，籍贯平陽。（中国历代人物传记资料库 CBDB 267259）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A0HgbvG-DfDIU1bvNnu4qY
          claim_id: c_35T5Dy5LbeqsG23J6XpHAH
          source_id: s_j2k9T32pUYfkSM1SeiWqkS
          stance: supports
          locator: CBDB:267259
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ElGh1bWV4PjN1l-C03ISqs
        subject_person_id: p_Y1J494C1wxoCGbqWhaRwAG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ht351yWJxDzH51UaRjVGD6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tjmzp1oVwKNIAhvPkkSpB1
          claim_id: c_ElGh1bWV4PjN1l-C03ISqs
          source_id: s_PNjadc3AzK6tDkviRCD7Qo
          stance: supports
          locator: CBDB：兄弟 王朝佐（201113）之父／母 王平生
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝輔 与 王朝佐 为同胞（CBDB 记「兄」），王朝佐 之父／母即 王朝輔 之父／母。
          source:
            id: s_PNjadc3AzK6tDkviRCD7Qo
            source_type: api_record
            title: 中国历代人物传记资料库：王朝輔（CBDB 267259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267259&o=json
            external_identifier: CBDB:267259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y1J494C1wxoCGbqWhaRwAG
        status: active
        display_name: 王平生
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Gwog4E8K2CxVAEYBTHje8h
        subject_person_id: p_C41sWozjac1HZPEX2SGUgJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ht351yWJxDzH51UaRjVGD6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tf1jDJDCQKsp-HgYqyX2jY
          claim_id: c_Gwog4E8K2CxVAEYBTHje8h
          source_id: s_PNjadc3AzK6tDkviRCD7Qo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201113 王朝佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PNjadc3AzK6tDkviRCD7Qo
            source_type: api_record
            title: 中国历代人物传记资料库：王朝輔（CBDB 267259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267259&o=json
            external_identifier: CBDB:267259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C41sWozjac1HZPEX2SGUgJ
        status: active
        display_name: 王朝佐
        merged_into_person_id: null
---

# 王朝輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝輔 | accepted |
| bio.summary | 王朝輔，明人物。弘治九年進士，籍贯平陽。（中国历代人物传记资料库 CBDB 267259） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y1J494C1wxoCGbqWhaRwAG | 王平生 | accepted |
| other | p_C41sWozjac1HZPEX2SGUgJ | 王朝佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝輔（CBDB 267259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267259&o=json)
