---
schema: wang-person/v1
id: p_LD36WZHMBRnFYN8hscJDei
status: active
merged_into: null
display_name: 王慎興
cbdb_id: 265196
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xXGVVGrQLiQZeaHNLutyCU
        subject_person_id: p_LD36WZHMBRnFYN8hscJDei
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎興，明人物。弘治六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 265196）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XGHBXdF1i0Gl2AsRPemnyp
          claim_id: c_xXGVVGrQLiQZeaHNLutyCU
          source_id: s_HbAYHDBw536RfSozxBtw7w
          stance: supports
          locator: CBDB:265196
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HbAYHDBw536RfSozxBtw7w
            source_type: api_record
            title: 中国历代人物传记资料库：王慎興（CBDB 265196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265196&o=json
            external_identifier: CBDB:265196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ze8cyxUYwAatikmpKARkAM
        subject_person_id: p_LD36WZHMBRnFYN8hscJDei
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mQWcqosdbPwiLbwM3fHLJa
          claim_id: c_ze8cyxUYwAatikmpKARkAM
          source_id: s_HbAYHDBw536RfSozxBtw7w
          stance: supports
          locator: CBDB:265196
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IvVGEsSlM3DxMgx86haN15
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LD36WZHMBRnFYN8hscJDei
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2z7vqLzIAkdokHZCWKrDQh
          claim_id: c_IvVGEsSlM3DxMgx86haN15
          source_id: s_VbZ95_4_k4rpJTSMNqEs_x
          stance: supports
          locator: CBDB：兄弟 王選（200963）之父／母 王稷時
          quotation: null
          interpretation_note: 由兄弟关系推断：王慎興 与 王選 为同胞（CBDB 记「兄」），王選 之父／母即 王慎興 之父／母。
          source:
            id: s_VbZ95_4_k4rpJTSMNqEs_x
            source_type: api_record
            title: 中国历代人物传记资料库：王慎興（CBDB 265196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265196&o=json
            external_identifier: CBDB:265196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HBetaJRtzBcDVZP83F84Xv
        status: active
        display_name: 王稷時
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bV3sUiyg0-kWZBlzOFD5b0
        subject_person_id: p_LD36WZHMBRnFYN8hscJDei
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cF1tS83LboioMzgPkBhT2W
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UU3SEhMiiuveg8lAtYoqas
          claim_id: c_bV3sUiyg0-kWZBlzOFD5b0
          source_id: s_VbZ95_4_k4rpJTSMNqEs_x
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200963 王選）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VbZ95_4_k4rpJTSMNqEs_x
            source_type: api_record
            title: 中国历代人物传记资料库：王慎興（CBDB 265196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265196&o=json
            external_identifier: CBDB:265196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cF1tS83LboioMzgPkBhT2W
        status: active
        display_name: 王選
        merged_into_person_id: null
---

# 王慎興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慎興，明人物。弘治六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 265196） | accepted |
| name.primary | 王慎興 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HBetaJRtzBcDVZP83F84Xv | 王稷時 | accepted |
| other | p_cF1tS83LboioMzgPkBhT2W | 王選 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慎興（CBDB 265196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265196&o=json)
