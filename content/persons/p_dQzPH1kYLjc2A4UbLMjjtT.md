---
schema: wang-person/v1
id: p_dQzPH1kYLjc2A4UbLMjjtT
status: active
merged_into: null
display_name: 王克琴
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zYktADyBhr58twdcpiHyJg
        subject_person_id: p_dQzPH1kYLjc2A4UbLMjjtT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克琴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AhCmdp3KRdRayYKMiv8gfi
          claim_id: c_zYktADyBhr58twdcpiHyJg
          source_id: s_PjwWtZct2QPf8PNgoEEUjG
          stance: supports
          locator: CBDB:529059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（529059）
          source: &a1
            id: s_PjwWtZct2QPf8PNgoEEUjG
            source_type: api_record
            title: 中国历代人物传记资料库：王克琴（CBDB 529059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529059&o=json
            external_identifier: CBDB:529059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uHQeGWAg4ukakpqyLSADKS
        subject_person_id: p_dQzPH1kYLjc2A4UbLMjjtT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克琴，史料所见人物。本项目依据《中国历代人物传记资料库：王克琴（CBDB 529059）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M_D3-JkZLwqco1i_sDHcHH
          claim_id: c_uHQeGWAg4ukakpqyLSADKS
          source_id: s_PjwWtZct2QPf8PNgoEEUjG
          stance: supports
          locator: CBDB:529059
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_RK7f24afCwZlkk5g3eRe6D
        subject_person_id: p_dQzPH1kYLjc2A4UbLMjjtT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dFaXT7FxBNEyW4FB3h7SXS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_biCWShyApsFPTb5Lap2eRP
          claim_id: c_RK7f24afCwZlkk5g3eRe6D
          source_id: s_qwnyCCqlE0JvcaKkbNpT4P
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14786：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qwnyCCqlE0JvcaKkbNpT4P
            source_type: api_record
            title: 中国历代人物传记资料库：張勳（CBDB 124859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124859&o=json
            external_identifier: CBDB:124859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dFaXT7FxBNEyW4FB3h7SXS
        status: active
        display_name: 張勳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王克琴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克琴 | accepted |
| bio.summary | 王克琴，史料所见人物。本项目依据《中国历代人物传记资料库：王克琴（CBDB 529059）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dFaXT7FxBNEyW4FB3h7SXS | 張勳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克琴（CBDB 529059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529059&o=json)
- [中国历代人物传记资料库：張勳（CBDB 124859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124859&o=json)
