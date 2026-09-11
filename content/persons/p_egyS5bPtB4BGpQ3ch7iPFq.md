---
schema: wang-person/v1
id: p_egyS5bPtB4BGpQ3ch7iPFq
status: active
merged_into: null
display_name: 王罕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SDfTj71WaTVmQS5vD6hg2N
        subject_person_id: p_egyS5bPtB4BGpQ3ch7iPFq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王罕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_75Dv8wk9QbiFK7rW9xagcD
          claim_id: c_SDfTj71WaTVmQS5vD6hg2N
          source_id: s_aWZb1QTCaZLsHnndnPqr6u
          stance: supports
          locator: CBDB:1810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1810）
          source: &a1
            id: s_aWZb1QTCaZLsHnndnPqr6u
            source_type: api_record
            title: 中国历代人物传记资料库：王罕（CBDB 1810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1810&o=json
            external_identifier: CBDB:1810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nHX1RzkAL28azm4ymtQQah
        subject_person_id: p_egyS5bPtB4BGpQ3ch7iPFq
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
        - id: cs_rYTPVYSnK22tDRe2ZwKnAN
          claim_id: c_nHX1RzkAL28azm4ymtQQah
          source_id: s_aWZb1QTCaZLsHnndnPqr6u
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
        id: c_wbVGeKqysj6iR4FWSv9rPt
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_egyS5bPtB4BGpQ3ch7iPFq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_97I9WIjQJkLQQZTMVsAVW8
          claim_id: c_wbVGeKqysj6iR4FWSv9rPt
          source_id: s_aWZb1QTCaZLsHnndnPqr6u
          stance: supports
          locator: CBDB 双向互证（父 王贄 ⇄ 子 王罕）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_QZHN7XBFLhdEfKGuEPQEhp
        status: active
        display_name: 王贄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_5GlXKvpChv-dhF2fzSTW4b
        subject_person_id: p_egyS5bPtB4BGpQ3ch7iPFq
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CUSNAdRorW93QYbxNjxHgE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t-qsDrsPOyExzNqI5piO4I
          claim_id: c_5GlXKvpChv-dhF2fzSTW4b
          source_id: s_aawCfIvG_P7Vr5yDtP00HO
          stance: supports
          locator: 宋人傳記資料索引(電子版)，648;649：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aawCfIvG_P7Vr5yDtP00HO
            source_type: api_record
            title: 中国历代人物传记资料库：狄氏(王罕妻)（CBDB 5133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5133&o=json
            external_identifier: CBDB:5133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CUSNAdRorW93QYbxNjxHgE
        status: active
        display_name: 狄氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王罕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王罕 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QZHN7XBFLhdEfKGuEPQEhp | 王贄 | accepted |
| spouses | p_CUSNAdRorW93QYbxNjxHgE | 狄氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：狄氏(王罕妻)（CBDB 5133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5133&o=json)
- [中国历代人物传记资料库：王罕（CBDB 1810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1810&o=json)
