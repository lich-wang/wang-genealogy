---
schema: wang-person/v1
id: p_qMBPniX9L5uzUSacCxGcRs
status: active
merged_into: null
display_name: 王昺
cbdb_id: 308147
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LfHnkohMDV6SERxbsY1gAg
        subject_person_id: p_qMBPniX9L5uzUSacCxGcRs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昺，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 308147）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_wL9ngsDb9bxTD2oJC3UEAj
          claim_id: c_LfHnkohMDV6SERxbsY1gAg
          source_id: s_7LuvuxPskiCyDZ6ZzoBu4f
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_7LuvuxPskiCyDZ6ZzoBu4f
            source_type: api_record
            title: 维基数据：王昺（Q45621024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45621024
            external_identifier: Q45621024
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:44.307Z
            metadata_json: null
        - id: cs_YRG6RYRi46x1EE7ZvW0ygi
          claim_id: c_LfHnkohMDV6SERxbsY1gAg
          source_id: s_NAAMrFe2DwEQS7KD48humU
          stance: supports
          locator: CBDB:308147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NAAMrFe2DwEQS7KD48humU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昺（308147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308147&o=json
            external_identifier: CBDB:308147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:44.486Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sR2vSY3JBm1mCapS977bpw
        subject_person_id: p_qMBPniX9L5uzUSacCxGcRs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昺
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QnsGpFssVuTQsUJp3gYmab
          claim_id: c_sR2vSY3JBm1mCapS977bpw
          source_id: s_NAAMrFe2DwEQS7KD48humU
          stance: supports
          locator: Q45621024
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_WrCV4bufyaEmkJW98qbjGE
          claim_id: c_sR2vSY3JBm1mCapS977bpw
          source_id: s_7LuvuxPskiCyDZ6ZzoBu4f
          stance: supports
          locator: Q45621024
          quotation: null
          interpretation_note: null
          source:
            id: s_7LuvuxPskiCyDZ6ZzoBu4f
            source_type: api_record
            title: 维基数据：王昺（Q45621024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45621024
            external_identifier: Q45621024
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:44.307Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_euou14QTXMMYKQzM2thGWv
        subject_person_id: p_cvP1gJz184hGC1Ducr4dLY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qMBPniX9L5uzUSacCxGcRs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PTzQXDRCw3tisvKFACdwzX
          claim_id: c_euou14QTXMMYKQzM2thGWv
          source_id: s_7LuvuxPskiCyDZ6ZzoBu4f
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_MESA5i9zrz9ugi3M7CPF8S
          claim_id: c_euou14QTXMMYKQzM2thGWv
          source_id: s_t8ew93v9cGWaw4qi4iL8Z8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_t8ew93v9cGWaw4qi4iL8Z8
            source_type: api_record
            title: 维基数据：王子文（Q45620962）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45620962
            external_identifier: Q45620962
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_cvP1gJz184hGC1Ducr4dLY
        status: active
        display_name: 王子文
        merged_into_person_id: null
  children:
    - claim:
        id: c_c66reWYB42H18WitEBNJ4g
        subject_person_id: p_qMBPniX9L5uzUSacCxGcRs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GvhnbSfs4k75xQrdJJphA9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yqGBbUw8F29WCM8q3HjBJG
          claim_id: c_c66reWYB42H18WitEBNJ4g
          source_id: s_PTh47Lx54BK3CqoJSxaQef
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_PTh47Lx54BK3CqoJSxaQef
            source_type: api_record
            title: 维基数据：王承祖（Q45621088）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45621088
            external_identifier: Q45621088
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:34.984Z
            metadata_json: null
        - id: cs_rq4Lw5QAjijxiDRsDCCV4M
          claim_id: c_c66reWYB42H18WitEBNJ4g
          source_id: s_7LuvuxPskiCyDZ6ZzoBu4f
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_GvhnbSfs4k75xQrdJJphA9
        status: active
        display_name: 王承祖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c__W6JwAKbn2I2AZxme4wUv1
        subject_person_id: p_qMBPniX9L5uzUSacCxGcRs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fAeAj1ECenpg29AWYPB25D
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_80eUobPhK2fz4u5EmCXMgG
          claim_id: c__W6JwAKbn2I2AZxme4wUv1
          source_id: s_Vt2QnjwfvAN63GjXwa6CEm
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百八十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Vt2QnjwfvAN63GjXwa6CEm
            source_type: api_record
            title: 中国历代人物传记资料库：王國光（CBDB 125310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125310&o=json
            external_identifier: CBDB:125310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fAeAj1ECenpg29AWYPB25D
        status: active
        display_name: 王國光
        merged_into_person_id: null
  other: []
---

# 王昺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昺，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 308147） | accepted |
| name.primary | 王昺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cvP1gJz184hGC1Ducr4dLY | 王子文 | accepted |
| children | p_GvhnbSfs4k75xQrdJJphA9 | 王承祖 | accepted |
| descendants | p_fAeAj1ECenpg29AWYPB25D | 王國光 | accepted |

## 外部来源

- [维基数据：王昺（Q45621024）](https://www.wikidata.org/wiki/Q45621024)
- [维基数据：王承祖（Q45621088）](https://www.wikidata.org/wiki/Q45621088)
- [维基数据：王子文（Q45620962）](https://www.wikidata.org/wiki/Q45620962)
- [中国历代人物传记资料库：王國光（CBDB 125310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125310&o=json)
- [CBDB 中国历代人物传记资料库：王昺（308147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308147&o=json)
