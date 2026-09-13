---
schema: wang-person/v1
id: p_za3b1aKjpz5jYSp7iVS3Fk
status: active
merged_into: null
display_name: 王景昌
cbdb_id: 245399
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yma5BaMzwVA1YmdugkNN6N
        subject_person_id: p_za3b1aKjpz5jYSp7iVS3Fk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景昌，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 245399）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8QmC_txQ0UTXp6F0IcOjtl
          claim_id: c_Yma5BaMzwVA1YmdugkNN6N
          source_id: s_P9HLub7kY9XpjZ3HfuiUta
          stance: supports
          locator: CBDB:245399
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_P9HLub7kY9XpjZ3HfuiUta
            source_type: api_record
            title: 中国历代人物传记资料库：王景昌（CBDB 245399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245399&o=json
            external_identifier: CBDB:245399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sKAwAvazwKVFfLER7pX6p7
        subject_person_id: p_za3b1aKjpz5jYSp7iVS3Fk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1psYANzyxL3RTHpLS6CCPU
          claim_id: c_sKAwAvazwKVFfLER7pX6p7
          source_id: s_P9HLub7kY9XpjZ3HfuiUta
          stance: supports
          locator: CBDB:245399
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
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
        id: c_MpmMzbrirlF8whng0IX_Hz
        subject_person_id: p_za3b1aKjpz5jYSp7iVS3Fk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oQRajD9oDBfYHERmWbMNcH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OE_XghFlBrFERRBELR9uQb
          claim_id: c_MpmMzbrirlF8whng0IX_Hz
          source_id: s_P9HLub7kY9XpjZ3HfuiUta
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第三十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P9HLub7kY9XpjZ3HfuiUta
            source_type: api_record
            title: 中国历代人物传记资料库：王景昌（CBDB 245399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245399&o=json
            external_identifier: CBDB:245399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_oQRajD9oDBfYHERmWbMNcH
        status: active
        display_name: 王宜
        merged_into_person_id: null
  other: []
---

# 王景昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景昌，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 245399） | accepted |
| name.primary | 王景昌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oQRajD9oDBfYHERmWbMNcH | 王宜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景昌（CBDB 245399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245399&o=json)
