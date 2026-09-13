---
schema: wang-person/v1
id: p_dnPtsKEtjAp3Do6nrbinqW
status: active
merged_into: null
display_name: 钱大昕
cbdb_id: 29876
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5P61DSt3_dbpUR7Wu_aH4u
        subject_person_id: p_dnPtsKEtjAp3Do6nrbinqW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 钱大昕（xīn）（1728年2月16日—1804年11月21日），字晓徵、及之，号辛楣，一号竹汀，江蘇苏州府嘉定縣（今上海嘉定区）人，清代史学家，语言学家。乾嘉学派的代表人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ppvLI91G1LVTmk3Ls6GmDu
          claim_id: c_5P61DSt3_dbpUR7Wu_aH4u
          source_id: s_blLM7mIR2JcK5JlUfBcuS4
          stance: supports
          locator: 导言
          quotation: 钱大昕（xīn）（1728年2月16日—1804年11月21日）
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_blLM7mIR2JcK5JlUfBcuS4
            source_type: website
            title: 中文维基百科：钱大昕
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%92%B1%E5%A4%A7%E6%98%95
            external_identifier: Q7267607
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T09:29:27.764Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1F98Ntg9Zhbp94kzjh3ETa
        subject_person_id: p_dnPtsKEtjAp3Do6nrbinqW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 钱大昕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JJLDb3LMfzBP11RBC861c6
          claim_id: c_1F98Ntg9Zhbp94kzjh3ETa
          source_id: s_dYAE54FmUNRPo5AtB1YWTG
          stance: supports
          locator: Q7267607
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_dYAE54FmUNRPo5AtB1YWTG
            source_type: api_record
            title: 维基数据：钱大昕（Q7267607）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7267607
            external_identifier: Q7267607
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E9%92%B1%E5%A4%A7%E6%98%95
        - id: cs_xR2QguS7ZFJwB3eCKjTS67
          claim_id: c_1F98Ntg9Zhbp94kzjh3ETa
          source_id: s_zaPd5CHsDUebGWSUJkAa3A
          stance: supports
          locator: CBDB:29876
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_zaPd5CHsDUebGWSUJkAa3A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：錢大昕（29876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29876&o=json
            external_identifier: CBDB:29876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_CuYwRT7XLtGvVFynNLvReU
        subject_person_id: p_dnPtsKEtjAp3Do6nrbinqW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PC1VEQ6MT1vrSB4BCFa8jk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u7B4dNq93QmAZeCPpBh4Zz
          claim_id: c_CuYwRT7XLtGvVFynNLvReU
          source_id: s_MDktQvY6jwNeC7vJ4gcNVB
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_MDktQvY6jwNeC7vJ4gcNVB
            source_type: api_record
            title: 维基数据：王恭人（Q45416835）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45416835
            external_identifier: Q45416835
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:31.440Z
            metadata_json: null
        - id: cs_GUh4ZZWLZSiEm6fL8dUwUX
          claim_id: c_CuYwRT7XLtGvVFynNLvReU
          source_id: s_dYAE54FmUNRPo5AtB1YWTG
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_uVAK23mdJwC7WxiKBEWgpk
          claim_id: c_CuYwRT7XLtGvVFynNLvReU
          source_id: s_jZB5k3KHwHVFfuJ247VX9g
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_jZB5k3KHwHVFfuJ247VX9g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王恭人（29896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29896&o=json
            external_identifier: CBDB:29896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:31.611Z
            metadata_json: null
      object_person:
        id: p_PC1VEQ6MT1vrSB4BCFa8jk
        status: active
        display_name: 王恭人
        merged_into_person_id: null
    - claim:
        id: c_A1vNiPEoo5wGxx3GRH2k65
        subject_person_id: p_dnPtsKEtjAp3Do6nrbinqW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Jun3pZ1BMQpwyok4KhGLAv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3d9TKiqo8HX6TWPKwSTDCs
          claim_id: c_A1vNiPEoo5wGxx3GRH2k65
          source_id: s_zaPd5CHsDUebGWSUJkAa3A
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：人名權威資料（中央研究院歷史語言研究所）
          source: *a2
      object_person:
        id: p_Jun3pZ1BMQpwyok4KhGLAv
        status: active
        display_name: 王舜英
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 钱大昕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 钱大昕（xīn）（1728年2月16日—1804年11月21日），字晓徵、及之，号辛楣，一号竹汀，江蘇苏州府嘉定縣（今上海嘉定区）人，清代史学家，语言学家。乾嘉学派的代表人物。 | accepted |
| name.primary | 钱大昕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_PC1VEQ6MT1vrSB4BCFa8jk | 王恭人 | accepted |
| spouses | p_Jun3pZ1BMQpwyok4KhGLAv | 王舜英 | accepted |

## 外部来源

- [维基数据：钱大昕（Q7267607）](https://www.wikidata.org/wiki/Q7267607)
- [维基数据：王恭人（Q45416835）](https://www.wikidata.org/wiki/Q45416835)
- [中文维基百科：钱大昕](https://zh.wikipedia.org/wiki/%E9%92%B1%E5%A4%A7%E6%98%95)
- [CBDB 中国历代人物传记资料库：錢大昕（29876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29876&o=json)
- [CBDB 中国历代人物传记资料库：王恭人（29896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29896&o=json)
