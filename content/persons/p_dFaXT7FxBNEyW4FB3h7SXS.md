---
schema: wang-person/v1
id: p_dFaXT7FxBNEyW4FB3h7SXS
status: active
merged_into: null
display_name: 張勳
revision: 1
cbdb_id: 124859
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f7Z7_5jwbqaCSu-JhhFH1z
        subject_person_id: p_dFaXT7FxBNEyW4FB3h7SXS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張勳（1854—1923），清人物。籍贯奉新，入仕行伍，曾任將軍、六品軍功、旗漢軍都統。（中国历代人物传记资料库 CBDB 124859）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oC3fYQsbHruInbiGkXZ27V
          claim_id: c_f7Z7_5jwbqaCSu-JhhFH1z
          source_id: s_qwnyCCqlE0JvcaKkbNpT4P
          stance: supports
          locator: CBDB:124859
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4goBZvpftrlPEi56dnPc15
        subject_person_id: p_dFaXT7FxBNEyW4FB3h7SXS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張勳
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h2Aaerdbrfol7ipr5raD2J
          claim_id: c_4goBZvpftrlPEi56dnPc15
          source_id: s_qwnyCCqlE0JvcaKkbNpT4P
          stance: supports
          locator: CBDB:124859
          quotation: null
          interpretation_note: CBDB 明确记录的王克琴配偶
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
          source: *a1
      object_person:
        id: p_dQzPH1kYLjc2A4UbLMjjtT
        status: active
        display_name: 王克琴
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張勳（1854—1923），清人物。籍贯奉新，入仕行伍，曾任將軍、六品軍功、旗漢軍都統。（中国历代人物传记资料库 CBDB 124859） | accepted |
| name.primary | 張勳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dQzPH1kYLjc2A4UbLMjjtT | 王克琴 | accepted |

## 外部来源

- [中国历代人物传记资料库：張勳（CBDB 124859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124859&o=json)
