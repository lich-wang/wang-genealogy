---
schema: wang-person/v1
id: p_BePMtcQN2evcZUVaYKvcA9
status: active
merged_into: null
display_name: 王政
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2V2FPwSkha4MJDKLGchAYs
        subject_person_id: p_BePMtcQN2evcZUVaYKvcA9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vc29ENJFG1KJnkWv8Hx6sn
          claim_id: c_2V2FPwSkha4MJDKLGchAYs
          source_id: s_FknDeKYb1yij164Dog9GSB
          stance: supports
          locator: CBDB:297731
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297731）
          source: &a1
            id: s_FknDeKYb1yij164Dog9GSB
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 297731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297731&o=json
            external_identifier: CBDB:297731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.575Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Hms77ojUECjAJm3uPcFhW
        subject_person_id: p_BePMtcQN2evcZUVaYKvcA9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。嘉靖十四年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 297731）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0DQJib6gt-LWH45bRnP30i
          claim_id: c_3Hms77ojUECjAJm3uPcFhW
          source_id: s_FknDeKYb1yij164Dog9GSB
          stance: supports
          locator: CBDB:297731
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_l2_myq40W23BDRbkSv3lLf
        subject_person_id: p_BePMtcQN2evcZUVaYKvcA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7wzTGA3qgQYcchPFctGbYw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5NsQYKD7n_yVi_iZtntoyN
          claim_id: c_l2_myq40W23BDRbkSv3lLf
          source_id: s_4xxvavE1fm4FZqLMfztadX
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百五十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4xxvavE1fm4FZqLMfztadX
            source_type: api_record
            title: 中国历代人物传记资料库：王應期（CBDB 202976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202976&o=json
            external_identifier: CBDB:202976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.768Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7wzTGA3qgQYcchPFctGbYw
        status: active
        display_name: 王應期
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。嘉靖十四年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 297731） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7wzTGA3qgQYcchPFctGbYw | 王應期 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應期（CBDB 202976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202976&o=json)
- [中国历代人物传记资料库：王政（CBDB 297731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297731&o=json)
