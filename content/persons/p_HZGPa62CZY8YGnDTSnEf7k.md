---
schema: wang-person/v1
id: p_HZGPa62CZY8YGnDTSnEf7k
status: active
merged_into: null
display_name: 王貴
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fivz5dxwQnSX9YuDyWWYsk
        subject_person_id: p_HZGPa62CZY8YGnDTSnEf7k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yGfWHm7FZ24u8gQBixPJWf
          claim_id: c_Fivz5dxwQnSX9YuDyWWYsk
          source_id: s_DQenVEh4QwpCMj6KY6UDMV
          stance: supports
          locator: CBDB:23239
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23239）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aQSBcTuTMmYbEgEBGRMJgt
        subject_person_id: p_HZGPa62CZY8YGnDTSnEf7k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴，宋人物。籍贯烏程。（中国历代人物传记资料库 CBDB 23239）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_alH4GUaoPaBjLl8NOdhgEx
          claim_id: c_aQSBcTuTMmYbEgEBGRMJgt
          source_id: s_DQenVEh4QwpCMj6KY6UDMV
          stance: supports
          locator: CBDB:23239
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TCdXIvJz9FO2XJrU0gfNhJ
        subject_person_id: p_F481CHuNMyvWGFBTFg72AH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HZGPa62CZY8YGnDTSnEf7k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tTNuYWO9wpxKkuQ95kIRxQ
          claim_id: c_TCdXIvJz9FO2XJrU0gfNhJ
          source_id: s_LeUdx6a3EXQmKSqzgA4GQN
          stance: supports
          locator: CBDB 双向互证（子 王貴 ⇄ 父 王達）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
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
  children:
    - claim:
        id: c_xM5DiY7DpTOBhtTSo0BiMc
        subject_person_id: p_HZGPa62CZY8YGnDTSnEf7k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xRJGDseQUMBKBkn294Qbio
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2MY0RRy0HhlJo0MeqgsOx_
          claim_id: c_xM5DiY7DpTOBhtTSo0BiMc
          source_id: s_DQenVEh4QwpCMj6KY6UDMV
          stance: supports
          locator: CBDB 双向互证（子 王德先 ⇄ 父 王貴）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_xRJGDseQUMBKBkn294Qbio
        status: active
        display_name: 王德先
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
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
          source: *a1
      object_person:
        id: p_Waz4Zbseqb4GJJtD5Sb5LN
        status: active
        display_name: 王康年
        merged_into_person_id: null
  other: []
---

# 王貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴 | accepted |
| bio.summary | 王貴，宋人物。籍贯烏程。（中国历代人物传记资料库 CBDB 23239） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_F481CHuNMyvWGFBTFg72AH | 王達 | accepted |
| children | p_xRJGDseQUMBKBkn294Qbio | 王德先 | accepted |
| descendants | p_Waz4Zbseqb4GJJtD5Sb5LN | 王康年 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 23238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23238&o=json)
- [中国历代人物传记资料库：王貴（CBDB 23239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23239&o=json)
