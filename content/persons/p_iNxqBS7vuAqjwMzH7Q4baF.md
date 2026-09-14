---
schema: wang-person/v1
id: p_iNxqBS7vuAqjwMzH7Q4baF
status: active
merged_into: null
display_name: 王時椿
cbdb_id: 308742
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_soCcqd1DX8GMBzB4ULbeqg
        subject_person_id: p_iNxqBS7vuAqjwMzH7Q4baF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時椿，明人物。嘉靖二十六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 308742）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-ugQmqp8QacC5_99b81WuO
          claim_id: c_soCcqd1DX8GMBzB4ULbeqg
          source_id: s_vw7ArFDEAzUtKpP6SfAVPh
          stance: supports
          locator: CBDB:308742
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vw7ArFDEAzUtKpP6SfAVPh
            source_type: api_record
            title: 中国历代人物传记资料库：王時椿（CBDB 308742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308742&o=json
            external_identifier: CBDB:308742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LSSBkuJFZ1rLt13p68ACsW
        subject_person_id: p_iNxqBS7vuAqjwMzH7Q4baF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時椿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CeMk36aXkZmVGou9dGa3e7
          claim_id: c_LSSBkuJFZ1rLt13p68ACsW
          source_id: s_vw7ArFDEAzUtKpP6SfAVPh
          stance: supports
          locator: CBDB:308742
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rmTizut7bHBCZ1Y9HHfY69
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iNxqBS7vuAqjwMzH7Q4baF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kPNmYzI0pomV-zczYwgnhQ
          claim_id: c_rmTizut7bHBCZ1Y9HHfY69
          source_id: s_RFEwNfVUVnHrpnV7P_XTWU
          stance: supports
          locator: CBDB：兄弟 王時槐（126653）之父／母 王一善
          quotation: null
          interpretation_note: 由兄弟关系推断：王時椿 与 王時槐 为同胞（CBDB 记「弟」），王時槐 之父／母即 王時椿 之父／母。
          source:
            id: s_RFEwNfVUVnHrpnV7P_XTWU
            source_type: api_record
            title: 中国历代人物传记资料库：王時椿（CBDB 308742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308742&o=json
            external_identifier: CBDB:308742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_irooaMCyG8JBBsSKCCr16W
        status: active
        display_name: 王一善
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kGmZfPAM1BR05kmwGtKLqe
        subject_person_id: p_LPzYRgFrvHZtoR8m7zKq9v
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iNxqBS7vuAqjwMzH7Q4baF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wt3FKIzsTTGSEJ9kBUdxET
          claim_id: c_kGmZfPAM1BR05kmwGtKLqe
          source_id: s_RFEwNfVUVnHrpnV7P_XTWU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126653 王時槐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RFEwNfVUVnHrpnV7P_XTWU
            source_type: api_record
            title: 中国历代人物传记资料库：王時椿（CBDB 308742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308742&o=json
            external_identifier: CBDB:308742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LPzYRgFrvHZtoR8m7zKq9v
        status: active
        display_name: 王時槐
        merged_into_person_id: null
---

# 王時椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時椿，明人物。嘉靖二十六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 308742） | accepted |
| name.primary | 王時椿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_irooaMCyG8JBBsSKCCr16W | 王一善 | accepted |
| other | p_LPzYRgFrvHZtoR8m7zKq9v | 王時槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時椿（CBDB 308742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308742&o=json)
