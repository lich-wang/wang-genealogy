---
schema: wang-person/v1
id: p_HmkBbL3A8MpbWct9UhADAQ
status: active
merged_into: null
display_name: 王中正
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oJkW7RARARBtDKZyj912Q8
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7E4Lz57Zfw7MdmPTNaEoXk
          claim_id: c_oJkW7RARARBtDKZyj912Q8
          source_id: s_XPejiH5UFyBAiuaYYJXnFu
          stance: supports
          locator: CBDB:26364
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26364）
          source: &a1
            id: s_XPejiH5UFyBAiuaYYJXnFu
            source_type: api_record
            title: 中国历代人物传记资料库：王中正（CBDB 26364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26364&o=json
            external_identifier: CBDB:26364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Em28C57MmD3JXVU8w2QQPs
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 962年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6SgjXYykEoh53m3SkThGo3
          claim_id: c_Em28C57MmD3JXVU8w2QQPs
          source_id: s_XPejiH5UFyBAiuaYYJXnFu
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
        id: c_kAZFEKCr7fHRXAYJBEVyFc
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1016年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tTJ4boVhpuQPd7ijZXL8He
          claim_id: c_kAZFEKCr7fHRXAYJBEVyFc
          source_id: s_XPejiH5UFyBAiuaYYJXnFu
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
        id: c_zj1275fJMuTK4A1KiAHuAJ
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
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
        - id: cs_Bf1pmRPFMRGgg42T26Fdbp
          claim_id: c_zj1275fJMuTK4A1KiAHuAJ
          source_id: s_XPejiH5UFyBAiuaYYJXnFu
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
        id: c_8U8NKpU8aEkmDuAG8L15_R
        subject_person_id: p_n6A1BTwey7dDo3Xt5YHJ8t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U0Dh4tbvnW9Y2jKb_8j9iI
          claim_id: c_8U8NKpU8aEkmDuAG8L15_R
          source_id: s_XPejiH5UFyBAiuaYYJXnFu
          stance: supports
          locator: CBDB 双向互证（父 王成 ⇄ 子 王中正）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_n6A1BTwey7dDo3Xt5YHJ8t
        status: active
        display_name: 王成
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王中正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中正 | accepted |
| birth.date | 962年 | accepted |
| death.date | 1016年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_n6A1BTwey7dDo3Xt5YHJ8t | 王成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王中正（CBDB 26364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26364&o=json)
