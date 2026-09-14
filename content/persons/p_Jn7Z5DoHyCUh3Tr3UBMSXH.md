---
schema: wang-person/v1
id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
status: active
merged_into: null
display_name: 王甫林
cbdb_id: 231568
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KdTbVwzCpBkUEazZSCkWFK
        subject_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甫林，明人物。宣德八年進士，籍贯大城。（中国历代人物传记资料库 CBDB 231568）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ry3oDmGBl7FotRyXWJW1vf
          claim_id: c_KdTbVwzCpBkUEazZSCkWFK
          source_id: s_xRuiyedp74GbKDHJTo6vwQ
          stance: supports
          locator: CBDB:231568
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xRuiyedp74GbKDHJTo6vwQ
            source_type: api_record
            title: 中国历代人物传记资料库：王甫林（CBDB 231568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231568&o=json
            external_identifier: CBDB:231568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_r39cyBet8Q1AyZy5Q5brnu
        subject_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甫林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QgPJf6Q4bjHDmtDnHCQG4Z
          claim_id: c_r39cyBet8Q1AyZy5Q5brnu
          source_id: s_xRuiyedp74GbKDHJTo6vwQ
          stance: supports
          locator: CBDB:231568
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WGQoQPJWdOaVGDZ6fKSseX
        subject_person_id: p_4bu2im8699zCsccbtJF1P5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SZedctSzMyq1QpRcFGFW9J
          claim_id: c_WGQoQPJWdOaVGDZ6fKSseX
          source_id: s_kEMvWdXNEMrMUFHnwDnn61
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第三十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_kEMvWdXNEMrMUFHnwDnn61
            source_type: api_record
            title: 中国历代人物传记资料库：王亮（CBDB 207345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207345&o=json
            external_identifier: CBDB:207345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4bu2im8699zCsccbtJF1P5
        status: active
        display_name: 王某中
        merged_into_person_id: null
  children:
    - claim:
        id: c_8gITiTW42Lj8rwHU8Dd1dJ
        subject_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IF1QRaoJbp1MozUWC5QACt
          claim_id: c_8gITiTW42Lj8rwHU8Dd1dJ
          source_id: s_kEMvWdXNEMrMUFHnwDnn61
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第三十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_1GhPFs5m4G2BPwjpU26jtR
        status: active
        display_name: 王亮
        merged_into_person_id: null
    - claim:
        id: c_YhpyKX6RFHPVa2EG-T1AV8
        subject_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_275vi8UU2NrwrnRkZzLYPQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EBidPd4idgK0lbprpFbN_P
          claim_id: c_YhpyKX6RFHPVa2EG-T1AV8
          source_id: s_7FS9xZrI2oV90M4LvQ2KcN
          stance: supports
          locator: CBDB：兄弟 王亮（207345）之父／母 王甫林
          quotation: null
          interpretation_note: 由兄弟关系推断：王從政 与 王亮 为同胞（CBDB 记「弟」），王亮 之父／母即 王從政 之父／母。
          source:
            id: s_7FS9xZrI2oV90M4LvQ2KcN
            source_type: api_record
            title: 中国历代人物传记资料库：王從政（CBDB 231571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231571&o=json
            external_identifier: CBDB:231571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_275vi8UU2NrwrnRkZzLYPQ
        status: active
        display_name: 王從政
        merged_into_person_id: null
    - claim:
        id: c_zkPt6hUQXNlVkzc6eaZhub
        subject_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MJmALtK53voZtSLwScQrHF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CXRRK-N81ZPu2i1yn2VTNN
          claim_id: c_zkPt6hUQXNlVkzc6eaZhub
          source_id: s_spjigKJUcZa0qW-TmsSmtx
          stance: supports
          locator: CBDB：兄弟 王亮（207345）之父／母 王甫林
          quotation: null
          interpretation_note: 由兄弟关系推断：王從美 与 王亮 为同胞（CBDB 记「弟」），王亮 之父／母即 王從美 之父／母。
          source:
            id: s_spjigKJUcZa0qW-TmsSmtx
            source_type: api_record
            title: 中国历代人物传记资料库：王從美（CBDB 231572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231572&o=json
            external_identifier: CBDB:231572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MJmALtK53voZtSLwScQrHF
        status: active
        display_name: 王從美
        merged_into_person_id: null
    - claim:
        id: c_BJ-RIJca5g6DTpvDnipe_y
        subject_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NMC9HyK2b3NRX3PXmAHnYA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t7uSjFFPNZ-YWCxswWE_yE
          claim_id: c_BJ-RIJca5g6DTpvDnipe_y
          source_id: s_V5VsyaDofccSEy-js-Zutp
          stance: supports
          locator: CBDB：兄弟 王亮（207345）之父／母 王甫林
          quotation: null
          interpretation_note: 由兄弟关系推断：王從讓 与 王亮 为同胞（CBDB 记「弟」），王亮 之父／母即 王從讓 之父／母。
          source:
            id: s_V5VsyaDofccSEy-js-Zutp
            source_type: api_record
            title: 中国历代人物传记资料库：王從讓（CBDB 231573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231573&o=json
            external_identifier: CBDB:231573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NMC9HyK2b3NRX3PXmAHnYA
        status: active
        display_name: 王從讓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王甫林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王甫林，明人物。宣德八年進士，籍贯大城。（中国历代人物传记资料库 CBDB 231568） | accepted |
| name.primary | 王甫林 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4bu2im8699zCsccbtJF1P5 | 王某中 | accepted |
| children | p_1GhPFs5m4G2BPwjpU26jtR | 王亮 | accepted |
| children | p_275vi8UU2NrwrnRkZzLYPQ | 王從政 | accepted |
| children | p_MJmALtK53voZtSLwScQrHF | 王從美 | accepted |
| children | p_NMC9HyK2b3NRX3PXmAHnYA | 王從讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從美（CBDB 231572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231572&o=json)
- [中国历代人物传记资料库：王從讓（CBDB 231573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231573&o=json)
- [中国历代人物传记资料库：王從政（CBDB 231571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231571&o=json)
- [中国历代人物传记资料库：王甫林（CBDB 231568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231568&o=json)
- [中国历代人物传记资料库：王亮（CBDB 207345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207345&o=json)
