---
schema: wang-person/v1
id: p_aABLPY5fAx7Ku4jTXiyWX2
status: active
merged_into: null
display_name: 王敬輔
cbdb_id: 263637
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nccBDZy8pB9pLcBwTF4vk7
        subject_person_id: p_aABLPY5fAx7Ku4jTXiyWX2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬輔，明人物。中国历代人物传记资料库（CBDB）以人物编号 263637 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_-nBJ0EbPRq308hce3QrDun
          claim_id: c_nccBDZy8pB9pLcBwTF4vk7
          source_id: s_7Lb6NXToTVPJ7ibD67D1u2
          stance: supports
          locator: CBDB:263637
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_7Lb6NXToTVPJ7ibD67D1u2
            source_type: api_record
            title: 中国历代人物传记资料库：王敬輔（CBDB 263637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263637&o=json
            external_identifier: CBDB:263637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FpTWQiz42qnhDUUX2rPR9P
        subject_person_id: p_aABLPY5fAx7Ku4jTXiyWX2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hnHJbyY49ozHT2Ps9vWS94
          claim_id: c_FpTWQiz42qnhDUUX2rPR9P
          source_id: s_7Lb6NXToTVPJ7ibD67D1u2
          stance: supports
          locator: CBDB:263637
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_7Lb6NXToTVPJ7ibD67D1u2
            source_type: api_record
            title: 中国历代人物传记资料库：王敬輔（CBDB 263637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263637&o=json
            external_identifier: CBDB:263637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_7F2Df5bjXx3A7kQ2ccga9j
        subject_person_id: p_aABLPY5fAx7Ku4jTXiyWX2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cxZ5yzSg26M1kF7erww7KG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cwqw14yv5_12Nh_e1WVyB2
          claim_id: c_7F2Df5bjXx3A7kQ2ccga9j
          source_id: s_28t7HvLK65NjNF1HPcJjME
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_28t7HvLK65NjNF1HPcJjME
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 198371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198371&o=json
            external_identifier: CBDB:198371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cxZ5yzSg26M1kF7erww7KG
        status: active
        display_name: 王紀
        merged_into_person_id: null
  other: []
---

# 王敬輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敬輔，明人物。中国历代人物传记资料库（CBDB）以人物编号 263637 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王敬輔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_cxZ5yzSg26M1kF7erww7KG | 王紀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 198371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198371&o=json)
- [中国历代人物传记资料库：王敬輔（CBDB 263637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263637&o=json)
