---
schema: wang-person/v1
id: p_rXae5j2jQE2peDgpRPFgFL
status: active
merged_into: null
display_name: 王霙
cbdb_id: 312829
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QZiUEgKzkVaEgHCqBSqsbX
        subject_person_id: p_rXae5j2jQE2peDgpRPFgFL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霙，明人物。天順四年進士，籍贯高郵州。（中国历代人物传记资料库 CBDB 312829）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xFxzPwovcqk9zpPDSOFZCO
          claim_id: c_QZiUEgKzkVaEgHCqBSqsbX
          source_id: s_V3pFoQHkLiqwC2qouC44Ly
          stance: supports
          locator: CBDB:312829
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_V3pFoQHkLiqwC2qouC44Ly
            source_type: api_record
            title: 中国历代人物传记资料库：王霙（CBDB 312829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312829&o=json
            external_identifier: CBDB:312829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Mm4yLs3N1QUXWYM1hoMQD
        subject_person_id: p_rXae5j2jQE2peDgpRPFgFL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5CBR41FqF3s4QQAPoLiRLe
          claim_id: c_8Mm4yLs3N1QUXWYM1hoMQD
          source_id: s_V3pFoQHkLiqwC2qouC44Ly
          stance: supports
          locator: CBDB:312829
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BmFrpRcEn-Tf8rhLq1xWLN
        subject_person_id: p_12q5jBq6XL9aBiWK6P4q54
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rXae5j2jQE2peDgpRPFgFL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ERntoM6A2KXCT_VLXwJ-v
          claim_id: c_BmFrpRcEn-Tf8rhLq1xWLN
          source_id: s_dvmT-4YLTcxBvbRuteDGe3
          stance: supports
          locator: CBDB：兄弟 王震（198755）之父／母 王理
          quotation: null
          interpretation_note: 由兄弟关系推断：王霙 与 王震 为同胞（CBDB 记「兄」），王震 之父／母即 王霙 之父／母。
          source:
            id: s_dvmT-4YLTcxBvbRuteDGe3
            source_type: api_record
            title: 中国历代人物传记资料库：王霙（CBDB 312829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312829&o=json
            external_identifier: CBDB:312829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_12q5jBq6XL9aBiWK6P4q54
        status: active
        display_name: 王理
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KP4-shC0geAuHxjNefmJvC
        subject_person_id: p_rXae5j2jQE2peDgpRPFgFL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tBUiiaLdovkgJJmciCi2LY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_97K27aURdVWN3RbI0VzSgo
          claim_id: c_KP4-shC0geAuHxjNefmJvC
          source_id: s_dvmT-4YLTcxBvbRuteDGe3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198755 王震）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dvmT-4YLTcxBvbRuteDGe3
            source_type: api_record
            title: 中国历代人物传记资料库：王霙（CBDB 312829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312829&o=json
            external_identifier: CBDB:312829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tBUiiaLdovkgJJmciCi2LY
        status: active
        display_name: 王震
        merged_into_person_id: null
---

# 王霙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王霙，明人物。天順四年進士，籍贯高郵州。（中国历代人物传记资料库 CBDB 312829） | accepted |
| name.primary | 王霙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_12q5jBq6XL9aBiWK6P4q54 | 王理 | accepted |
| other | p_tBUiiaLdovkgJJmciCi2LY | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王霙（CBDB 312829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312829&o=json)
