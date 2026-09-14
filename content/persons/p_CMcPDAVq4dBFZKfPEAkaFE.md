---
schema: wang-person/v1
id: p_CMcPDAVq4dBFZKfPEAkaFE
status: active
merged_into: null
display_name: 王福
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S1xHHffYtibawMnqhoCK2Q
        subject_person_id: p_CMcPDAVq4dBFZKfPEAkaFE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iLTCCN8d9xFUVHrT5kHma6
          claim_id: c_S1xHHffYtibawMnqhoCK2Q
          source_id: s_jKKpr3LMGqymZ4we73xTyN
          stance: supports
          locator: CBDB:241025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241025）
          source: &a1
            id: s_jKKpr3LMGqymZ4we73xTyN
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 241025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241025&o=json
            external_identifier: CBDB:241025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UZjgDbCqdpJXbbCFqgeC5a
        subject_person_id: p_CMcPDAVq4dBFZKfPEAkaFE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，明人物。正統十三年進士，籍贯夏縣。（中国历代人物传记资料库 CBDB 241025）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A7uTHBRbZ3meqJKdqx8jiI
          claim_id: c_UZjgDbCqdpJXbbCFqgeC5a
          source_id: s_jKKpr3LMGqymZ4we73xTyN
          stance: supports
          locator: CBDB:241025
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__fUE89Hvq1N3aXZvC74bv1
        subject_person_id: p_2h2iTcWMQkG9VP954w7RTi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CMcPDAVq4dBFZKfPEAkaFE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2jpw0XAzbbMYqqafX5kITE
          claim_id: c__fUE89Hvq1N3aXZvC74bv1
          source_id: s_PtjeH2VNzcpsM5h8m3m2D2
          stance: supports
          locator: CBDB：兄弟 王正（208144）之父／母 王礪
          quotation: null
          interpretation_note: 由兄弟关系推断：王福 与 王正 为同胞（CBDB 记「弟」），王正 之父／母即 王福 之父／母。
          source:
            id: s_PtjeH2VNzcpsM5h8m3m2D2
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 241025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241025&o=json
            external_identifier: CBDB:241025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2h2iTcWMQkG9VP954w7RTi
        status: active
        display_name: 王礪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2w7Mxp-Grzkh5XugODWR_t
        subject_person_id: p_CMcPDAVq4dBFZKfPEAkaFE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kscp7R1kbkgE5OXNyw5bGe
          claim_id: c_2w7Mxp-Grzkh5XugODWR_t
          source_id: s_PtjeH2VNzcpsM5h8m3m2D2
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208144 王正）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PtjeH2VNzcpsM5h8m3m2D2
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 241025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241025&o=json
            external_identifier: CBDB:241025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bfSy8dPRhP5ZK4VbYiPWT2
        status: active
        display_name: 王正
        merged_into_person_id: null
---

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，明人物。正統十三年進士，籍贯夏縣。（中国历代人物传记资料库 CBDB 241025） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2h2iTcWMQkG9VP954w7RTi | 王礪 | accepted |
| other | p_bfSy8dPRhP5ZK4VbYiPWT2 | 王正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 241025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241025&o=json)
