---
schema: wang-person/v1
id: p_zPsyab2McQpBqQWGX4FNfc
status: active
merged_into: null
display_name: 王訓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VD3pAGdDUPbjyAQ9hVNQb6
        subject_person_id: p_zPsyab2McQpBqQWGX4FNfc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jQDa76B1mvYqA5nM66HLwd
          claim_id: c_VD3pAGdDUPbjyAQ9hVNQb6
          source_id: s_Fk6BYhYVGDFocUpPg2Unbt
          stance: supports
          locator: CBDB:692901
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692901）
          source: &a1
            id: s_Fk6BYhYVGDFocUpPg2Unbt
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 692901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692901&o=json
            external_identifier: CBDB:692901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fcPykKEPraAYt9a7CSnKAU
        subject_person_id: p_zPsyab2McQpBqQWGX4FNfc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xUgLWMsfXW37SykFMfoq8W
          claim_id: c_fcPykKEPraAYt9a7CSnKAU
          source_id: s_Fk6BYhYVGDFocUpPg2Unbt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_oEUZXzQ55DdnNTFXnjfn2B
        subject_person_id: p_zPsyab2McQpBqQWGX4FNfc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8CRy8cdVfegiTrNbuA4iWW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mv4nO8e3dF35xf1iIeUb6a
          claim_id: c_oEUZXzQ55DdnNTFXnjfn2B
          source_id: s_9MbT8WB-pG1NasKqf2m1Ch
          stance: supports
          locator: (康熙)固始縣志，lgid=871481：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9MbT8WB-pG1NasKqf2m1Ch
            source_type: api_record
            title: 中国历代人物传记资料库：萬氏(王訓妻)（CBDB 692902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692902&o=json
            external_identifier: CBDB:692902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8CRy8cdVfegiTrNbuA4iWW
        status: active
        display_name: 萬氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8CRy8cdVfegiTrNbuA4iWW | 萬氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：萬氏(王訓妻)（CBDB 692902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692902&o=json)
- [中国历代人物传记资料库：王訓（CBDB 692901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692901&o=json)
