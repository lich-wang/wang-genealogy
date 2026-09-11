---
schema: wang-person/v1
id: p_gT8Y6oM2Xv4kiuH3CHGLND
status: active
merged_into: null
display_name: 王鳳徵
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hMCbCtyX6fupqo2p4JMWLP
        subject_person_id: p_gT8Y6oM2Xv4kiuH3CHGLND
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A6qunjLw232CDZLjEV9uQn
          claim_id: c_hMCbCtyX6fupqo2p4JMWLP
          source_id: s_Dr52erix2DMGC8vWV9VsED
          stance: supports
          locator: CBDB:557421
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557421）
          source: &a1
            id: s_Dr52erix2DMGC8vWV9VsED
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳徵（CBDB 557421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557421&o=json
            external_identifier: CBDB:557421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fiDBmXY5mMXtimTtm49KwJ
        subject_person_id: p_gT8Y6oM2Xv4kiuH3CHGLND
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
        - id: cs_zEeTLy1MVmBrqmBknzHuK4
          claim_id: c_fiDBmXY5mMXtimTtm49KwJ
          source_id: s_Dr52erix2DMGC8vWV9VsED
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Du4l6mM2y0yFYBie1x_AN8
        subject_person_id: p_gT8Y6oM2Xv4kiuH3CHGLND
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1D9UJ3qbxhZuhm9688Gxjt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I988z40na6JeuX6WAJdTU4
          claim_id: c_Du4l6mM2y0yFYBie1x_AN8
          source_id: s_8mb74tFPKTmL3GwfEttLm6
          stance: supports
          locator: (乾隆)信陽州志，lgid=868515：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8mb74tFPKTmL3GwfEttLm6
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣祖（CBDB 557424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557424&o=json
            external_identifier: CBDB:557424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1D9UJ3qbxhZuhm9688Gxjt
        status: active
        display_name: 王嗣祖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_F5uGKXTo001cs8_5lvBrON
        subject_person_id: p_gT8Y6oM2Xv4kiuH3CHGLND
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_S18pHiP6i4y1coLRP6mnpL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Hx1aIEyDsLD0DsFdjiICw
          claim_id: c_F5uGKXTo001cs8_5lvBrON
          source_id: s_ZKKrT3cohikeJZ0l3-eYAB
          stance: supports
          locator: (乾隆)信陽州志，lgid=868515：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZKKrT3cohikeJZ0l3-eYAB
            source_type: api_record
            title: 中国历代人物传记资料库：何氏(王鳳徵妻)（CBDB 557423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557423&o=json
            external_identifier: CBDB:557423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_S18pHiP6i4y1coLRP6mnpL
        status: active
        display_name: 何氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_oAxusOpjwzl-lWPxJY0U-1
        subject_person_id: p_TTntK269568eA9RALQmA43
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gT8Y6oM2Xv4kiuH3CHGLND
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HXRLp8Qq1BucnggJsdyeoz
          claim_id: c_oAxusOpjwzl-lWPxJY0U-1
          source_id: s_Dr52erix2DMGC8vWV9VsED
          stance: supports
          locator: (乾隆)信陽州志，lgid=868515：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TTntK269568eA9RALQmA43
        status: active
        display_name: 王納言
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鳳徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳徵 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1D9UJ3qbxhZuhm9688Gxjt | 王嗣祖 | accepted |
| spouses | p_S18pHiP6i4y1coLRP6mnpL | 何氏 | accepted |
| ancestors | p_TTntK269568eA9RALQmA43 | 王納言 | accepted |

## 外部来源

- [中国历代人物传记资料库：何氏(王鳳徵妻)（CBDB 557423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557423&o=json)
- [中国历代人物传记资料库：王鳳徵（CBDB 557421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557421&o=json)
- [中国历代人物传记资料库：王嗣祖（CBDB 557424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557424&o=json)
