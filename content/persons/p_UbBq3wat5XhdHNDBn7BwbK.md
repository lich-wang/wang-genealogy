---
schema: wang-person/v1
id: p_UbBq3wat5XhdHNDBn7BwbK
status: active
merged_into: null
display_name: 董氏
revision: 1
cbdb_id: 554828
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TA8zihoEZrmijsWivxiDf-
        subject_person_id: p_UbBq3wat5XhdHNDBn7BwbK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 董氏，清人物。籍贯南陽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 554828）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MONlE8zkX0FDGR2G4kf88C
          claim_id: c_TA8zihoEZrmijsWivxiDf-
          source_id: s_dIuqbcsAXkvJczhlZxt9DE
          stance: supports
          locator: CBDB:554828
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dIuqbcsAXkvJczhlZxt9DE
            source_type: api_record
            title: 中国历代人物传记资料库：董氏(王好仁妻)（CBDB 554828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554828&o=json
            external_identifier: CBDB:554828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qESzrzVKxJnim6fwwsBk_V
        subject_person_id: p_UbBq3wat5XhdHNDBn7BwbK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 董氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VzyLDjdSBSCSEkIxbZHF5I
          claim_id: c_qESzrzVKxJnim6fwwsBk_V
          source_id: s_dIuqbcsAXkvJczhlZxt9DE
          stance: supports
          locator: CBDB:554828
          quotation: null
          interpretation_note: CBDB 明确记录的王好仁配偶
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
        id: c_xgifebfWwGXEKVmtTSujdB
        subject_person_id: p_MRL9dq2t4PTzPxpB1EY7B1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UbBq3wat5XhdHNDBn7BwbK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FVS0TQiIFg0Lsz-xFcLnuy
          claim_id: c_xgifebfWwGXEKVmtTSujdB
          source_id: s_dIuqbcsAXkvJczhlZxt9DE
          stance: supports
          locator: 南陽府志，lgid=878673：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MRL9dq2t4PTzPxpB1EY7B1
        status: active
        display_name: 王好仁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 董氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 董氏，清人物。籍贯南陽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 554828） | accepted |
| name.primary | 董氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_MRL9dq2t4PTzPxpB1EY7B1 | 王好仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：董氏(王好仁妻)（CBDB 554828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554828&o=json)
