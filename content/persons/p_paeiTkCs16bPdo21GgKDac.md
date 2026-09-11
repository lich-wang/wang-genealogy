---
schema: wang-person/v1
id: p_paeiTkCs16bPdo21GgKDac
status: active
merged_into: null
display_name: 王用
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_az2mzDfPNmbZFCzs5xzuVW
        subject_person_id: p_paeiTkCs16bPdo21GgKDac
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y89k4tz2rGYXqTLbiS8WTX
          claim_id: c_az2mzDfPNmbZFCzs5xzuVW
          source_id: s_q8G53qMvjzLNqSvtJM4xbD
          stance: supports
          locator: CBDB:24048
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（24048）
          source: &a1
            id: s_q8G53qMvjzLNqSvtJM4xbD
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 24048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24048&o=json
            external_identifier: CBDB:24048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_prRG3ccEC7Ra54vtUvEoQB
        subject_person_id: p_paeiTkCs16bPdo21GgKDac
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用，宋人物。籍贯長安。（中国历代人物传记资料库 CBDB 24048）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Pzxn7Za_uo7_2q4AnaFrT
          claim_id: c_prRG3ccEC7Ra54vtUvEoQB
          source_id: s_q8G53qMvjzLNqSvtJM4xbD
          stance: supports
          locator: CBDB:24048
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Cac4s1Zy9gJB-s_GR7X2hP
        subject_person_id: p_i41hD3vitiUErD4EFDZTym
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_paeiTkCs16bPdo21GgKDac
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QsHb2toN3piEAxv-VA-czQ
          claim_id: c_Cac4s1Zy9gJB-s_GR7X2hP
          source_id: s_LfGPEoMmAwU52rMK61e23p
          stance: supports
          locator: CBDB 双向互证（子 王用 ⇄ 父 王天成）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_LfGPEoMmAwU52rMK61e23p
            source_type: api_record
            title: 中国历代人物传记资料库：王天成（CBDB 24047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24047&o=json
            external_identifier: CBDB:24047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_i41hD3vitiUErD4EFDZTym
        status: active
        display_name: 王天成
        merged_into_person_id: null
  children:
    - claim:
        id: c_O2jFSEuArLa3tYXjGH0MwZ
        subject_person_id: p_paeiTkCs16bPdo21GgKDac
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NYsG6N4LmN875VECa5p4Wz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1IiiLJlBc_kFYhFLX8SzBZ
          claim_id: c_O2jFSEuArLa3tYXjGH0MwZ
          source_id: s_JsZ29upkgVoC9wYgsJBwm5
          stance: supports
          locator: CBDB 双向互证（父 王用 ⇄ 子 王章）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_JsZ29upkgVoC9wYgsJBwm5
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 24049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24049&o=json
            external_identifier: CBDB:24049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NYsG6N4LmN875VECa5p4Wz
        status: active
        display_name: 王章
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用 | accepted |
| bio.summary | 王用，宋人物。籍贯長安。（中国历代人物传记资料库 CBDB 24048） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_i41hD3vitiUErD4EFDZTym | 王天成 | accepted |
| children | p_NYsG6N4LmN875VECa5p4Wz | 王章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天成（CBDB 24047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24047&o=json)
- [中国历代人物传记资料库：王用（CBDB 24048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24048&o=json)
- [中国历代人物传记资料库：王章（CBDB 24049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24049&o=json)
