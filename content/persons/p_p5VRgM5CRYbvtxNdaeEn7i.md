---
schema: wang-person/v1
id: p_p5VRgM5CRYbvtxNdaeEn7i
status: active
merged_into: null
display_name: 王悌
cbdb_id: 154140
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hAZF5EvUjPPk2WQGBUt2Gi
        subject_person_id: p_p5VRgM5CRYbvtxNdaeEn7i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悌，史料所见人物。本项目依据《王悌》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_uTtrQFAdj5gH3ob_cggQj0
          claim_id: c_hAZF5EvUjPPk2WQGBUt2Gi
          source_id: s_V15eaYzTFQ4AiHYps8Tkxg
          stance: supports
          locator: Q45623393
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_V15eaYzTFQ4AiHYps8Tkxg
            source_type: api_record
            title: 维基数据：王悌（Q45623393）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623393
            external_identifier: Q45623393
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.887Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bCS2Qx9G6UcQmA6Gze4iad
        subject_person_id: p_p5VRgM5CRYbvtxNdaeEn7i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JK671yFeS94BBzZrFFmEw9
          claim_id: c_bCS2Qx9G6UcQmA6Gze4iad
          source_id: s_Tv9NbTZt8C6DfbDVjHJEuC
          stance: supports
          locator: Q45623393
          quotation: null
          interpretation_note: null
          source:
            id: s_Tv9NbTZt8C6DfbDVjHJEuC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王悌（154140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154140&o=json
            external_identifier: CBDB:154140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:47.029Z
            metadata_json: null
        - id: cs_MGMHctv5Wa6DHoMDxJPRnZ
          claim_id: c_bCS2Qx9G6UcQmA6Gze4iad
          source_id: s_V15eaYzTFQ4AiHYps8Tkxg
          stance: supports
          locator: Q45623393
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Lt59QQ15a11Rp1bbPzw4C5
        subject_person_id: p_Bj8bFyazic2NrpdNesGfKg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p5VRgM5CRYbvtxNdaeEn7i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_AsSEGMvAWBh5FHnYp7SpqY
          claim_id: c_Lt59QQ15a11Rp1bbPzw4C5
          source_id: s_oEZhBpmPhCMLgvgFWpzFVy
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oEZhBpmPhCMLgvgFWpzFVy
            source_type: api_record
            title: 维基数据：王鸿（Q45507766）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507766
            external_identifier: Q45507766
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.027Z
            metadata_json: null
        - id: cs_UMf8UgAHbXvr76nVWyZQEy
          claim_id: c_Lt59QQ15a11Rp1bbPzw4C5
          source_id: s_V15eaYzTFQ4AiHYps8Tkxg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_V15eaYzTFQ4AiHYps8Tkxg
            source_type: api_record
            title: 维基数据：王悌（Q45623393）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623393
            external_identifier: Q45623393
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.887Z
            metadata_json: null
        - id: cs_Pwko3YiJzCP5yvQvAuBgxw
          claim_id: c_Lt59QQ15a11Rp1bbPzw4C5
          source_id: s_Tv9NbTZt8C6DfbDVjHJEuC
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_Tv9NbTZt8C6DfbDVjHJEuC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王悌（154140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154140&o=json
            external_identifier: CBDB:154140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:47.029Z
            metadata_json: null
      object_person:
        id: p_Bj8bFyazic2NrpdNesGfKg
        status: active
        display_name: 王鸿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王悌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王悌，史料所见人物。本项目依据《王悌》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王悌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Bj8bFyazic2NrpdNesGfKg | 王鸿 | accepted |

## 外部来源

- [维基数据：王鸿（Q45507766）](https://www.wikidata.org/wiki/Q45507766)
- [维基数据：王悌（Q45623393）](https://www.wikidata.org/wiki/Q45623393)
- [CBDB 中国历代人物传记资料库：王悌（154140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154140&o=json)
