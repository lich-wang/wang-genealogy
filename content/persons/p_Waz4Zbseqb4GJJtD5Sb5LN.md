---
schema: wang-person/v1
id: p_Waz4Zbseqb4GJJtD5Sb5LN
status: active
merged_into: null
display_name: 王康年
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ARoKBx7FFGB7E1JyyzBinY
        subject_person_id: p_Waz4Zbseqb4GJJtD5Sb5LN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WFFmSjo3ZB87cg9mXftFiH
          claim_id: c_ARoKBx7FFGB7E1JyyzBinY
          source_id: s_VbzJTXyuP962w7uxzKcXZp
          stance: supports
          locator: CBDB:23241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23241）
          source: &a1
            id: s_VbzJTXyuP962w7uxzKcXZp
            source_type: api_record
            title: 中国历代人物传记资料库：王康年（CBDB 23241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23241&o=json
            external_identifier: CBDB:23241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rzs4QA5CiGPiXDT5XJhnQN
        subject_person_id: p_Waz4Zbseqb4GJJtD5Sb5LN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1099年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FT1uwFKYXyzgWK6LBrcuMQ
          claim_id: c_rzs4QA5CiGPiXDT5XJhnQN
          source_id: s_VbzJTXyuP962w7uxzKcXZp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k9PnFWfcLGf9cTxvu7yJAN
        subject_person_id: p_Waz4Zbseqb4GJJtD5Sb5LN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康年（生于1099年），宋人物。籍贯烏程，入仕進士。（中国历代人物传记资料库 CBDB 23241）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZdKcgE4jubxmnSPKbSfiYz
          claim_id: c_k9PnFWfcLGf9cTxvu7yJAN
          source_id: s_VbzJTXyuP962w7uxzKcXZp
          stance: supports
          locator: CBDB:23241
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_PHn0dSQx6Wzuj1WKmB2li-
        subject_person_id: p_F481CHuNMyvWGFBTFg72AH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Waz4Zbseqb4GJJtD5Sb5LN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U7DyaGu9dbbc1tjrSdizls
          claim_id: c_PHn0dSQx6Wzuj1WKmB2li-
          source_id: s_LeUdx6a3EXQmKSqzgA4GQN
          stance: supports
          locator: 紹興十八年同年小錄，176：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LeUdx6a3EXQmKSqzgA4GQN
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 23238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23238&o=json
            external_identifier: CBDB:23238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F481CHuNMyvWGFBTFg72AH
        status: active
        display_name: 王達
        merged_into_person_id: null
    - claim:
        id: c_iIT-OfIYsBdJVaqwbs0Gg0
        subject_person_id: p_HZGPa62CZY8YGnDTSnEf7k
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Waz4Zbseqb4GJJtD5Sb5LN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cx_whODV4pC1W6R3XcVUMJ
          claim_id: c_iIT-OfIYsBdJVaqwbs0Gg0
          source_id: s_DQenVEh4QwpCMj6KY6UDMV
          stance: supports
          locator: 紹興十八年同年小錄，176：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DQenVEh4QwpCMj6KY6UDMV
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 23239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23239&o=json
            external_identifier: CBDB:23239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HZGPa62CZY8YGnDTSnEf7k
        status: active
        display_name: 王貴
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王康年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康年 | accepted |
| birth.date | 1099年 | accepted |
| bio.summary | 王康年（生于1099年），宋人物。籍贯烏程，入仕進士。（中国历代人物传记资料库 CBDB 23241） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_F481CHuNMyvWGFBTFg72AH | 王達 | accepted |
| ancestors | p_HZGPa62CZY8YGnDTSnEf7k | 王貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 23238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23238&o=json)
- [中国历代人物传记资料库：王貴（CBDB 23239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23239&o=json)
- [中国历代人物传记资料库：王康年（CBDB 23241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23241&o=json)
