---
schema: wang-person/v1
id: p_sHFJ2ZsHcQtaAPhRiY7kgq
status: active
merged_into: null
display_name: 王軾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uw46sQAPEvGWmeDNADvtTS
        subject_person_id: p_sHFJ2ZsHcQtaAPhRiY7kgq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k8iPoAueckscL3fFgFCcXA
          claim_id: c_uw46sQAPEvGWmeDNADvtTS
          source_id: s_9CCC3H723xJKDs42i1sZ2s
          stance: supports
          locator: CBDB:22088
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22088）
          source: &a1
            id: s_9CCC3H723xJKDs42i1sZ2s
            source_type: api_record
            title: 中国历代人物传记资料库：王軾（CBDB 22088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22088&o=json
            external_identifier: CBDB:22088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9GbAhhVHK5MHuVDGYmuA4Q
        subject_person_id: p_sHFJ2ZsHcQtaAPhRiY7kgq
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
        - id: cs_nwNuSbNbg9qkPgeYVGSc1L
          claim_id: c_9GbAhhVHK5MHuVDGYmuA4Q
          source_id: s_9CCC3H723xJKDs42i1sZ2s
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lzO50q4H1-tAWtOZplQ7pw
        subject_person_id: p_2EGAHMxrs3mXPw15tj2jv3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sHFJ2ZsHcQtaAPhRiY7kgq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2r-CZPKuDp7OsgdMEwtekQ
          claim_id: c_lzO50q4H1-tAWtOZplQ7pw
          source_id: s_9CCC3H723xJKDs42i1sZ2s
          stance: supports
          locator: CBDB 双向互证（父 王仁諒 ⇄ 子 王軾）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_2EGAHMxrs3mXPw15tj2jv3
        status: active
        display_name: 王仁諒
        merged_into_person_id: null
  children:
    - claim:
        id: c_3522ye1kux1rxEOTnts2L6
        subject_person_id: p_sHFJ2ZsHcQtaAPhRiY7kgq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eNbUbLriyv1jeKfC3c7sCt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pmWBn02X7Dgl4LX4gfIPEY
          claim_id: c_3522ye1kux1rxEOTnts2L6
          source_id: s_pHGGaaETseroQYunqHCzdH
          stance: supports
          locator: CBDB 双向互证（父 王軾 ⇄ 子 王岡）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_pHGGaaETseroQYunqHCzdH
            source_type: api_record
            title: 中国历代人物传记资料库：王岡（CBDB 1837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1837&o=json
            external_identifier: CBDB:1837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eNbUbLriyv1jeKfC3c7sCt
        status: active
        display_name: 王岡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王軾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軾 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2EGAHMxrs3mXPw15tj2jv3 | 王仁諒 | accepted |
| children | p_eNbUbLriyv1jeKfC3c7sCt | 王岡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王岡（CBDB 1837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1837&o=json)
- [中国历代人物传记资料库：王軾（CBDB 22088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22088&o=json)
