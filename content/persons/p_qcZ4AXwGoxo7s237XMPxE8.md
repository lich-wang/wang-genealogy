---
schema: wang-person/v1
id: p_qcZ4AXwGoxo7s237XMPxE8
status: active
merged_into: null
display_name: 王國胤
cbdb_id: 214957
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fx7uHUL2wxmTohG1kkSMnE
        subject_person_id: p_qcZ4AXwGoxo7s237XMPxE8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國胤，明人物。萬曆二年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 214957）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_nXlafIqURfag7BFC7H83dU
          claim_id: c_Fx7uHUL2wxmTohG1kkSMnE
          source_id: s_UHo8PL3caax6FksCy7gLg1
          stance: supports
          locator: CBDB:214957
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UHo8PL3caax6FksCy7gLg1
            source_type: api_record
            title: 中国历代人物传记资料库：王國胤（CBDB 214957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214957&o=json
            external_identifier: CBDB:214957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XhhrcCJD2P4FzRpXRB5sVL
        subject_person_id: p_qcZ4AXwGoxo7s237XMPxE8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國胤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Qx2kuaNCqbknQjcF9LZfh2
          claim_id: c_XhhrcCJD2P4FzRpXRB5sVL
          source_id: s_UHo8PL3caax6FksCy7gLg1
          stance: supports
          locator: CBDB:214957
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UujOXeVTEtolyUkYaW47Lp
        subject_person_id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qcZ4AXwGoxo7s237XMPxE8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SF4affovrpT9vxBN-gZ48H
          claim_id: c_UujOXeVTEtolyUkYaW47Lp
          source_id: s_N7IeKFGZqr89fod_OzCBOS
          stance: supports
          locator: CBDB：兄弟 王國祚（206219）之父／母 王勉學
          quotation: null
          interpretation_note: 由兄弟关系推断：王國胤 与 王國祚 为同胞（CBDB 记「兄」），王國祚 之父／母即 王國胤 之父／母。
          source:
            id: s_N7IeKFGZqr89fod_OzCBOS
            source_type: api_record
            title: 中国历代人物传记资料库：王國胤（CBDB 214957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214957&o=json
            external_identifier: CBDB:214957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        status: active
        display_name: 王勉學
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_56yCRr4IWOtfv2LDiTG97B
        subject_person_id: p_hCaEhKRsvc7eH6eDHWHssK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qcZ4AXwGoxo7s237XMPxE8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h8HpnfDJn7IUq1gf0nKibJ
          claim_id: c_56yCRr4IWOtfv2LDiTG97B
          source_id: s_N7IeKFGZqr89fod_OzCBOS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206219 王國祚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_N7IeKFGZqr89fod_OzCBOS
            source_type: api_record
            title: 中国历代人物传记资料库：王國胤（CBDB 214957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214957&o=json
            external_identifier: CBDB:214957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hCaEhKRsvc7eH6eDHWHssK
        status: active
        display_name: 王國祚
        merged_into_person_id: null
---

# 王國胤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國胤，明人物。萬曆二年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 214957） | accepted |
| name.primary | 王國胤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jJ8CBW1eQx8HAeDCP6Kxoi | 王勉學 | accepted |
| other | p_hCaEhKRsvc7eH6eDHWHssK | 王國祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國胤（CBDB 214957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214957&o=json)
