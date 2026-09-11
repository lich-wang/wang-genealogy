---
schema: wang-person/v1
id: p_z4xE7QSSGQJhxdiqsEyRc2
status: active
merged_into: null
display_name: 王東槐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8wsZVLnz6ozPHhzDMB6R53
        subject_person_id: p_z4xE7QSSGQJhxdiqsEyRc2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王東槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NXJ4ZPujdBz1qgbZewZv5o
          claim_id: c_8wsZVLnz6ozPHhzDMB6R53
          source_id: s_9xxamMv6phJtfyKgRZs3xv
          stance: supports
          locator: CBDB:58593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（58593）
          source: &a1
            id: s_9xxamMv6phJtfyKgRZs3xv
            source_type: api_record
            title: 中国历代人物传记资料库：王東槐（CBDB 58593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58593&o=json
            external_identifier: CBDB:58593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7VePK6iEmzR5LNWtbY7r8v
        subject_person_id: p_z4xE7QSSGQJhxdiqsEyRc2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1802年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tth41Nfa7LxSVBGYT5KSmn
          claim_id: c_7VePK6iEmzR5LNWtbY7r8v
          source_id: s_9xxamMv6phJtfyKgRZs3xv
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
        id: c_ZohxsDq9SsDdwKsQbgtp5L
        subject_person_id: p_z4xE7QSSGQJhxdiqsEyRc2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5rChUoQALnFMBYAmqCnGgY
          claim_id: c_ZohxsDq9SsDdwKsQbgtp5L
          source_id: s_9xxamMv6phJtfyKgRZs3xv
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
        id: c_hzFyCd1e1gbGDEPNrcBGWm
        subject_person_id: p_z4xE7QSSGQJhxdiqsEyRc2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王東槐（1802年—1852年），清人物。明清進士進士，籍贯滕縣，身份为詩人、工於古文，入仕進士。（中国历代人物传记资料库 CBDB 58593）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bWoogj38hdUkN2JBg_yWD1
          claim_id: c_hzFyCd1e1gbGDEPNrcBGWm
          source_id: s_9xxamMv6phJtfyKgRZs3xv
          stance: supports
          locator: CBDB:58593
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3IIooZPg76TTeRDwrbkQRU
        subject_person_id: p_sQo281fNNUJxMz5sufHohm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z4xE7QSSGQJhxdiqsEyRc2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xLOaUBTxufrDfhdsm6CB07
          claim_id: c_3IIooZPg76TTeRDwrbkQRU
          source_id: s_9xxamMv6phJtfyKgRZs3xv
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1852：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sQo281fNNUJxMz5sufHohm
        status: active
        display_name: 王增韻
        merged_into_person_id: null
  children:
    - claim:
        id: c_WI5yXrUsqJ-V6bymNIKRw7
        subject_person_id: p_z4xE7QSSGQJhxdiqsEyRc2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wke1bLVnQDGnstdySuAfi4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YcMQWBox8xbnIBxSG13v5-
          claim_id: c_WI5yXrUsqJ-V6bymNIKRw7
          source_id: s_9xxamMv6phJtfyKgRZs3xv
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1852：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Wke1bLVnQDGnstdySuAfi4
        status: active
        display_name: 王宜劼
        merged_into_person_id: null
    - claim:
        id: c_MsgOTYDlUhOOxtiolrNpS_
        subject_person_id: p_z4xE7QSSGQJhxdiqsEyRc2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ht8zc6W727GPoey5XfEVrw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GR1VQblv1W3kS6bZROPn_i
          claim_id: c_MsgOTYDlUhOOxtiolrNpS_
          source_id: s_9xxamMv6phJtfyKgRZs3xv
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1852：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ht8zc6W727GPoey5XfEVrw
        status: active
        display_name: 王宜勒
        merged_into_person_id: null
    - claim:
        id: c_73NQUSfmxlJXB18-fscsUl
        subject_person_id: p_z4xE7QSSGQJhxdiqsEyRc2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_141LJrPuATXGERWQPxYWHe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J1QrxcnFjcRTK627CtmVVA
          claim_id: c_73NQUSfmxlJXB18-fscsUl
          source_id: s_9xxamMv6phJtfyKgRZs3xv
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1852：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_141LJrPuATXGERWQPxYWHe
        status: active
        display_name: 王宜勰
        merged_into_person_id: null
    - claim:
        id: c_CXHOzZm7iDKVyvY7VfxCrb
        subject_person_id: p_z4xE7QSSGQJhxdiqsEyRc2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PSq4gNnj9hSipZUMSKmYGy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aMJgNChBqNuWKd_VxtEe-W
          claim_id: c_CXHOzZm7iDKVyvY7VfxCrb
          source_id: s_9xxamMv6phJtfyKgRZs3xv
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1852：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PSq4gNnj9hSipZUMSKmYGy
        status: active
        display_name: 王宜勵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_6OI_2cfof0dDkMqMDPOYCk
        subject_person_id: p_BgN1jLcg47MdSkxx7nEyNR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_z4xE7QSSGQJhxdiqsEyRc2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZMF6yXHCe5_ImgCivafqOP
          claim_id: c_6OI_2cfof0dDkMqMDPOYCk
          source_id: s_9xxamMv6phJtfyKgRZs3xv
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1852：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BgN1jLcg47MdSkxx7nEyNR
        status: active
        display_name: 王國淑
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王東槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王東槐 | accepted |
| birth.date | 1802年 | accepted |
| death.date | 1852年 | accepted |
| bio.summary | 王東槐（1802年—1852年），清人物。明清進士進士，籍贯滕縣，身份为詩人、工於古文，入仕進士。（中国历代人物传记资料库 CBDB 58593） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sQo281fNNUJxMz5sufHohm | 王增韻 | accepted |
| children | p_Wke1bLVnQDGnstdySuAfi4 | 王宜劼 | accepted |
| children | p_Ht8zc6W727GPoey5XfEVrw | 王宜勒 | accepted |
| children | p_141LJrPuATXGERWQPxYWHe | 王宜勰 | accepted |
| children | p_PSq4gNnj9hSipZUMSKmYGy | 王宜勵 | accepted |
| ancestors | p_BgN1jLcg47MdSkxx7nEyNR | 王國淑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王東槐（CBDB 58593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58593&o=json)
