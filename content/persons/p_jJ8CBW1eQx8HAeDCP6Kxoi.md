---
schema: wang-person/v1
id: p_jJ8CBW1eQx8HAeDCP6Kxoi
status: active
merged_into: null
display_name: 王勉學
cbdb_id: 214954
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D5EBdusJLKjnwfqMt9M8DD
        subject_person_id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉學，明人物。萬曆二年進士，籍贯滄州，曾任壽官。（中国历代人物传记资料库 CBDB 214954）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Awev73JsO-eubux3fJHfsu
          claim_id: c_D5EBdusJLKjnwfqMt9M8DD
          source_id: s_9h4rgB3biLSeN3h49QvQgX
          stance: supports
          locator: CBDB:214954
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9h4rgB3biLSeN3h49QvQgX
            source_type: api_record
            title: 中国历代人物传记资料库：王勉學（CBDB 214954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214954&o=json
            external_identifier: CBDB:214954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9PmjWSdqTU2VLkGQfr2DgP
        subject_person_id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ncdgQ9VU6JrPMLdLeF8msU
          claim_id: c_9PmjWSdqTU2VLkGQfr2DgP
          source_id: s_9h4rgB3biLSeN3h49QvQgX
          stance: supports
          locator: CBDB:214954
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MyDZ3V1xP_VAN0M19Wsvn_
        subject_person_id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hCaEhKRsvc7eH6eDHWHssK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Si1fVG34fou-v5n51h97rE
          claim_id: c_MyDZ3V1xP_VAN0M19Wsvn_
          source_id: s_9h4rgB3biLSeN3h49QvQgX
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9h4rgB3biLSeN3h49QvQgX
            source_type: api_record
            title: 中国历代人物传记资料库：王勉學（CBDB 214954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214954&o=json
            external_identifier: CBDB:214954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_hCaEhKRsvc7eH6eDHWHssK
        status: active
        display_name: 王國祚
        merged_into_person_id: null
    - claim:
        id: c_oIM9POs5P438Jy8uHw9BeT
        subject_person_id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B2kaNim6JACLACBEtHTAtb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_btQk0pRms4Q2hCWv6Kcp_G
          claim_id: c_oIM9POs5P438Jy8uHw9BeT
          source_id: s_enG84qYbBmDOZh3ZkwCeeA
          stance: supports
          locator: CBDB：兄弟 王國祚（206219）之父／母 王勉學
          quotation: null
          interpretation_note: 由兄弟关系推断：王國傑 与 王國祚 为同胞（CBDB 记「兄」），王國祚 之父／母即 王國傑 之父／母。
          source:
            id: s_enG84qYbBmDOZh3ZkwCeeA
            source_type: api_record
            title: 中国历代人物传记资料库：王國傑（CBDB 214960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214960&o=json
            external_identifier: CBDB:214960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B2kaNim6JACLACBEtHTAtb
        status: active
        display_name: 王國傑
        merged_into_person_id: null
    - claim:
        id: c_DtzaB_y0YC3qup033bYUyz
        subject_person_id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fgjq6J5GTDFcpt9kfppMV7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S4ESAUQT15ds1NsEhF3oQt
          claim_id: c_DtzaB_y0YC3qup033bYUyz
          source_id: s_Os-hMlrvIRQ1vC_cc6gGYC
          stance: supports
          locator: CBDB：兄弟 王國祚（206219）之父／母 王勉學
          quotation: null
          interpretation_note: 由兄弟关系推断：王國俊 与 王國祚 为同胞（CBDB 记「兄」），王國祚 之父／母即 王國俊 之父／母。
          source:
            id: s_Os-hMlrvIRQ1vC_cc6gGYC
            source_type: api_record
            title: 中国历代人物传记资料库：王國俊（CBDB 214958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214958&o=json
            external_identifier: CBDB:214958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fgjq6J5GTDFcpt9kfppMV7
        status: active
        display_name: 王國俊
        merged_into_person_id: null
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
        id: p_qcZ4AXwGoxo7s237XMPxE8
        status: active
        display_name: 王國胤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王勉學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王勉學，明人物。萬曆二年進士，籍贯滄州，曾任壽官。（中国历代人物传记资料库 CBDB 214954） | accepted |
| name.primary | 王勉學 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hCaEhKRsvc7eH6eDHWHssK | 王國祚 | accepted |
| children | p_B2kaNim6JACLACBEtHTAtb | 王國傑 | accepted |
| children | p_fgjq6J5GTDFcpt9kfppMV7 | 王國俊 | accepted |
| children | p_qcZ4AXwGoxo7s237XMPxE8 | 王國胤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國傑（CBDB 214960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214960&o=json)
- [中国历代人物传记资料库：王國俊（CBDB 214958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214958&o=json)
- [中国历代人物传记资料库：王國胤（CBDB 214957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214957&o=json)
- [中国历代人物传记资料库：王勉學（CBDB 214954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214954&o=json)
