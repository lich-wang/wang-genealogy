---
schema: wang-person/v1
id: p_F481CHuNMyvWGFBTFg72AH
status: active
merged_into: null
display_name: 王達
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sWvLE6oUnjyb4tYKNTwaBM
        subject_person_id: p_F481CHuNMyvWGFBTFg72AH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FMZCtq9eZRCZhwNFtSzHTV
          claim_id: c_sWvLE6oUnjyb4tYKNTwaBM
          source_id: s_LeUdx6a3EXQmKSqzgA4GQN
          stance: supports
          locator: CBDB:23238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23238）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tTptf2WEZG68AzDCsxEy1b
        subject_person_id: p_F481CHuNMyvWGFBTFg72AH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kAdq6bSdiwnQnSzYHdAmTf
          claim_id: c_tTptf2WEZG68AzDCsxEy1b
          source_id: s_LeUdx6a3EXQmKSqzgA4GQN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_HZGPa62CZY8YGnDTSnEf7k
        status: active
        display_name: 王貴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_9NB5CDpiXo48XYMcGwnCsu
        subject_person_id: p_F481CHuNMyvWGFBTFg72AH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xRJGDseQUMBKBkn294Qbio
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zV1Hytmj1fyHIrgeaSjhxx
          claim_id: c_9NB5CDpiXo48XYMcGwnCsu
          source_id: s_LeUdx6a3EXQmKSqzgA4GQN
          stance: supports
          locator: 紹興十八年同年小錄，176：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xRJGDseQUMBKBkn294Qbio
        status: active
        display_name: 王德先
        merged_into_person_id: null
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
          source: *a1
      object_person:
        id: p_Waz4Zbseqb4GJJtD5Sb5LN
        status: active
        display_name: 王康年
        merged_into_person_id: null
  other: []
---

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HZGPa62CZY8YGnDTSnEf7k | 王貴 | accepted |
| descendants | p_xRJGDseQUMBKBkn294Qbio | 王德先 | accepted |
| descendants | p_Waz4Zbseqb4GJJtD5Sb5LN | 王康年 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 23238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23238&o=json)
