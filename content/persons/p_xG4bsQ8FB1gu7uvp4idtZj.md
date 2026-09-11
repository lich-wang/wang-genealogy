---
schema: wang-person/v1
id: p_xG4bsQ8FB1gu7uvp4idtZj
status: active
merged_into: null
display_name: 王伴哥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aJe6qYSWQfNEEbRzHE5gxV
        subject_person_id: p_xG4bsQ8FB1gu7uvp4idtZj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伴哥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wf7ZACxLAjjT65sQNtgk9R
          claim_id: c_aJe6qYSWQfNEEbRzHE5gxV
          source_id: s_RhASk6wDCDyBFnpdQHooCn
          stance: supports
          locator: CBDB:683897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683897）
          source: &a1
            id: s_RhASk6wDCDyBFnpdQHooCn
            source_type: api_record
            title: 中国历代人物传记资料库：王伴哥（CBDB 683897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683897&o=json
            external_identifier: CBDB:683897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TA2Jm4qCq5BGdLA8yzKqsJ
        subject_person_id: p_xG4bsQ8FB1gu7uvp4idtZj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伴哥，宋人物。籍贯長子。（中国历代人物传记资料库 CBDB 683897）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LdHuyLEqO5EfatRyBOFFzs
          claim_id: c_TA2Jm4qCq5BGdLA8yzKqsJ
          source_id: s_RhASk6wDCDyBFnpdQHooCn
          stance: supports
          locator: CBDB:683897
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MOTC2EYB6GenFx86F-eVYM
        subject_person_id: p_5aSsEU9814DJHEv44h4j5R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xG4bsQ8FB1gu7uvp4idtZj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XoFjkqcJVU8iafygS-9VZ5
          claim_id: c_MOTC2EYB6GenFx86F-eVYM
          source_id: s_RhASk6wDCDyBFnpdQHooCn
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5aSsEU9814DJHEv44h4j5R
        status: active
        display_name: 王珣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_83LrGTxEsREiV_AN3TzXxL
        subject_person_id: p_xG4bsQ8FB1gu7uvp4idtZj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FQth9XmpESAYcJJoYLLYqE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M1cIZ_yM5fAC4BSCNfL0l0
          claim_id: c_83LrGTxEsREiV_AN3TzXxL
          source_id: s_qNGaj_L0GoBHa8SFW7cbCI
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qNGaj_L0GoBHa8SFW7cbCI
            source_type: api_record
            title: 中国历代人物传记资料库：田氏(王伴哥妻)（CBDB 683898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683898&o=json
            external_identifier: CBDB:683898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FQth9XmpESAYcJJoYLLYqE
        status: active
        display_name: 田氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王伴哥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伴哥 | accepted |
| bio.summary | 王伴哥，宋人物。籍贯長子。（中国历代人物传记资料库 CBDB 683897） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5aSsEU9814DJHEv44h4j5R | 王珣 | accepted |
| spouses | p_FQth9XmpESAYcJJoYLLYqE | 田氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：田氏(王伴哥妻)（CBDB 683898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683898&o=json)
- [中国历代人物传记资料库：王伴哥（CBDB 683897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683897&o=json)
