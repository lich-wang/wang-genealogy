---
schema: wang-person/v1
id: p_R8GNfiAEFUGPFE7VBAqAUP
status: active
merged_into: null
display_name: 王繹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q5XVjM3dRspN9t2WejQtoN
        subject_person_id: p_R8GNfiAEFUGPFE7VBAqAUP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PdT48No7J2sLT1t3Mnmn89
          claim_id: c_q5XVjM3dRspN9t2WejQtoN
          source_id: s_3TbKHAVJA24WVpkZ7M7TAA
          stance: supports
          locator: CBDB:22137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22137）
          source: &a1
            id: s_3TbKHAVJA24WVpkZ7M7TAA
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 22137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22137&o=json
            external_identifier: CBDB:22137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PTthuZHyARwi6NPGp5euak
        subject_person_id: p_R8GNfiAEFUGPFE7VBAqAUP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1061年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iHZ5qdCJZMFvR78A85Ph4g
          claim_id: c_PTthuZHyARwi6NPGp5euak
          source_id: s_3TbKHAVJA24WVpkZ7M7TAA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GX8UfxKGZsjCNmsWVrELjs
        subject_person_id: p_R8GNfiAEFUGPFE7VBAqAUP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1132年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2t1LHChYAmoVFRisCjW2bg
          claim_id: c_GX8UfxKGZsjCNmsWVrELjs
          source_id: s_3TbKHAVJA24WVpkZ7M7TAA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uUEn2jHhTvsHC4h6NKu4DZ
        subject_person_id: p_R8GNfiAEFUGPFE7VBAqAUP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王繹（1061年—1132年），宋人物。籍贯吳縣，入仕恩蔭: 大禮蔭補，曾任宣議郎。（中国历代人物传记资料库 CBDB 22137）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5l-qJOTb4dNvA-Izv0b9u3
          claim_id: c_uUEn2jHhTvsHC4h6NKu4DZ
          source_id: s_3TbKHAVJA24WVpkZ7M7TAA
          stance: supports
          locator: CBDB:22137
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DXMY2dZzq0onYHE5P97MnU
        subject_person_id: p_2iVh2dnQYp8qHcVzsHx44b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R8GNfiAEFUGPFE7VBAqAUP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2-wS5RLyCeBVU1j91yep77
          claim_id: c_DXMY2dZzq0onYHE5P97MnU
          source_id: s_tgPMxFjgwwfqdHmDpnjkqj
          stance: supports
          locator: CBDB 双向互证（子 王繹 ⇄ 父 王安仁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_tgPMxFjgwwfqdHmDpnjkqj
            source_type: api_record
            title: 中国历代人物传记资料库：王安仁（CBDB 22136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22136&o=json
            external_identifier: CBDB:22136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2iVh2dnQYp8qHcVzsHx44b
        status: active
        display_name: 王安仁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_xIaeESSajbTOulJ_pnKsYX
        subject_person_id: p_R8GNfiAEFUGPFE7VBAqAUP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2nFsisn71GnR9QLU7v1VVj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZHYyBejEgoUfwO9QxZymKz
          claim_id: c_xIaeESSajbTOulJ_pnKsYX
          source_id: s_4ugqLfCQ8GsWFG7KK3bKKQ
          stance: supports
          locator: CBDB 双向互证（祖父 王繹 ⇄ 孫 王尚廉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_4ugqLfCQ8GsWFG7KK3bKKQ
            source_type: api_record
            title: 中国历代人物传记资料库：王尚廉（CBDB 22143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22143&o=json
            external_identifier: CBDB:22143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2nFsisn71GnR9QLU7v1VVj
        status: active
        display_name: 王尚廉
        merged_into_person_id: null
    - claim:
        id: c_BfVPg5SI2BmmTFGWt0wusd
        subject_person_id: p_R8GNfiAEFUGPFE7VBAqAUP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_H8dz2RG3ABTJQLSA8aM41f
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h91xs5ujhBfnKCosFBzkQH
          claim_id: c_BfVPg5SI2BmmTFGWt0wusd
          source_id: s_3TbKHAVJA24WVpkZ7M7TAA
          stance: supports
          locator: CBDB 双向互证（孫 王尚正 ⇄ 祖父 王繹）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_H8dz2RG3ABTJQLSA8aM41f
        status: active
        display_name: 王尚正
        merged_into_person_id: null
  other: []
---

# 王繹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繹 | accepted |
| birth.date | 1061年 | accepted |
| death.date | 1132年 | accepted |
| bio.summary | 王繹（1061年—1132年），宋人物。籍贯吳縣，入仕恩蔭: 大禮蔭補，曾任宣議郎。（中国历代人物传记资料库 CBDB 22137） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2iVh2dnQYp8qHcVzsHx44b | 王安仁 | accepted |
| descendants | p_2nFsisn71GnR9QLU7v1VVj | 王尚廉 | accepted |
| descendants | p_H8dz2RG3ABTJQLSA8aM41f | 王尚正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安仁（CBDB 22136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22136&o=json)
- [中国历代人物传记资料库：王尚廉（CBDB 22143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22143&o=json)
- [中国历代人物传记资料库：王繹（CBDB 22137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22137&o=json)
